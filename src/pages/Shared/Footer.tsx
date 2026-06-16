import { Facebook, Linkedin, Send, X } from "lucide-react";
import logo from "../../assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#f1f0ea] text-[#10221a]">
      <div className="mx-auto max-w-[1380px] border-t-2 border-[#547922] px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div className="lg:border-r-2 lg:border-[#75a232] lg:pr-16">
            <img src={logo} alt="Trees Direct" className="mb-8 h-16 w-80 object-contain object-left" />
            <p className="max-w-md text-2xl font-medium leading-snug">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                className="h-11 flex-1 bg-[#e3e3d8] px-4 text-sm outline-none"
                placeholder="Your email address"
                type="email"
              />
              <button className="h-11 bg-[#173f2d] px-8 font-semibold text-white">
                Sign up
              </button>
            </form>
            <p className="mt-8 max-w-md text-sm leading-7 text-[#6b6f68]">
              Join our mailing list for the latest offers, gardening advice and
              10% off your first order!
            </p>
            <div className="mt-8 flex gap-3">
              {[Facebook, X, Linkedin, Send].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="grid size-10 place-items-center rounded-full border-2 border-[#173f2d] text-[#173f2d]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:pl-10">
            <div>
              <h3 className="mb-8 text-2xl font-medium">Shop</h3>
              <ul className="space-y-5 font-semibold text-[#173f2d]">
                <li>Delivery & Return</li>
                <li>FAQ's</li>
                <li>Cookies & Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-8 text-2xl font-medium">Useful links</h3>
              <ul className="space-y-5 font-semibold text-[#173f2d]">
                <li>Blog</li>
                <li>Contact us</li>
                <li>About us</li>
                <li>Delivery & Return</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-8 text-2xl font-medium">Contacts</h3>
              <ul className="space-y-5 font-semibold text-[#173f2d]">
                <li>info@treesdirect.co.uk</li>
                <li>01584878878</li>
                <li>Priors Halton House, Ludlow, Shropshire, SY8 2JN</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t-2 border-[#547922] pt-8 text-sm text-[#6b6f68] md:flex-row md:items-center md:justify-between">
          <p>Trees Direct - Priors Halton House, Ludlow, Shropshire, SY8 2JN</p>
          <p className="font-semibold text-[#173f2d]">VISA | Mastercard | PayPal | American Express</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
