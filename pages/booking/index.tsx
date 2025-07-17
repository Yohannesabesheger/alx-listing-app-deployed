import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber,
      expirationDate,
      cvv,
      billingAddress,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !cardNumber ||
      !expirationDate ||
      !cvv ||
      !billingAddress
    ) {
      setError("All fields are required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.post("/api/bookings", formData);
      setSuccess(true);
      alert("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (err) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-md mt-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Confirm Your Booking</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {[
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "email", label: "Email", type: "email" },
          { name: "phoneNumber", label: "Phone Number" },
          { name: "cardNumber", label: "Card Number" },
          { name: "expirationDate", label: "Expiration Date" },
          { name: "cvv", label: "CVV" },
          { name: "billingAddress", label: "Billing Address" },
        ].map(({ name, label, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              id={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">Booking successful!</p>}
      </form>
    </div>
  );
}
