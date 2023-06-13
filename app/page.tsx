import CategoriesIcons from "@/components/ui/categories-icons";
import Container from "@/components/ui/container";
import Image from "next/image";
import image from "public/latina.png";

export default function Page() {
  return (
    <main title="App" className="">
      <div className="h-full">
        <div className="relative w-full mx-auto pt-6">
          <span className="absolute bg-purple-100 rounded-bl-full w-full h-[100px] -z-10 inset-0" />
        </div>
        <div className="flex items-center justify-center h-36 w-36 shrink-0 overflow-hidden rounded-full mx-auto mt-4">
          <Image
            src={image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <Container>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-7">
            <div>
              <p className="text-2xl text-center w-full leading-widest font-semibold">
                Triana Sofía González
              </p>
              <p className="font-serif text-slate-500 text-sm text-center w-full">
                0xa0b668fbeC004c410987687B53Bd6Bb7809E4Bb4
              </p>
              {/* <img
                src="https://hatscripts.github.io/circle-flags/flags/sp.svg"
                width="100"
              ></img> */}
            </div>
          </div>
          <div className="pt-8">
            <CategoriesIcons />
          </div>
        </div>
      </Container>
    </main>
  );
}
