const foodItems = [ { id: 1, name: 'VadaPav',price: '$5' },{ id: 2, name: 'Misal', price: '$8' },{ id: 3, name: 'Panner Tikka',price: '$17' }];
const getAllFood = () => {
return foodItems;
};
module.exports = { getAllFood }