import { blastClass, textColorConditions } from "helpers/pureblast";

interface Props {
  color?: string;
  className?: string;
}
export const TextXL: React.FC<Props> = ({
  className = "",
  color = "primary",
  children,
}) => {
  return (
    <p
      className={blastClass({
        'text-xl':true,
        [className]: true,
        ...textColorConditions(color),
      })}
    >
      {children}
    </p>
  );
};
