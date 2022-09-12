import {
  mixClass,
  gapConditions,
  justifyConditions,
  paddingConditions,
} from "helpers/PT7mixClass";

interface Props {
  spacing?: string;
  justify?: string;
  className?: string;
  padding?: string;
}
export const HStack: React.FC<Props> = ({
  className = "",
  spacing = "md",
  justify = "between",
  children,
  padding = "",
}) => {
  return (
    <div
      className={mixClass({
        "flex items-center": true,
        [className]: true,
        ...justifyConditions(justify),
        ...gapConditions(spacing),
        ...paddingConditions(padding),
      })}
    >
      {children}
    </div>
  );
};
// export default HStack;
