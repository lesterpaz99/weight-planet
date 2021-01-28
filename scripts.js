//Gravity on planets
const gravityOnPlanets = [
    {
        name: 'mercury',
        gravity: 3.7
    },
    {
        name: 'venus',
        gravity: 8.87
    },
    {
        name: 'mars',
        gravity: 3.71
    },
    {
        name: 'jupiter',
        gravity: 24.79
    },
    {
        name: 'saturn',
        gravity: 10.44
    },
    {
        name: 'uranus',
        gravity: 8.87
    },
    {
        name: 'neptune',
        gravity: 11.15
    }
];

const gEarth = 9.8;

let planet = document.querySelector('select');
let personWeight = document.querySelector('#weight');
let result = document.querySelector('#result');


let form = document.getElementById('form-group');
form.addEventListener('submit', (event) => {
    event.preventDefault();
})

let showResult = () => {
    let selectedPlanet = planet.selectedIndex;
    let finalWeight;
    
    for (let i = 0; i < gravityOnPlanets.length; i++) {
        let planetIndex = gravityOnPlanets[i-1];
        
        if (selectedPlanet === 0) {
            result.innerHTML = 'No planet selected';
        }
        if (i === selectedPlanet && i !== 0) {
            finalWeight = ((personWeight.value * planetIndex.gravity) / gEarth).toFixed(1);
            result.innerHTML = `Your weight on ${planetIndex.name} is: ${finalWeight} pounds`;
        }
        if (personWeight.value == '') {
            result.innerHTML = `You haven't yet entered your weight on Earth`;
        }
    }
    result.style.border = 'solid 1px var(--font-color-2)';
    result.classList.add('show');
}

document.getElementById('show-result')
.addEventListener('click', () => {
    form.classList.add('move-left');
    
    result.innerHTML = '';
    showResult();
});

document.querySelector('#clear')
.addEventListener('click', () => {
    planet.value = planet.item(0).value;
    personWeight.value = '';
    result.innerHTML = '';

    result.style.border = 'none';
    result.classList.remove('show');
    form.classList.remove('move-left');
});

//I did it better witch CSS
//-------------------------
// planet.addEventListener('pointerenter', () => {
//     planet.style.color = 'black';
// });

// planet.addEventListener('pointerleave', () => {
//     planet.style.color = 'var(--font-color-2)';
// });