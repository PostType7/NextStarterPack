import { mixClass, textColorConditions, widthConditions } from "helpers/PT7mixClass";
import { TextMD, TextSM } from ".";

interface Props {
  title?: string;
  subTitle?: string;
  className?: string;
  width?: string;
}
export const TextCell: React.FC<Props> = ({ title, subTitle, className = "", width="" }) => {
  return (
    <div className={mixClass({
      '':true,
      [className]: true,
      ...widthConditions(width),
    })}>
      <TextMD>{title}</TextMD>
      <TextSM color="light">{subTitle}</TextSM>
    </div>
  );
};
