import * as actionTypes from './actions';

const INITIAL_STATE = {
  persons: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADDED:
      //   const newPerson = {
      //     id: Math.random(), // not really unique but good enough here!
      //     name: 'Max',
      //     age: Math.floor(Math.random() * 40),
      //   };
      console.log(action.payload);
      return {
        ...state,
        persons: state.persons.concat(action.payload),
      };
    case actionTypes.DELETED:
      const updatedArray = state.persons.filter(
        (person) => person.id !== action.pId,
      );
      return {
        ...state,
        persons: updatedArray,
      };

    default:
      return state;
  }
};
