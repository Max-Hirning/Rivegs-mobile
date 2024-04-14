import React, {ReactElement} from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const SvgComponent = (props: SvgProps): ReactElement => (
  <Svg fill="none" {...props}>
    <G fillRule="evenodd" clipRule="evenodd">
      <Path
        fill={props.fill}
        d="M11.996 2.514c-4.434 0-6.36 4.015-6.36 6.67 0 1.984.287 1.4-.811 3.82-1.341 3.448 4.051 4.858 7.171 4.858s8.512-1.41 7.172-4.858c-1.098-2.42-.81-1.836-.81-3.82 0-2.655-1.928-6.67-6.362-6.67Z"
      />
      <Path
        fill={props.color}
        d="M11.996 1.764c-2.474 0-4.274 1.133-5.436 2.63-1.143 1.474-1.675 3.305-1.675 4.79 0 .426.013.742.023.982l.006.14a2.5 2.5 0 0 1-.012.505c-.046.28-.189.623-.76 1.883a.72.72 0 0 0-.016.038c-.413 1.062-.321 2.04.17 2.868.468.79 1.256 1.372 2.107 1.797 1.702.85 3.953 1.215 5.593 1.215 1.64 0 3.89-.366 5.593-1.215.851-.425 1.639-1.007 2.107-1.797.491-.828.584-1.806.17-2.868a.671.671 0 0 0-.015-.038c-.572-1.26-.715-1.604-.76-1.884a2.504 2.504 0 0 1-.012-.505l.005-.139c.01-.24.023-.556.023-.982 0-1.485-.532-3.316-1.675-4.79-1.162-1.497-2.961-2.63-5.436-2.63Zm-5.61 7.42c0-1.17.43-2.673 1.36-3.87.91-1.175 2.29-2.05 4.25-2.05s3.34.875 4.25 2.05c.93 1.197 1.361 2.7 1.361 3.87a20.567 20.567 0 0 1-.027 1.065c-.01.266-.015.52.03.8.085.524.342 1.09.856 2.223l.01.022c.248.652.168 1.139-.07 1.541-.263.444-.767.861-1.487 1.22-1.438.718-3.444 1.057-4.923 1.057-1.48 0-3.485-.34-4.923-1.057-.72-.359-1.224-.776-1.487-1.22-.238-.402-.318-.889-.07-1.541l.01-.022c.515-1.133.772-1.7.856-2.222.046-.282.04-.535.03-.8l-.005-.15c-.01-.24-.022-.523-.022-.916Zm3.86 10.829a.75.75 0 0 0-1.12.999c1.609 1.8 4.15 1.776 5.739 0a.75.75 0 0 0-1.118-1c-.999 1.116-2.496 1.126-3.502 0Z"
      />
    </G>
  </Svg>
);

export default SvgComponent;
