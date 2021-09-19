import React, { useEffect } from "react";

export function withAuth(Component) {
  return function AuthenticatedComponent() {
    const isAuthenticated = () => {
      return false;
    };

    useEffect(() => {
      if (!isAuthenticated) {
        alert("Not logged in");
      }
    }, []);

    return (
      <>
        {true ? (
          <Component />
        ) : (
          <div>
            Please <a href="/login">login</a> in order to view this part of the
            application.
          </div>
        )}
      </>
    );
  };
}

export default withAuth;
