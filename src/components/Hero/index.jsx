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
        <HeroCard name="Get Ecosystem" icon={Trees} />
        <HeroCard name="GSAM Compiler" icon={Drill} />
        <HeroCard name="Online Editor" icon={ToolCase} />
        <HeroCard name="Documentation" icon={LibraryBig} />
        <HeroCard name="Source Code" icon={FolderGit2} />
      </div>
    </div>
  </>);
}
