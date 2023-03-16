function CTAButton(props) {
  return (
    <div className="relative shadow-md font-regular font-proxima my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">
      <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-yellow-600"></span>
      {props.text}
    </div>
  );
}

export default CTAButton;
