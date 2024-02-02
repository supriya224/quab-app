/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between flex-wrap bg-gray-400 p-3">
      <div className="flex items-center flex-no-shrink text-white mr-6">
    
        <img
          src="https://quadbtech.com/images/QBT%20Logo%20Black.png"
          alt="pic"
        />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
     
    </nav>
  );
};

export default Header;
