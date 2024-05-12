import { ZigzagItem } from "./zigzag-item";

import Untitled1 from "@/public/images/Untitled1.jpeg";
import Untitled2 from "@/public/images/Untitled2.jpeg";
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
  const metamorfose = [
    {
      imageSrc: Untitled1,
      Untitled: "Untitled 1",
      title: "Acrílica sobre Tela, 2022-24",
      size: "1.0 x 1.00 m",
      description: "Moldura branca tipo filete",
      price: "R$ 3.250,00",
    },
    {
      imageSrc: Untitled2,
      Untitled: "Untitled 2",
      title: "Acrílica sobre Tela, 2018-24",
      size: "2.0 x 1.00 m",
      description: "Moldura branca tipo filete",
      price: "R$ 3.250,00",
    },
  ];

  const deusAtomo = [
    {
      Untitled: "Untitled 3",
      imageSrc: a9,
      title: "Título da Arte 1",
      description: "Descrição da Arte 1",
    },
    {
      Untitled: "Untitled 4",
      imageSrc: a10,
      title: "Título da Arte 2",
      description: "Descrição da Arte 2",
    },
    {
      Untitled: "Untitled 5",
      imageSrc: a3,
      title: "Título da Arte 3",
      description: "Descrição da Arte 3",
    },
    {
      Untitled: "Untitled 6",
      imageSrc: a4,
      title: "Título da Arte 4",
      description: "Descrição da Arte 4",
    },
    {
      Untitled: "Untitled 7",
      imageSrc: a5,
      title: "Título da Arte 5",
      description: "Descrição da Arte 5",
    },
    {
      Untitled: "Untitled 8",
      imageSrc: a6,
      title: "Título da Arte 6",
      description: "Descrição da Arte 6",
    },
    {
      Untitled: "Untitled 9",
      imageSrc: a7,
      title: "Título da Arte 7",
      description: "Descrição da Arte 7",
    },
    {
      Untitled: "Untitled 10",
      imageSrc: a8,
      title: "Título da Arte 8",
      description: "Descrição da Arte 8",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Série GESTO INACABADO</h1>
          </div>
          <>
            Movimento 1 - Metamorfose
            <div className="grid gap-20">
              {metamorfose.map((imageData, index) => (
                <ZigzagItem
                  key={index}
                  Untitled={imageData.Untitled}
                  imageSrc={imageData.imageSrc}
                  title={imageData.title}
                  description={imageData.description}
                />
              ))}
            </div>
          </>
          <>
            Movimento 2 - Deus átomo
            <div className="grid gap-20">
              {deusAtomo.map((imageData, index) => (
                <ZigzagItem
                  key={index}
                  Untitled={imageData.Untitled}
                  imageSrc={imageData.imageSrc}
                  title={imageData.title}
                  description={imageData.description}
                />
              ))}
            </div>
          </>
        </div>
      </div>
    </section>
  );
};
