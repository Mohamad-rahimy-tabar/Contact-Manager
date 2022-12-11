import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contextClass = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-sky-900",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center  fixed top-0 left-0 ">
      <div className="container p-2 w-full  h-[calc(100%-60px)] md:h-full">
        <ToastContainer
          toastClassName={({ type }) => contextClass[type || "default"] + " relative flex flex-nowrap p-2 md:max-w-[2000px] max-w-[180px]  rounded-md justify-between overflow-hidden cursor-pointer"}
          bodyClassName={() => "text-[8px] md:text-sm font-light flex flex-nowrap justify-between items-center font-white font-sans block p-2"}
          position="top-left"
          autoClose={3000}
        />
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
