import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconVideo: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5ZM15.71 12.89L10.71 15.43C10.5578 15.5067 10.3885 15.5432 10.2181 15.5361C10.0478 15.529 9.88216 15.4784 9.73688 15.3892C9.5916 15.3001 9.47153 15.1752 9.38806 15.0266C9.3046 14.878 9.26052 14.7105 9.26 14.54V9.46C9.26052 9.28954 9.3046 9.12203 9.38806 8.9734C9.47153 8.82477 9.5916 8.69994 9.73688 8.61076C9.88216 8.52159 10.0478 8.47104 10.2181 8.4639C10.3885 8.45677 10.5578 8.49329 10.71 8.57L15.71 11.11C15.8738 11.1939 16.0113 11.3214 16.1073 11.4784C16.2032 11.6355 16.254 11.816 16.254 12C16.254 12.184 16.2032 12.3645 16.1073 12.5216C16.0113 12.6786 15.8738 12.8061 15.71 12.89Z"
      fill={fill}
    />
  </svg>
);

IconVideo.defaultProps = {
  ...iconDefaultProps,
};

export default IconVideo;