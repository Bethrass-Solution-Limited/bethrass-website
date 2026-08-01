"use client";

import React from "react";
import { Header } from "@/components/layout/header";

/**
 * `Navbar` — thin wrapper for the site header to match requested structure.
 * Re-exports the existing `Header` implementation so consumers import
 * from `components/navigation` per the new project layout.
 */
export function Navbar() {
  return <Header />;
}

export default Navbar;
