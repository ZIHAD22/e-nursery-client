/** @type {import('tailwindcss').Config} */
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from "tailwindcss-scoped-preflight";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".twp", {
        except: ".no-twp", // optional, to exclude some elements under .twp from being preflighted, like external markup
      }),
    }),
  ],
};
