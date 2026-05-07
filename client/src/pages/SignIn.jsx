import { useState } from "react";
import "./SignIn.css";

export function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <title>The Fiscal Atelier - Login</title>
      <body>
        <div className="app-container">
          <div className="side-brand">
            <div className="side-brand-bg"></div>
            <div className="side-brand-overlay"></div>

            <div className="brand-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0040A1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            <div className="tagline-container">
              <div className="clarity-tag">Financial Clarity</div>
              <h1 className="side-title">
                Track your money.
                <br />
                Understand your habits.
              </h1>
              <p className="side-desc">
                Understand your spending, track your income, and stay in
                control.
              </p>
            </div>
          </div>

          <main className="side-form">
            <div className="form-container">
              <header className="header-main">
                <h2>The Fiscal Atelier</h2>
                <p>Welcome back to your client portal.</p>
              </header>

              <div className="signin-card">
                <form onsubmit="return false;">
                  <div className="field">
                    <label for="email">
                      Email Address <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@atelier.com"
                    />
                  </div>

                  <div className="field">
                    <label for="password">
                      Password <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="actions">
                    <label className="remember">
                      <input
                        type="checkbox"
                        className="hidden-cb"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      <div className="checkbox-ui">
                        {rememberMe && (
                          <svg
                            className="check-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                      <span className="rem-text">Remember Me</span>
                    </label>
                    <a href="#" className="forgot">
                      Forgot Password?
                    </a>
                  </div>

                  <button type="submit" className="btn-signin">
                    Sign In
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </form>

                <div className="signup-box">
                  New to The Fiscal Atelier?{" "}
                  <a href="#" className="signup-link">
                    Sign up
                  </a>
                </div>
              </div>

              <div className="security">
                <div className="sec-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Bank-level security</span>
                </div>
                <div className="sec-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>256-bit encryption</span>
                </div>
              </div>
            </div>

            <footer>
              <p className="foot-copy">
                &copy; 2024 The Fiscal Atelier • Financial Curators
              </p>
            </footer>
          </main>
        </div>
      </body>
    </>
  );
}
