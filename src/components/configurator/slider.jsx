import React from "react";

const THREE = require('three');

const Slider = ({ value, defaultValue, min, max, step, onChange }) => (
    <input
        className="slider"
        type="range"
        defaultValue={defaultValue}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
    />
)

export default Slider