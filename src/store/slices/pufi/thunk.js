
import { emailUser } from "./pufiSlice"

export const getEmail = ( email ) => {
    return async( dispatch, getState ) => {

        const resp = await fetch('https://formspree.io/f/mleklpny', {
            method: 'POST',
            headers: {
                'Accept': 'Aplication/JSON'
            },
            body: JSON.stringify({email: email})
        })
        const data = await resp.json()

        dispatch(emailUser( data ))
        
    }
}