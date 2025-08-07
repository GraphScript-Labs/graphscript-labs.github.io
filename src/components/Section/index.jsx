import "./style.css";

export function Section({
  icon,
  name,
  children,
}) {
  return (<>
    <div className="section">
      <div className="section-icon">{icon}</div>

      <div className="section-content">
        <div className="section-name">
          {name}
        </div>

        <div className="section-description">
          {children}
        </div>
      </div>
    </div>
  </>);
}

