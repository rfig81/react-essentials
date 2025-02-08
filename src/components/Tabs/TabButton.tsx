interface TabButtonProps extends React.HTMLAttributes<HTMLElement> {
  isActive: boolean;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  children,
  ...props
}) => {
  return (
    <li>
      <button className={`capitalize ${isActive ? "active" : ""}`} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
