import { useEffect, useRef, useState } from 'react';

// Measure an element's bounding rect and provide a placeholder height
// Returns [rect, placeholder] where rect is a DOMRect-like object
// and placeholder is the height used to avoid layout shift
const useElementRect = () => {
  const ref = useRef(null);
  const [rect, setRect] = useState(null);
  const [placeholder, setPlaceholder] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const measure = () => {
      const newRect = ref.current.getBoundingClientRect();
      setRect(newRect);
      setPlaceholder(newRect.height);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [rect, placeholder, ref];
};

export default useElementRect;
