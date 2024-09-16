import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ColorPicker from "./components/ColorPicker";

function App() {
  const theme = useSelector((state) => state.theme);
  const customColors = useSelector((state) => state.customColors);

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <div
      style={{
        backgroundColor: customColors.backgroundColor,
        color: customColors.textColor,
        height: "100vh",
      }}
    >
      <h1>Theme and Custom Color Switcher</h1>
      <ColorPicker />
    </div>
  );
}

export default App;
