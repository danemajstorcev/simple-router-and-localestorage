import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { API_URL, FAVOURITES, HOME } from "./routes";
import ImageList from "./components/ImageList";
import Favorites from "./components/Favorites";
import ImageDetail from "./components/ImageDetail";
import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  console.log("Rendering App Component");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={HOME} element={<ImageList images={images} />} />
        <Route path={FAVOURITES} element={<Favorites />} />
        <Route path="/:id" element={<ImageDetail images={images} />} />
      </Routes>
    </div>
  );
}

export default App;
