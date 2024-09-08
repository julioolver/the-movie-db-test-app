import storages from '@/services/storages'
import http from '@/plugins/axios'
import { getCurrentInstance } from 'vue'

export default {
  async redirectIfNotAuthenticated(to: any, from: any, next: any) {
    const token = storages.getToken()

    if (!token) {
      return next({ name: 'pages-login' })
    }

    try {
      const response = await http.get('me')

      // obtendo a instância atual do vue para criar uma propriedade global do usuário logado,
      // para não precisar utilizar vuex ou pinia (gerenciamento de estado) neste momento. É acessado com this.$userData
      const instance = getCurrentInstance()

      if (instance) {
        instance.appContext.config.globalProperties.$userData = response.data
      }

      next()
    } catch (error) {
      console.error('Erro ao validar token:', error)
      storages.deleteToken()
      return next({ name: 'pages-login' })
    }
  },

  redirectIfAuthenticated(to: any, from: any, next: any) {
    const token = storages.getToken()

    if (token) {
      return next({ name: 'index' })
    }

    next()
  }
}
