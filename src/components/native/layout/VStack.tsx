import {
  blastClass,
  gapConditions,
  justifyConditions,
} from "helpers/pureblast";

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
      className={blastClass({
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
