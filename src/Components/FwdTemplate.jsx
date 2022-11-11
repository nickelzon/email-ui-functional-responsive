const FwdTemplate = ({ footer }) => {
  return (
    <div className="text-xs max-w-[300px] mt-5 ">
      <span>
        --Forwarded Message--
        <br />
        From: <b>{footer.sender.name}</b>{" "}
        <a href="" className="underline text-blue-500 befter">
          {footer.sender.email}
        </a>
        <br />
        Date:{" "}
        {footer.date.toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        <br />
        Subject: {footer.subject}
        <br />
        To: <b>{footer.receiver.name}</b>{" "}
        <a href="" className="underline text-blue-500 befter">
          {footer.receiver.email}
        </a>
      </span>
    </div>
  );
};

export default FwdTemplate;
