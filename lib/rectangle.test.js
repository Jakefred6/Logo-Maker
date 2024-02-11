const {Circle, Triangle, Square, Rectangle} = require('./index');

describe('Square class', () => {
    test('render() method should return SVG string for rectangle shape', () => {
        const square = new Rectangle('IJK', 'black', 'aqua');
        const svgString = square.render();
        expect(svgString).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" rx="undefined" ry="undefined" fill="aqua"/>
                <text x="150" y="105" font-weight="bolder" font-size="45" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="black">
                    IJK
                </text>
            </svg>`);
    });
});
