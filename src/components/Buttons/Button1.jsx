function Button1(props) {
  return (
    <button
      type="button"
      className="shadow-md mb-7 md:mb-0 font-regular font-proxima py-2 px-7 text-white cursor-pointer bg-gray-400 hover:bg-gray-300 rounded text-lg text-center h-[50px]"
    >
      {props.text}
    </button>
  );
}

export default Button1;
