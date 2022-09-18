
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HStack } from "../layout";


interface Props {
  className?: string;
  text?: string;
  onClick?: any;
}
export const Pagination: React.FC<Props> = ({
  className = "",
  text,
  onClick,
  children,
}) => {
  return (
    <HStack justify="left" spacing="sm">
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out"><FiChevronLeft/></div>
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out">1</div>
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out">2</div>
      <div className="px-3 py-1.5 shadow bg-white rounded">3</div>
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out">4</div>
      <div className="px-3 py-1.5 hover:bg-slate-100 hover:shadow cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out"><FiChevronRight/></div>
    </HStack>
  );
};
