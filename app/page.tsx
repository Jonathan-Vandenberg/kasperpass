"use client";
import CategoriesIcons from "@/components/ui/categories-icons";
import Container from "@/components/ui/container";
import Image from "next/image";
import image from "public/latina.png";
import { useChat } from "ai/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main title="App" className="">
      <div className="h-full">
        <div className="relative w-full mx-auto pt-6">
          <span className="absolute bg-cyan-100 rounded-bl-full w-full h-[100px] -z-10 inset-0" />
        </div>

        <div className="relative flex items-center justify-center h-36 w-36 shrink-0 rounded-full mx-auto mt-4 overflow-visible">
          <Image
            src={image}
            width={500}
            height={500}
            className="z-20 rounded-full"
            alt="Picture of the author"
          />
        </div>
      </div>
      <Container>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-7">
            <div className="flex">
              {/* <div className="pr-2">
                <img
                  src="https://hatscripts.github.io/circle-flags/flags/za.svg"
                  width="40"
                ></img>
              </div> */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-start w-full leading-widest font-semibold">
                  Triana Sofía González
                </p>
                <p className="font-serif text-slate-500 text-sm text-start w-full">
                  0xa0b668fbeC004c410987687B53Bd6Bb7809E4Bb4
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <CategoriesIcons />
          </div>
        </div>
      </Container>
      <Container>
        <div>
          {messages.map((m) => (
            <div key={m.id}>
              {m.role}: {m.content}
            </div>
          ))}

          <form onSubmit={handleSubmit}>
            <input
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </Container>
    </main>
  );
}
