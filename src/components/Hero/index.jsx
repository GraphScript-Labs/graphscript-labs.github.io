import {
  Drill,
  FolderGit2,
  LibraryBig,
  ToolCase,
  Trees,
} from "lucide-react";

import { HeroCard } from "@components/HeroCard";

import Logo from "@assets/GraphScript.png";
import "./style.css";

export function Hero() {
  const actions = [
    {
      name: "Get Ecosystem",
      icon: Trees,
      href: "https://github.com/GraphScript-Labs/installer/releases",
    },
    {
      name: "GSAM Compiler",
      icon: Drill,
      href: "https://github.com/GraphScript-Labs/gsam-compiler",
    },
    {
      name: "Online Editor",
      icon: ToolCase,
      href: "https://graphscript-labs.github.io/editor",
    },
    {
      name: "Documentation",
      icon: LibraryBig,
      href: "https://graphscript-labs.github.io/docs",
    },
    {
      name: "Open Source",
      icon: FolderGit2,
      href: "https://github.com/GraphScript-Labs",
    },
  ];

  return (<>
    <div className="hero">
      <div className="content">
        <div className="brand">
          <div className="brand-logo">
            <img src={Logo} alt="GraphScript Logo" />
          </div>
          <div className="brand-name">GraphScript</div>
        </div>
        <div className="slogan">
          It's about Logic not Syntax
        </div>
      </div>
      <div className="actions">
        {
          actions.map((action, index) => <HeroCard
              key={index}
              {...action}
            />
          )
        }
      </div>
    </div>
  </>);
}
