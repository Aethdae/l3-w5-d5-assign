import { useState } from "react";
import { radioButtons, activeButton } from "../utils/styles";

export default function TodoControl({ setFilter, ascending, setAscending }) {
  const [active, setActive] = useState("all");

  return (
    <div className="flex gap-2 justify-center drop-shadow-xl bg-gray-400 py-4">
      <button
        className={
          active === "completed"
            ? activeButton.join(" ")
            : radioButtons.join(" ")
        }
        radioGroup="todos"
        onClick={() => {
          setFilter("completed");
          setActive("completed");
        }}
      >
        Completed
      </button>
      <button
        className={
          active === "incomplete"
            ? activeButton.join(" ")
            : radioButtons.join(" ")
        }
        radioGroup="todos"
        onClick={() => {
          setFilter("incomplete");
          setActive("incomplete");
        }}
      >
        Incomplete
      </button>
      <button
        className={
          active === "all" ? activeButton.join(" ") : radioButtons.join(" ")
        }
        radioGroup="todos"
        onClick={() => {
          setFilter("all");
          setActive("all");
        }}
      >
        All
      </button>
      <div className="flex gap-3">
        <button
          radioGroup="asc"
          className={
            ascending ? activeButton.join(" ") : radioButtons.join(" ")
          }
          onClick={() => {
            setAscending(true);
          }}
        >
          Ascending
        </button>
        <button
          radioGroup="asc"
          className={
            !ascending ? activeButton.join(" ") : radioButtons.join(" ")
          }
          onClick={() => {
            setAscending(false);
          }}
        >
          Descending
        </button>
      </div>
    </div>
  );
}
