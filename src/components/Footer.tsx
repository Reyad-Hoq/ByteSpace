import Image from "next/image";

const footerLinks = [
  {
    col: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    col: [
      "Development",
      "Marketing",
      "Photography",
      "Finance",
      "Sport",
    ],
  },
  {
    col: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 font-clash">

      {/* Main footer */}
      <div className="w-full md:w-9/12 mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-5">

          {/* Left — Logo + Newsletter */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div>
               <div className="flex items-center gap-2">
              <Image src="/icon.png" alt="ByteSpace" width={32} height={32} />
              <span className="relative -bottom-2 text-xl font-semibold text-gray-900">
                ByteSpace
              </span>
            </div>
            </div>
           

            {/* Description */}
            <p className="font-satoshi text-sm text-gray-500 leading-relaxed">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Email input */}
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full rounded-full border border-gray-300
                  px-4 py-2.5 font-satoshi text-sm
                  outline-none focus:border-primary
                  transition-colors duration-150
                "
              />
              <button className="shrink-0 rounded-full bg-secondary px-5 py-2.5 font-poppins text-sm font-semibold text-black hover:bg-secondary/80 transition-colors duration-150">
                Search
              </button>
            </div>

            {/* Disclaimer */}
            <p className="font-satoshi text-xs text-gray-400 leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right — Link columns */}
          {footerLinks.map((group, gi) => (
            <div key={gi} className="flex flex-col gap-4">
              {group.col.map((link, li) => (
                <a
                  key={li}
                  href="#"
                  className="font-satoshi text-sm text-gray-600 hover:text-primary transition-colors duration-150"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-9/12 mx-auto border-t border-gray-300">
        <div className="flex flex-col items-center justify-between gap-3 px-6 py-5 md:flex-row">
          <p className="font-satoshi text-sm text-black/60">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="font-satoshi text-sm text-gray-500 hover:text-primary transition-colors duration-150"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;