import { Geist, Geist_Mono } from "next/font/google";
import ContactForm from "@/components/ContactForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ContactPage() {
  return (
    <main
      className={`${geistSans.className} ${geistMono.className} flex flex-col items-center justify-center min-h-screen p-8 sm:p-16 bg-white`}
    >
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="max-w-xl text-center text-gray-700 mb-10">
        Have questions or feedback? Fill out the form below and we will get back to you as soon as possible.
      </p>
      <ContactForm />
    </main>
  );
}
