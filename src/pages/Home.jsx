import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import Loader from "../components/Loader";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json") // ✅ FIXED PATH
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  // 📊 Stats calculation
  const total = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const overdue = friends.filter(f => f.status === "overdue").length;
  const interactions = 12; // static for now

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* 🔝 HERO SECTION */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg shadow">
          + Add a Friend
        </button>

        {/* <img src={hero} className="mx-auto mt-6 w-64" /> */}
      </div>

      {/* 📊 STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
        
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-2xl font-bold text-green-700">{total}</h2>
          <p className="text-gray-500 text-sm">Total Friends</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-2xl font-bold text-green-700">{onTrack}</h2>
          <p className="text-gray-500 text-sm">On Track</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-2xl font-bold text-green-700">{overdue}</h2>
          <p className="text-gray-500 text-sm">Need Attention</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-2xl font-bold text-green-700">{interactions}</h2>
          <p className="text-gray-500 text-sm">Interactions This Month</p>
        </div>

      </div>

      {/* 👥 FRIENDS SECTION */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Your Friends
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

    </div>
  );
}