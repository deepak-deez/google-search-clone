import { createContext, useContext, useState } from "react";

export const ResultContext = createContext();
const baseUrl =
  "https://google-search-json.p.rapidapi.com/search/web?q=facebook&gl=US&lr=lang_en&num=10&start=0";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "746212c51dmsh9c79ab2df129637p16aee2jsn98c164419295",
        "X-RapidAPI-Host": "google-search-json.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log("data", data);
    setResults(data);
    setIsLoading(false);
  };

  //   console.log("obj", obj);
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchItem, setSearchItem, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
