import styles from "./App.module.css";
import image from "./assets/images/Art.png";
import LogInPart from "./logInPart";

function ImagePart() {
  return (
    <div className={styles.loginImage}>
      <img src={image} alt="flowers background" />
    </div>
  );
}

function App() {
  return (
    <div className={styles.mainDiv}>
      <LogInPart />
      <ImagePart />
    </div>
  );
}

export default App;
