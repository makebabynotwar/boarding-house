import store from '@/store'

export default (to, from, next) => {
    if(store.getters['auth/authenticated'] && store.getters['auth/role'] == 'tenant' ){
        return next();
    }
    next({name:'landing-page'})
}