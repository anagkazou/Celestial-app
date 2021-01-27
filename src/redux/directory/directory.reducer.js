const INITIAL_STATE = {
  collections: [
    {
      id: 1,
      urlTitle: "chairs",
    },
    {
      id: 2,
      urlTitle: "lights",
    },
    {
      id: 3,
      urlTitle: "sofas",
    },
    {
      id: 4,
      urlTitle: "stools",
    },
    {
      id: 5,
      urlTitle: "ottomans",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
