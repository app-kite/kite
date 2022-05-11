import { useRef, useState, useEffect, MutableRefObject } from 'react';

export const useIntersection = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elemRef = useRef(null) as MutableRefObject<any>;

  const setElem = (elem: any) => {
    elemRef.current = elem;
  };

  useEffect(() => {
    if (!elemRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elemRef.current) {
      observer.observe(elemRef.current);
    }

    return () => {
      observer.unobserve(elemRef.current);
    };
  }, []);

  return [isIntersecting, setElem];
};
