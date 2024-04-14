import React, {ReactElement} from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.18 4c-.974 0-1.84.154-2.434.748C4.153 5.342 4 6.211 4 7.186c0 .975.153 1.844.747 2.438.593.595 1.46.748 2.432.748s1.839-.153 2.432-.748c.593-.594.746-1.463.746-2.438 0-.975-.153-1.843-.746-2.438C9.018 4.154 8.151 4 7.179 4ZM5.372 7.186c0-.898.158-1.278.344-1.464.186-.187.566-.345 1.462-.345s1.275.158 1.461.345c.186.186.344.566.344 1.464 0 .899-.158 1.279-.344 1.465-.186.186-.565.345-1.46.345-.898 0-1.277-.159-1.463-.345-.185-.186-.344-.566-.344-1.465Zm7.33.001c0-.38.306-.688.686-.688h5.924a.687.687 0 0 1 0 1.376H13.39a.687.687 0 0 1-.687-.688Zm4.119 6.44c-.972 0-1.84.154-2.432.748-.593.595-.746 1.464-.746 2.439 0 .975.153 1.844.746 2.438.593.594 1.46.748 2.432.748s1.839-.154 2.432-.748S20 17.79 20 16.814c0-.975-.153-1.844-.746-2.439-.593-.594-1.46-.747-2.432-.747Zm-1.805 3.187c0-.899.158-1.279.344-1.465.185-.186.565-.345 1.46-.345.897 0 1.276.159 1.462.345.185.186.344.566.344 1.465 0 .898-.159 1.278-.344 1.465-.186.186-.565.344-1.461.344-.896 0-1.275-.158-1.461-.344-.186-.187-.344-.567-.344-1.465Zm-10.33-.69a.687.687 0 0 0 0 1.377h5.925a.687.687 0 0 0 0-1.377H4.687Z"
    />
  </Svg>
);

export default SvgComponent;