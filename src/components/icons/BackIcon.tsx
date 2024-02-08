import React from 'react';

const BackIcon = () => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='40' height='40' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_50_201' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_50_201'
          width='90'
          height='90'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export default BackIcon;
