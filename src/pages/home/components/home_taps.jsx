import styles from "../home.module.css";

function SingleHomeTap({ tapString }) {
  return (
    <>
      <h4>{tapString}</h4>
    </>
  );
}

export default function HomeTaps() {
  return (
    <div className = {styles.homeTaps} >
      <SingleHomeTap tapString="About Us" />
      <SingleHomeTap tapString="About Us" />
      <SingleHomeTap tapString="About Us" />
    </div>
  );
}
