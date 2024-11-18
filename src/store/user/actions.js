import Vue from 'vue';

const vm = new Vue({});

export async function getUserProfile({ commit }, params) {
  const { token } = params;
  try {
    const { data } = await vm.$axios.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    commit('setUserData', data.user);
    return data.user;
  } catch {
    vm.$q.notify({
      color: 'negative',
      message: 'Falha ao listar dados do usuário!',
      position: 'top',
      icon: 'warning',
    });
    return false;
  }
}

export async function updateUserProfile({ dispatch }, params) {
  const { token, body } = params;
  try {
    const { data } = await vm.$axios.put('/user', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch('getUserProfile', { token });

    return data;
  } catch {
    vm.$q.notify({
      color: 'negative',
      message: 'Falha ao listar dados do usuário!',
      position: 'top',
      icon: 'warning',
    });
    return false;
  }
}
