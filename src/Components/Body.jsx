import Subject from "./Subject";
import Datebox from "./Datebox";
import FwdTemplate from "./FwdTemplate";

const Body = ({ unreads, setChecks, expandContent }) => {
  return (
    <div className="font-poppins border-red-600 p-6">
      <h1 className="font-semibold text-slate-400 text-sm">Unread</h1>
      <div className="flex flex-col">
        {unreads.map((item, index) =>
          item.category === "unread" ? (
            <div
              key={item.id}
              className={`border-[1px]  rounded ${
                index === unreads.length - 1 ? "mb-0" : "mb-2"
              }`}
            >
              <div
                className={`parent p-5 flex items-center`}
                onClick={() => expandContent(item.id)}
              >
                <input
                  type="checkbox"
                  name="select-one"
                  id="check"
                  className="child"
                  onChange={(e) => setChecks(item.id, e)}
                />
                <div
                  className={`circle child rounded-full bg-green-600
                `}
                />
                <div className="child">
                  <Datebox dates={item} />
                </div>
                <div className="child">
                  <Subject emails={item} />
                </div>
                <div
                  className={`hidden ${
                    item.expanded && !item.checked
                      ? "sm:hidden"
                      : "sm:flex absolute right-9"
                  }`}
                >
                  {item.tags.map((items, index) => (
                    <span
                      key={index}
                      className={`text-[0.4rem] hidden sm:flex ${
                        index === item.tags.length - 1 ? "mr-0" : "mr-2"
                      } bg-blue-100 rounded p-1 border-[1px] border-blue-300`}
                    >
                      {items}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`${
                  item.expanded && !item.checked ? "flex" : "hidden"
                } p-5 flex-col`}
              >
                <div className="mb-5 flex justify-between">
                  <div className="">
                    <h1>{item.sender.name}</h1>
                    <h3 className="text-xs">
                      {item.date.toLocaleString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </h3>
                  </div>
                  <div className="hidden sm:block">
                    {item.tags.map((items, index) => (
                      <span
                        key={index}
                        className={`text-[0.4rem]   ${
                          index === item.tags.length - 1 ? "mr-0" : "mr-2"
                        } bg-blue-100 rounded p-1 border-[1px] border-blue-300`}
                      >
                        {items}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs">"{item.content}"</span>
                <FwdTemplate footer={item} />
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <h1 className="font-semibold text-slate-400 text-sm">Recently Saved</h1>
      <div className="">
        {unreads.map((item, index) =>
          item.category === "saved" ? (
            <div
              key={item.id}
              className={`border-[1px]  rounded ${
                index === unreads.length - 1 ? "mb-0" : "mb-2"
              }`}
            >
              <div
                className={`parent p-5 flex items-center`}
                onClick={() => expandContent(item.id)}
              >
                <input
                  type="checkbox"
                  name="select-one"
                  id="check"
                  className="child"
                  onChange={(e) => setChecks(item.id, e)}
                />
                <div
                  className={`circle child rounded-full bg-red-600
              `}
                />
                <div className="child">
                  <Datebox dates={item} />
                </div>
                <div className="child">
                  <Subject emails={item} />
                </div>
              </div>
              <hr></hr>
              <div
                className={`${item.expanded ? "flex" : "hidden"} p-5 flex-col`}
              >
                <div className="mb-5 flex justify-between">
                  <div className="">
                    <h1>{item.sender.name}</h1>
                    <h3 className="text-xs">
                      {item.date.toLocaleString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </h3>
                  </div>
                  <div className="hidden sm:block">
                    {item.tags.map((items, index) => (
                      <span
                        key={index}
                        className={`text-[0.4rem]   ${
                          index === item.tags.length - 1 ? "mr-0" : "mr-2"
                        } bg-blue-100 rounded p-1 border-[1px] border-blue-300`}
                      >
                        {items}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs">{item.content}</span>
                <FwdTemplate footer={item} />
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Body;
