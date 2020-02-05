export const setLocalStorageToken = (token) => {
    localStorage.setItem('authorisation', token)
}

export const getLocalStorageToken = () => {
    return localStorage.getItem('authorisation')
}