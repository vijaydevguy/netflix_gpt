import React, { useState } from "react";
import { assets } from "../assets/asset";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../hooks/useAuth";
import LogoutConfirmModal from "./LogoutModal";
import { useSelector } from "react-redux";

const Header = () => {
  // we able to get stored state using selector in redux
  const user = useSelector((store) => store.user);

  const [selectedOption, setSelectedOption] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navOptions = [
    // { label: "Profile", value: "profile" },
    // { label: "Settings", value: "settings" },
    {
      label: (
        <div className="flex flex-row gap-2 items-center ">
          <p>Logout</p>
          <TbLogout2 size={20} className="text-black" />
        </div>
      ),
      value: "logout",
    },
  ];

  const valueTemplate = (option, props) => {
    return (
      <img
        src={user?.photoUrl ? user?.photoUrl : assets.profile_png}
        alt="profile"
        className="w-8 h-8 rounded-full cursor-pointer"
      />
    );
  };

  const itemTemplate = (option) => {
    return (
      <div className="px-4 py-1 hover:bg-gray-100 rounded-md">
        {option.label}
      </div>
    );
  };

  const handleLogout = () => {
    // your logout logic here
    console.log("User logged out");
    logout();
    setShowLogoutModal(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setSelectedOption(e.value);
    console.log(e.value);

    if (e.value == "logout") {
      console.log("click logout");
      setShowLogoutModal(!showLogoutModal);
    }
    //due to prime package before it is not clearing state
    setSelectedOption(null);

    // switch (e.value) {
    // case "profile":
    //   navigate("/profile");
    //   break;
    // case "settings":
    //   navigate("/settings");
    //   break;
    // case "logout":
    // setShowLogoutModal(true);
    // console.log(showLogoutModal, "Testing");

    // logout();
    // navigate("/");
    // console.log("Logging out...");
    // break;
    // default:
    // break;
    // }
  };

  return (
    <div
      className={`absolute px-8 py-6 bg-gradient-to-b from-black to-transparent w-full z-50 flex flex-row justify-between items-center `}
    >
      {/* logout modal */}
      <LogoutConfirmModal
        visible={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />

      <a href="/browse">
        <img
          src={assets.logo}
          alt="logo"
          className="w-46 select-none pointer-events-none"
        />
      </a>

      <div
        className={`${user ? "opacity-100" : "opacity-0"} transition-all ease-in-out duration-300`}
      >
        <Dropdown
          value={selectedOption}
          onChange={handleChange}
          options={navOptions}
          optionLabel="label"
          placeholder="Menu"
          valueTemplate={valueTemplate}
          itemTemplate={itemTemplate}
          panelStyle={{
            padding: "16px",
            marginTop: "8px",
            width: "150px",
            borderRadius: "12px",
            backgroundColor: "#ffffff",
          }}
          className="w-1rem gap-2"
          panelClassName="shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        />
      </div>
    </div>
  );
};

export default Header;
