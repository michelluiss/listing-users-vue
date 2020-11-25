
export function users(state, users) {
  if (state.users.length > 0) {
    state.users = state.users.concat(users)
  } else state.users = users
}

export function user(state, user) {
  if (state.users.length > 0) {
    state.users = state.users.concat(user)
  } else state.users = user
}

export function incrementCurrentPage(state) {
  state.meta.current_page++
}

export function resetUsers(state) {
  state.users = []
  state.meta = { current_page: 1 }
}
