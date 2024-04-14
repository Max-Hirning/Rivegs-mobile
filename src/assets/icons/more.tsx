import React, {ReactElement} from "react";
import Svg, {SvgProps, G, Path, Defs, ClipPath} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
