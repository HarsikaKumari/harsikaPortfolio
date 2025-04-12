import React from 'react'
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress(); // ✅ Fixed the typo here

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span className="canvas-loader" />
            <p style={{ fontSize: 14, color: '#F1F1F1', fontWeight: 800, marginTop: 40 }}>
                {typeof progress === 'number' ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    );
};

export default CanvasLoader;
