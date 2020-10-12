import React, { useState, useEffect } from 'react';

export default function TimerUseEffect() {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      Timer Using Use Effect<p>{value}</p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
