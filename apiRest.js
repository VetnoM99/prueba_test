const apiUrl = 'http://localhost:8080/article'; // Reemplaza con la URL real de tu API

document.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('addItemForm');
    const itemsContainer = document.getElementById('items-container');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Función para obtener todos los elementos
    async function getItems() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            displayItems(data);
        } catch (error) {
            console.error('Error al obtener los elementos:', error);
            displayError(error.message);
        }
    }

    // Función para mostrar los elementos en el HTML
    function displayItems(items) {
        itemsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos elementos
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const itemTitle = document.createElement('h3');
            itemTitle.textContent = ` Titular : ${item.titular}`;
            itemTitle.classList.add ('titular')
            itemDiv.appendChild(itemTitle);

            const itemContent = document.createElement('p');
            itemContent.classList.add('contenido')
            itemContent.textContent = `contenido: ${item.contenido}`;
            itemDiv.appendChild(itemContent);

            // Botón para eliminar el elemento            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => deleteItem(item.id));
            itemDiv.appendChild(deleteButton);

            itemsContainer.appendChild(itemDiv);
        });
    }

    // Función para crear un nuevo elemento
    async function addItem(event) {
        event.preventDefault();
        
        const titular = document.getElementById('titular').value;
        const contenido = document.getElementById('contenido').value;

        try {
            const response = await fetch(`${apiUrl}/crear`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ titular, contenido })
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            clearForm();
            displaySuccess('Elemento creado correctamente');
            getItems(); // Actualizar la lista de elementos
        } catch (error) {
            console.error('Error al crear el elemento:', error);
            displayError(error.message);
        }
    }

    // Función para eliminar un elemento por su ID
    async function deleteItem(itemId) {
        try {
            const response = await fetch(`${apiUrl}/delete/${itemId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            displaySuccess('Elemento eliminado correctamente');
            getItems(); // Actualizar la lista de elementos
        } catch (error) {
            console.error('Error al eliminar el elemento:', error);
            displayError(error.message);
        }
    }

    // Función para limpiar el formulario después de crear un elemento
    function clearForm() {
        document.getElementById('titular').value = '';
        document.getElementById('contenido').value = '';
    }

    // Función para mostrar un mensaje de éxito
    function displaySuccess(message) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000); // Ocultar el mensaje después de 3 segundos
    }

    // Función para mostrar un mensaje de error
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000); // Ocultar el mensaje después de 3 segundos
    }

    // Agregar el evento submit al formulario para crear un nuevo elemento
    addItemForm.addEventListener('submit', addItem);

    // Obtener y mostrar los elementos al cargar la página
    getItems();
});
