import React from "react";

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <video className="h-full w-full object-cover" autoPlay={true} playsInline={true} loop muted preload="auto">
                <source src="https://ease-one.vercel.app/bg/something.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default HeroBackground;
