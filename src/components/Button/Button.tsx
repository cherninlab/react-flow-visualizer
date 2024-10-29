import React from 'react';
import styles from './Button.module.css';

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
      <button className={styles.button} {...props}>
        {props.children}
      </button>
  );
};

export default Button;
