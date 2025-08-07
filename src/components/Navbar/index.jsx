import { useEffect, useState } from "react";
import { Hamburger } from "lucide-react";

import "./style.css";

export function Navbar() {
  const [active, setActive] = useState(false);
  const [navTop, setNavTop] = useState(true);

  const links = [
    {
      name: "Get Ecosystem",
      href: "https://github.com/GraphScript-Labs/installer/releases",
    },
    {
      sep: true,
    },
    {
      name: "GSAM Compiler",
      href: "https://github.com/GraphScript-Labs/gsam-compiler",
    },
    {
      sep: true,
    },
    {
      name: "Online Editor",
      href: "https://graphscript-labs.github.io/editor",
    },
    {
      sep: true,
    },
    {
      name: "Documentation",
      href: "https://graphscript-labs.github.io/docs",
    },
    {
      sep: true,
    },
    {
      name: "Open Source",
      href: "https://github.com/GraphScript-Labs",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const rootElement = document.getElementById("root");
      setNavTop(rootElement.scrollTop === 0);
    };
    
    const rootElement = document.getElementById("root");
    rootElement.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      rootElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (<>
    <div
      className={[
        "navbar",
        navTop ? "nav-top" : "",
      ].join(" ")}
    >
      <div
        onClick={() => setActive(!active)}
        className={[
          "hamburger",
          active ? "active" : "",
        ].join(" ")}
      >
        <Hamburger className="hamburger-icon" />
      </div>

      <div className="nav-links">
        {links.map((link, index) => (link.sep
          ? <span className="nav-link-sep" key={`sep-${index}`} />
          : <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
        ))}
      </div>
    </div>
  </>);
}

