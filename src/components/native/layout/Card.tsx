import { blastClass, gapConditions, paddingConditions } from "helpers/pureblast";

interface Props {
  spacing?: string;
  className?: string;
  header?: any; // TODO NODE
  footer?: any; // TODO NODE
  horizontal?: boolean;
}
export const Card: React.FC<Props> = ({
  className = "",
  spacing = "md",
  horizontal = false,
  children,
  header,
  footer,
}) => {
  return (
    <div
      className={blastClass({
        "rounded shadow bg-white": true,
        [className]: true,
      })}
    >
      {header ? (
        <div
          className={blastClass({
            "border-b": true,
            ...paddingConditions(spacing),
          })}
        >
          {header}
        </div>
      ) : null}
      <div
        className={blastClass({
          'flex items-center': horizontal,
          ...paddingConditions(spacing),
          ...gapConditions(spacing),
          
        })}
      >
        {children}
      </div>
      {footer ? (
        <div
          className={blastClass({
            "border-t flex": true,
            ...paddingConditions(spacing),
          })}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
};
// export default HStack;
