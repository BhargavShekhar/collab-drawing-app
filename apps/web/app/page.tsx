"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="bg-white rounded-xl flex items-center gap-4"
        style={{
          padding: "20px",
        }}
      >
        <label
          htmlFor="params"
          className="text-black font-medium text-lg"
        >
          Enter Room ID:
        </label>
        <input
          type="text"
          name="params"
          id="params"
          placeholder="Room ID"
          className="rounded-md border border-gray-300 px-4 py-2 text-black text-lg"
          style={{
            padding: "7px",
          }}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md text-lg"
          style={{ padding: "8px 16px" }}
          onClick={() => {
            router.push(`/room/${roomId}`)
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
