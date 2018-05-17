const recipes = {
  lasagna: ['tomato sauce', 'meat', 'cheese', 'pasta'],
  'peanut butter jelly sandwich': ['bread', 'peanut butter', 'jelly'],
  pizza: ['dough', 'sauce', 'cheese', 'pepperoni']
};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}