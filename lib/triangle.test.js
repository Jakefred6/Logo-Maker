const {Circle, Triangle, Square, Rectangle} = require('./index');

describe('Triangle class', () => {
    test('render() method should return SVG string for triangle shape', () => {
        const triangle = new Triangle('DEF', 'black', 'aqua');
        const svgString = triangle.render();
        expect(svgString).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,18 244,182 56,182" fill="aqua"/>
                <text x="150" y="120" font-weight="bolder" font-size="45" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="black">
                    DEF
                </text>
            </svg>`);
    });
});
