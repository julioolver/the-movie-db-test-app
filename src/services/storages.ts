const TOKEN_NAME = '_tokenTheMovieList'
const THEME_TYPE = 'theme'
export default {
  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token)
  },

  setTheme(theme: string) {
    localStorage.setItem(THEME_TYPE, theme)
  },

  getTheme() {
    return localStorage.getItem(THEME_TYPE)
  },

  getToken() {
    return localStorage.getItem(TOKEN_NAME)
  },

  deleteToken() {
    localStorage.removeItem(TOKEN_NAME)
  },
}
