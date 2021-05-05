import { useState } from "react";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  function handleClickButton(genre: GenreResponseProps) {
    setSelectedGenre(genre);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar onSelectGenre={handleClickButton} />
      <Content selectedGenre={selectedGenre} />
    </div>
  );
}
