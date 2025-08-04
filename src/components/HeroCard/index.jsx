import { MoveUpRight } from "lucide-react";
import "./style.css";

export function HeroCard({ name, icon, href }) {
  const CardIcon = icon;

  const openLink = () => {
    if (!href) return;
    location.href = href;
  };

  return (<>
    <div className="hero-card" onClick={openLink}>
      <div className="hero-card-icon-container">
        <CardIcon className="hero-card-icon" />
      </div>
      <div className="hero-card-text">
        <span className="hero-card-name">{name}</span>
        <MoveUpRight className="hero-card-link" />
      </div>
    </div>
  </>);
}
