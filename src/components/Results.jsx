import React, { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  ResultContext,
  useResultContext,
} from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = (props) => {
  const obj = useContext(ResultContext);
  console.log("obj", obj);
  const { getResults, results, isLoading, searchItem, setSearchItem } = obj;
  const location = useLocation();

  useEffect(() => {
    getResults("/search/q=JavaScript Mastery$num=10");
  }, []);

  if (isLoading) return <Loading />;
  console.log(location.pathname);
  switch (location.pathname) {
    case "/search":
      return "SEARCH";
    case "/news":
      return "NEWS";
    case "/images":
      return "IMAGES";
    case "/videos":
      return "VIDEOS";
    default:
      return "ERROR!";
  }
  return (
    <>
      <div>Results</div>
    </>
  );
};
