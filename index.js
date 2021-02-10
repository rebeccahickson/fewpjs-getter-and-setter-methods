class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(input) {
    this.radius = input / 2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  set circumference(input) {
    this.radius = input / Math.PI / 2;
  }

  get area() {
    return this.radius * this.radius * Math.PI;
  }
}
