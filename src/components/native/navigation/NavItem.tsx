import { mixClass, textColorConditions, textHoverColorConditions } from "helpers/PT7mixClass";
import { HStack } from "../layout";
import Link from "next/link";

interface Props {
  color?: string;
  icon?: any;
  className?: string;
  text?: string;
  href?: string;
}
export const NavItem: React.FC<Props> = ({
  className = "",
  color = "link-primary",
  icon,
  text,
  href,
}) => {
  return (
    <Link href={href ? href : "/"}>
      <a
        className={mixClass({
          "cursor-pointer": true,
          [className]: true,
          ...textColorConditions(color),
          ...textHoverColorConditions(color),
        })}
      >
        <HStack spacing="sm">
          {icon ? icon : null} <span>{text}</span>
        </HStack>
      </a>
    </Link>
  );
};

