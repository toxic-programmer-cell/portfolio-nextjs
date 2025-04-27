'use client'
import React from 'react'
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/aboutMeutils/cn";

function AboutSection() {
    return (
        <div>
            <div style={{background: "rgb(8, 8, 9)"}} className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
                <div style={{background: "rgb(12, 13, 15)"}} className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                   <strong>Building the Digital Future</strong>
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                Web development is the cornerstone of the modern internet, <br /> enabling the creation of websites, applications, and digital experiences <br /> that power businesses and connect people.</p>
                <blockquote className="mt-4 text-neutral-400 italic text-lg relative z-20">
                "A well-designed website can elevate your brand, grow your business, and connect you with the right audience."
                </blockquote>
                <div className="mt-6 relative z-20 flex flex-col items-center">
                    <a 
                        href="mailto:your.email@example.com" 
                        className="bg-white text-black px-6 py-2 rounded-md shadow-md hover:bg-neutral-200 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
