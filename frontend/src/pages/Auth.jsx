import React, { useState } from "react";
import "../styles/App.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="main-content">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {isLogin ? (
          <form className="auth-form">
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="auth-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button type="submit">Register</button>
          </form>
        )}

        <p>
          {isLogin ? (
            <>
              Need an account?{" "}
              <span
                className="toggle-link"
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="toggle-link"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
