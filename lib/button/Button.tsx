interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
