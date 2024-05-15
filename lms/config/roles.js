const allRoles = {
  user: [ 'getBook' ],
  librarian: [ 'getBook', 'mutateBook' ],
  admin: [ 'getBook', 'mutateBook' ],
}

const roles = Object.keys(allRoles); // ['user', 'librarian', 'admin']

module.exports = {
  roles,
  allRoles,
}