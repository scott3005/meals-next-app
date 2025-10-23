"use client";
import React from "react";

export default function Error({ error }) {
  return <div>error occurred :{JSON.stringify(error)}</div>;
}
