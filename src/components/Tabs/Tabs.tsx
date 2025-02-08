interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  ButtonsContainer?: React.ElementType;
  buttons: React.ReactNode;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({
  ButtonsContainer = "menu",
  buttons,
  children,
}) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
