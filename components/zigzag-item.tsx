import Image from "next/image";



export const ZigzagItem = ({ imageSrc, title, description }: any) => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      {/* Image */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
        data-aos="fade-up"
      >
        <Image
          className="max-w-full mx-auto md:max-w-none h-auto"
          src={imageSrc}
          width={540}
          height={405}
          alt={title}
        />
      </div>
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-left"
      >
        <div className="md:pl-4 lg:pl-12 xl:pl-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">
            Ficha técnica
          </div>
          <h3 className="h3 mb-3">{title}</h3>
          <p className="text-xl text-gray-400 mb-4">{description}</p>
          {/* Additional content goes here */}
        </div>
      </div>
    </div>
  );
};
