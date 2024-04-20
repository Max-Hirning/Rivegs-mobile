import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): React.ReactElement => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.fill}
      d="M17.88 18.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM9.48 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM17.88 5.4a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
    />
    <Path
      strokeWidth={1.5}
      stroke={props.color}
      strokeLinecap="round"
      d="M18.48 18.537H21M4.68 12 3 12.044M4.68 12a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 0 0-4.8 0Zm5.489.044H21m-8.199-6.493H3m18 0h-2.52M3 18.537h9.801m5.079.063a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Zm0-13.2a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
    />
  </Svg>
);

export default SvgComponent;
