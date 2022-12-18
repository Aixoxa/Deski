import React, { useState, useEffect, useRef } from "react";
import styles from "../Navbar/Navbar.module.css";
import NavBtn from "./Navbtn/Navbtn";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useLocation } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  const submenu = useRef(null);
  const parentMenu = useRef(null);

  useEffect(() => {
    const handler = () => {
      window.scrollY > 100 ? setNavShadow(true) : setNavShadow(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  useEffect(() => {
    const handler = (e) => {
      if (!submenu.current.contains(e.target)) setIsVisible(false);
    };

    window.addEventListener("mouseover", handler);

    return () => {
      window.removeEventListener("mouseover", handler);
    };
  });

  const location = useLocation();

  let activeStyle = {
    color: "#6f55ff",
  };

  return (
    <div className="" style={{ paddingBottom: 210 }}>
      {/* DESKTOP NAVBAR */}

      <div
        className={[styles.nav_items, navShadow && styles.nav_shadow].join(" ")}
        ref={parentMenu}
      >
        {console.log(location)}
        <div className={styles.logo_container}>
          <img src="../images/logos/deski_01.svg" alt="" />
        </div>

        <ul className={styles.nav_items_list}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                location.pathname === "/" && isActive ? activeStyle : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li
            ref={submenu}
            onMouseOver={() => setIsVisible(true)}
            className={styles.desktop_sub_menu}
          >
            <span>Pages</span>

            <Fade bottom when={isVisible} collapse distance="20px">
              <ul>
                <li>
                  <NavLink
                    to="/services"
                    style={({ isActive }) =>
                      location.pathname === "/services" && isActive
                        ? activeStyle
                        : undefined
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/team"
                    style={({ isActive }) =>
                      location.pathname === "/team" && isActive
                        ? activeStyle
                        : undefined
                    }
                  >
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    style={({ isActive }) =>
                      location.pathname === "/signup" && isActive
                        ? activeStyle
                        : undefined
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </Fade>
          </li>

          <li>
            <NavLink
              to="/pricing"
              style={({ isActive }) =>
                location.pathname === "/pricing" && isActive
                  ? activeStyle
                  : undefined
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms"
              style={({ isActive }) =>
                location.pathname === "/terms" && isActive
                  ? activeStyle
                  : undefined
              }
            >
              Terms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                location.pathname === "/about" && isActive
                  ? activeStyle
                  : undefined
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        <div className={styles.user_nav_container}>
          <span>
            <NavLink
              to="/login"
              style={({ isActive }) =>
                location.pathname === "/login" && isActive
                  ? activeStyle
                  : undefined
              }
            >
              Login
            </NavLink>
          </span>
          <NavLink to="/signup">
            <button>GET STARTED</button>
          </NavLink>
        </div>
      </div>

      {/* END OF DESKTOP NAVBAR */}

      {/* ----------------------------------------------------------------------------------------------- */}

      {/* MOBILE NAVBAR */}

      <div
        className={[
          styles.mobile_nav_items,
          navShadow && styles.nav_shadow,
        ].join(" ")}
      >
        <div className={styles.mobile_logo_container}>
          <img src="images/logos/deski_01.svg" alt="" />
          <div
            style={{ marginRight: 15 }}
            className={styles.mobile_menu_btn}
            onChange={() =>
              mobileMenuVisible
                ? setMobileMenuVisible(false)
                : setMobileMenuVisible(true)
            }
          >
            <NavBtn />
          </div>
        </div>

        <Bounce when={mobileMenuVisible} collapse>
          <div style={{ backgroundColor: "white" }}>
            <ul className={styles.mobile_nav_items_list}>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    location.pathname === "/" && isActive
                      ? activeStyle
                      : undefined
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className={styles.mobile_sub_menu}>
                <Accordion className={styles.accordion} defaultActiveKey="0">
                  <Accordion.Item className={styles.accordion_item}>
                    <Accordion.Header className={styles.accordion_header}>
                      <span>Pages</span>
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordion_body}>
                      <ul>
                        <li>
                          <NavLink
                            to="/services"
                            style={({ isActive }) =>
                              location.pathname === "/services" && isActive
                                ? activeStyle
                                : undefined
                            }
                          >
                            Service
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/team"
                            style={({ isActive }) =>
                              location.pathname === "/team" && isActive
                                ? activeStyle
                                : undefined
                            }
                          >
                            Team
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/signup"
                            style={({ isActive }) =>
                              location.pathname === "/signup" && isActive
                                ? activeStyle
                                : undefined
                            }
                          >
                            Sign Up
                          </NavLink>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  style={({ isActive }) =>
                    location.pathname === "/pricing" && isActive
                      ? activeStyle
                      : undefined
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  style={({ isActive }) =>
                    location.pathname === "/terms" && isActive
                      ? activeStyle
                      : undefined
                  }
                >
                  Terms
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) =>
                    location.pathname === "/about" && isActive
                      ? activeStyle
                      : undefined
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>

            <div className={styles.mobile_user_nav_container}>
              <span>
                <NavLink
                  to="/login"
                  style={({ isActive }) =>
                    location.pathname === "/login" && isActive
                      ? activeStyle
                      : undefined
                  }
                >
                  Login
                </NavLink>
              </span>
              <NavLink to="/signup">
                <button>GET STARTED</button>
              </NavLink>
            </div>
          </div>
        </Bounce>
      </div>

      {/* END OF MOBILE NAVBAR */}
    </div>
  );
}

export default Navbar;
