import {Layer} from "./layer";
import {Shape} from "./shape";

export class Conv extends Layer {
  constructor(public size: number, public depth: number, public stride: number = 1, public pad: number = 0) {
    super();
  }

  getFormulaForParams(): string {
    return "";
  }

  getNumberOfParams(): number {
    return 0;
  }

  getOutputShape(inputShape: Shape): Shape {
    return undefined;
  }

}
