import styles from "./footer.module.css";
import FooterTaps from "./footer_taps";
import SocialMedia from "./social_media";

export default function HomeFooter() {
    return (
        <div className={styles.homeFooter}>
            <SocialMedia />
            <FooterTaps />
            <p>Footer</p>
            <p>Footer</p>
        </div>
    );
}