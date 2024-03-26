import { UniqueLayout } from "../UniqueLayout";

interface HTMLElement {
  style: {
    display: "" | "none";
  };
}

export class UniqueHtmlLayout extends UniqueLayout<HTMLElement> {
  constructor() {
    super((elem, visible) => elem.style.display = visible ? "" : "none");
  }
}
