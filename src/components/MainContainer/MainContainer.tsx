import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div
      className="
      py-3 
      px-3 
      flex 
      justify-center 
      bg-neutral 
      text-indigo-800 
      font-open-sans 
      font-semibold 
      border-spacing-0 
      "
    >
      {children}
    </div>
  );
};
