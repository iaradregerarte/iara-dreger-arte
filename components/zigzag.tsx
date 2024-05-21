import {
  acervo,
  deusAtomo,
  metamorfose,
  transmutacao,
  untitled,
} from "./image-data";
import { ImageUntitled } from "./image-untitled";
import { ZigzagItem } from "./zigzag-item";

export const Zigzag = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              <i>Série</i>
              <br /> GESTO INACABADO
            </h1>
          </div>
          <>
            <div className="font-architects-daughter text-2xl text-purple-600 mb-2 flex justify-center my-12 border-b-2 border-b-indigo-500">
              Movimento 1 - Metamorfose
            </div>
            <div className="grid gap-20">
              {metamorfose.map((imageData, index) => (
                <ZigzagItem
                  key={index}
                  Untitled={imageData.Untitled}
                  imageSrc={imageData.imageSrc}
                  title={imageData.title}
                  description={imageData.description}
                  size={imageData.size}
                  price={imageData.price}
                />
              ))}
            </div>
          </>
          <hr />
          <>
            <div className="font-architects-daughter text-2xl text-purple-600 mb-2 flex justify-center my-12 border-b-2 border-b-indigo-500">
              Movimento 2 - Deus átomo
            </div>
            <div className="grid gap-20">
              {deusAtomo.map((imageData, index) => (
                <ZigzagItem
                  key={index}
                  Untitled={imageData.Untitled}
                  imageSrc={imageData.imageSrc}
                  title={imageData.title}
                  description={imageData.description}
                  size={imageData.size}
                  price={imageData.price}
                />
              ))}
            </div>
          </>
          <hr />
          <>
            <div className="font-architects-daughter text-2xl text-purple-600 mb-2 flex justify-center my-12 border-b-2 border-b-indigo-500">
              Movimento 3 - Transmutação
            </div>
            <div className="grid gap-20">
              {transmutacao.map((imageData, index) => (
                <ZigzagItem
                  key={index}
                  Untitled={imageData.Untitled}
                  imageSrc={imageData.imageSrc}
                  title={imageData.title}
                  description={imageData.description}
                  size={imageData.size}
                  price={imageData.price}
                />
              ))}
            </div>
          </>
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 mb-4">
            <br /> As obras da Série Gesto Inacabado podem ser observadas na
            horizontal ou na vertical.
          </div>
          <hr />
        </div>
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              <i>Série</i>
              <br /> ACERVO
            </h1>
          </div>
          <>
            <div className="grid gap-20">
              {untitled.map((imageData, index) => (
                <ImageUntitled
                  key={index}
                  Untitled={imageData.Untitled}
                  imageSrc={imageData.imageSrc}
                  title={imageData.title}
                  description={imageData.description}
                  size={imageData.size}
                  price={imageData.price}
                />
              ))}
            </div>
            <div className="grid gap-20">
              {acervo.map((imageData, index) => (
                <ZigzagItem
                  key={index}
                  Untitled={imageData.Untitled}
                  imageSrc={imageData.imageSrc}
                  title={imageData.title}
                  description={imageData.description}
                  size={imageData.size}
                  price={imageData.price}
                />
              ))}
            </div>
          </>
        </div>
      </div>
    </section>
  );
};
