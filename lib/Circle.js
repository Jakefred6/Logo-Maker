const Shape = require('./shapes');

// Circle class
class Circle extends Shape {

    // circle class constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>
            <text x="150" y="120" font-weight="bolder" font-size="60" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">
                ${this.text}
            </text>
        </svg>`;
    }
}

module.exports = Circle;
