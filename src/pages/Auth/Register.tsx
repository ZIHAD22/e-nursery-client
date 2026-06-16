import { Lock, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="bg-white text-[#13231c]">
      <section className="auth-garden mx-auto max-w-[760px] px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold md:text-7xl">Register</h1>
          <p className="mt-6 text-lg leading-8 text-[#5f6b63]">
            Create your nursery account and make future shopping easier.
          </p>
        </div>

        <div className="auth-card-wrap mt-12">
          <span className="floating-leaf leaf-one" />
          <span className="floating-leaf leaf-two" />
          <span className="floating-leaf leaf-three" />
          <span className="vine-line" />
          <form className="auth-card rounded-lg border border-[#d9ddd5] bg-[#f7f8f3] p-8 shadow-sm dark:border-[#315341] dark:bg-[#14241d] dark:text-[#eef7ef]">
          <label className="grid gap-2 font-semibold text-[#13231c] dark:text-[#eef7ef]">
            Full name
            <span className="flex h-12 items-center gap-3 bg-white px-4 dark:border dark:border-[#315341] dark:bg-[#0f1814]">
              <UserRound size={20} className="text-[#173f2d] dark:text-[#63d857]" />
              <input
                className="min-w-0 flex-1 bg-transparent outline-none text-[#13231c] dark:text-[#eef7ef]"
                placeholder="Your name"
              />
            </span>
          </label>

          <label className="mt-5 grid gap-2 font-semibold text-[#13231c] dark:text-[#eef7ef]">
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
                placeholder="Create a password"
              />
            </span>
          </label>

          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#13231c] dark:text-[#eef7ef]">
            <input type="checkbox" className="mt-1 size-4 accent-[#173f2d] dark:accent-[#63d857]" />
            Send me nursery offers, plant care advice, and seasonal reminders.
          </label>

          <button className="mt-8 h-12 w-full bg-[#173f2d] font-bold text-white dark:bg-[#63d857] dark:text-[#06100b]">
            Register
          </button>
          </form>
        </div>

        <p className="auth-register-panel mt-8 rounded-lg border border-[#d9ddd5] bg-white p-6 text-center text-[#6b6f68] shadow-sm">
          <span className="panel-leaf" />
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-[#173f2d]">
            Login here
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
