import { actions } from "../actions/constants";

export interface IArticle {
  source: {
    id?: string;
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

export interface TopHeadlinesState {
  page: number;
  articles: IArticle[];
  country: string;
  toFetch: boolean;
  fetchedAll: boolean;
}

const initialState: TopHeadlinesState = {
  page: 1,
  articles: [],
  country: "us",
  toFetch: true,
  fetchedAll: false,
};

const topHeadlines = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.ADD_ARTICLES:
      return {
        ...state,
        toFetch: false,
        articles: [...state.articles, ...action.payload],
      };
    case actions.ADD_PAGE:
      return {
        ...state,
        toFetch: true,
        page: state.page + 1,
      };
    case actions.FETCHED_ALL:
      return {
        ...state,
        fetchedAll: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export default topHeadlines;
