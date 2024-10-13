import './toast.scss';

function Toast({ children, setToastShown }) {
  return (
    <div className="toast">
      <span className="toast-message">{children}</span>
      <button className="toast-close" onClick={() => setToastShown(false)}>
        &times;
      </button>
    </div>
  );
}

export default Toast;
