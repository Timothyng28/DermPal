import React, { useEffect } from "react";
import KUTE from "kute.js";

function Background() {

    useEffect(() => {
        // Initialize KUTE.js animation after the component mounts
        KUTE.fromTo(
          '#blob1',
          { path: '#blob1' },
          { path: '#blob2' },
          { repeat: 999, duration: 3000, yoyo: true }
        ).start();
      }, []);

  return (
    <svg
      id="visual"
      viewBox="0 0 960 540"
      width="960"
      height="540"
      version="1.1"
    >
      <g transform="translate(502.43328788104475 258.6274518826216)">
        <path
          id="blob1"
          d="M91.7 -166.5C116.1 -144.8 131.2 -114.6 151.1 -85.5C170.9 -56.3 195.5 -28.2 198.2 1.6C200.9 31.3 181.9 62.7 159.3 87C136.7 111.4 110.5 128.8 83.4 156.3C56.3 183.8 28.1 221.4 -1.5 224C-31.2 226.6 -62.3 194.3 -87.2 165.5C-112 136.6 -130.5 111.3 -159.9 84.3C-189.3 57.3 -229.7 28.7 -240.3 -6.2C-251 -41 -232 -82 -203.7 -110.9C-175.4 -139.7 -137.7 -156.5 -102.2 -171.8C-66.7 -187.1 -33.3 -201.1 0.2 -201.4C33.7 -201.6 67.3 -188.3 91.7 -166.5"
          fill="none"
          stroke="#D4A5F5"
          stroke-width="10"
        ></path>
      </g>
      <g transform="translate(481.1094647549471 255.34972480715487)" style={{visibility : "hidden"}}>
        <path
          id="blob2"
          d="M69.8 -120.7C83.2 -113.1 81.9 -79.8 93.3 -55.4C104.7 -31 128.8 -15.5 121.1 -4.5C113.3 6.5 73.5 13 66.6 45.2C59.7 77.4 85.6 135.2 80 132C74.3 128.8 37.2 64.4 -3.9 71.2C-45 77.9 -90 155.9 -110.8 167.9C-131.6 179.9 -128.1 125.9 -107.8 87C-87.5 48 -50.2 24 -52.7 -1.4C-55.1 -26.8 -97.3 -53.7 -111.2 -81.5C-125.1 -109.4 -110.8 -138.3 -87.6 -140.2C-64.3 -142.1 -32.2 -117 -2 -113.6C28.2 -110.1 56.3 -128.2 69.8 -120.7"
          fill="none"
          stroke="#A8DADC"
          stroke-width="10"
        ></path>
      </g>
    </svg>
  );
}

export default Background;
