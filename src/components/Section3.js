import React from "react";
import line from "./../assets/line.png"; 

function Section3() {
  return (
    <section id="section3" className="h-screen flex items-center justify-center text-white">
    <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Analyse</h2>
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
<div className="flex justify-between items-center px-10 py-10 space-x-4">
  <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
    Box 1
  </div>
  <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
    Box 2
  </div>
  <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
    Box 3
  </div>
  <div className="w-1/4 bg-gray-200 text-center p-6 rounded-lg shadow-md">
    Box 4
  </div>
</div>

</div>

    </section>
  );
}

export default Section3;
