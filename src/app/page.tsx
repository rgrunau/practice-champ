import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { metadata } from "./layout";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const href = userId ? "/studio" : "/sign-in";
  return (
    <main className="flex w-full max-w-5xl mx-auto min-h-screen flex-col items-start justify-center text-left p-12 md:p-24">
      <div>
        <h1 className="text-slate-50 text-7xl">Practice Champ</h1>
      </div>
      <div className="w-full max-w-sm text-slate-200 text-2xl mt-3">
        <p>{metadata.description}</p>
      </div>
      <div className="flex items-center justify-start mt-4">
        <Link
          href={href}
          className="text-slate-50 text-xl bg-blue-600 rounded-md px-2 py-4"
        >
          Log a Practice Session
        </Link>
      </div>
    </main>
  );
}
