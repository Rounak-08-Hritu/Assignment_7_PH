import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useTimeline } from "../context/TimelineContext";

export default function Stats() {
  const { timeline } = useTimeline();

  const counts = {
    Text: 0,
    Call: 0,
    Video: 0
  };

  timeline.forEach((t) => counts[t.type]++);

  const data = Object.keys(counts).map((key) => ({
    name: key,
    value: counts[key]
  }));

  // Colors similar to your UI
  const COLORS = ["#7C3AED", "#1F2937", "#22C55E"]; 
  // purple, dark gray, green

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Friendship Analytics
        </h1>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-500 mb-4 text-sm">
            By Interaction Type
          </p>

          {/* Chart Centered */}
          <div className="flex flex-col items-center justify-center">
            <PieChart width={250} height={250}>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}   // makes donut
                outerRadius={100}
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>

            {/* Custom Legend */}
            <div className="flex gap-6 mt-4 text-sm">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  <span className="text-gray-600">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}