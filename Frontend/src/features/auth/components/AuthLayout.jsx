import "../style/authLayout.scss";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth">
      <div className="auth__card">
        <div className="auth__header">
          <h1>BugTracker</h1>
          <p>Track and manage bugs efficiently</p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;