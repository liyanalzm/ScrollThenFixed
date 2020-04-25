import React, { useRef, useEffect, useCallback, useState } from "react";

import "./styles.scss";

interface ScrollThenFixedProps {
  children: React.ReactNode;
}

const ScrollThenFixed = ({ children }: ScrollThenFixedProps): JSX.Element => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [intialWidth, setIntialWidth] = useState(
    childRef.current && childRef.current.getBoundingClientRect().width
  );

  // setting up children initial width one time only
  useEffect(() => {
    if (childRef.current && !intialWidth) {
      setIntialWidth(childRef.current.getBoundingClientRect().width);
    }
  }, [children, intialWidth]);

  const scrollHandler = useCallback((parentPositionToTop): void => {
    if (parentRef.current && childRef.current) {
      const childElement = childRef.current;
      const parentElement = parentRef.current;
      const childElementHeight = childElement.clientHeight;
      const childElementBottomPositionToTop =
        parentPositionToTop + childElementHeight;

      if (parentElement.clientHeight > childElementHeight) {
        if (
          childRef.current.scrollHeight < document.documentElement.clientHeight
        ) {
          // stick to Top when element smaller than viewport
          childElement.classList.add("sticky");
        } else if (
          document.documentElement.scrollTop > parentPositionToTop &&
          document.documentElement.scrollTop +
            document.documentElement.clientHeight >=
            childElementBottomPositionToTop &&
          document.documentElement.scrollTop +
            document.documentElement.clientHeight >
            childElementHeight
        ) {
          childElement.classList.remove("sticky");
          childElement.classList.add("bottom");
        } else {
          childElement.classList.remove("sticky");
          childElement.classList.remove("bottom");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (parentRef.current && childRef.current) {
      const parentElementBounds = parentRef.current.getBoundingClientRect();
      const parentPositionToTop = parentElementBounds.top; // needed only initial top position
      scrollHandler(parentPositionToTop);
      document.addEventListener("scroll", () =>
        scrollHandler(parentPositionToTop)
      );
    }
  }, [scrollHandler]);

  return (
    <div className="container" ref={parentRef}>
      <div
        className="child"
        ref={childRef}
        style={{
          ...(intialWidth && { width: intialWidth })
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollThenFixed;
