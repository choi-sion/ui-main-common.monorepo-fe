import { SVGProps } from "react";
const NoticeArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={8}
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7267 7.46221C11.359 7.84259 10.7592 7.84639 10.3869 7.4707L5.94534 2.9881L1.62145 7.46216C1.25381 7.84257 0.65398 7.84641 0.281695 7.47075C-0.0905897 7.09508 -0.0943542 6.48216 0.273288 6.10175L5.92862 0.25L11.7184 6.09321C12.0906 6.46891 12.0943 7.08183 11.7267 7.46221Z"
      fill="#000"
    />
  </svg>
);
export default NoticeArrowSvg;
