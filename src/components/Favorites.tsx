import  { useState, useEffect } from "react";
import Image, { ImageProps } from "./Image"; 

const Favorites = () => {
  const [favorites, setFavorites] = useState<ImageProps[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const handleFavoriteToggle = (id: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="Favorites">
      {favorites.map((fav) => (
        <Image 
          key={fav.id} 
          id={fav.id} 
          img={fav.img} 
          isFavorite={true}
          onFavoriteToggle={handleFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default Favorites;
