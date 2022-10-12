import { FETCH_DATA } from "./types"

export const fetchData = () => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(temp => {
                dispatch({
                    type: FETCH_DATA,
                    payload: temp
                })
            })
    }
}

