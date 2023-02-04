import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openModal, openSideBar } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={() => openSideBar()}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => openModal()}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
