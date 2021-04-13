export class Shape {
  constructor(channels: number);
  constructor(public channels: number, public height?: number, public width?: number) {}

  toList(batchSize?: number): number[] {
    let l: number[] = []
    if (batchSize != undefined) {
      l = [batchSize];
    }
    if (this.height != undefined && this.width != undefined) {
      return l.concat([this.channels, this.height, this.width]);
    }
    return l.concat([this.channels]);
  }

  toString(batchSize?: number): string {
    return `(${this.toList(batchSize).join(' ✕ ')})`;
  }
}
