import App from "./App";
import "./styles.css";

export default function Redirect() {
  return (
    <>
      <a
        href="https://triangle-quiz-app.netlify.app/index.html"
        target="_blank"
      >
        <i class="fas fa-chevron-circle-left fa-2x goBack"></i>
        {/* <button class="goBack"> Go back</button> */}
      </a>
      <App />
    </>
  );
}
