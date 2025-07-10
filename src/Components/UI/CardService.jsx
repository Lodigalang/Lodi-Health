function CardFeatures(props) {
  return (
    <div
      className="relative overflow-hidden rounded-lg border border-[#e9e9e9] bg-white select-none  shadow-md hover:shadow-2xl hover:shadow-[#8de38d] hover:-translate-y-1 transition-all duration-300 p-8 hover:bg-[#cfe3cf] hover:border-[#cfe3cf]  group"
      data-aos={props.animasi}
      data-aos-delay={props.delay}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
        <img
          src={props.src}
          alt={props.alt + " icon"}
          className="h-14 w-14 object-contain rounded-full bg-[#82d182] group-hover:bg-[#72b672]"
        />
        <div className="space-y-1">
          <h3 className="font-bold text-lg md:text-xl text-gray-800">
            {props.title}
          </h3>
          <p className="text-sm md:text-lg text-gray-600">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFeatures;
