import { useEffect, useState } from "react";
import { useContactActions } from "../App";
const NewContact = () => {
  const [newContact, setNewContact] = useState({ mark: false, edit: false, name: "", phone: "" });
  const [isFocus, setIsFocus] = useState({ name: false, phone: false });
  const [validation, setValidation] = useState(false);

  const { addNewContact } = useContactActions();

  useEffect(() => {
    newContact.name.trim().length > 2 && newContact.phone.trim().length === 11 ? setValidation(true) : setValidation(false);
  }, [newContact]);

  const changeHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addNewContact(newContact);
    setNewContact({ mark: false, name: "", phone: "" });
  };

  const focusHandler = (e) => {
    setIsFocus({ ...isFocus, [e.target.name]: true });
  };

  const blurHandler = (e) => {
    setIsFocus({ ...isFocus, [e.target.name]: false });
  };

  return (
    <div className="rounded-lg w-full xs:max-w-screen-xs  bg-main-tertiary border-2 shadow-md md:max-w-screen-lg mx-auto border-main-primary py-4 px-2">
      <form className="flex flex-col md:gap-4 items-center gap-2 p-4" onSubmit={submitHandler}>
        <p className="text-sm mb-4 md:text-base lg:text-lg text-center">افزودن مخاطب</p>
        <div className={`${isFocus.name ? "border-main-primary ring-main-primary" : "border-main-base ring-main-base"} flex w-full ring-2 md:w-1/2 border items-center rounded-md px-2 md:p-4 shadow-md`}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            className="border-none flex-1 w-1/2 bg-transparent focus:outline-none focus:ring-0 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
            placeholder="نام و نام خانوادگی"
          ></input>
          <div className={`${newContact.name.trim().length > 2 ? "text-green-500" : "text-red-500"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${newContact.name.trim().length > 2 ? "hidden" : ""} w-5 h-5 lg:w-6 lg:h-6`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${newContact.name.trim().length > 2 ? "" : "hidden"} w-5 h-5 lg:w-6 lg:h-6`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <div className={`${isFocus.phone ? "border-main-primary ring-main-primary" : "border-main-base ring-main-base"} flex w-full ring-2 md:w-1/2 border items-center rounded-md px-2 md:p-4 shadow-md`}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <input
            type="number"
            name="phone"
            onFocus={focusHandler}
            onBlur={blurHandler}
            value={newContact.phone}
            onChange={changeHandler}
            className="border-none flex-1 w-1/2 bg-transparent focus:outline-none focus:ring-0 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
            placeholder="تلفن همراه"
          ></input>
          <div className={`${newContact.phone.trim().length === 11 ? "text-green-500" : "text-red-500"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${newContact.phone.trim().length === 11 ? "hidden" : ""} w-5 h-5 lg:w-6 lg:h-6`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${newContact.phone.trim().length === 11 ? "" : "hidden"} w-5 h-5 lg:w-6 lg:h-6`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full disabled:opacity-25 shadow-md md:w-1/3 items-center mt-4 justify-center bg-main-primary text-xs md:font-bold cursor-pointer drop-shadow-md p-2 md:py-4 md:text-base rounded-lg"
          disabled={!validation}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </div>
          <p className="mr-2">افزودن</p>
        </button>
      </form>
    </div>
  );
};

export default NewContact;
