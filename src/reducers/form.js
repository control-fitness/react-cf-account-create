import defaultState from './state';

const form = (state = defaultState, action) => {
  const cache = state;

  if (action.property && action.root) {
    // Object with key/value to push into current object
    const pushObject = {
      [action.property]: action.value,
    };

    // Current object from state
    const currentObject = state[action.type][action.root];

    // Merge objects into cache
    cache[action.type][action.root] = Object.assign({}, currentObject, pushObject);
  }

  return cache;
};

export default form;
