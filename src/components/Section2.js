import React, { useState } from "react";
import { Line } from "react-chartjs-2"; // Example usage of a chart (chart.js)
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register all necessary components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function Section2() {
  const [showForm, setShowForm] = useState(false);

  // Sample data for the chart (customize it based on your logic)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Portfolio",
        data: [1000, 1050, 1100, 1200, 1300, 1400, 1500, 1550, 1600, 1650, 1700, 1750],
        borderColor: "#CFFF24",
        backgroundColor: "rgba(207, 255, 36, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Growth of Your Portfolio",
      },
    },
  };

  return (
    <section id="section2" className="py-16 bg-black text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Mon Portefeuille</h2>
        {/* Green line below the title */}
        <div className="w-24 h-1 bg-[#CFFF24] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="flex justify-center mb-10 space-x-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg hover:bg-[#A3D500] transition"
        >
          Button 1
        </button>
        <button className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg hover:bg-[#A3D500] transition">
          Button 2
        </button>
        <button className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg hover:bg-[#A3D500] transition">
          Button 3
        </button>
      </div>

      <div className="flex justify-center space-x-10">
        {/* Form on the left */}
        {showForm && (
          <div className="w-1/3  p-6 rounded-lg ">
            <h3 className="text-xl font-bold mb-4 text-White">Enter Parameters</h3>
            <form>
              <label className="block mb-4">
                Initial Investment Amount:
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded"
                  placeholder="Ex: 1000"
                />
              </label>
              <label className="block mb-4">
                Recurring Contribution Amount:
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded"
                  placeholder="Ex: 100"
                />
              </label>
              <label className="block mb-4">
                Contribution Frequency:
                <select className="mt-2 p-2 w-full rounded">
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </label>
              <label className="block mb-4">
                Investment Duration (in years):
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded"
                  placeholder="Ex: 5"
                />
              </label>
              <label className="block mb-4">
                Annual Management Fees (%):
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded"
                  placeholder="Ex: 1"
                />
              </label>
              <label className="block mb-4">
                Asset Choices:
                <select className="mt-2 p-2 w-full rounded">
                  <option value="stocks">Stocks</option>
                  <option value="bonds">Bonds</option>
                  <option value="ETFs">ETFs</option>
                </select>
              </label>
            </form>
          </div>
        )}

        {/* Chart on the right */}
        <div className="w-2/3 py-20" >
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
}

export default Section2;
