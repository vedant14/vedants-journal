import Image from "next/image";
import image1 from "../public/photos/image-1.jpg";
import image2 from "../public/photos/image-2.jpg";
import image3 from "../public/photos/image-3.jpg";
import image4 from "../public/photos/image-4.jpg";
import image5 from "../public/photos/image-5.jpg";
import photos from "../data/photos.json";

import { classNames } from "../utils/lib";

export function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="my-16 sm:mt-20">
      <div className="flex justify-center gap-5 overflow-hidden py-6 sm:gap-8">
        {photos.map((item, imageIndex) => (
          <div
            key={imageIndex}
            className={classNames(
              "relative bg-gradient-to-b border-gray-200 border from-stone-50 to-gray-100 shadow-lg shadow-gray-300 aspect-[9/12] rounded-sm w-48 flex-none overflow-hidden bg-zinc-100 sm:w-72",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={item.src}
              alt=""
              width={200}
              height={250}
              // sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute px-5 pt-5 pb-16 inset-0 h-full w-full object-cover"
            />
            <div className="mb-5 font-Kalam text-md text-gray-600 z-10 absolute bottom-0 mx-auto text-center w-full">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
