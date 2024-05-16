import Image from "next/image";

export const ImageUntitled = ({
  imageSrc,
  title,
  description,
  Untitled,
  size,
  price,
}: any) => {
  return (
    <div className="mb-8">
      {/* Image */}
      <div className="w-full mb-4" data-aos="fade-up">
        <Image
          className="w-full h-auto"
          src={imageSrc}
          width={540}
          height={405}
          alt={title}
        />
      </div>
      {/* Content */}
      <div className="text-center" data-aos="fade-left">
        <div className="font-architects-daughter text-xl text-purple-600 mb-2">
          {Untitled}
        </div>
        <h3 className="h3 mb-3">{title}</h3>
        <p className="text-xl text-gray-400 mb-4">{size}</p>
        <p className="text-xl text-gray-400 mb-4">{description}</p>
        <h4 className="h4 mb-3">{price}</h4>
      </div>
    </div>
  );
};
