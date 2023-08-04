"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b2f11ddc-1164-4a6e-aa25-e3067d321208");
  }, []);

  return null;
};
