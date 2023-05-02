import "./index.scss";

export const DialogActions = ({ children }) => {
  return <div className="actions">{children}</div>;
};

export const Dialog = ({ children, onCloseDialog }) => {
  return (
    <div
      className="dialog"
      onClick={(e) => {
        if ([...e.target.classList].includes("dialog")) {
          onCloseDialog();
        }
      }}
    >
      <div className="dialog-container">{children}</div>
    </div>
  );
};
