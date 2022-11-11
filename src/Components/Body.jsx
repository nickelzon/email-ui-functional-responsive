import Subject from "./Subject";
import Datebox from "./Datebox";

const Body = ({ unreads, setChecks, expandContent }) => {
  return (
    <div className="font-poppins border-red-600">
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
              </div>

              <div
                className={`${
                  item.expanded && !item.checked ? "flex" : "hidden"
                } p-5`}
              >
                <span>{item.content}</span>
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
              <div className={`${item.expanded ? "flex" : "hidden"} p-5`}>
                <span>{item.content}</span>
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
