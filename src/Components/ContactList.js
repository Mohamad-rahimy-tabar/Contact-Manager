import Contact from "./Contact";
import EmtyContactList from "./EmtyContactList";
import { useContact } from "../App";

const ContactList = () => {
  
  const contacts = useContact();


  const renderContact = () => {
    if (contacts.length === 0) return <EmtyContactList />;
    return contacts.map((contact) => {
      return <Contact key={contact.id} contact={contact} />;
    });
  };

  return <div className="w-full overflow-auto h-4/5 py-2 flex flex-col gap-4 items-center max-w-screen-lg mx-auto text-xs md:text-lg">{renderContact()}</div>;
};

export default ContactList;
