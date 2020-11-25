
export function users(state, users) {
  if (state.users.length > 0) {
    state.users = state.users.concat(users)
  } else state.users = users
}

export function incrementCurrentPage(state) {
  state.meta.current_page++
}

export function resetUsers(state) {
  state.users = []
  state.meta = { current_page: null }
}
