const Header = ({ saveButton, deleteButton }) => {
  return (
    <div className=" border-b-[1px] p-2">
      <div className="flex justify-between items-center mt-2">
        <div className="font-poppins flex button-container text-xs">
          <input
            type="checkbox"
            name="select-all"
            id=""
            className="child"
            onClick={() => {}}
          />
          <button
            className="child save bg-green-200 border-green-600 text-green-600 border-[1px] px-2  rounded-md"
            onClick={saveButton}
          >
            SAVE
          </button>
          <button className="child manage-filter bg-slate-200 border-slate-600 text-slate-600 border-[1px] px-2  rounded-md">
            MANAGE FILTER
          </button>
          <button
            className="child delete bg-red-200 border-red-600 text-red-600 border-[1px] px-2 rounded-md"
            onClick={deleteButton}
          >
            DELETE
          </button>
        </div>
        <h1 className="font-poppins text-xs befter"> 50-150 </h1>
      </div>
    </div>
  );
};

export default Header;
