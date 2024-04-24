"use client"
import React from "react";
import "./apk.css";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Navbar() {
  return (
    <>

      <div class="top_header mid_header">
        <div class="">
          <div class="row">
            <div class="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top fixed_Nav" style={{ backgroundColor: "transparent", zIndex: 2 }}>
              <ResponsiveAppBar/>
                <div className="col-sm-6 collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-sm-2">
                  <a class="navbar-brand" href="#">
                    
                  </a>
                </div>
                </div>
              </nav>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;