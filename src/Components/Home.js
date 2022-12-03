import homeimage from "../Image/home.jpg";
const Home = () => {
  return (
    <div className="rounded-lg w-full h-full flex overflow-auto items-center gap-2 max-w-screen-lg mx-auto  py-4 px-2">
      <div className=" text-center flex flex-col h-full justify-center flex-1">
        <h1 className="text-sm sm:text-base lg:text-3xl">Contact Manager</h1>
        <h3 className="text-xs sm:text-sm lg:text-base font-thin">Design & Develop by M.R.T</h3>
      </div>
      <div className="w-3/5">
        <div className="aspect-w-1 aspect-h-1 ">
          <img src={homeimage} alt="home" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
