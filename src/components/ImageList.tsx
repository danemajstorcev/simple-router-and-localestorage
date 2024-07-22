import Image from "./Image";

interface ImageListProps {
  images: { id: string; url: string; isFavorite?: boolean }[];
}

const ImageList = ({ images }: ImageListProps) => {
  return (
    <div className="Imagelist">
      {images.map((image, index) => (
        <Image
          key={index}
          id={image.id}
          img={image.url}
          isFavorite={image.isFavorite}
        />
      ))}
    </div>
  );
};

export default ImageList;
