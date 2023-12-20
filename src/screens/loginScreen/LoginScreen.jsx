// import "./_loginScreen.scss";
import "./_loginScreen.scss";
import { FcGoogle } from "react-icons/fc";
export default function LoginScreen() {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="imgContainer">
          <img
            src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt="youtube Logo"
          />
        </div>
        <button>
          <FcGoogle /> | Sign In with Google
        </button>
        <p>
          A YouTube Frontend project. Created with{" "}
          <span className="heart">&#9829;</span>
          <br />
          <span> &mdash; Divyanshu Gambhir</span>
        </p>

        {/* <span>Divyanshu Gambhir</span> */}
      </div>
    </div>
  );
}
