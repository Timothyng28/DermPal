import React from "react";

function HighlightedText({ text, highlight, highlightColor, color }) {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <h1>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={index}
            style={{
              backgroundColor: highlightColor,
              borderRadius: "8px",
              padding: "0px 8px",
              color: color,
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </h1>
  );
}

export default HighlightedText;
