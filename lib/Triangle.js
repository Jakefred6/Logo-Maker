const Shape = require('./shapes');

// Triangle class
class Triangle extends Shape {

    // triangle class constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,18 244,182 56,182" fill="${this.shapeColor}"/>
                <text x="150" y="120" font-weight="bolder" font-size="45" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">
                    ${this.text}
                </text>
            </svg>`;
    }
}

module.exports = Triangle;
