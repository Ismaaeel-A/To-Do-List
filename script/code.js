function add() {
    let list = document.querySelector('[list]')
    let input = document.querySelector('[input]')

    if((input.value == "") || (input.value.length < 3)){
        alert("Item should atleast 3 characters long")
    } else {
        list.innerHTML +=
        `
                 <li  class="item">
                    <p>${input.value[0].toUpperCase() + input.value.slice(1)
                        }</p>

                    <button type="button">Remove</button>    
                 </li>
    `
    }
}