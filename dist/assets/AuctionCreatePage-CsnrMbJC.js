import {
  S as f,
  s as g,
  h as d,
  i as j,
  n as p,
  e as b,
  r as o,
  k as y,
  l as v,
  o as m,
  _ as N,
  m as u,
  q as h,
  t as w,
  v as c,
  j as s,
  C,
  u as S,
  w as O,
  x as M,
  F as P,
  B as E,
} from "./index-BxdnYUZZ.js";
import { c as x } from "./useAuctionQueries-CRez4Q5v.js";
const F =
  "data:image/svg+xml,%3csvg%20width='63'%20height='64'%20viewBox='0%200%2063%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M52.2309%2021.1128L38.4497%207.33156C38.173%207.05457%2037.7977%206.89878%2037.4062%206.89844H13.7812C12.8675%206.89844%2011.9912%207.26142%2011.345%207.90755C10.6989%208.55367%2010.3359%209.43%2010.3359%2010.3438V53.6562C10.3359%2054.57%2010.6989%2055.4463%2011.345%2056.0925C11.9912%2056.7386%2012.8675%2057.1016%2013.7812%2057.1016H49.2188C50.1325%2057.1016%2051.0088%2056.7386%2051.655%2056.0925C52.3011%2055.4463%2052.6641%2054.57%2052.6641%2053.6562V22.1562C52.6637%2021.7648%2052.5079%2021.3895%2052.2309%2021.1128ZM38.8828%2011.9384L47.6241%2020.6797H38.8828V11.9384ZM49.2188%2054.1484H13.7812C13.6507%2054.1484%2013.5255%2054.0966%2013.4332%2054.0043C13.3409%2053.912%2013.2891%2053.7868%2013.2891%2053.6562V10.3438C13.2891%2010.2132%2013.3409%2010.088%2013.4332%209.99572C13.5255%209.90342%2013.6507%209.85156%2013.7812%209.85156H35.9297V22.1562C35.9297%2022.5479%2036.0853%2022.9234%2036.3622%2023.2003C36.6391%2023.4772%2037.0146%2023.6328%2037.4062%2023.6328H49.7109V53.6562C49.7109%2053.7868%2049.6591%2053.912%2049.5668%2054.0043C49.4745%2054.0966%2049.3493%2054.1484%2049.2188%2054.1484Z'%20fill='%23ADADAD'/%3e%3c/svg%3e";
