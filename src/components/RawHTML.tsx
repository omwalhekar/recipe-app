import React from 'react';
import DOMPurify from 'dompurify';

const RawHTMLComponent = ({ rawHTML }: any) => {
  const sanitizedHTML = DOMPurify.sanitize(rawHTML);

  return (
    <div
      className='raw-html'
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default RawHTMLComponent;
