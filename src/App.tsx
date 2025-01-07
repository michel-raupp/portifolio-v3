import React from "react";

import { THEME_TYPES } from "./constants";
import { useThemeStore } from "./stores/theme";

const App: React.FC = () => {
  const { toggleTheme, theme } = useThemeStore((state) => state);

  return (
    <div>
      <button onClick={toggleTheme}>
        Trocar para o tema: {theme === THEME_TYPES.LIGHT ? "Escuro" : "Claro"}
      </button>
    </div>
  );
};

export default App;
