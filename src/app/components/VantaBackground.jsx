'use client'

import { useState, useEffect, useRef } from "react";
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export default function VantaBackground() {

    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    color: 0x6C63FF,
                    backgroundColor: 0x0,
                    points: 10,
                })
            );
        }
        return () => vantaEffect?.destroy();
    }, [vantaEffect]);

    return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full"></div>
}