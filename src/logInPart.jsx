import styles from "./logInPart.module.css";
import { useState } from "react";
import InputField from "./components/InputField";
// import { withRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function HorizentalLine() {
  return <div className={styles.horizental_line}></div>;
}

function LogInPart() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleOnEmailChange = (e) => {
    validateEmail(e.target.value);
    setValues((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleOnPasswordChange = (e) => {
    validatePassword(e.target.value);
    setValues((prev) => ({ ...prev, password: e.target.value }));
  };

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Email is not valid" }));
    }else{
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
    } else if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters with a letter and a number",
      }));
    }else{
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  }

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    
    validateEmail(email);
    validatePassword(password);
    

    if(!((!!errors.password) && (!!errors.email))){
      navigate('/home', { replace: true });
    }
  };

  return (
    <form onSubmit={handelOnSubmit}>
      <div className={styles.logIn}>
        <span className={styles.login_welcome_text}>Welcome Back 👋</span>
        <span className={styles.logIn_welcome_speech}>
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </span>
        <InputField
          label="Email"
          type="email"
          placeholder="Example@email.com"
          value={values.email}
          onChange={handleOnEmailChange}
          condition={!!errors.email}
          onError={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={values.password}
          onChange={handleOnPasswordChange}
          condition={!!errors.password}
          onError={errors.password}
        />
        <p className={styles.forget_password}>Forget Password?</p>
        <button className={styles.logIn_button}>Log In</button>
        <div className={styles.horizental_line_div}>
          <HorizentalLine />
          <h5 className={styles.or_text}>Or</h5>
          <HorizentalLine />
        </div>
        <div className={styles.social_media_div}>
          <button>
            <img
              src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png"
              alt="google icon"
            />{" "}
            Continue with Google
          </button>
          <button>
            <img
              src="https://icon-library.com/images/small-facebook-icon-transparent/small-facebook-icon-transparent-22.jpg"
              alt="facebook icon"
            />{" "}
            Continue with Facebook
          </button>
        </div>
        <div className={styles.doesnt_have_account}>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LogInPart;