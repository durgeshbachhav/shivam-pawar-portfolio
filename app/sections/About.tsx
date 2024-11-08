import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Shivam Pawar."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody text="I am passionate about video editing and have honed my skills in crafting compelling visual narratives. My proficiency in tools like Adobe Premiere Pro and After Effects allows me to bring stories to life through dynamic editing techniques." />

                        <AnimatedBody
                            delay={0.1}
                            text="Creativity drives my work, and I constantly seek inspiration from various sources, whether it's art, music, or film. I believe that every project is an opportunity to push the boundaries of my creativity and deliver something truly unique." 
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Currently, I'm working on several projects that challenge my skills and allow me to explore new editing styles. I am always eager to collaborate and explore new opportunities that allow me to grow and learn in this ever-evolving field."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
