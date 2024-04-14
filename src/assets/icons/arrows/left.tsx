import React, {ReactElement} from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.11 5.228a.811.811 0 0 1-.003 1.096l-4.619 4.901h12.785l.098.007c.355.051.629.376.629.768 0 .428-.326.775-.727.775H6.489l4.618 4.9.07.088a.813.813 0 0 1-.068 1.009.696.696 0 0 1-1.028.002l-5.85-6.207a.795.795 0 0 1-.23-.538.8.8 0 0 1 .213-.579l5.867-6.224.082-.075a.695.695 0 0 1 .946.077Z"
    />
  </Svg>
);

export default SvgComponent;
