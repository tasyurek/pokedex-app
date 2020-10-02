export default (state, action) => {
  switch (action.type) {
    case "ADD_POKE": {
      let isExist = state
        ? state.some((poke) => poke.id === action.poke.id)
        : false;

      if (isExist) return state;

      saveLocal([...state, action.poke]);

      return [...state, action.poke];
    }

    case "REMOVE_POKE": {
      let updatedPokes = state.filter((poke) => poke.id !== action.id);

      saveLocal(updatedPokes);

      return updatedPokes;
    }

    default:
      return state;
  }
};

const saveLocal = (pokes) => {
  let myPokesJSON = JSON.stringify(pokes);
  localStorage.setItem("my-pokes", myPokesJSON);
};
