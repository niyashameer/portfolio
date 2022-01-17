import React from "react";
import Button from "../../shared/component/Button";
import SvgRenderer from "../../shared/component/svgRenderer";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="flex flex-row items-center h-screen">
        <div className="realtive w-2/6 flex flex-col justify-around h-1/4 items-center px-14">
          <h1 className="font-[SF_Pro_Display_Regular] font-bold text-5xl">
            Hey, I'm Niya Shameer
          </h1>
          <p className="text-retro text-lg">
            You’ll find me squeaking at something exciting that I saw or read
            about
          </p>
          <div className="w-1/4">
            <Button
              text="Resume"
            />
          </div>
        </div>
        <div className="w-[47%] absolute bottom-0 right-10">
          <SvgRenderer
            filePath="/assets/vectors/hero.png"
            widthClassProperties="w-full"
          />
        </div>
      </div>
    </div>
  );
}
