import { writable } from 'svelte/store'

export default writable({
    auth:{
        user:{},
        token:""
    }
});

export const auth = writable({
	user:null,
    token: ""
});