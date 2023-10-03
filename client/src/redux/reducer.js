const initialSate = {
  videogames: [],
};

const rootReducer = (state = initialSate, action) => {
  switch (action) {
    default:
      return { ...state };
  }
};

export default rootReducer;
