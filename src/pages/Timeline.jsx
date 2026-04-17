import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";

import call from "../assets/call.png";
import text from "../assets/text.png";
import video from "../assets/video.png";

export default function Timeline() {
  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("All");

  // 🎯 filter logic
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter(item => item.type === filter);

  // 🔥 icon selector
  const getIcon = (type) => {
    if (type === "Call") return call;
    if (type === "Text") return text;
    if (type === "Video") return video;
  };

  const filters = ["All", "Call", "Text", "Video"];

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Timeline
      </h1>

      {/* 🔍 FILTER BUTTONS */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm border transition 
              ${
                filter === f
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 📜 TIMELINE LIST */}
      {filteredTimeline.length === 0 ? (
        <p className="text-gray-500">No interactions found</p>
      ) : (
        <div className="space-y-4">
          {filteredTimeline.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-4 flex items-center gap-4"
            >
              {/* ICON */}
              <img
                src={getIcon(item.type)}
                className="w-10 h-10"
              />

              {/* TEXT */}
              <div>
                <p className="font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}