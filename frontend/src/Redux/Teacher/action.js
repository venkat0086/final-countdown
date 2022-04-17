export const GET_TEACHER = "GET_TEACHER";
export const GET_TEACHER_LOADING = "GET_TEACHER_LOADING";
export const GET_TEACHER_ERROR = "GET_TEACHER_ERROR";

export const getTeacher = (payload) => ({
  type: GET_TEACHER,
  payload,
});

export const getTeacherLoading = () => ({
  type: GET_TEACHER_LOADING,
});
export const getTeacherError = () => ({
  type: GET_TEACHER_ERROR,
});

export const getTeacherData = () => (dispatch) => {
  dispatch(getTeacherLoading());
  fetch(`https://heady-resonant-homburg.glitch.me/teachers`)
    .then((res) => res.json())
    .then((res) => dispatch(getTeacher(res)))
    .catch((err) => dispatch(getTeacherError()));
};
