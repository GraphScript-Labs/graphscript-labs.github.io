import { MoveUpRight } from "lucide-react";
import "./style.css";

export function HeroCard({ name, icon }) {
  const CardIcon = icon;

  return (<>
    <div className="hero-card">
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
