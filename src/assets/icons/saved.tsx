import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): React.ReactElement => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      strokeWidth={1.5}
      fill={props.fill}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.5 18.864V8.076a4.356 4.356 0 0 0-3.492-4.278 15.343 15.343 0 0 0-6.016 0A4.356 4.356 0 0 0 5.5 8.076v10.788c0 1.262 1.363 2.047 2.446 1.41l2.96-1.742a2.157 2.157 0 0 1 2.189 0l2.959 1.742c1.083.637 2.446-.148 2.446-1.41Z"
    />
  </Svg>
);

export default SvgComponent;
