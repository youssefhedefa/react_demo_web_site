import styles from "../home.module.css";

function SingleHomeTap({ tapString }) {
  return (
    <>
      <p>{tapString}</p>
    </>
  );
}

export default function HomeTaps() {
  return (
    <div className = {styles.homeTaps} >
      <SingleHomeTap tapString="About Us" />
      <SingleHomeTap tapString="Catalog" />
      <SingleHomeTap tapString="Contacts" />
    </div>
  );
}
