// app/routes/admin/MessageSection.tsx
import React from "react";
import MessageCard from "./MessageCard";

// Define the Message type locally or import from appwrite
interface Message {
  $id: string;
  name: string;
  email: string;
  message: string;
  $createdAt: string;
  createdAt?: string;
}

interface MessageSectionProps {
  messages: Message[];
  title?: string;
}

export default function MessageSection({
  messages = [],
  title = "Recent Messages",
}: MessageSectionProps) {
  return (
    <section className="container mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-dark-100">{title}</h1>
        <span className="text-sm text-gray-500">
          {messages?.length || 0} message{messages?.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="space-y-4">
        {messages && messages.length > 0 ? (
          messages.map((msg) => (
            <MessageCard
              key={msg.$id}
              name={msg.name}
              email={msg.email}
              message={msg.message}
              date={msg.$createdAt || msg.createdAt || ""}
            />
          ))
        ) : (
          <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
            <p>No messages yet</p>
            <p className="text-sm mt-2">
              Messages from the contact form will appear here
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
