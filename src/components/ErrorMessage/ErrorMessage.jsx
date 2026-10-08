import './ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <h2>⚠️ ¡Un hechizo ha fallado!</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;