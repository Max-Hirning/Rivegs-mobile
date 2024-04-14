import React, {ReactElement} from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.386 5.388a1.387 1.387 0 1 0-2.772 0v5.224H5.386a1.387 1.387 0 0 0 0 2.775h5.228v5.226a1.387 1.387 0 1 0 2.772 0v-5.226h5.228a1.387 1.387 0 0 0 0-2.775h-5.228V5.388Z"
    />
  </Svg>
);

export default SvgComponent;
