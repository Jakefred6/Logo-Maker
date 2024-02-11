const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square, Rectangle} = require('./lib');


// Function to prompt user for text input with validation
async function promptText() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: function (value) {
                if (value.length > 3) {
                    return 'Text should not exceed three characters.';
                } else if (value.length < 1) {
                    return 'Text should be at least one character.';
                }
                return true;
            }
        }
    ]);
    return response.text;
}

// Function to prompt user for color input with validation
async function promptColor(message) {
    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'colorChoice',
            message: message,
            choices: ['Color Name', 'Hexadecimal Number (e.g., #RRGGBB)']
        },
        {
            type: 'list',
            name: 'color',
            message: 'Enter color name:',
            when: (answers) => answers.colorChoice === 'Color Name',
            choices: [
                'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond',
                'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue',
                'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey',
                'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
                'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue',
                'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite',
                'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory',
                'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow',
                'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
                'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
                'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue',
                'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
                'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue',
                'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna',
                'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato',
                'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
            ]
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter color code (e.g., #RRGGBB):',
            when: (answers) => answers.colorChoice === 'Hexadecimal Number (e.g., #RRGGBB)',
            validate: function (value) {
                if (!/^#[0-9A-F]{6}$/i.test(value)) {
                    return 'Please enter a valid hexadecimal color code (e.g., #RRGGBB).';
                }
                return true;
            }
        }
    ]);
    return response.color;
}

// Function to prompt user for shape input
async function promptShape() {
    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Circle', 'Triangle', 'Square', 'Rectangle']
        }
    ]);
    return response.shape;
}

// Function to generate SVG file based on user input
function generateSVG(text, textColor, shape, shapeColor) {
    let logo;
    switch (shape) {
        case 'Circle':
            logo = new Circle(text, textColor, shapeColor);
            break;
        case 'Triangle':
            logo = new Triangle(text, textColor, shapeColor);
            break;
        case 'Square':
            logo = new Square(text, textColor, shapeColor);
            break;
        case 'Rectangle':
            logo = new Rectangle(text, textColor, shapeColor);
            break;
    }
    const svgContent = logo.render();
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

// Main function to run the application
async function init() {
    const text = await promptText();
    const textColor = await promptColor('Enter a color for the text:');
    const shape = await promptShape();
    const shapeColor = await promptColor('Enter a color for the shape:');
    generateSVG(text, textColor, shape, shapeColor);
}

// Call the main function to start the application
init();
