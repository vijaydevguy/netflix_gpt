import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-6 bg-gradient-to-b from-black to-transparent  w-full z-50">
      <a href="/">
        <img
          src="https://res.cloudinary.com/dtgn3hnzh/image/upload/v1777803912/netflix_logo_full_mtqdkg.svg"
          alt="logo"
          className="w-46 select-none pointer-events-none"
        />
      </a>
    </div>
  );
};

export default Header;
