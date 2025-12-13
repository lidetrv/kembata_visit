// components/MessageCard.tsx
import React from "react";
import { timeAgo } from "~/lib/utils";

interface MessageCardProps {
  name: string;
  email: string;
  message: string;
  date: string;
}

export default function MessageCard({
  name,
  email,
  message,
  date,
}: MessageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow border p-4 transition-all hover:shadow-md">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-semibold text-sm">
              {name?.charAt(0).toUpperCase() || "?"}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">
              {name || "Unknown"}
            </h3>
            <p className="text-sm text-gray-600 truncate">{email}</p>
          </div>
        </div>
        <div className="text-right ml-2">
          <span className="text-xs text-gray-500 whitespace-nowrap">
            {timeAgo(date)}
          </span>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-gray-700 text-sm">{message}</p>
      </div>
    </div>
  );
}
