import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${geistSans.className} ${geistMono.className} flex flex-col items-center justify-center text-center min-h-screen px-6 py-16 gap-10 bg-white`}
    >
      <section className="flex flex-col gap-8 max-w-2xl items-center">
        <h1 className="text-3xl font-bold">
          Welcome to StayEase – Your Booking Companion 🏡
        </h1>

        <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed font-mono text-left">
          <li>Discover handpicked vacation rentals around the world.</li>
          <li>Book your stay with secure payments and flexible options.</li>
          <li>Become a host and earn income by listing your property.</li>
        </ul>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/listings"
            className="bg-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition"
          >
            Browse Listings
          </Link>
          <Link
            href="/host"
            className="bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition"
          >
            List Your Property
          </Link>
        </div>
      </section>
    </main>
  );
}
