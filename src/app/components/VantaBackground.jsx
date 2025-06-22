"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Importação correta do Three.js
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    // Verifica se THREE está disponível globalmente
    if (!window.THREE) {
      window.THREE = THREE;
    }
    setThreeLoaded(true);

    return () => {
      if (window.THREE === THREE) {
        delete window.THREE;
      }
    };
  }, []);

  useEffect(() => {
    if (!threeLoaded) return;

    const initVanta = () => {
      try {
        const effect = NET({
          el: vantaRef.current,
          THREE: window.THREE, // Usa THREE global
          color: 0x7e33c0,
          backgroundColor: 0x0,
          points: 12,
          maxDistance: 20,
          spacing: 15
        });
        setVantaEffect(effect);
      } catch (error) {
        console.error("Vanta initialization error:", error);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (e) {
          console.error("Vanta destroy error:", e);
        }
      }
    };
  }, [threeLoaded]);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full" />;
}