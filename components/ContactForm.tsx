"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    try {
      // Simulate API call or integrate your backend here
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl flex flex-col gap-6"
      noValidate
    >
      <InputField
        label="Name"
        name="name"
        type="text"
        placeholder="Your full name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="your.email@example.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputField
        label="Subject"
        name="subject"
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <TextAreaField
        label="Message"
        name="message"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-semibold mt-2">Thank you! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-semibold mt-2">Oops! Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col text-left">
      <span className="mb-1 font-medium">{label}{required ? "*" : ""}</span>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col text-left">
      <span className="mb-1 font-medium">{label}{required ? "*" : ""}</span>
      <textarea
        className="border border-gray-300 rounded-md px-4 py-2 resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-pink-500"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
