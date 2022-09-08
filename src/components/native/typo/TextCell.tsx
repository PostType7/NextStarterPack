import { blastClass, textColorConditions, widthConditions } from "helpers/pureblast";
import { TextMD, TextSM } from ".";

interface Props {
  title?: string;
  subTitle?: string;
  className?: string;
  width?: string;
}
export const TextCell: React.FC<Props> = ({ title, subTitle, className = "", width="" }) => {
  return (
    <div className={blastClass({
      '':true,
      [className]: true,
      ...widthConditions(width),
    })}>
      <TextMD>{title}</TextMD>
      <TextSM color="light">{subTitle}</TextSM>
    </div>
  );
};
