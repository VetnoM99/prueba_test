const arrays = [
    [
        { titular: "María", contenido: "Gol de Argentina" },
    ],
    [
        { titular: "Juan", contenido: "Mantener el entusiasmo" },
    ],
    [
        { titular: "Ana", contenido: "no puedo perder" },
    ],
    [
        { titular: "Pedro", contenido: "Herencia de los padres" },
    ],
    [
        { titular: "Laura", contenido: "Lo se no tiene sentido" },
    ]
];

function displayArrays(arrays) {
    const container = document.getElementById('mostrar');

    arrays.forEach((array, index) => {
        const arrayDiv = document.createElement('div');
        arrayDiv.classList.add('array');

        const title = document.createElement('h2');
        title.textContent = `Array nº ${index + 1}`;
        arrayDiv.appendChild(title);

        array.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const itemTitle = document.createElement('h3');
            itemTitle.textContent =`Titular: ${item.titular}`;
            itemDiv.appendChild(itemTitle);

            const itemContent = document.createElement('p');
            itemContent.textContent = `Contenido: ${item.contenido}`;
            itemDiv.appendChild(itemContent);

            arrayDiv.appendChild(itemDiv);
        });

        container.appendChild(arrayDiv);
    });
}

// Mostrar los arrays en la página
displayArrays(arrays);