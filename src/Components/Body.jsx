import email from "../emails/email";
import { useState, useEffect } from "react";
import Subject from "./Subject";
import Datebox from "./Datebox";

const Body = () => {
  const [unread, setUnread] = useState([]);
  const [read, setRead] = useState([]);

  //date-formatting
  // const option = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  const fetchUnreads = () => {
    const unreads = email.filter((item) => !item.read);

    setUnread(unreads);
  };
  const fetchReads = () => {
    const reads = email.filter((item) => item.read);
    console.log(reads);
    setRead(reads);
  };

  useEffect(() => {
    fetchUnreads();
    fetchReads();
  }, []);
  return (
    <div className="font-poppins border-red-600">
      <h1 className="font-semibold text-slate-400 text-sm">Unread</h1>
      <div className="">
        {unread.map((item, index) => (
          <div
            key={item.id}
            className={`parent border-[1px] p-5 flex items-center rounded ${
              index === unread.length - 1 ? "mb-0" : "mb-2"
            }`}
          >
            <input type="checkbox" name="select-one" id="" className="child" />
            <div className="circle child rounded-full bg-green-600" />
            <Datebox dates={item} />
            <Subject emails={item} />
          </div>
        ))}
      </div>
      <h1 className="font-semibold text-slate-400 text-sm">Recently Saved</h1>
      <div className="">
        {read.map((item) => (
          <div
            key={item.id}
            className="border-[1px] p-5 flex items-center rounded"
          >
            <div className="circle bg-red-600 rounded-full" />
            {item.sender.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
