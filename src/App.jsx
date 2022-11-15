import Header from "./Components/Header";
import Body from "./Components/Body";
import { useEffect, useState } from "react";
import email from "./emails/email";

const App = () => {
  //useStates
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
  const setChecks = (id, e) => {
    setEmails(
      emails.map((item) =>
        item.id === id ? { ...item, checked: e.target.checked } : item
      )
    );
  };

  const saveButton = () => {
    setEmails(
      emails.map((item) =>
        item.checked ? { ...item, category: "saved", checked: false } : item
      )
    );
  };
  const deleteButton = () => {
    setEmails(emails.filter((item) => !item.checked));
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="w-full">
      <div>
        <Header saveButton={saveButton} deleteButton={deleteButton} />
      </div>
      <div>
        <Body
          unreads={emails}
          setChecks={setChecks}
          expandContent={expandContent}
        />
      </div>
    </div>
  );
};

export default App;
