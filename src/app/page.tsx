import Image from "next/image";
import { metadata } from "./layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-slate-50 text-4xl">Practice Champ</h1>
      </div>
      <div className="text-slate-200">
        <p>{metadata.description}</p>
      </div>
    </main>
  );
}
