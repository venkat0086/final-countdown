import { GET_TEACHER, GET_TEACHER_ERROR, GET_TEACHER_LOADING } from "./action";

const initState = {
  loading: false,
  error: false,
  teachers: [],
};

export const teacherReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_TEACHER_LOADING:
      return { ...store, loading: true };
    case GET_TEACHER:
      return {
        ...store,
        loading: false,
        teachers: [...payload],
        error: false,
      };
    case GET_TEACHER_ERROR:
      return {
        ...store,
        error: true,
        loading: false,
        teachers: [],
      };
    default:
      return store;
  }
};
