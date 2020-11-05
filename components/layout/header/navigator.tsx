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
    console.log(router);
    setLoggedIn(router.asPath.startsWith('/interviews') || router.asPath.startsWith('/jobs'));
  }, [router]);

  return (
    loggedIn ? <LoggedInNav page={router.route} /> : <PublicNav />
  );
};

export default Navigator;
