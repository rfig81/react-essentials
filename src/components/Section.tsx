interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
