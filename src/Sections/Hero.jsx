import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    // console.log("Responsive sizes:", sizes);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Harsika
                    <span className="waving-hand">👋🏻</span></p>
                <p className="hero_tag text-gray_gradient">
                    Building Products & Brands
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Environment preset="city"/>
                    <OrbitControls enableZoom={false}/>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />

                        <HackerRoom
                            position={sizes.deskPosition}
                            scale={[sizes.deskScale, sizes.deskScale, sizes.deskScale]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />

                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}
export default Hero
