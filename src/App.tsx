import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { Suspense } from "react";
import { UserProvider } from "@/contexts/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Suspense fallback={null}>
          <RouterProvider router={router} />
        </Suspense>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
