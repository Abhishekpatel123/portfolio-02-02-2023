import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { resumePdf } from "../assets";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
        {/* button */}
        <a
          className="bg-slate-900 mt-2 py-4 w-32 flex justify-center items-center rounded-lg shadow-md"
          download={true}
          href={resumePdf}
        >
          <h4 className="text-white font-medium text-lg">Resume</h4>
        </a>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          // className="w-1/2 md:ml-auto animate-bounce"
          className="md:ml-auto animate-pulse  rounded-xl shadow-lg border-4 border-l-blue-400 border-b-blue-500 border-r-blue-600 border-t-blue-700"
          src={img}
          alt="Abhishek Patel"
        />
        {/* <div
          // className = "w-1/2 bg-slate-900 h-2 drop-shadow-2xl ml-auto rounded-lg"
          className=" bg-slate-900 h-2 drop-shadow-2xl ml-auto rounded-lg"
        /> */}
      </div>
    </main>
  );
}

export default Home;
