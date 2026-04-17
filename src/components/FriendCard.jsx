import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusStyles = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-center cursor-pointer hover:shadow-md hover:-translate-y-1 transition duration-300"
    >
      {/* PROFILE IMAGE */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full mx-auto object-cover"
      />

      {/* NAME */}
      <h2 className="mt-3 font-semibold text-gray-800">
        {friend.name}
      </h2>

      {/* DAYS */}
      <p className="text-sm text-gray-400">
        {friend.days_since_contact} days ago
      </p>

      {/* TAGS */}
      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {friend.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* STATUS BADGE */}
      <div className="mt-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyles[friend.status]}`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
}