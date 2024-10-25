import Image from "next/image";
import styles from "./page.module.css";
import HeadingTitle from "@/components/hero/HeadingTitle";
import Card from "@/components/post/Card";

export default function Home() {
  return (
    <main>
      <div>
      <HeadingTitle/>
      <Card/>
      </div>
    </main>
  );
}
