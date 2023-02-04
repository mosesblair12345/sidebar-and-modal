import { createContext, useState, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  const openSideBar = () => {
    setIsSideBar(true);
  };

  const closeSideBar = () => {
    setIsSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModal,
        isSideBar,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//CUSTOMHOOK
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
