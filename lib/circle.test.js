const {Circle, Triangle, Square, Rectangle} = require('./index');


describe('Circle class', () => {
    test('render() method should return SVG string for circle shape', () => {
        const circle = new Circle('ABC', 'black', 'aqua');
        const svgString = circle.render();
        expect(svgString).toEqual(
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="115" r="80" fill="aqua"/>
            <text x="150" y="120" font-weight="bolder" font-size="60" font-family="Roboto, sans-serif" text-anchor="middle" alignment-baseline="middle" fill="black">
                ABC
            </text>
        </svg>`
        );
    });
});
