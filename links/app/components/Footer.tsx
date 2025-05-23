import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-[#7F5539]/75 border-2 border-[#9C6644] p-8 mt-auto rounded-lg shadow-sm backdrop-blur-md">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Copyright and Description */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-[#EDE0D4] font-bold text-2xl">Copyright</h2>
          <p className="text-base text-[#EDE0D4]">
            &copy; 2025 Links. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-3">
          <h2 className="text-[#EDE0D4] font-bold text-2xl">Resources</h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/docs/terms-of-service.pdf"
                className="text-base text-[#EDE0D4] hover:text-[#DDB892] transition-colors"
              >
                Terms of service
              </Link>
            </li>
            <li>
              <Link
                href="/docs/privacy-policy.pdf"
                className="text-base text-[#EDE0D4] hover:text-[#DDB892] transition-colors"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="mailto:hello@egeuysal.com?subject=Inquiry%20about%20Links"
                className="text-base text-[#EDE0D4] hover:text-[#DDB892] transition-colors"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/docs/about-us.pdf"
                className="text-base text-[#EDE0D4] hover:text-[#DDB892] transition-colors"
              >
                About us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-[#EDE0D4] font-bold text-2xl">Connect</h2>
          <address className="not-italic">
            <ul className="flex items-center space-x-5">
              <li>
                <Link
                  href="https://www.links.egeuysal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDE0D4] hover:text-[#DDB892] transition-colors"
                  aria-label="Personal Website"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/icons/globe.svg"
                      alt="Personal Website"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/egeuysall/links"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDE0D4] hover:text-[#DDB892] transition-colors"
                  aria-label="GitHub"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@egeuysal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDE0D4] hover:text-[#DDB892] transition-colors"
                  aria-label="Email"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/icons/email.svg"
                      alt="Twitter"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
