
localStorage.setItem('userId', 85245522)

const addToStorage = () => {
    let idInput = document.getElementById('user-id')
    let valueInput = document.getElementById('storage-value')

    const id = idInput.value;
    const value = valueInput.value

    // not adding empty something to local storage

    if(id && value){
        localStorage.setItem(id, value)
    }



    idInput = ''
    valueInput = ''



}
 
