import React, {ReactElement} from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.51 10.71a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM12 21C9.1 21 4.5 15.959 4.5 10.599 4.5 6.402 7.857 3 12 3c4.142 0 7.5 3.402 7.5 7.599C19.5 15.959 14.899 21 12 21Z"
    />
  </Svg>
);

export default SvgComponent;
