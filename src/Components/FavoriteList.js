import { useContact } from "../App";
import nodata from "../Image/nodata.jpg";

const FavoriteList = () => {
  const contacts = useContact();
  const allContact = contacts.filter((c) => c.mark);

  const renderContact = () => {
    if (allContact.length === 0)
      return (
        <div className="w-full bg-contain h-full gap-4 flex flex-col justify-center items-center py-4 max-w-screen-lg mx-auto text-xs md:text-lg">
          <h1>هیچ مخاطبی برای نمایش وجود ندارد</h1>
          <div className="w-1/2 sm:w-2/3 lg:w-4/5 ">
            <div className="aspect-w-3 aspect-h-2">
              <img src={nodata} alt="no-data" className="w-full h-full" />
            </div>
          </div>
        </div>
      );
    return allContact.map((contact) => {
      return (
        <div key={contact.id} className="flex flex-col items-center w-full gap-2">
          <div className="border-2 p-2 lg:p-4 bg-main-tertiary shadow-md border-main-primary rounded-md flex items-center justify-between w-full">
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
          </div>
        </div>
      );
    });
  };

  return <div className="w-full overflow-auto h-4/5 py-2 flex flex-col gap-4 items-center max-w-screen-lg mx-auto text-xs md:text-lg">{renderContact()}</div>;
};

export default FavoriteList;
