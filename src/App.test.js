import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SearchResults from "./components/SearchResults";
import WordCard from "./components/WordCard";
import Details from "./pages/Details";
import Home from "./pages/Home";

describe("...TESTING APP", () => {
  test("....RENDERING APP", () => {
    render(<App />);
  });
});

describe("...INDEX FILE", () => {
  test("...RENDER INDEX FILE", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.tsx");
  });
});

describe("...TESTING PAGES", () => {
  test("....RENDERING DETAILS", () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );
  });

  test("....RENDERING HOME", () => {
    render(<Home />);
    const inputBox = screen.getByLabelText("Enter Keyword");
    fireEvent.change(inputBox, { target: { value: "TESTING" } });
  });
});

const results = {
  partOfSpeech: "noun",
  definitions: Array(3),
  synonyms: Array(0),
  antonyms: Array(0),
};

describe("...TESTING COMPONENTS", () => {
  test("....RENDERING SEARCH RESULTS", () => {
    render(
      <BrowserRouter SearchResults={[results, results]} keyword="car">
        <SearchResults />
      </BrowserRouter>
    );

  });

  test("....RENDERING WORDCARD", () => {
    render(<WordCard />);
  });
});
