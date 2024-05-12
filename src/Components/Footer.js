import React from "react";
function Footer() {
  return (
    <footer className='container mx-auto py-1 fixed bottom-0 md:left-20 '>
      <p className='text-xs text-center text-dark-content  w-full'>
        Designed and Coded by{' '}
        <a
          className='font-medium'
          href='https://abhihsek-patel.in'
          target='_blank'
          rel='noreferrer noopener'
        >
          Abhishek
        </a>{' '}
        {/* text-gradient */}
        <span className='font-medium'> Love</span> &
        <span className='font-medium'> Coffee</span>
      </p>
    </footer>
  );
}
export default Footer;
