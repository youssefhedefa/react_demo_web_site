import styles from "../home.module.css";
import { HomeHeaderIcons } from "./home_header_icons";
import HomeTaps from "./home_taps";

function HomeText(){
    return (
        <h3>Blossomia</h3>
    )
}

export default function HomeHeader() {
    return (
        <div className={styles.homeHeader}>
            <HomeTaps />
            <HomeText/>
            <HomeHeaderIcons />
        </div>
    );
}