import { blastClass, textColorConditions, widthConditions } from "helpers/pureblast";

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
      className={blastClass({
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
