import styles from "../home.module.css";
import leftWellcomImage from "../../../assets/images/photoheader 1 1.png";
import rightWellcomImage from "../../../assets/images/photo_2023-05-18_20-15-02 1.png";
import CustomButton from "./custom_button";

export default function WelcomeSection() {
  return (
    <div className={styles.wellcomeSection}>
      <div className={styles.wellcomeSectionColumn}>
        <p className={styles.wellcomeSectionTitle}>
          Discover Our Flower Shop's Delightful Collection
        </p>
        <div className={styles.wellcomeSectionColumnDescriptionPart}>
          <img src={rightWellcomImage} alt="flowers background" />
          <div>
          <p className={styles.wellcomeSectionSubtitle}>
            Welcome to our enchanting flower emporium, where beauty blossoms and
            dreams take shape. Step into a world of vibrant colors, captivating
            fragrances, and artistry that will leave you spellbound.
          </p>
          <CustomButton title="Shop Now" />
          </div>
        </div>
      </div>
      <div>
        <img src={leftWellcomImage} alt="flowers background" />
      </div>
    </div>
  );
}
