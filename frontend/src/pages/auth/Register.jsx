import { Link } from "react-router-dom"

function Register() {
  return (
    <main className="min-h-screen bg-[#f7f9ff] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative flex min-h-[560px] flex-col overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-950 px-6 py-8 text-white sm:px-10 lg:min-h-screen lg:px-12 lg:py-10 xl:px-20">
          <div className="absolute -left-36 top-28 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-48 -right-32 h-[30rem] w-[30rem] rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />

          <a href="/login" className="relative z-10 inline-flex w-fit items-center gap-3" aria-label="TaskFlow">
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
              A fresh start for your focus
            </div>
            <h1 className="max-w-lg text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
              Make room for <span className="text-blue-200">momentum.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-indigo-100/85 sm:text-base">
              Create your TaskFlow account and bring your plans, priorities, and progress into one clear space.
            </p>

            <div className="mt-9 max-w-md rounded-2xl border border-white/20 bg-white/[0.12] p-5 shadow-2xl shadow-indigo-950/25 backdrop-blur-xl sm:mt-12">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <p className="text-sm font-semibold">A more focused day</p>
                  <p className="mt-1 text-xs text-indigo-100/70">Your goals, one step at a time</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-blue-100">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M5 19V9m7 10V5m7 14v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-full border-2 border-indigo-700 bg-blue-200" />
                  <span className="h-8 w-8 rounded-full border-2 border-indigo-700 bg-indigo-300" />
                  <span className="h-8 w-8 rounded-full border-2 border-indigo-700 bg-emerald-200" />
                </div>
                <p className="text-xs leading-5 text-indigo-100/85">
                  Build better habits and celebrate every small win.
                </p>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-xs text-indigo-100/60">Small steps. Meaningful momentum.</p>
        </section>

        <section className="relative flex min-h-[700px] flex-col justify-center px-6 py-12 sm:px-10 lg:min-h-screen lg:px-12 lg:py-10 xl:px-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl lg:hidden" />
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="mb-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-[2.15rem]">Create your account</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">A few details and you&apos;re ready to get organized.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="full-name" className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.02] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label htmlFor="username" className="mb-1.5 block text-sm font-medium text-slate-700">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Choose a username"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.02] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.02] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.02] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-medium text-slate-700">Confirm password</label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.02] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="button"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 active:translate-y-0"
              >
                Create Account
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-700 transition hover:text-indigo-700">Log in</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Register