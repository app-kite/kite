import { useRef, useState, useEffect, MutableRefObject } from 'react';

export const useIntersection = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elemRef = useRef(null) as MutableRefObject<any>;

  const setElem = (elem: any) => {
    elemRef.current = elem;
  };

  const hasCurrent = () => !!elemRef.current;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (hasCurrent()) {
      observer.observe(elemRef.current);
    }

    return () => {
      if (hasCurrent()) {
        observer.unobserve(elemRef.current);
      }
    };
  }, []);

  return [isIntersecting, setElem] as const;
};
