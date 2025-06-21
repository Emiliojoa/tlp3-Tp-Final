export const predecirValor = async (data) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/predecirValor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data
        } else {
            throw new Error('Error al predecir el valor')
        }
    } catch (error) {
        console.log(error)
    }
}

export const predecirAnimo = async (data) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/predecirAnimo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data
        } else {
            throw new Error('Error al predecir el animo')
        }
    } catch (error) {
        console.log(error)
    }
}