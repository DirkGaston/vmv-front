function Button3(props) {
  return (
    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-600 rounded-lg hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800 cursor-pointer">
      {props.text}
    </button>
  );
}

export default Button3;
