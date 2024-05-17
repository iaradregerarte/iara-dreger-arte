import React from "react";

interface ClientComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onContextMenu?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ClientComponent: React.FC<ClientComponentProps> = ({
  src,
  alt,
  onContextMenu,
  ...props
}) => {
  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (onContextMenu) {
      onContextMenu(e);
    }
  };

  return (
    <div
      className="relative flex justify-center items-center"
      data-aos="fade-up"
      data-aos-delay="200"
      onContextMenu={handleContextMenu}
    >
      <img src={src} alt={alt} {...props} />
    </div>
  );
};

export default ClientComponent;
