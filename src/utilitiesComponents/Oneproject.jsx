import PropTypes from "prop-types";

export default function Oneproject({ img }) {
  return (
    <div
      className="
                w-full md:w-[30%]
                flex flex-col overflow-hidden
                p-2
                justify-center items-start
                gap-[5px] rounded-xl
                shadow-lg
                 shadow-gray-800
                 hover:shadow-sky-500
                 transition duration-300
                bg-sky-950"
    >
      <div className="w-full md:h-[300px] ">
        <img
          className="w-full  rounded-xl
                    h-full"
          src={img}
          alt="img"
        />
      </div>
      
      
    </div>
  );
}

Oneproject.propTypes = {
  img: PropTypes.string.isRequired,
};
