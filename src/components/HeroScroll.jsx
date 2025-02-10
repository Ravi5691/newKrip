import React from "react";
import { ContainerScroll } from "../ui/containerScroll";
import { cn } from "../../libs/utiles";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <h1 className={cn("text-4xl font-semibold", "text-white")}>
            Make your dreams a reality.
            <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Get started now
            </span>
          </h1>
        }
      >
        <img
          src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
          alt="hero"
          className={cn(
            "mx-auto rounded-2xl object-cover h-full object-left-top"
          )}
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
