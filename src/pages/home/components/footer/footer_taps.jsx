// import headerStyles from "../../home.module.css"
import styles from "./footer.module.css";

export default function FooterTaps() {
    return (
        <div>
            <p className={styles.footerTapsHeadLine}>Categories</p>
            <p className={styles.footerTaps}>About Us</p>
            <p className={styles.footerTaps}>Catalog</p>
            <p className={styles.footerTaps}>Contact</p>
        </div>
    );
}