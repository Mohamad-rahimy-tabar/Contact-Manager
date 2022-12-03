import nodata from "../Image/nodata.jpg";

const EmtyContactList = () => {
  return (
    <div className="w-full bg-contain h-full flex flex-col gap-4 justify-center items-center py-4 max-w-screen-lg mx-auto text-xs md:text-lg">
      <h1>هیچ مخاطبی برای نمایش وجود ندارد</h1>
      <div className="w-1/2 sm:w-2/3 lg:w-4/5">
        <div className="aspect-w-3 aspect-h-2">
          <img src={nodata} alt="no-data" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default EmtyContactList;
