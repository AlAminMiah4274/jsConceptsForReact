const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // 
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

// way of setting item to local storage
const pen = { price: 10, color: 'black' };
localStorage.setItem('pen', JSON.stringify(pen));

const friends = [15, 48, 47, 61];
localStorage.setItem('friends', JSON.stringify(friends));

localStorage.setItem('friends', JSON.stringify([15, 48, 47, 61]));

localStorage.setItem('mouse', JSON.stringify({ price: 500, color: 'black', size: 'medium' }));