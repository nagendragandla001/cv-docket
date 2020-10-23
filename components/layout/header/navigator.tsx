import React, { useEffect, useState } from "react";
import {
  Typography,
} from "antd";
import { useRouter } from "next/router";
import LoggedInNav from "./loggedInNav";
import PublicNav from "./publicNav";

const { Text, Title } = Typography;

const Navigator = (): JSX.Element => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(router.asPath.startsWith('/user'));
  }, [router]);

  return (
    loggedIn ? <LoggedInNav /> : <PublicNav />
  );
};

export default Navigator;
