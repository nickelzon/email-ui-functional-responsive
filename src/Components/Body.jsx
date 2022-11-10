import email from "../emails/email";
import { useState, useEffect } from "react";
import Subject from "./Subject";
import Datebox from "./Datebox";

const Body = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = () => {
    setEmails(email);
  };
  const expandContent = (id) => {
    setEmails(
      emails.map((item) =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const unread = emails.filter((item) => !item.read);

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
            onClick={() => expandContent(item.id)}
          >
            <input type="checkbox" name="select-one" id="" className="child" />
            <div
              className={`circle child rounded-full ${
                item.expanded ? "bg-green-600" : "bg-red-600"
              }`}
            />
            <div className="child">
              <Datebox dates={item} />
            </div>
            <div className="child">
              <Subject emails={item} />
            </div>
          </div>
        ))}
      </div>
      <h1 className="font-semibold text-slate-400 text-sm">Recently Saved</h1>
      <div className=""></div>
    </div>
  );
};

export default Body;
