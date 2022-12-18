import React, { useEffect } from "react";
import "../assets/TopScroll.css";

function TopScroll() {


  useEffect(() => {
    const scroller = document.querySelector(".scroll_container");
    window.addEventListener("scroll", () =>
      window.pageYOffset > 0
        ? scroller.classList.add("scroll-active")
        : scroller.classList.remove("scroll-active")
    );
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        zIndex: 23,
        backgroundColor: "black",
        width: 35,
        height: 35,
        borderRadius: 50,
        textAlign: "center",
        fontSize: 17,
      }}
      className="scroll_container"
      onClick={() => window.scrollTo(0, 0)}
    >
      <i
        class="fa-solid fa-angle-up text-white"
        style={{ transform: `translateY(${5}px)` }}
      ></i>
    </div>
  );
}

export default TopScroll;
