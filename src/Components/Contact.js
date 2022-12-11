import { useState } from "react";
import RemoveModal from "./RemoveModal";
import { useContactActions } from "../App";
const Contact = ({ contact }) => {
  const [showRemoveModal, setshowRemoveModal] = useState(false);
  const { showEditPage, markHandler } = useContactActions();

  return (
    <div className="flex flex-col items-center w-full gap-2 ">
      <RemoveModal contact={contact} showRemoveModal={showRemoveModal} setshowRemoveModal={setshowRemoveModal} />
      <div className="border-2 cursor-pointer  p-2 lg:p-4 bg-main-tertiary shadow-md border-main-primary rounded-md flex items-center justify-between w-full">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 lg:h-7 lg:w-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="">
          <p>{contact.name}</p>
        </div>
        <div className="">
          <p>{contact.phone}</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-red-500 cursor-pointer" id={contact.id} onClick={() => setshowRemoveModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:h-7 lg:w-7">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          <div className="text-green-400 cursor-pointer" id={contact.id} onClick={() => showEditPage(contact.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:h-7 lg:w-7">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <div className={`${contact.mark ? "text-main-secondary" : "text-main-tertiary"} cursor-pointer`} id={contact.id} onClick={() => markHandler(contact.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5 lg:h-7 lg:w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
