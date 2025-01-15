import React from "react";

function Section4() {
  return (
    <section
      id="section4"
      className="h-screen flex flex-col items-center justify-center bg-black text-white px-8"
    >
      <h1 className="text-4xl font-bold text-[#CFFF24] mb-6 text-center">
        Comment fonctionne Wallet ?
      </h1>
      <p className="text-lg mb-8 text-center max-w-3xl">
        Wallet vous aide à simuler un portefeuille d'investissement à long
        terme. Fournissez simplement les données nécessaires, et Wallet vous
        affichera des analyses détaillées et des prédictions sur vos
        investissements.
      </p>
      <div className="space-y-8 text-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#CFFF24] mb-8">
            1. Saisissez vos informations
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl">
            Indiquez des détails tels que la{" "}
            <span className="font-semibold">date de début</span>, la{" "}
            <span className="font-semibold">date de fin</span>, le{" "}
            <span className="font-semibold">montant initial</span>, le{" "}
            <span className="font-semibold">montant récurrent</span>, et la{" "}
            <span className="font-semibold">récurrence</span> (mensuelle,
            annuelle, semestrielle, etc.).
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#CFFF24] mb-8">
            2. Ajoutez vos ETFs et leur répartition
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl">
            Spécifiez les <span className="font-semibold">ETFs</span> que vous
            souhaitez inclure ainsi que leur{" "}
            <span className="font-semibold">allocation en pourcentage</span>{" "}
            dans votre portefeuille.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#CFFF24] mb-8">
            3. Analysez votre portefeuille
          </h2>
            Avec un seul clique, consultez des graphiques et des données comme :
            <br></br>
            <ul className="list-disc mt-4 mx-auto inline-block text-left">
              <li>Évolution des rendements par actif</li>
              <li>Distribution des rendements</li>
              <li>Performance cumulée</li>
              <li>Mesures financières</li>
              <li>Régression linéaire pour les prévisions</li>
            </ul>
        </div>
        <div>
          <br></br>
        </div>
      </div>
    </section>
  );
}

export default Section4;
