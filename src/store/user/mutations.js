export function setUserData(state, data) {
  state.userData = data;
  localStorage.setItem('user', JSON.stringify(data));
}
