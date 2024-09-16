import React from "react";
import { useDispatch } from "react-redux";
import { setCustomColor } from "../store/themeSlice";

const ColorPicker = () => {
  const dispatch = useDispatch();

  const handleColorChange = (colorType) => (event) => {
    dispatch(setCustomColor(colorType, event.target.value));
  };

  return (
    <div>
      <h3>Select Custom Colors:</h3>
      <label>
        Background Color:
        <input type="color" onChange={handleColorChange("backgroundColor")} />
      </label>
      <br />
      <label>
        Text Color:
        <input type="color" onChange={handleColorChange("textColor")} />
      </label>
    </div>
  );
};

export default ColorPicker;
