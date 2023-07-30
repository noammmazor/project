import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../Style/TipCard.css"

export default function TipCard({ text, hiddenText }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="d-flex align-items-center justify-content-center"
        style={{
          position: 'relative',
          width: '400px',
          height: '200px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            color:'#444',      
            textAlign:'center',
            width: '100%',
            height: '100%',
            background: 'white',
            boxShadow: '0px 0px 10px #ccc',
            zIndex: 1,
            position: 'absolute',
            opacity: isHovered ? 0 : 1,
            transition: 'opacity 0.5s ease'
          }}
        >
          <h5 className="text-center">{text}</h5>
        </div>
        <div
          style={{
            color:'#fff',
            width: '100%',
            height: '100%',
            background: '#444',
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: isHovered ? 1 : 0,
            zIndex: 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          {hiddenText}
        </div>
      </div>
    );
  };