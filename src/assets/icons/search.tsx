import React, {ReactElement} from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.08 11.431c0-4.08 3.382-7.387 7.552-7.387 4.171 0 7.552 3.307 7.552 7.388 0 4.08-3.38 7.387-7.552 7.387-4.17 0-7.552-3.307-7.552-7.387ZM11.632 2.4C6.533 2.4 2.4 6.444 2.4 11.431c0 4.988 4.133 9.032 9.232 9.032 2.136 0 4.103-.71 5.667-1.9l2.867 2.797c.329.32.86.32 1.189-.002a.81.81 0 0 0-.002-1.162l-2.826-2.758a8.887 8.887 0 0 0 2.338-6.006c0-4.988-4.134-9.032-9.233-9.032Z"
    />
  </Svg>
);

export default SvgComponent;
