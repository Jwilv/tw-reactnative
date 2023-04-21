import jwtDecode from "jwt-decode"

export const isExpired = (exp) => {
    const expired = exp * 1000
    const timeout = expired - Date.now()

    if (timeout < 0) {
        return true
    }

    return false
}

export const verifyToken = () => {

    const token = localStorage.getItem("token")
    try {
        const { exp } = jwtDecode(token)
        const status  = isExpired(exp)
        console.log( "salio bien")
        return !status
    } catch (error) {
        console.log("mal salio")
        return false
    }

}
