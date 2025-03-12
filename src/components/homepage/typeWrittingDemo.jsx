"use client";
import { TypewriterEffectSmooth } from "../../ui/typewritterEffect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: ' "AI ',
    },
    //AI That Plans Your Project, Estimates Costs,
    //and Assigns the Best Talent
    {
      text: "That",
    },
    {
      text: "Plans",
    },
    {
      text: "Your",
    },
    {
      text: "Project",
    },
    {
      text: "&",
    },
    {
      text: "Estimates",
    },
    {
      text: 'Costs."',
    },
  ];
  const nextLineWord = [
    {
      text: "and",
    },
    {
      text: "Assigns",
    },
    {
      text: "the",
    },
    {
      text: "Best",
    },
    {
      text: 'Talent." ',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      {/* <TypewriterEffectSmooth words={nextLineWord} /> */}
    </div>
  );
}
