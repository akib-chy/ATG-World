import React from "react";
import logo from "../../../Image/whole.png";

const Navbar = () => {
  return (
    <nav className="container d-flex justify-content-between align-items-center py-4">
      <div>
        <img className="img-fluid " src={logo} alt="" />
      </div>
      <div
        style={{ transform: "translateX(-25px)" }}
        className="d-none d-lg-block"
      >
        <form action="#" method="POST">
          <div class="button-input position-relative ">
            <input
              style={{ borderRadius: "37px", width: "140%" }}
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className="form-control shadow-none px-4 py-2 ps-5"
            />
            <i
              style={{ top: "22px", left: "23px" }}
              class="fa-solid fa-magnifying-glass position-absolute translate-middle"
            ></i>
          </div>
        </form>
      </div>
      <div>
        <h6>
          Create account. <a href="#"> It’s free!</a>{" "}
          <i class="fa-solid fa-caret-down"></i>
        </h6>
      </div>
    </nav>
  );
};

export default Navbar;