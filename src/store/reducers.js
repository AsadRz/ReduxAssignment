import * as actionTypes from './actions';

const INITIAL_STATE = {
  persons: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADDED:
      const newPerson = {
        id: action.payload.id, // not really unique but good enough here!
        name: action.payload.personData.name,
        age: action.payload.personData.age,
      };
      console.log(action.payload);
      console.log(newPerson);
      return {
        ...state,
        persons: state.persons.concat(newPerson),
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
