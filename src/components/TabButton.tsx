import { ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
};

const TabButton: React.FC<TabButtonProps> = ({
  children,
  onClick,
  isActive,
}) => {
  return (
    <li>
      <button className={isActive ? "active" : ""} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
