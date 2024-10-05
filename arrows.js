// Ensure the Arrow class is defined
class Arrow {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  compose(otherArrow) {
    // Implement the compose logic here
    return new Arrow(this.start, otherArrow.end);
  }

  display() {
    // Implement the display logic here
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}