const {Circle, Triangle, Square, Rectangle} = require('./index');

describe('Square class', () => {
    test('render() method should return SVG string for square shape', () => {
        const square = new Square('GEH', 'black', 'aqua');
        const svgString = square.render();
        expect(svgString).toEqual(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="200" fill="aqua"/>
                        <text x="150" y="155" font-weight="bolder" font-size="80" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="black">
                            GEH
                        </text>
                    </svg>`);
    });
});
