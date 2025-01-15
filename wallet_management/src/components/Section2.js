import React, { useState } from "react";
import { Line } from "react-chartjs-2"; // Example usage of a chart (chart.js)
import line from "./../assets/line.png"; 
import axios from 'axios';
import Etf from "./Etf";
import Plot from 'react-plotly.js';

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
  const [plotData, setPlotData] = useState(null);

  const [dateDebut, setDateDebut] = useState('2012-12-12');
  const [dateFin, setDateFin] = useState('2024-12-12');
  const [frequenceContributions, setFrequenceContributions] = useState('monthly'); // State to capture selected frequency

  const [investInit, setInvestInit] = useState(20000);
  const [investRecu, setInvestRecu] = useState(1000);
  const [fraisGestion, setFraisGestion] = useState(50);

  const [listActifs, setListActifs] = useState([]);
  const [isAnalysisStarted, setIsAnalysisStarted] = useState(false); // State for tracking button click


  const fetch_data = () => {
    const query_params = {
      "dateDebut": dateDebut,
      "dateFin": dateFin,
      "investInit": investInit,
      "investRecu": investRecu,
      "listActifs": listActifs,
      "fraisGestion": fraisGestion,
      "frequenceContributions": frequenceContributions,
    };

    axios.post('http://localhost:5000/get_all_data', query_params)
      .then((result) => {
        if (result.data.success === 'true') {
          if (result.data.json_figures) {
            const json_figures = Object.fromEntries(
              Object.entries(result.data.json_figures).map(([key, value]) => [key, JSON.parse(value)])
            );
            setPlotData(json_figures);
          }
        } else {
          console.log("error while fetching the data");
        }
      })
      .catch((error) => {
        if (error.response) {
          // Handle the error
        } else if (error.request) {
          // Handle the error
        } else {
          // Handle the error
        }
      });
  };

  const get_figures = () => {
    if (plotData != null) {
      return (
        <div className="w-75 d-flex flex-column">
          {
            Object.entries(plotData).map(([plot_name, plot]) => (
              <Plot
                data={plot.data}
                layout={plot.layout}
              />
            ))
          }
        </div>
      );
    } else {
      return null;
    }
  };

  // Function to calculate date difference in years
  const calculateYearsDifference = () => {
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInYears = diffInTime / (1000 * 3600 * 24 * 365.25); // 365.25 to account for leap years
    return diffInYears.toFixed(2); // rounding to two decimal places
  };

  const calculateInvestment = () => {
    // Calculez le montant total de l'investissement dans le wallet
    // Exemple : Montant initial + (contribution récurrente * nombre d'années)
    const totalInvestment = investInit + (investRecu * calculateYearsDifference() / 1000);
    return totalInvestment;
  };

  return (
    <section id="section2" className="py-16 bg-black text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Mon Portefeuille</h2>
        
        <div className="flex justify-center mt-2">
          <img
            src={line}
            alt="Decorative Line"
            className="w-30 py-0"
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col space-y-8">
          <form>
            <label className="block mb-4">
              Montant initial d’investissement (€)
              <input
                type="number"
                value={investInit}
                id="portfolio_form_invest_init"
                onChange={(e) => setInvestInit(e.target.value)}
                className="mt-2 p-2 w-full rounded text-black"
              />
            </label>
            <label className="block mb-4">
              Montant des contributions récurrentes (€)
              <input
                type="number"
                value={investRecu}
                id="portfolio_form_invest_recu"
                onChange={(e) => setInvestRecu(e.target.value)}
                className="mt-2 p-2 w-full rounded text-black"
                placeholder="Ex: 100"
              />
            </label>
            <label className="block mb-4">
              Fréquence des contributions
              <select
                value={frequenceContributions} // Set the selected value here
                onChange={(e) => setFrequenceContributions(e.target.value)} // Update the state on change
                className="mt-2 p-2 w-full rounded text-black"
              >
                <option value="monthly">Mois</option>
                <option value="quarterly">Trimestre</option>
                <option value="yearly">Année</option>
              </select>
            </label>
            <label className="block mb-4 ">
              Date début d’investissement
              <input
                type="date"
                className="mt-2 p-2 w-full rounded text-black"
                id="portfolio_form_date_debut" value={dateDebut} 
                onChange={(e) => setDateDebut(e.target.value)}
              />
            </label>
            <label className="block mb-4 ">
              Date fin d’investissement
              <input
                type="date"
                className="mt-2 p-2 w-full rounded text-black"
                id="portfolio_form_date_fin" value={dateFin} 
                onChange={(e) => setDateFin(e.target.value)}
              />
            </label>
            <label className="block mb-4">
              Frais de gestion annuels (€)
              <input
                type="number"
                className="mt-2 p-2 w-full rounded text-black"
                id="portfolio_form_frais_gestion" value={fraisGestion} 
                onChange={(e) => setFraisGestion(e.target.value)}
              />
            </label>
            <Etf listActifs={listActifs} setListActifs={setListActifs} />              
            {/* Button to start calculation */}
            <button
              type="button"
              className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg mt-4 hover:bg-[#A3D500] transition font-bold w-full"
              onClick={() => {
                console.log("fetching")
                fetch_data()
                setIsAnalysisStarted(true);
                console.log("Calculation started!");
                console.log(listActifs)
                // Add your calculation logic here
              }}
            >
              Commencer L'analyse
            </button>
          </form>
          <div className="w-full max-w-xl text-center">
            {get_figures()}
          </div>
      </div>

      {isAnalysisStarted && (
      <div className="flex items-center justify-center py-15">
        <h1 className="text-3xl font-bold text-center py-100">
          Avec ce taux, au bout de <span className="text-[#CFFF24]">{calculateYearsDifference()}</span> ans, vous aurez 
          <span className="text-[#CFFF24]"> {calculateInvestment()}€ </span> dans votre 
          <span className="text-[#CFFF24]"> Wallet </span> !
        </h1>
      </div>
)}


      
    </section>
  );
}

export default Section2;
