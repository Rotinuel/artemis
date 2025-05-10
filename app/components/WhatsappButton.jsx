"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+2348033502393"; // Replace with your WhatsApp number

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rounded-full shadow-lg p-3 hover:bg-green-600 transition duration-300 flex justify-center items-center bg-green-500"
      style={{ width: "60px", height: "60px" }} // Adjust size for better visibility
    >
      <FaWhatsapp className="text-white h-[32px] w-[32px]"/>
    </Link>
  );
}
