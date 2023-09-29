import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr/>
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto stick">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
          <div>
            <Link
              to={"/"}
              className="flex-none text-xl font-semibold text-black dark:text-white"
              aria-label="Brand"
            >
              StripU
            </Link>
            <p className="text-gray-400 text-sm">
              {currentYear} © copyrights.{" "}
              <a href="https://muminbhat.com" target="blank">
                <span className="text-blue-500 ">Mumin Bhat </span>
              </a>
            </p>
          </div>
          {/* End Col */}
          <ul className="text-center">
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link
                to="/about"
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
              >
                About
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                href="https://muminbhat.com"
              >
                Services
              </a>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                href="https://wanderblog.vercel.app"
              >
                Blog
              </a>
            </li>
          </ul>
          {/* End Col */}
          {/* Social Brands */}
          <div className="md:text-right space-x-2">
            <a
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="https://instagram.com/_.mumin"
            >
              <p className="pr-20">Instagarm</p>
            </a>
            <a
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="https://github.com/muminbhat/"
            >
              <p>Github</p>
            </a>
            <a
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="https://www.linkedin.com/in/mumin-bhat/"
            >
              <p className="pl-20">Linkedin</p>
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </div>
    </footer>
  );
};

export default Footer;
