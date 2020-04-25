import React from "react";
import ScrollThenFixed from "./src/ScrollThenFixed";

const Layout = (): JSX.Element => {
  return (
    <div className="layout">
      <div className="left-container">
        <div style={{ height: "1900px", backgroundColor: "#e6a492" }}>
          This is a left container, it's scroll height is 1900px
        </div>
      </div>
      <div className="right-container">
        <ScrollThenFixed>
          <div style={{ height: "50px", backgroundColor: "wheat" }}>
            This is a left container, it's scroll height is 1050px
          </div>

          <div style={{ height: "900px", backgroundColor: "aliceblue" }}>
            Item 2
          </div>

          <div style={{ height: "100px", backgroundColor: "red" }}>Item 3</div>
        </ScrollThenFixed>
      </div>
    </div>
  );
};

export default Layout;
