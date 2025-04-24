import HomeFooter from "./components/footer/home_footer";
import HomeHeader from "./components/home_header";
import WelcomeSection from "./components/welcome_section";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className={styles.homeDiv}>
        <WelcomeSection />
      </div>
      <HomeFooter />
    </>
  );
}
