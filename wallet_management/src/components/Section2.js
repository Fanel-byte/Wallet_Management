import React, { useState } from "react";
import { Line } from "react-chartjs-2"; // Example usage of a chart (chart.js)
import line from "./../assets/line.png"; 

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

{/* Green line below the title */}
{/* Image below the title */}
<div className="flex justify-center mt-2">
  <img
    src={line}
    alt="Decorative Line"
    className="w-30 py-0"
  />
</div>
      </div>

      <div className="flex justify-center mb-10 space-x-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg hover:bg-[#A3D500] transition"
        >
          Histogramme des Rendements
        </button>
        <button className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg hover:bg-[#A3D500] transition">
        Courbe de Performance Cumulée
        </button>
        <button className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg hover:bg-[#A3D500] transition">
        Graphique de Volatilité
        </button>
      </div>

      <div className="flex justify-center space-x-10">
        {/* Form on the left */}
        {showForm && (
          <div className="w-1/3  p-6 rounded-lg ">
            <form>
              <label className="block mb-4">
                Montant initial d’investissement (€)
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded text-black"
                  placeholder="Ex: 1000"
                />
              </label>
              <label className="block mb-4">
              Montant des contributions récurrentes (€)
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded text-black"
                  placeholder="Ex: 100"
                />
              </label>
              <label className="block mb-4">
              Fréquence des contributions
                <select className="mt-2 p-2 w-full rounded text-black">
                  <option value="monthly">Mois</option>
                  <option value="quarterly">Trimestre</option>
                  <option value="yearly">Année</option>
                </select>
              </label>
              <label className="block mb-4 ">
              Durée d’investissement (ans)
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded text-black"
                  placeholder="Ex: 5"
                />
              </label>
              <label className="block mb-4">
              Frais de gestion annuels (€)
                <input
                  type="number"
                  className="mt-2 p-2 w-full rounded text-black"
                  placeholder="Ex: 1"
                />
              </label>
              <label className="block mb-4">
              Sélectionnez vos Actions (Stocks)
                <select className="mt-2 p-2 w-full rounded text-black">
                  <option value="stocks">Choice 1</option>
                  <option value="bonds">Choice 2</option>
                  <option value="ETFs">Choice 3</option>
                </select>
              </label>
              <label className="block mb-4">
              Sélectionnez vos Obligations (Bonds)
                <select className="mt-2 p-2 w-full rounded text-black">
                  <option value="stocks">Choice 1</option>
                  <option value="bonds">Choice 2</option>
                  <option value="ETFs">Choice 3</option>
                </select>
              </label>
              <label className="block mb-4">
              Sélectionnez vos ETF (Exchange-Traded Funds)
                <select className="mt-2 p-2 w-full rounded text-black">
                  <option value="stocks">Choice 1</option>
                  <option value="bonds">Choice 2</option>
                  <option value="ETFs">Choice 3</option>
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
      <div className="flex items-center justify-center py-15">
  <h1 className="text-3xl font-bold text-center  py-100">
    Avec ce taux, au bout de <span className="text-[#CFFF24]">5 ans</span>, vous aurez 
    <span className="text-[#CFFF24]"> 25 000 € </span> dans votre 
    <span className="text-[#CFFF24]"> Wallet </span> !
  </h1>
</div>

    </section>
  );
}

export default Section2;
