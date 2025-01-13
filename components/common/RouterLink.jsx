"use client";

import { useRouter } from "next/navigation";
import { Fragment } from "react";

const RouterLink = ({ children, path }) => {
  const router = useRouter();

  return <div onClick={() => router.push(path)}>{children}</div>;
};

export default RouterLink;
