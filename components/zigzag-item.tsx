import { Img } from "./img";

export const ZigzagItem = ({
  imageSrc,
  title,
  description,
  Untitled,
  size,
  price,
}: any) => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      {/* Image */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
        data-aos="fade-up"
      >
        <Img src={imageSrc} alt={title} width={540} height={405} />
      </div>
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-left"
      >
        <div className="md:pl-4 lg:pl-12 xl:pl-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">
            {Untitled}
          </div>
          <h3 className="h3 mb-3">{title}</h3>
          <p className="text-xl text-gray-400 mb-4">{size}</p>
          <p className="text-xl text-gray-400 mb-4">{description}</p>
          <h4 className="h4 mb-3">{price}</h4>
        </div>
      </div>
      <hr />
    </div>
  );
};
