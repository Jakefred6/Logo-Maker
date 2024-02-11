const Shape = require('./shapes');

// Square class
class Square extends Shape {

    // square class constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/>
                        <text x="150" y="155" font-weight="bolder" font-size="80" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">
                            ${this.text}
                        </text>
                    </svg>`;
    }
}

module.exports = Square;
