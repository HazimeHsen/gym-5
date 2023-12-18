import Link from "next/link";
import Icon from "../Buttons/Icon";

const ServiceCard = ({
  icon: IconComponent,
  title,
  description,
  path,
  content,
  status,
}) => {
  return (
    <div className="bg-sky text-center p-5 relative max-w-sm mx-3 ">
      <div className={`felx justify-center mx-auto w-full text-gray my-4 `}>
        <IconComponent className="mx-auto text-orange" size={30} />
      </div>
      <div className="my-6">
        <div className="uppercase text-large font-semibold ">{title}</div>
      </div>
      <p className="text-sm text-blackGray px-10 my-6">{description}</p>
    </div>
  );
};

export default ServiceCard;
