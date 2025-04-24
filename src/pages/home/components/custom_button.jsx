import styles from "../home.module.css";
import arrow from "../../../assets/images/right-arrow.png";
export default function CustomButton({ title }) {
  return (
    <div className={styles.customButton}>
      <div>
        <p>{title}</p>
        <img src={arrow} alt="arrow"/>
      </div>
    </div>
  );
}
