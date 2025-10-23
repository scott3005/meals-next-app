"use client";

import React from "react";
import Link from "next/link";

import classes from "./MainHeader.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  return (
    <div className={classes.headerdiv}>
      <div>
        <Image
          src="https://picsum.photos/id/15/200"
          alt="a puppy dog"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div>
        <p>
          <Link href="/" className={path === "/" ? "text-blue-200" : ""}>
            Home Page
          </Link>
        </p>
        <p>
          <Link
            href="/community"
            className={path.startsWith("/community") ? "text-blue-200" : ""}
          >
            Community
          </Link>
        </p>
        <p>
          <Link
            href="/meals/share"
            className={path === "/meals/share" ? "text-blue-200" : ""}
          >
            Share meal
          </Link>
        </p>
      </div>
    </div>
  );
}
