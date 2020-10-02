export const addPoke = (poke) => ({
  type: "ADD_POKE",
  poke,
});

export const removePoke = (id) => ({
  type: "REMOVE_POKE",
  id,
});
