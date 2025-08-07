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

          <div className="brand-name">
            GraphScript
          </div>
          
          <div className="slogan">
            It's about Logic not Syntax
          </div>
        </div>
      </div>
    </div>
  </>);
}
