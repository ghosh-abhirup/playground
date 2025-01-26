"use client"; // Indicates to next.js that this component is client side.
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  if (!show) return null;

  return "Loader...";
}
