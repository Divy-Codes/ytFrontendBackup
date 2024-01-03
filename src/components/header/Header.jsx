import "./_header.scss";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

export default function Header({ toggleSidebar }) {
  return (
    <div className="header border border-dark">
      <MdOutlineMenu size={26} className="hamburger" onClick={toggleSidebar} />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="Youtube Logo"
        className="youtubeLogo"
        width={40}
      />

      <form>
        <input type="text" placeholder="Search" />
        <button onSubmit={() => {}}>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="userFeatures">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <IoPersonCircle size={28} className="user" />
      </div>
    </div>
  );
}

// https://pngimg.com/uploads/youtube/youtube_PNG2.png