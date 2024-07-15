const filterUsers = (users, search) => {
    const term = search.toLowerCase();
    return users.filter(user => {
        const firstName = user.name.first.toLowerCase();
        const lastName = user.name.last.toLowerCase();
        const city = user.location.city.toLowerCase();
        const country = user.location.country.toLowerCase();
        return firstName.startsWith(term) || lastName.startsWith(term) || city.startsWith(term) || country.startsWith(term);
    });
}

function paginateUsers(array, page) {
    return array.slice((page - 1) * 10, page * 10)
}

export { filterUsers, paginateUsers }