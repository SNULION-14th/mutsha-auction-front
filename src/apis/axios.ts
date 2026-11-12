import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim().replace(
  /\/+$/,
  "",
);
const frontendOrigin = window.location.origin;
const configuredBaseResolvesToFrontend = (() => {
  if (!configuredBaseUrl) return true;
  try {
    return new URL(configuredBaseUrl, frontendOrigin).origin === frontendOrigin;
  } catch {
    return false;
  }
})();

// In local development, a missing or same-origin API base points to Vite's HTML fallback.
// The Django API for this project runs on port 8000.
const BASE_URL =
  import.meta.env.DEV && configuredBaseResolvesToFrontend
    ? "http://localhost:8000"
    : (configuredBaseUrl ?? frontendOrigin);

export const api: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true, // 쿠키 포함
});

// 쿠키에서 토큰을 가져오는 함수
export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // 쿠키에서 access_token 확인 (withCredentials: true로 쿠키 자동 전송)
  // 백엔드에서 쿠키로 인증하므로 헤더에 별도로 토큰을 설정하지 않음
  return config;
});

type RefreshableRequestConfig = InternalAxiosRequestConfig & {
  _refreshRetryAttempted?: boolean;
};

// Refresh expired access tokens only when a refresh cookie exists.
api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originalRequest = err.config as RefreshableRequestConfig | undefined;
    const isRefreshEndpoint = originalRequest?.url?.includes("/user/refresh/");
    const hasRefreshCookie = Boolean(getCookie("refresh_token"));

    if (
      err.response?.status === 401 &&
      originalRequest &&
      !isRefreshEndpoint &&
      !originalRequest._refreshRetryAttempted &&
      hasRefreshCookie
    ) {
      originalRequest._refreshRetryAttempted = true;
      try {
        await api.post("/user/refresh/", {});
        return api.request(originalRequest);
      } catch {
        // Preserve the original 401; callers can treat the session as signed out.
        return Promise.reject(err);
      }
    }

    return Promise.reject(err instanceof Error ? err : new Error(String(err)));
  },
);

class RefreshTokenExpiredError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RefreshTokenExpiredError";
  }
}
