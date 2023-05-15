import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseUrl = import.meta.env.VITE_APP_URL_API
const baseUrl = 'http:/192.168.0.111:8080'


export const fetchWithoToken = async (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`

    if (method === "GET") {
        const resp = await fetch(url)
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await resp.json()
    }

}

export const fetchToken = async (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`
    const token = await AsyncStorage.getItem('token');

    if (method === "GET") {
        const resp = await fetch(url, {
            headers: {
                "x-token": token
            }
        })
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method: method,
            headers: {
                "Content-type": "application/json",
                "x-token": token
            },
            body: JSON.stringify(data)
        })

        return await resp.json()
    }

}

export const fetchTokenUploadFile = async (endpoint, data, name) => {
    const url = `${baseUrl}/${endpoint}`
    const token = localStorage.getItem('token')

    const formData = new FormData();
    formData.append(name, data);

    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            "x-token": token
        },
        body: formData
    })
        .then(() => { return Swal.fire("acept","actualizacion correcta","success")})
        .catch((err) => {
            return Swal.fire("Error",err,"error")
        })
}