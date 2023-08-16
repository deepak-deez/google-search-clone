import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AllRoutes as Routes } from "./components/Routes";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className=" bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Footer />
          <Routes />
        </div>
      </div>
    </>
  );
};

export default App;
