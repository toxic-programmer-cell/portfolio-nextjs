'use client'
import React from 'react'
import { HeroParallax } from "@/components/ui/hero-parallax";
import demo from "../assets/demoImage.jpg"
import demo2 from "../assets/demo2.jpg"
import demo3 from "../assets/demo3.jpg"
import demo4 from "../assets/demo4.jpg"
import demo5 from "../assets/demo5.jpg"
import demo6 from "../assets/demo6.jpg"
import demo7 from "../assets/demo7.jpg"
import demo8 from "../assets/demo8.jpg"
import demo9 from "../assets/demo9.jpg"

export function HeroSection() {
    return <HeroParallax products={products} />;
}

export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        demo3,
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: demo2,
    },
    {
      title: "Rogue",
      link: "#",
      thumbnail: demo,
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        demo4,
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        demo5,
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        demo6,
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        demo7,
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        demo8,
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        demo9,
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

