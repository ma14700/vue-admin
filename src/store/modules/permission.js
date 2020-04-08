import { asyncRoutes, constantRoutes } from '@/router'

function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return true
    }
}

export function filterAsyncRoutes(routes, roles) {
    const res = []
    return res
}

const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}