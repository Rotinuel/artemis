'use client';
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if(window.innerWidth <= 768 ){
      if(cursorRef.current) cursorRef.current.style.display ='none';
      if(followerRef.current) followerRef.current.style.display ='none';
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      cursor.style.opacity = '1';
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      setTimeout(() => {
        follower.style.opacity = '0.2';
        follower.style.left = `${x}px`;
        follower.style.top = `${y}px`;
      }, 100);
    };

    const handleLinkHover = (active) => {
      if (active) {
        follower.classList.add('scale-[2.4]');
      } else {
        follower.classList.remove('scale-[2.4]');
      }
    };

    const handleIframeHover = (hide) => {
      if (hide) {
        cursor.classList.add('hidden');
        follower.classList.add('hidden');
      } else {
        cursor.classList.remove('hidden');
        follower.classList.remove('hidden');
      }
    };

    document.addEventListener('mousemove', moveCursor);

    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', () => handleLinkHover(true));
      link.addEventListener('mouseleave', () => handleLinkHover(false));
    });

    document.querySelectorAll('iframe').forEach((iframe) => {
      iframe.addEventListener('mouseenter', () => handleIframeHover(true));
      iframe.addEventListener('mouseleave', () => handleIframeHover(false));
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('mouseenter', () => handleLinkHover(true));
        link.removeEventListener('mouseleave', () => handleLinkHover(false));
      });
      document.querySelectorAll('iframe').forEach((iframe) => {
        iframe.removeEventListener('mouseenter', () => handleIframeHover(true));
        iframe.removeEventListener('mouseleave', () => handleIframeHover(false));
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-[10px] h-[10px] bg-aGreen rounded-full z-[1001] pointer-events-none opacity-0 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        ref={followerRef}
        className="fixed w-[40px] h-[40px] bg-aGreen rounded-full z-[1000] pointer-events-none opacity-0 transition-transform duration-500 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
};

export default CustomCursor;
