import { Link } from "react-router-dom";
import { FAVOURITES, HOME } from "../routes";

const Header = () => {
  return (
    <div className="header">
      <Link to={HOME} className="home">
        All images
      </Link>
      <Link to={FAVOURITES}>
        <i className="fas fa-heart"></i>
      </Link>
    </div>
  );
};

export default Header;
