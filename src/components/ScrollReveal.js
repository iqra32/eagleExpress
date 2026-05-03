import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

/**
 * Fade + slide-up when element enters the viewport (Intersection Observer).
 */
function ScrollReveal({ children, className = '', delay = 0, disabled = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (disabled) {
      setVisible(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [disabled]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visible ? ' scroll-reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
