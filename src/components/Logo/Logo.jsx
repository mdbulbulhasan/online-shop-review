import React from 'react';

const Logo = () => {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32"
          height="32"
          fill="none"
          stroke="#ffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shopping Cart */}
          <circle cx="23" cy="54" r="4" fill="#ffff" />
          <circle cx="45" cy="54" r="4" fill="#ffff" />
          <path d="M5 6h14l12 30h18l6-14H25" stroke="#ffff" strokeWidth="3" />
          {/* Star on top */}
          <polygon
            points="32 12 35 20 44 20 37 26 40 34 32 29 24 34 27 26 20 20 29 20"
            fill="#FBBF24"
          />
        </svg>
      </div>
    );
};

export default Logo;