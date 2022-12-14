const Subject = ({ emails }) => {
  return (
    <div>
      <div key={emails.id}>
        <span className="font-semibold">Fwd: {emails.subject}</span>
      </div>
      <div className="block">
        <span className="text-slate-400 text-[0.7rem] sm:text-[0.9rem]">
          {emails.sender.name}{" "}
          <span className="befter">{emails.sender.email}</span> |{" "}
          {emails.date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default Subject;
