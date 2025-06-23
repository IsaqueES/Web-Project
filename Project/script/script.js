import {Item} from '../data/database.js'
const addItem = async () => {
    const itemName = document.getElementById('iteminput').value;
    if (!itemName) {
        return;
    }
    const novoitem =  Item.create({ nome: `${itemName}`, quantidade: 10, preco: 99 });
}