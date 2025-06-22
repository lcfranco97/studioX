'use client' // Adicione esta linha no topo

import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollTo = useCallback((id) => {
    if (typeof window !== 'undefined') { // Verifica se está no client-side
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, []);

  return scrollTo;
};