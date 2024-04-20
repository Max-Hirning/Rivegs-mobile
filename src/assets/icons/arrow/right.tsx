import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): React.ReactElement => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      strokeWidth={1.5}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 12h11m0 0-4.588-4m4.588 4-4.588 4"
    />
  </Svg>
);
export default SvgComponent;
