/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-300 py-1 dark:bg-gray-900 absolute w-full z-1">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            QuabTech
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://quadbtech.com/about-us.html"
              className="hover:underline me-4 md:me-6"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://quadbtech.com/pos.html"
              className="hover:underline me-4 md:me-6"
            >
              POS
            </a>
          </li>
          <li>
            <a
              href="https://quadbtech.com/contact-us.html"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
