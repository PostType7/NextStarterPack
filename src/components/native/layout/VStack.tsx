import {
  mixClass,
  gapConditions,
  justifyConditions,
} from "helpers/PT7mixClass";

interface Props {
  spacing?: string;
  justify?: string;
  className?: string;
}
export const VStack: React.FC<Props> = ({
  className = '',
  spacing = "md",
  justify = "between",
  children,
}) => {
  return (
    <div
      className={mixClass({
        'flex flex-col': true,
        [className]: true,
        ...justifyConditions(justify),
        ...gapConditions(spacing),
      })}
    >
      {children}
    </div>
  );
};
// export default VStack;
