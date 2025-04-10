import React from 'react'
import styles from "../logInPart.module.css";


export default function InputField({ label, type, placeholder, onChange, condition , onError }) {
 return (
      <div>
        <p className={styles.input_label}>{label}</p>
        <input className={ condition ? styles.input_field_error : styles.input_field} type={type} placeholder={placeholder} onChange={onChange} />
        {condition && <p className={styles.input_error}>{onError}</p>}
      </div>
    );
}
