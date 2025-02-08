import Section from "../Section";
import { CORE_CONCEPTS } from "../../data";
import "./CoreConcepts.css";

type CoreConceptProps = {
  image: string;
  title: string;
  description: string;
};

const CoreConcepts = () => {
  const Concept: React.FC<CoreConceptProps> = ({
    image,
    title,
    description,
  }) => (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );

  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((concept: CoreConceptProps, i: number) => (
          <Concept key={i} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
