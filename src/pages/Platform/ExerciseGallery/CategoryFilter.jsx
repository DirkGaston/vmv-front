import DropDownArrowIcon from "../../../components/Icons/DropDownArrowIcon";

function CategoryFilter() {
  return (
    <div className="mb-7 md:mb-0">
      <label
        htmlFor="filter"
        className="block text-gray-100 text-lg font-bold mb-2"
      >
        Filtrar por Categoría
      </label>
      <button
        type="button"
        className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Selecciona
        <DropDownArrowIcon />
      </button>
    </div>
  );
}

export default CategoryFilter;
