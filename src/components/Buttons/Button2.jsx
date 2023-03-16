function Button2(props) {
  return (
    <button
      type="button"
      className="shadow-md font-regular font-proxima py-2 px-7 text-white cursor-pointer bg-green-600 hover:bg-green-400 rounded text-lg text-center"
    >
      {props.text}
    </button>
  );
}

export default Button2;
