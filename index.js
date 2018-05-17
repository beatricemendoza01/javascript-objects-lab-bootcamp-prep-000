const recipes = {
  lasagna: ['tomato sauce', 'meat', 'cheese', 'pasta'],
  'peanut butter jelly sandwich': ['bread', 'peanut butter', 'jelly'],
  pizza: ['dough', 'sauce', 'cheese', 'pepperoni']
};

function updateObjectWithKeyAndValue(object, key, value) {
  const newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}