var R = class extends f {
  #t;
  #s = void 0;
  #e;
  #r;
  constructor(e, t) {
    (super(), (this.#t = e), this.setOptions(t), this.bindMethods(), this.#a());
  }
  bindMethods() {
    ((this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this)));
  }
  setOptions(e) {
    const t = this.options;
    ((this.options = this.#t.defaultMutationOptions(e)),
      g(this.options, t) ||
        this.#t
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.#e,
            observer: this,
          }),
      t?.mutationKey &&
      this.options.mutationKey &&
      d(t.mutationKey) !== d(this.options.mutationKey)
        ? this.reset()
        : this.#e?.state.status === "pending" &&
          this.#e.setOptions(this.options));
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      this.#e &&
      (this.#e.addObserver(this), this.#a());
  }
  onUnsubscribe() {
    this.hasListeners() || this.#e?.removeObserver(this);
  }
  onMutationUpdate(e) {
    (this.#a(), this.#i(e));
  }
  getCurrentResult() {
    return this.#s;
  }
  reset() {
    (this.#e?.removeObserver(this), (this.#e = void 0), this.#a(), this.#i());
  }
  mutate(e, t) {
    return (
      (this.#r = t),
      this.#e?.removeObserver(this),
      (this.#e = this.#t.getMutationCache().build(this.#t, this.options)),
      this.#e.addObserver(this),
      this.#e.execute(e)
    );
  }
  #a() {
    const e = this.#e?.state ?? j();
    this.#s = {
      ...e,
      isPending: e.status === "pending",
      isSuccess: e.status === "success",
      isError: e.status === "error",
      isIdle: e.status === "idle",
      mutate: this.mutate,
      reset: this.reset,
    };
  }
  #i(e) {
    p.batch(() => {
      const t = this.#r;
      if (t && this.hasListeners()) {
        const a = this.#s.variables,
          r = this.#s.context,
          i = {
            client: this.#t,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        if (e?.type === "success") {
          try {
            t.onSuccess?.(e.data, a, r, i);
          } catch (n) {
            Promise.reject(n);
          }
          try {
            t.onSettled?.(e.data, null, a, r, i);
          } catch (n) {
            Promise.reject(n);
          }
        } else if (e?.type === "error") {
          try {
            t.onError?.(e.error, a, r, i);
          } catch (n) {
            Promise.reject(n);
          }
          try {
            t.onSettled?.(void 0, e.error, a, r, i);
          } catch (n) {
            Promise.reject(n);
          }
        }
      }
      this.listeners.forEach((a) => {
        a(this.#s);
      });
    });
  }
};
function A(e, t) {
  const a = b(),
    [r] = o.useState(() => new R(a, e));
  o.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const i = o.useSyncExternalStore(
      o.useCallback((l) => r.subscribe(p.batchCalls(l)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    n = o.useCallback(
      (...l) => {
        r.mutate(l[0], l[1]).catch(y);
      },
      [r],
    );
  if (i.error && v(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: n, mutateAsync: i.mutate };
}
const V = m({
  title: h()
    .min(1, "상품명을 입력해주세요.")
    .max(100, "상품명은 100자 이내로 입력해주세요."),
  description: h()
    .min(1, "상품 설명을 입력해주세요.")
    .max(1e3, "상품 설명은 1000자 이내로 입력해주세요."),
  startPrice: u()
    .min(1, "시작가는 최소 1잔 이상이어야 합니다.")
    .max(999999, "시작가는 999,999잔을 초과할 수 없습니다."),
  image: N(File, { message: "사진을 등록해주세요." })
    .refine((e) => e.size <= 5 * 1024 * 1024, {
      message: "이미지 크기는 5MB 이하여야 합니다.",
    })
    .refine((e) => e.type.startsWith("image/"), {
      message: "이미지 파일만 업로드 가능합니다.",
    }),
  duration: m({
    days: u().min(0).max(365),
    hours: u().min(0).max(23),
    minutes: u().min(0).max(59),
  }).refine((e) => e.days * 24 * 60 + e.hours * 60 + e.minutes >= 1, {
    message: "경매 기간은 최소 1분 이상이어야 합니다.",
  }),
});
function D(e) {
  const t = ((e.days * 24 + e.hours) * 60 + e.minutes) * 60 * 1e3;
  return new Date(Date.now() + t).toISOString();
}
function K() {
  const e = b();
  return A({
    mutationFn: async (t) => {
      const a = await w({
        title: t.title.trim(),
        description: t.description.trim(),
        starting_price: t.startPrice,
        image_file: t.image,
        end_time: D(t.duration),
      });
      if (!a)
        throw new Error(
          "경매 등록에 실패했습니다. 입력값과 로그인을 확인해주세요.",
        );
      return a;
    },
    onSuccess: async (t) => {
      (e.setQueryData(x.detail(t.id), t),
        await e.invalidateQueries({ queryKey: x.all }));
    },
  });
}
const L = () => {
    const {
      register: e,
      formState: { errors: t },
    } = c();
    return s.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        s.jsx("label", {
          className: "text-lg font-bold text-scale-600",
          children: "상품명",
        }),
        s.jsx("input", {
          ...e("title"),
          placeholder: "예: 빈티지 가죽 자켓",
          className:
            "w-full h-14 rounded-md border border-scale-200 focus:border-brand-primary outline-none px-4 text-base text-scale-500 placeholder:text-scale-300",
        }),
        t.title &&
          s.jsx("p", {
            className: "text-point-warning text-base mt-1",
            children: t.title.message,
          }),
      ],
    });
  },
  U = () => {
    const {
      register: e,
      formState: { errors: t },
    } = c();
    return s.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        s.jsx("label", {
          className: "text-lg font-bold text-scale-600",
          children: "상품 설명",
        }),
        s.jsx("textarea", {
          ...e("description"),
          placeholder: "상품의 상태, 사용 이력, 특징 등을 작성해주세요.",
          className:
            "w-full min-h-36 rounded-md border border-scale-200 focus:border-brand-primary outline-none p-4 text-base text-scale-500 placeholder:text-scale-300",
        }),
        t.description &&
          s.jsx("p", {
            className: "text-point-warning text-base mt-1",
            children: t.description.message,
          }),
      ],
    });
  },
  k = () => {
    const e = o.useRef(null),
      [t, a] = o.useState(null),
      {
        setValue: r,
        formState: { errors: i },
      } = c();
    o.useEffect(
      () => () => {
        t && URL.revokeObjectURL(t);
      },
      [t],
    );
    const n = (l) => {
      !l ||
        !l.type.startsWith("image/") ||
        (a(URL.createObjectURL(l)),
        r("image", l, {
          shouldDirty: !0,
          shouldTouch: !0,
          shouldValidate: !0,
        }));
    };
    return s.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        s.jsx("label", {
          className: "text-lg font-bold text-scale-600",
          children: "사진",
        }),
        s.jsx("button", {
          type: "button",
          onClick: () => e.current?.click(),
          className: `w-full h-[320px] rounded-md border ${t ? "border-transparent" : "border-scale-200"} overflow-hidden cursor-pointer flex items-center justify-center`,
          children: t
            ? s.jsx("img", {
                src: t,
                alt: "상품 사진 미리보기",
                className: "w-full h-full object-cover",
              })
            : s.jsxs("span", {
                className: "flex flex-col items-center gap-4 text-scale-300",
                children: [
                  s.jsx("img", {
                    src: F,
                    alt: "",
                    className: "w-16 opacity-60",
                  }),
                  s.jsx("span", {
                    className: "text-base",
                    children: "클릭하여 업로드",
                  }),
                ],
              }),
        }),
        s.jsx("input", {
          ref: e,
          type: "file",
          accept: "image/*",
          className: "hidden",
          onChange: (l) => n(l.target.files?.[0]),
        }),
        i.image &&
          s.jsx("p", {
            className: "text-point-warning text-base mt-1",
            children: i.image.message?.toString(),
          }),
      ],
    });
  },
  H = () => {
    const {
      register: e,
      formState: { errors: t },
    } = c();
    return s.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        s.jsx("label", {
          className: "text-lg font-bold text-scale-600",
          children: "시작가",
        }),
        s.jsxs("div", {
          className: "flex items-center gap-6",
          children: [
            s.jsx("img", { src: C, alt: "", className: "w-10" }),
            s.jsx("input", {
              type: "number",
              min: 1,
              ...e("startPrice", { valueAsNumber: !0 }),
              className:
                "w-24 text-3xl font-bold text-brand-primary bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center",
            }),
            s.jsx("span", {
              className: "text-3xl font-bold text-scale-500",
              children: "잔",
            }),
          ],
        }),
        t.startPrice &&
          s.jsx("p", {
            className: "text-point-warning text-base mt-1",
            children: t.startPrice.message,
          }),
      ],
    });
  },
  q = [
    { name: "days", label: "일", max: 365 },
    { name: "hours", label: "시간", max: 23 },
    { name: "minutes", label: "분", max: 59 },
  ],
  I = () => {
    const {
        register: e,
        formState: { errors: t },
      } = c(),
      a = t.duration?.message;
    return s.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        s.jsx("label", {
          className: "text-lg font-bold text-scale-600",
          children: "경매 기간",
        }),
        s.jsx("div", {
          className: "flex items-center gap-5 text-scale-500",
          children: q.map(({ name: r, label: i, max: n }) =>
            s.jsxs(
              "div",
              {
                className: "flex items-center gap-2",
                children: [
                  s.jsx("input", {
                    type: "number",
                    min: 0,
                    max: n,
                    ...e(`duration.${r}`, { valueAsNumber: !0 }),
                    "aria-label": i,
                    className:
                      "w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center",
                  }),
                  s.jsx("span", { className: "text-3xl pb-1", children: i }),
                ],
              },
              r,
            ),
          ),
        }),
        a &&
          s.jsx("p", {
            className: "text-point-warning text-base mt-1",
            children: a,
          }),
      ],
    });
  };
