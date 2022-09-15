import {
  mixClass,
  textColorConditions,
  widthConditions,
} from "helpers/P7mixClass";

interface Props {
  color?: string;
  width?: string;
  className?: string;
}
export const TextSM: React.FC<Props> = ({
  className = "",
  color = "primary",
  width = "",
  children,
}) => {
  return (
    <p
      className={mixClass({
        "text-sm": true,
        [className]: true,
        ...textColorConditions(color),
        ...widthConditions(width),
      })}
    >
      {children}
    </p>
  );
};
