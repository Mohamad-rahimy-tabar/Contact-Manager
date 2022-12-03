import { useContactActions } from "../App";

const RemoveModal = ({ contact, showRemoveModal, setshowRemoveModal }) => {
  const { removeHandler } = useContactActions();

  const deleteHandler = (id) => {
    removeHandler(id);
    setshowRemoveModal(false);
  };

  return (
    <div className={`${showRemoveModal ? "top-1/2" : "-top-52"} flex fixed max-w-screen-lg mx-auto font-light transition-all text-xs md:text-base px-2 md:px-0  duration-700 w-full  items-center justify-center`}>
      <div className="text-main-secondary   rounded-md flex flex-col items-center md:px-4 border border-main-primary py-2 px-2 sm:py-4  md:py-10 gap-2 sm:gap-4 md:gap-6 shadow-md bg-main-base">
        <div className="">
          <p>
            شما در حال حذف&nbsp;<span className="text-red-500">{contact.name}</span>&nbsp; از لیست مخاطبین می باشید. آیا مطمئن هستید؟
          </p>
        </div>
        <div className="flex items-center gap-4 w-full justify-center">
          <button onClick={() => deleteHandler(contact.id)} className="border-2 border-red-500 w-1/4 py-1  text-red-500 rounded-md shadow-md">
            بلی
          </button>
          <button onClick={() => setshowRemoveModal(false)} className="border-2 border-green-500 w-1/4 py-1 text-green-500 rounded-md shadow-md">
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
