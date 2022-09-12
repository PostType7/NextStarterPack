import { mixClass, textColorConditions, widthConditions } from "helpers/PT7mixClass";

interface Props {
  color?: string;
  width?: string;
  className?: string;
}
export const TextMD: React.FC<Props> = ({
  className = "",
  color = "primary",
  width = "",
  children,
}) => {
  return (
    <p
      className={mixClass({
        'text-base':true,
        [className]: true,
        ...textColorConditions(color),
        ...widthConditions(width),
      })}
    >
      {children}
    </p>
  );
};
