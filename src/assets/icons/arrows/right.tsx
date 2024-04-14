import React, {ReactElement} from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.89 5.228a.811.811 0 0 0 .003 1.096l4.62 4.901H4.726l-.098.007C4.274 11.283 4 11.608 4 12c0 .428.326.775.727.775h12.784l-4.618 4.9-.07.088a.813.813 0 0 0 .068 1.009.696.696 0 0 0 1.028.002l5.85-6.207a.795.795 0 0 0 .23-.538.8.8 0 0 0-.213-.579l-5.867-6.224-.082-.075a.695.695 0 0 0-.946.077Z"
    />
  </Svg>
);

export default SvgComponent;
