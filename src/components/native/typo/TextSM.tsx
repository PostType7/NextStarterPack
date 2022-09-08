import { blastClass, textColorConditions, widthConditions } from "helpers/pureblast";

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
      className={blastClass({
        'text-sm':true,
        [className]: true,
        ...textColorConditions(color),
        ...widthConditions(width),
      })}
    >
      {children}
    </p>
  );
};
