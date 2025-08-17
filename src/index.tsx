import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WaitList } from "./screens/WaitList";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <WaitList />
  </StrictMode>,
);
