
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

export function orderByName(state, order) {
  const users = state.users
  if (order === 'asc') {
    state.users = orderAscByName(users)
  } else if (order === 'desc') {
    state.users = orderDescByName(users)
  } else state.users = orderAscByName(users)
}

const orderAscByName = (users) => {
  return users.sort((a, b) => {
    if (a.firstName > b.firstName) {
      return 1
    }
    if (a.firstName < b.firstName) {
      return -1
    }
    return 0
  })
}

const orderDescByName = (users) => {
  return users.sort((a, b) => {
    if (a.firstName < b.firstName) {
      return 1
    }
    if (a.firstName > b.firstName) {
      return -1
    }
    return 0
  })
}

export function orderById(state, order) {
  const users = state.users
  if (order === 'asc') {
    state.users = orderAscById(users)
  } else if (order === 'desc') {
    state.users = orderDescById(users)
  } else state.users = orderAscById(users)
}

const orderAscById = (users) => {
  return users.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    }
    if (a.id < b.id) {
      return -1
    }
    return 0
  })
}

const orderDescById = (users) => {
  return users.sort((a, b) => {
    if (a.id < b.id) {
      return 1
    }
    if (a.id > b.id) {
      return -1
    }
    return 0
  })
}

export function resetUsers(state) {
  state.users = []
  state.meta = { current_page: 1 }
}
