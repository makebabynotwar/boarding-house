import store from '@/store'

export default (to, from, next) => {
    if(!store.getters['auth/authenticated']){
        return next();
    }
    if (store.getters['auth/role'] == 'tenant')
	    return next({ name: 'roomlist' })
	else
	    return next({ name: 'admin' })
}