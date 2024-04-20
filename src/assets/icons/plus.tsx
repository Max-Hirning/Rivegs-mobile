import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): React.ReactElement => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      strokeWidth={1.5}
      d="M8 12h8m-4-4v8"
      stroke={props.color}
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgComponent;
