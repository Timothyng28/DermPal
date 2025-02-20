import React from "react";
import SneakPeek from "./Sneakpeak";
import sample from "../../assets/dermAI_sample.png";

function DermAi() {
  return (
    <div>
      <SneakPeek image={sample}/>
    </div>
  );
}

export default DermAi;