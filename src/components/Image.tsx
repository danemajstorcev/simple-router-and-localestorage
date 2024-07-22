import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface ImageProps {
  id: string;
  img: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

const Image = ({ img, id, onFavoriteToggle }: ImageProps) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFavorite = favorites.some((fav: ImageProps) => fav.id === id);
    setFavorite(isFavorite);
  }, [id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedFavorite = !favorite;
    setFavorite(updatedFavorite);

    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (updatedFavorite) {
      if (!favorites.some((fav: ImageProps) => fav.id === id)) {
        favorites.push({ id, img, isFavorite: updatedFavorite });
      }
    } else {
      favorites = favorites.filter((fav: ImageProps) => fav.id !== id);
      if (onFavoriteToggle) {
        onFavoriteToggle(id);
      }
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="Image">
      <Link to={`${id}`}>
        <img src={img} alt="" />
      </Link>
      <i 
        className={`fa-heart ${favorite ? "fas" : "far"}`} 
        onClick={handleFavoriteClick}
      ></i>
    </div>
  );
};

export default Image;
