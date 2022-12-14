const Datebox = ({ dates }) => {
  return (
    <div className="w-[40px] h-[40px] bg-slate-100 border-slate-200 border-[1px] rounded">
      <div className="flex flex-col text-center">
        <span className="text-ss">
          {dates.date.toLocaleString("en-US", { day: "numeric" })}
        </span>
        <span className="text-[8px]">
          {dates.date.toLocaleString("en-US", { month: "short" })}
        </span>
      </div>
    </div>
  );
};

export default Datebox;
