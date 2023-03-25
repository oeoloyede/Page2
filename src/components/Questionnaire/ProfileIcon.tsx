import { memo, SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.1294 21.1567C18.2479 21.1567 15.912 23.4926 15.912 26.3741V27.6784H26.3468V26.3741C26.3468 23.4926 24.0109 21.1567 21.1294 21.1567Z'
      stroke='black'
    />
    <ellipse cx={21.1295} cy={16.5915} rx={3.91307} ry={3.91304} stroke='black' strokeLinecap='square' />
  </svg>
);

const Memo = memo(ProfileIcon);
export { Memo as ProfileIcon };
