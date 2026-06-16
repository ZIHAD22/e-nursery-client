import { Eye, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="bg-white text-[#13231c]">
      <section className="auth-garden mx-auto max-w-[760px] px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold md:text-7xl">Login</h1>
          <p className="mt-6 text-lg leading-8 text-[#5f6b63]">
            Welcome back. Login to manage orders, save favourite plants, and
            move through checkout faster.
          </p>
        </div>

        <div className="auth-card-wrap mt-12">
          <span className="floating-leaf leaf-one" />
          <span className="floating-leaf leaf-two" />
          <span className="floating-leaf leaf-three" />
          <span className="vine-line" />
          <form className="auth-card rounded-lg border border-[#d9ddd5] bg-[#f7f8f3] p-8 shadow-sm dark:border-[#315341] dark:bg-[#14241d] dark:text-[#eef7ef]">
          <label className="grid gap-2 font-semibold text-[#13231c] dark:text-[#eef7ef]">
            Email address
            <span className="flex h-12 items-center gap-3 bg-white px-4 dark:border dark:border-[#315341] dark:bg-[#0f1814]">
              <Mail size={20} className="text-[#173f2d] dark:text-[#63d857]" />
              <input
                type="email"
                className="min-w-0 flex-1 bg-transparent outline-none text-[#13231c] dark:text-[#eef7ef]"
                placeholder="you@example.com"
              />
            </span>
          </label>

          <label className="mt-5 grid gap-2 font-semibold text-[#13231c] dark:text-[#eef7ef]">
            Password
            <span className="flex h-12 items-center gap-3 bg-white px-4 dark:border dark:border-[#315341] dark:bg-[#0f1814]">
              <Lock size={20} className="text-[#173f2d] dark:text-[#63d857]" />
              <input
                type="password"
                className="min-w-0 flex-1 bg-transparent outline-none text-[#13231c] dark:text-[#eef7ef]"
                placeholder="Your password"
              />
              <Eye size={20} className="text-[#6b6f68] dark:text-[#b9c8bd]" />
            </span>
          </label>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-[#13231c] dark:text-[#eef7ef]">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4 accent-[#173f2d] dark:accent-[#63d857]" />
              Remember me
            </label>
            <Link to="/login" className="font-semibold text-[#173f2d] dark:text-[#63d857]">
              Forgot password?
            </Link>
          </div>

          <button className="mt-8 h-12 w-full bg-[#173f2d] font-bold text-white dark:bg-[#63d857] dark:text-[#06100b]">
            Login
          </button>
          </form>
        </div>

        <section className="auth-register-panel mt-8 rounded-lg border border-[#d9ddd5] bg-white p-8 text-center shadow-sm">
          <span className="panel-leaf" />
          <h2 className="text-2xl font-bold">New customer?</h2>
          <p className="mx-auto mt-3 max-w-lg text-[#6b6f68]">
            Create an account to save your information, track orders, and keep a
            wishlist for future planting plans.
          </p>
          <Link
            to="/register"
            className="mt-6 inline-flex bg-[#173f2d] px-8 py-3 font-bold text-white"
          >
            Create an Account
          </Link>
        </section>
      </section>
    </main>
  );
};

export default Login;
