import Image from "next/image";
import Link from "next/link";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header loggedIn={false} />
    </main>
  );
}
