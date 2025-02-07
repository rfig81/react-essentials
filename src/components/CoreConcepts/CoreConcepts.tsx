import "./CoreConcepts.css";
import { CoreConceptProps } from "../../types";

const CoreConcepts: React.FC<CoreConceptProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcepts;
