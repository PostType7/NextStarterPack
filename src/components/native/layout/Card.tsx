import {
  mixClass,
  gapConditions,
  paddingConditions,
  widthConditions,
  bgColorConditions,
  paddingxConditions,
  paddingyConditions,
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
            "border-b p-4": true,
          })}
        >
          {header}
        </div>
      ) : null}
      <div
        className={mixClass({
          "px-4": spacing != "none",
          "flex items-center": horizontal,
          ...paddingyConditions(spacing),
          ...gapConditions(spacing),
        })}
      >
        {children}
      </div>
      {footer ? (
        <div
          className={mixClass({
            "border-t p-4": true,
          })}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
};
