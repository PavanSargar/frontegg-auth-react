import React, { useEffect } from "react";
import "./App.css";

import { ContextHolder } from "@frontegg/rest-api";
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // admin user
  const showAdmin = () => {
    AdminPortal.show();
  };

  let authenticated = (
    <div className="card">
      <div>
        <img width={100} src={user?.profilePictureUrl} alt={user?.name} />
        <h2>Welcome {user?.name}</h2>
      </div>
      <div className="detail">
        <span className="heading">Name: {user?.name}</span>
        <span className="heading">Email: {user?.email}</span>
      </div>
      <div>
        <button onClick={() => logout()} className="button">
          Logout
        </button>
        <button onClick={() => showAdmin()} className="button">
          View full Profile
        </button>
      </div>
    </div>
  );

  let notAuthenticated = (
    <div>
      <button onClick={() => loginWithRedirect()} className="button">
        Login
      </button>
    </div>
  );

  return (
    <div className="App">
      {isAuthenticated ? authenticated : notAuthenticated}
    </div>
  );
}

export default App;
