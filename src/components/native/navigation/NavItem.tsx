import {
  mixClass,
  textColorConditions,
  textHoverColorConditions,
  widthConditions,
} from "helpers/P7mixClass";
import { HStack } from "../layout";
import Link from "next/link";

interface Props {
  color?: string;
  icon?: any;
  className?: string;
  text?: string;
  href?: string;
  width?: string;
  onClick?: any;
}
export const NavItem: React.FC<Props> = ({
  className = "",
  color = "link-primary",
  width = "",
  icon,
  text,
  href,
  onClick,
  children,
}) => {
  return (
    <Link href={href ? href : "#"}>
      <a
        className={mixClass({
          "cursor-pointer": true,
          [className]: true,
          ...widthConditions(width),
          ...textColorConditions(color),
          ...textHoverColorConditions(color),
        })}
        onClick={onClick}
      >
        {text && (
          <HStack justify="left" spacing="sm">
            {icon ? icon : null} <span>{text}</span>
          </HStack>
        )}
        {children}
      </a>
    </Link>
  );
};
