
export const getToken = () => {
    const token = localStorage.getItem("auth_token")
    return token
}