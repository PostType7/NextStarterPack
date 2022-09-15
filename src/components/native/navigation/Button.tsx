import { mixClass } from "helpers/P7mixClass";
import { HStack } from "../layout";

interface Props {
  bgColor?: string;
  icon?: any;
  className?: string;
  text?: string;
  href?: string;
  onClick?: any;
}
export const Button: React.FC<Props> = ({
  className = "",
  bgColor = "link-primary",
  icon,
  text,
  href,
  onClick,
  children,
}) => {
  return (
    <button className="w-max rounded shadow-md inline-block px-6 py-3.5 bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
      <HStack justify="left" spacing="sm">
        {icon ? icon : null} <span>{children}</span>
      </HStack>
    </button>
  );
};
