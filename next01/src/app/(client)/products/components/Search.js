"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Search({ searchParams }) {
  const route = useRouter();
  const pathName = usePathname();
  const [param, setParam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = e.target.status.value;
    const href = pathName + "?" + new URLSearchParams({ status, param });
    route.push(href);
    e.target.reset();
  };
  return (
    <div>
      <h2>Danh sach san pham</h2>
      <h2>Trang thai: {searchParams?.status}</h2>
      <h2>Tu khoa: {searchParams?.keywords}</h2>
      <form onSubmit={handleSubmit}>
        <select name="status">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="imactice">None active</option>
        </select>
        <input
          type="search"
          name="keywords"
          placeholder="Tu khoa..."
          onChange={(e) => setParam(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}
