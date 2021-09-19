import router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";

export function withAuth(Component) {
  return function AuthenticatedComponent() {
    const { user } = useSelector(selectUser);

    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user]);

    return (
      <>
        <Component />
      </>
    );
  };
}

export default withAuth;
