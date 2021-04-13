import {Shape} from "./shape";

export abstract class Layer {
  abstract getFormulaForParams(): string;
  abstract getNumberOfParams(): number;
  abstract getOutputShape(inputShape: Shape): Shape;

  getRawActivations(inputShape: Shape): number {
    const outputShape = this.getOutputShape(inputShape);
    return outputShape.toList().reduce(((prev, curr) => prev * curr), 1);
  }

  getFeedforwardMemory(batchSize: number, inputShape: Shape): number {
    const numValues = batchSize * this.getRawActivations(inputShape) + this.getNumberOfParams();
    return numValues * 4; // 4 bytes per Float32
  }

  getTrainingMemory(batchSize: number, inputShape: Shape): number {
    const numValues =  batchSize * 2 * this.getRawActivations(inputShape) + 3 * this.getNumberOfParams()
    return numValues * 4; // 4 bytes per Float32
  }
}
