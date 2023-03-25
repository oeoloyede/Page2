import { memo, SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_114_126)'>
      <rect y={0.478882} width={73.1733} height={43.3735} rx={20} fill='url(#paint0_linear_114_126)' />
      <path
        d='M37.064 7.71985L39.7582 17.3936H48.4767L41.4233 23.3723L44.1174 33.0461L37.064 27.0674L30.0106 33.0461L32.7047 23.3723L25.6513 17.3936H34.3698L37.064 7.71985Z'
        fill='#D9D9D9'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_114_126'
        x1={51.4923}
        y1={0.478881}
        x2={39.9525}
        y2={48.2648}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF00D6' />
        <stop offset={1} stopColor='#FF4D00' />
      </linearGradient>
      <clipPath id='clip0_114_126'>
        <rect width={73.1733} height={43.3735} fill='white' transform='translate(0 0.478882)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(UploadIcon);
export { Memo as UploadIcon };
