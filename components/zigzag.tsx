import { ZigzagItem } from "./zigzag-item";

import a1 from "@/public/images/a1.jpeg";
import a2 from "@/public/images/a2.jpeg";
import a3 from "@/public/images/a3.jpeg";
import a4 from "@/public/images/a4.jpeg";
import a5 from "@/public/images/a5.jpeg";
import a6 from "@/public/images/a6.jpeg";
import a7 from "@/public/images/a7.jpeg";
import a8 from "@/public/images/a8.jpeg";
import a9 from "@/public/images/a9.jpeg";
import a10 from "@/public/images/a10.jpeg";
import a11 from "@/public/images/a11.jpeg";
import a12 from "@/public/images/a12.jpeg";
import a13 from "@/public/images/a13.jpeg";
import a14 from "@/public/images/a14.jpeg";
import a15 from "@/public/images/a15.jpeg";
import a16 from "@/public/images/a16.jpeg";
import a17 from "@/public/images/a17.jpeg";
import a18 from "@/public/images/a18.jpeg";
import a19 from "@/public/images/a19.jpeg";

export const Zigzag = () => {
  const imagesData = [
    {
      imageSrc: a1,
      title: "Título da Arte 1",
      description: "Descrição da Arte 1",
    },
    {
      imageSrc: a2,
      title: "Título da Arte 2",
      description: "Descrição da Arte 2",
    },
    {
      imageSrc: a3,
      title: "Título da Arte 3",
      description: "Descrição da Arte 3",
    },
    {
      imageSrc: a4,
      title: "Título da Arte 4",
      description: "Descrição da Arte 4",
    },
    {
      imageSrc: a5,
      title: "Título da Arte 5",
      description: "Descrição da Arte 5",
    },
    {
      imageSrc: a6,
      title: "Título da Arte 6",
      description: "Descrição da Arte 6",
    },
    {
      imageSrc: a7,
      title: "Título da Arte 7",
      description: "Descrição da Arte 7",
    },
    {
      imageSrc: a8,
      title: "Título da Arte 8",
      description: "Descrição da Arte 8",
    },
    {
      imageSrc: a9,
      title: "Título da Arte 9",
      description: "Descrição da Arte 9",
    },
    {
      imageSrc: a10,
      title: "Título da Arte 10",
      description: "Descrição da Arte 10",
    },
    {
      imageSrc: a11,
      title: "Título da Arte 11",
      description: "Descrição da Arte 11",
    },
    {
      imageSrc: a12,
      title: "Título da Arte 12",
      description: "Descrição da Arte 12",
    },
    {
      imageSrc: a13,
      title: "Título da Arte 13",
      description: "Descrição da Arte 13",
    },
    {
      imageSrc: a14,
      title: "Título da Arte 14",
      description: "Descrição da Arte 14",
    },
    {
      imageSrc: a15,
      title: "Título da Arte 15",
      description: "Descrição da Arte 15",
    },
    {
      imageSrc: a16,
      title: "Título da Arte 16",
      description: "Descrição da Arte 16",
    },
    {
      imageSrc: a17,
      title: "Título da Arte 17",
      description: "Descrição da Arte 17",
    },
    {
      imageSrc: a18,
      title: "Título da Arte 18",
      description: "Descrição da Arte 18",
    },
    {
      imageSrc: a19,
      title: "Título da Arte 19",
      description: "Descrição da Arte 19",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-white rounded-full mb-4">
              "A arte é a expressão suprema do que realmente somos." - Michael
              Jackson
            </div>
            <h1 className="h2 mb-4">Obras</h1>
          </div>

          {/* Items 
          <div className="grid gap-20">
            {imagesData.map((imageData, index) => (
              <ZigzagItem
                key={index}
                imageSrc={imageData.imageSrc}
                title={imageData.title}
                description={imageData.description}
              />
            ))}
          </div>*/}
        </div>
      </div>
    </section>
  );
};
