import { useParams } from "react-router-dom";
import data from "../data/friends.json";
import { useTimeline } from "../context/TimelineContext";
import toast from "react-hot-toast";

import call from "../assets/call.png";
import text from "../assets/text.png";
import video from "../assets/video.png";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = data.find(f => f.id === parseInt(id));
  const { addEntry } = useTimeline();

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} logged!`);
  };

  const statusStyles = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">

        {/* 🔹 LEFT COLUMN */}
        <div className="bg-white rounded-2xl shadow p-6 text-center h-full flex flex-col">
          
          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto object-cover"
          />

          <h2 className="mt-3 text-lg font-semibold text-gray-800">
            {friend.name}
          </h2>

          {/* STATUS */}
          <span className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${statusStyles[friend.status]}`}>
            {friend.status}
          </span>

          {/* TAGS */}
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {friend.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* BIO */}
          <p className="text-gray-500 text-sm mt-4 italic">
            "{friend.bio}"
          </p>

          {/* EMAIL */}
          <p className="text-gray-400 text-sm mt-2">
            Preferred: {friend.email}
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-auto space-y-2">
            <button className="w-full py-2 rounded bg-gray-100 hover:bg-gray-200">
              ⏰ Snooze 2 Weeks
            </button>
            <button className="w-full py-2 rounded bg-gray-100 hover:bg-gray-200">
              📦 Archive
            </button>
            <button className="w-full py-2 rounded bg-red-100 text-red-600 hover:bg-red-200">
              🗑 Delete
            </button>
          </div>
        </div>

        {/* 🔹 RIGHT COLUMN */}
        <div className="h-full flex flex-col gap-6">

          {/* 📊 CARD 1 */}
          <div className="bg-white rounded-xl shadow p-4 flex-1 flex flex-col justify-center text-center">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-green-700">
                  {friend.days_since_contact}
                </h2>
                <p className="text-xs text-gray-500">Days Since Contact</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-700">
                  {friend.goal}
                </h2>
                <p className="text-xs text-gray-500">Goal</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-700">
                  {friend.next_due_date}
                </h2>
                <p className="text-xs text-gray-500">Next Due</p>
              </div>
            </div>
          </div>

          {/* 🎯 CARD 2 */}
          <div className="bg-white rounded-xl shadow p-4 flex-1 flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-700">
                Relationship Goal
              </h3>
              <button className="text-sm bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">
                Edit
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Connect every <span className="font-semibold">{friend.goal} days</span>
            </p>
          </div>

          {/* ⚡ CARD 3 */}
          <div className="bg-white rounded-xl shadow p-4 flex-1 flex flex-col justify-center">
            <h3 className="font-semibold text-gray-700 mb-3">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">

              <button
                onClick={() => handleAction("Call")}
                className="text-center hover:bg-gray-50 p-3 rounded-xl transition"
              >
                <img src={call} className="w-6 mx-auto mb-1" />
                <p className="text-sm">Call</p>
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="text-center hover:bg-gray-50 p-3 rounded-xl transition"
              >
                <img src={text} className="w-6 mx-auto mb-1" />
                <p className="text-sm">Text</p>
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="text-center hover:bg-gray-50 p-3 rounded-xl transition"
              >
                <img src={video} className="w-6 mx-auto mb-1" />
                <p className="text-sm">Video</p>
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}