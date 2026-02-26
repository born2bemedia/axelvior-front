import React from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './CheckBox.module.scss';

interface CheckboxProps {
  label: string;
  registration: UseFormRegisterReturn;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, registration }) => {
  return (
    <label className={styles.custom_checkbox_label}>
      <input type="checkbox" className={styles.custom_checkbox_input} {...registration} />
      <span className={styles.custom_checkbox_element}></span>
      <span className={styles.custom_checkbox_label_title}>{label}</span>
    </label>
  );
};
