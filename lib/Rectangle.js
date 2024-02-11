const Shape = require('./shapes');

// RoundCorneredSquare class
class Rectangle extends Shape {
    // RoundCorneredSquare class constructor
    constructor(text, textColor, shapeColor, cornerRadius) {
        super(text, textColor, shapeColor);
        this.cornerRadius = cornerRadius;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" rx="${this.cornerRadius}" ry="${this.cornerRadius}" fill="${this.shapeColor}"/>
                <text x="150" y="105" font-weight="bolder" font-size="45" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">
                    ${this.text}
                </text>
            </svg>`;
    }
}

module.exports = Rectangle;
