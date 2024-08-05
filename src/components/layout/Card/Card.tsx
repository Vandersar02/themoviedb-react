import "./Card.css";
import Stars from "../../../assets/stars.svg";

interface CardProps {
  image: string;
  rating: number;
}
const Card = ({ image, rating }: CardProps) => {
  return (
    <div className="poster-container">
      <img
        src={image}
        alt="Nope Movie Poster"
        className="img-fluid"
        style={{ borderRadius: "20px", maxWidth: "100%", maxHeight: "600px" }}
      />
      <div className="rating-overlay">
        <span className="badge badge-warning">
          <img src={Stars} alt="Stars" />
          {rating}
        </span>
      </div>
    </div>
  );
};

export default Card;
