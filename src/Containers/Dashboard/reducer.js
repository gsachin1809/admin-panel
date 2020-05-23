import { ADD_ARTICLE } from "./action";


const initialState = {
  articles: []
};

function homeReducer(state = initialState, action) {
  console.log(action);
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === "UPDATE_ARTICAL") {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};

export default homeReducer;
