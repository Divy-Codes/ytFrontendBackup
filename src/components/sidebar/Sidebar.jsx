import "./_sidebar.scss";
import {
  MdHome,
  MdSubscriptions,
  MdHistory,
  MdExitToApp,
  MdLibraryBooks,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";

export default function Sidebar({ sidebar, toggleSidebar }) {
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={toggleSidebar}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <IoMdThumbsUp size={23} />
        <span>Liked</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>Lorem Ipsum</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
}
