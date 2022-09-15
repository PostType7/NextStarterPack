import {
  mixClass,
  gapConditions,
  paddingConditions,
  widthConditions,
  bgColorConditions,
} from "helpers/P7mixClass";

interface Props {
  spacing?: string;
  width?: string;
  bgColor?: string;
  className?: string;
  header?: any; // TODO NODE
  footer?: any; // TODO NODE
  horizontal?: boolean;
}
export const Card: React.FC<Props> = ({
  className = "",
  spacing = "md",
  width = "",
  bgColor = "",
  horizontal = false,
  children,
  header,
  footer,
}) => {
  return (
    <div
      className={mixClass({
        "rounded shadow bg-white": true,
        [className]: true,
        ...widthConditions(width),
        ...bgColorConditions(bgColor),
      })}
    >
      {header ? (
        <div
          className={mixClass({
            "border-b": true,
            ...paddingConditions(spacing),
          })}
        >
          {header}
        </div>
      ) : null}
      <div
        className={mixClass({
          "flex items-center": horizontal,
          ...paddingConditions(spacing),
          ...gapConditions(spacing),
        })}
      >
        {children}
      </div>
      {footer ? (
        <div
          className={mixClass({
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
