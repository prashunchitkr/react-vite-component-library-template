import styles from "./Button.module.css"

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
