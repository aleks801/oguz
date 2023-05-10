import styles from "./Button.module.css"

type ButtonProps = {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return <button className={styles.root}>{label}</button>
}
