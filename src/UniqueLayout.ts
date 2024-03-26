export class UniqueLayout<E> {
  #layouts: Record<string, E[]> = {};

  constructor(private setActive: (elem: E, visible: boolean) => void) {
  }

  registerLayout(uid: string, elem: E) {
    const layouts = this.#getLayouts(uid);
    if (layouts[layouts.length - 1]) {
      this.setActive(layouts[layouts.length - 1], false);
    }
    layouts.push(elem);
    this.setActive(layouts[layouts.length - 1], true);
    return () => this.unregisterLayout(uid, elem);
  }

  unregisterLayout(uid: string, elem: E): void {
    const layouts = this.#getLayouts(uid).filter(l => l !== elem);
    this.#layouts[uid] = layouts;
    if (layouts[layouts.length - 1]) {
      this.setActive(layouts[layouts.length - 1], true);
    }
  }

  #getLayouts(uid: string) {
    return this.#layouts[uid] ?? (this.#layouts[uid] = []);
  }
}
