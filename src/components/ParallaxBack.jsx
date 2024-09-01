import {useEffect, useRef} from "react";

export function ParallaxBack({image}) {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                parallaxRef.current.style.backgroundPositionY = `${window.scrollY * -0.5}px`; // Adjust multiplier for effect
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div ref={parallaxRef} className="parallax" style={{backgroundImage: `url(${image})`}}></div>
        </>
    )
}
