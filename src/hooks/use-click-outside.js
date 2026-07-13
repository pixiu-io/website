import { useEffect } from 'react';

// Call a callback when a click/touch happens outside the given refs
// refs: array of React ref objects
// callback: function called on outside click
const useClickOutside = (refs, callback) => {
  useEffect(() => {
    if (!refs || refs.length === 0) return;

    const handleClick = (event) => {
      const isInside = refs.some(
        (ref) => ref && ref.current && ref.current.contains(event.target)
      );
      if (!isInside) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [refs, callback]);
};

export default useClickOutside;
