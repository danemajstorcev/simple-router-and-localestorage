import { useParams } from "react-router-dom";
interface ImageDetailPageProps {
  images: { id: string; url: string; isFavorite?: boolean }[];
}
const ImageDetail = ({ images }: ImageDetailPageProps) => {
  const { id } = useParams();
  const image = images.find((img) => img.id === id);

  return (
    <div className="ImageDetailPage">
      <img src={image?.url} alt="" />
    </div>
  );
};

export default ImageDetail;
