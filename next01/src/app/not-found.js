import Link from "next/link";
import Image from "next/image";
import notFoundImage from "@/assets/404.jpg";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Image
        src={notFoundImage}
        alt="404 not found"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Link href={"/"}>Go home</Link>
    </div>
  );
}
