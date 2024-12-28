import React, { useEffect, useState } from "react";
import line from "./../assets/line.png"; 

function Section3() {
  const [metrics, setMetrics] = useState({
    sharpe_ratio: null,
    cagr: null,
    standard_deviation: null,
    calcul_volatilite: null,
  });

  useEffect(() => {
    // Replace this with your actual request data
    const requestData = {
      dateDebut: "2023-01-01",
      dateFin: "2023-12-31",
      investInit: 10000,
      investRecu: 500,
      listActifs: [
        { etf: "ETF1", percentage: 50 },
        { etf: "ETF2", percentage: 50 },
      ],
      fraisGestion: 0.02,
      frequenceContributions: "monthly",
    };

    fetch("http://127.0.0.1:5000/metrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true") {
          setMetrics({
            sharpe_ratio: data.stats.sharpe_ratio,
            cagr: data.stats.cagr,
            standard_deviation: data.stats.standard_deviation,
            calcul_volatilite: data.stats.calcul_volatilite,
          });
        }
      })
      .catch((error) => console.error("Error fetching metrics:", error));
  }, []);

  return (
    <section id="section3" className="h-screen flex items-center justify-center text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Analyse</h2>
        {/* Green line below the title */}
        <div className="flex justify-center mt-2">
          <img src={line} alt="Decorative Line" className="w-30 py-0" />
        </div>
        <div className="flex justify-between items-center px-10 py-10 space-x-4">
          <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Sharpe Ratio</h3>
            <p>{metrics.sharpe_ratio !== null ? metrics.sharpe_ratio.toFixed(2) : "Loading..."}</p>
          </div>
          <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">CAGR</h3>
            <p>{metrics.cagr !== null ? metrics.cagr.toFixed(2) : "Loading..."}</p>
          </div>
          <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Standard Deviation</h3>
            <p>{metrics.standard_deviation !== null ? metrics.standard_deviation.toFixed(2) : "Loading..."}</p>
          </div>
          <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Volatility</h3>
            <p>{metrics.calcul_volatilite !== null ? metrics.calcul_volatilite.toFixed(2) : "Loading..."}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
