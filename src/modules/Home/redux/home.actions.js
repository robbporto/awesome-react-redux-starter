import * as constantes from './home.constants'

export const increment = () => {
    return dispatch => {
        dispatch({
            type: constantes.INCREMENT_REQUESTED
        })

        dispatch({
            type: constantes.INCREMENT
        })
    }
}

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: constantes.INCREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: constantes.INCREMENT
            })
        }, 3000)
    }
}

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: constantes.DECREMENT_REQUESTED
        })

        dispatch({
            type: constantes.DECREMENT
        })
    }
}

export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: constantes.DECREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: constantes.DECREMENT
            })
        }, 3000)
    }
}