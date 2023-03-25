import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.9418 22.1637L14.0129 21.0926V26.7348V26.7348V27.7348H26.0129V26.7348V26.7348V21.0926L27.0839 22.1637L27.791 21.4566L20.72 14.3855L20.0129 13.6784L19.3058 14.3855L12.2347 21.4566L12.9418 22.1637ZM15.0129 26.7348V20.0926L20.0129 15.0926L25.0129 20.0926V26.7348H22.0129V22.7348V21.7348H18.0129V22.7348V26.7348H15.0129ZM19.0129 22.7348V26.7348H21.0129V22.7348H19.0129Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
