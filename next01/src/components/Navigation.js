"use client";
import Link from "next/link";
import "@/assets/style.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="menu">
        <li className={clsx(pathname === "/" && "active")}>
          <Link href="/">Home</Link>
        </li>
        <li className={clsx(pathname === "/about" && "active")}>
          <Link href="/about">About</Link>
        </li>
        <li className={clsx(pathname === "/products" && "active")}>
          <Link href="/products">Products</Link>
        </li>
        <li className={clsx(pathname === "/tin-tuc" && "active")}>
          <Link href="/tin-tuc">Tin tuc</Link>
        </li>
      </ul>
    </nav>
  );
}
