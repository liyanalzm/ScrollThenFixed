import React from "react";
import "./styles.scss";
import Layout from "../Layout";

export default function App() {
  return (
    <div className="App">
      <h1>Scroll Then Fixed</h1>
      <p>
        This component should allow a component that the height is overflown
        from the viewport screen to scroll until the end (meaning: cannot scroll
        the element anymore) then make the element fixed to the bottom of the
        viewport. If the element height is smaller than the viewport, the
        element should be fixed to the top.
      </p>
      <Layout />
    </div>
  );
}
