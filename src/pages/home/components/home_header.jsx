import styles from "../home.module.css";
import { HomeHeaderIcons } from "./home_header_icons";
import HomeTaps from "./home_taps";
import homeLogo from "../../../assets/images/Blossomia.png";

function HomeLogo(){
    return (
        <img src={homeLogo} alt="flowers background" />  
    )
}

export default function HomeHeader() {
    return (
        <div className={styles.homeHeader}>
            <HomeTaps />
            <HomeLogo/>
            <HomeHeaderIcons />
        </div>
    );
}