import React from "react";

function StrikethroughText({text, strikethrough, strikethroughColor, color}) {
    const parts = text.split(new RegExp(`(${strikethrough})`, 'gi'));

    return (
        <h1>
            {parts.map((part, index) => 
                part.toLowerCase() === strikethrough.toLowerCase() ? 
                (<span key={index} style={{ textDecorationColor: strikethroughColor, textDecoration: 'line-through', color: color, textDecorationThickness: '6px'}}>{part}</span>
                    ) : (
                        part
                    )
            )}
        </h1>
    );
}

export default StrikethroughText;