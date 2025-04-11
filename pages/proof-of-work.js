"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Header } from "../components/Header";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function Image({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen snap-start flex justify-center items-center relative">
      <div ref={ref} className="m-5 bg-gray-100 overflow-hidden">
        <img
          className="w-[300px] md:w-[700px] h-[400px] rounded-md"
          src={item.image}
          alt={item.title}
        />
      </div>
      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="absolute top-[calc(50%-120px)] md:top-1/2 left-[calc(50%-10px)] md:left-[calc(50%+60px)] block"
      >
        <h2 className="inline-block m-0 font-mono font-azaret text-[#4ff0b7] text-5xl font-bold tracking-[-3px] leading-[1.2] w-full">
          {item.title}
        </h2>
        <p className="inline-block m-0 w-48 md:w-[500px] font-mono font-azaret tracking-[-3px] leading-[1.2]">
          {item.content}
        </p>
      </motion.div>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const xRaw = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);
  const x = useSpring(xRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageData = [
    {
      id: 1,
      year: 2020,
      image: "/photos/cityscape/1.jpg",
      title: "#001",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      year: 2021,
      image: "/photos/cityscape/2.jpg",
      title: "#002",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      year: 2022,
      image: "/photos/cityscape/3.jpg",
      title: "#003",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      year: 2023,
      image: "/photos/cityscape/4.jpg",
      title: "#004",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      year: 2024,
      image: "/photos/cityscape/5.jpg",
      title: "#005",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <>
      <Header fixed={true} />
      <div>
        {imageData.map((item) => (
          <Image key={item.id} item={item} />
        ))}
        <div className="flex fixed left-0 right-0 bottom-[50px] bg-gray-50 h-8 items-center">
          {/* <motion.div
            className="h-2 rounded bg-[#4ff0b7] fixed left-0 right-0"
            style={{ scaleX, transformOrigin: "left" }}
          /> */}
          <motion.div
            style={{ x }}
            className="relative ml-2 font-mono text-sm text-black w-full"
          >
            Move
          </motion.div>
        </div>
      </div>
    </>
  );
}
