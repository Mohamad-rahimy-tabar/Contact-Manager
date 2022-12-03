import NewContact from "./Components/NewContact";
import { v4 as uuidv4 } from "uuid";
import Layout from "./Layout/Layout";
import ContactList from "./Components/ContactList";
import FavoriteList from "./Components/FavoriteList";
import Home from "./Components/Home";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ContactContext = React.createContext();
const ContactContextDispacher = React.createContext();

function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || []);
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <ContactContext.Provider value={contacts}>
        <ContactContextDispacher.Provider value={setContacts}>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="addnew" element={<NewContact />} />
            <Route path="contactlist" element={<ContactList />} />
            <Route path="bookmark" element={<FavoriteList />} />
          </Routes>
        </ContactContextDispacher.Provider>
      </ContactContext.Provider>
    </Layout>
  );
}
export default App;

//export contacts
export const useContact = () => useContext(ContactContext);
//export setContacts functions
export const useContactDispacher = () => useContext(ContactContextDispacher);
//export all contact state functions
export const useContactActions = () => {
  const navigate = useNavigate();
  const setContacts = useContext(ContactContextDispacher);
  const contacts = useContext(ContactContext);

  const addNewContact = (newContact) => {
    const id = uuidv4();
    const contact = { ...newContact, id };
    setContacts([...contacts, contact]);
    navigate("/contactlist");
    toast.success("مخاطب اضافه شد");
  };

  const removeHandler = (id) => {
    const allContacts = [...contacts];
    const updatedContacts = allContacts.filter((c) => c.id !== id);
    setContacts(updatedContacts);
    toast.info("مخاطب از لیست حذف شد");
  };

  const markHandler = (id) => {
    const index = contacts.findIndex((c) => c.id === id);
    const selectedContact = { ...contacts[index] };
    selectedContact.mark = !selectedContact.mark;
    const allContacts = [...contacts];
    allContacts[index] = selectedContact;
    setContacts(allContacts);
    selectedContact.mark ? toast.info("مخاطب به لیست موردعلاقه ها اضافه شد") : toast.info("مخاطب از لیست موردعلاقه ها حذف شد");
  };

  const showEditBox = (id) => {
    const index = contacts.findIndex((c) => c.id === id);
    const selectedContact = { ...contacts[index] };
    selectedContact.edit = !selectedContact.edit;
    const allContacts = [...contacts];
    allContacts[index] = selectedContact;
    setContacts(allContacts);
  };

  const editHandler = (id, editedUser) => {
    const index = contacts.findIndex((c) => c.id === id);
    const selectedContact = { ...contacts[index] };
    selectedContact.name = editedUser.name;
    selectedContact.phone = editedUser.phone;
    selectedContact.edit = false;
    const allContacts = [...contacts];
    allContacts[index] = selectedContact;
    setContacts(allContacts);
  };
  return { addNewContact, removeHandler, markHandler, showEditBox, editHandler };
};