function B() {
  const e = S(),
    t = K(),
    a = O({
      resolver: M(V),
      mode: "onTouched",
      defaultValues: {
        title: "",
        description: "",
        startPrice: 0,
        duration: { days: 10, hours: 0, minutes: 0 },
      },
    }),
    r = a.handleSubmit(async (i) => {
      try {
        const n = await t.mutateAsync(i);
        e(`/auction/${n.id}`);
      } catch {}
    });
  return s.jsx("div", {
    className: "w-full px-50 py-30",
    children: s.jsxs("div", {
      className: "max-w-[973px] mx-auto flex flex-col gap-25",
      children: [
        s.jsxs("div", {
          className: "flex flex-col gap-5",
          children: [
            s.jsx("div", {
              className: "text-5xl font-bold text-scale-600",
              children: "경매 등록하기",
            }),
            s.jsx("div", {
              className: "text-2xl text-scale-400",
              children: "당신의 애착템, 술잔으로 걸어보세요!",
            }),
          ],
        }),
        s.jsx(P, {
          ...a,
          children: s.jsxs("form", {
            onSubmit: r,
            className:
              "w-full rounded-2xl bg-bg-white flex flex-col gap-25 shadow-xl px-35 py-22.5",
            children: [
              t.isError &&
                s.jsx("p", {
                  role: "alert",
                  className: "text-point-warning text-base",
                  children: t.error.message,
                }),
              s.jsxs("div", {
                className: "grid grid-cols-1 gap-12",
                children: [
                  s.jsx(L, {}),
                  s.jsx(U, {}),
                  s.jsx(k, {}),
                  s.jsxs("div", {
                    className: "w-full flex gap-38",
                    children: [s.jsx(H, {}), s.jsx(I, {})],
                  }),
                ],
              }),
              s.jsx("div", {
                className: "w-full flex justify-center",
                children: s.jsx(E, {
                  type: "submit",
                  variant:
                    a.formState.isValid && !t.isPending
                      ? "primary"
                      : "disabled",
                  disabled: !a.formState.isValid || t.isPending,
                  className: "w-80 h-14",
                  children: t.isPending ? "경매 등록 중…" : "상품 등록하기",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
export { B as default };
