import {
  blastClass, roundedConditions,
} from "helpers/pureblast";

interface Props {
  size?: string;
  rounded?: string;
  className?: string;
}
export const Image: React.FC<Props> = ({
  className = '',
  size = "md",
  rounded = "full",
}) => {
  return (
    <div
      className={blastClass({
        'w-12 h-12 bg-red-200 flex items-center justify-center': true,
        ...roundedConditions(rounded),
        [className]: true,
      })}
    >
      IMG
    </div>
  );
};
// export default Image;
