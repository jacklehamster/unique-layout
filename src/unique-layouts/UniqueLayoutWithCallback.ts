import { UniqueLayout } from "../UniqueLayout";


export class UniqueLayoutWithCallback extends UniqueLayout<(active: boolean) => void> {
  constructor() {
    super((setActive, active) => setActive(active));
  }
}
