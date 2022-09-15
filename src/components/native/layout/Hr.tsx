import { mixClass } from "helpers/P7mixClass";

interface Props {
  className?: string;
}
export const Hr: React.FC<Props> = ({ className = "" }) => {
  return (
    <div
      className={mixClass({
        "border-t": true,
        [className]: true,
      })}
    ></div>
  );
};
// export default HStack;
