const content = document.getElementById('content')
function createMenuItem(item, cost) {
    return {
        item,
        cost,
    }
}
const createMenu = () => {
    const menuList = document.createElement('ol');
    menuList.classList.add('menu')

    let menuItems = [];

    const egg = createMenuItem('Two Egg Special w/ meat', '6.99')
    const omelette = createMenuItem('Omelette (4 eggs)', '7.99')
    const chickenOne = createMenuItem('Signature Fried Chicken - 4pcs', '5.99')
    const chickenTwo = createMenuItem('Signature Fried Chicken - 8pcs', '9.99')
    const chickenThree = createMenuItem('Signature Fried Chicken - 12pcs', '13.99')
    
    menuItems.push(egg, omelette, chickenOne, chickenTwo, chickenThree)
    console.log(egg)
    // const menuItem = document.createElement('li')
    // menuItem.classList.add('menu')
    // console.log('hello menu')
    // menuItem.textContent = "2 pcs Fried Chicken"
    // content.appendChild(menuItem)

}

export {createMenu};