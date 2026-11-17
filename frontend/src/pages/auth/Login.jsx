import { Link } from "react-router-dom"
function Login() {
  return (
    <main className="min-h-screen bg-[#f7f9ff] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative flex min-h-[620px] flex-col overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-950 px-6 py-8 text-white sm:px-10 lg:min-h-screen lg:px-12 lg:py-10 xl:px-20">
          <div className="absolute -left-36 top-28 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-48 -right-32 h-[30rem] w-[30rem] rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />

          <a href="#login" className="relative z-10 inline-flex w-fit items-center gap-3" aria-label="TaskFlow">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 shadow-lg ring-1 ring-white/25 backdrop-blur">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path d="m6 12.5 4 4L18.5 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3.5 20 7v5.5c0 4.2-3.1 7.1-8 8.5-4.9-1.4-8-4.3-8-8.5V7l8-3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-xl font-bold tracking-tight">TaskFlow</span>
          </a>

          <div className="relative z-10 my-auto max-w-xl py-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium text-blue-50 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
              Your day, in sync
            </div>
            <h1 className="max-w-lg text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
              A clearer path to your <span className="text-blue-200">best work.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-indigo-100/85 sm:text-base">
              Bring your tasks together, focus on what matters, and make progress you can feel.
            </p>

            <div className="mt-9 max-w-md rounded-2xl border border-white/20 bg-white/[0.12] p-5 shadow-2xl shadow-indigo-950/25 backdrop-blur-xl sm:mt-12">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <p className="text-sm font-semibold">Today&apos;s focus</p>
                  <p className="mt-1 text-xs text-indigo-100/70">A little progress adds up</p>
                </div>
                <span className="rounded-lg bg-white/15 px-2.5 py-1.5 text-xs font-medium text-blue-50">3 of 5</span>
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-indigo-950">
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="m3.5 8 3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-indigo-100/60 line-through">Review project brief</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 shrink-0 rounded-full border border-white/50" />
                  <span className="text-sm font-medium text-white">Plan this week&apos;s priorities</span>
                  <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 shrink-0 rounded-full border border-white/50" />
                  <span className="text-sm text-indigo-100/85">Share the latest update</span>
                </div>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-xs text-indigo-100/60">Small steps. Meaningful momentum.</p>
        </section>

        <section id="login" className="relative flex min-h-[620px] flex-col justify-center px-6 py-14 sm:px-10 lg:min-h-screen lg:px-12 xl:px-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl lg:hidden" />
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="mb-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M8 12h8M8 16h5M8 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <rect x="4" y="3.5" width="16" height="17" rx="4" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-[2.15rem]">Welcome Back</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Manage your tasks. Stay productive.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                      <rect x="3.5" y="5" width="17" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
                      <path d="m5 7 7 5.5L19 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.02] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.02] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-0.5">
                <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-slate-300 accent-blue-600 focus:ring-2 focus:ring-blue-500/20"
                  />
                  Remember Me
                </label>
                <a href="#forgot-password" className="text-sm font-semibold text-blue-700 transition hover:text-indigo-700">
                  Forgot Password?
                </a>
              </div>

              <button
                type="button"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 active:translate-y-0"
              >
                Sign In
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              New to TaskFlow?{" "}
              <Link to="/register" className="font-semibold text-blue-700 transition hover:text-indigo-700">Create Account</Link>
            </p>
            <p className="mt-12 text-center text-xs text-slate-400">© 2025 TaskFlow. Stay focused, move forward.</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login