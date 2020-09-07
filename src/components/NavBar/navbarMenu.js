import { NavItems } from "./navbarItems";
import React, { useState } from "react";
import { ReactComponent as HamburgerIcon } from "bootstrap-icons/icons/list.svg";
import { ReactComponent as CloseIcon } from "bootstrap-icons/icons/x.svg";

export const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuIcon = isMenuOpen ? CloseIcon : HamburgerIcon;

  return (
    <>
      <div
        className="d-lg-none position-relative"
        onClick={() => setIsMenuOpen(true)}
      >
        <MenuIcon
          className="text-success border border-success rounded p-1"
          height="3rem"
          width="3rem"
        />
        <div
          className="position-absolute dropdown-menu-right"
          style={{ zIndex: 20 }}
        >
          {isMenuOpen && (
            <NavItems
              className="flex-column"
              style={{ width: "40vw", minWidth: "200px" }}
            />
          )}
        </div>
      </div>
      {/* Put an overlay under the menu so that clicking anywhere closes the menu */}
      {isMenuOpen && (
        <div
          role="button"
          className="fixed-top vw-100 vh-100"
          style={{ zIndex: 10 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};
