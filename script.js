'use strict';

const color = document.querySelector('.color-selector')
color.addEventListener('change', getValue)

color.addEventListener('input', getValue)

function getValue() {
    document.querySelector('.box').style.background = color.value

    document.querySelector('#hex').textContent = color.value;


    const red = hexToRgb(color.value).r;
    const green = hexToRgb(color.value).g;
    const blue = hexToRgb(color.value).b;


    document.querySelector('#rgb').textContent = `(${red}, ${green}, ${blue})`

    document.querySelector('#hsl').textContent = rgbToHsl(green, red, blue)
    
}


var isAlpha = function(ch) {
    return /^[A-Z]$/i.test(ch);
}



function hexToRgb(hex) {



    array = []





    split = hex.slice(1).split('')
    split.forEach(e => {
        if (!isAlpha(e)) {
            array.push(parseInt(e))
        } else {
            array.push(10 + e.toUpperCase().charCodeAt(0) - 65)
        }



    })
    red = 16 * array[0] + array[1]
    green = 16 * array[2] + array[3]
    blue = 16 * array[4] + array[5]



    const rgb = {
        "r": 16 * array[0] + array[1],
        "g": 16 * array[2] + array[3],
        "b": 16 * array[4] + array[5]
    }



    return rgb
}



function rgbToHsl(r, g, b) {



    r /= 255;
    g /= 255;
    b /= 255;



    let h, s, l;



    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);



    if (max === min) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }



    if (h < 0) {
        h = h + 360;
    }



    l = (min + max) / 2;



    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    
    s *= 100;
    l *= 100;
    
    return `hsl (${slicer(h)}, ${slicer(s)}%, ${slicer(l)}%)`
}

function slicer (string){
    return string.toString().substr(0,5)
}