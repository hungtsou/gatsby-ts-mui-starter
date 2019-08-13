// export const graphqlEndpoint = `${process.env.API}/graphql`;
export const graphqlEndpoint = 'http://localhost:4000'
export const drawerWidth = 240
export const routes = {
  recibos: {
    path: '/',
    preFetch: true
  },
  silos: {
    path: '/silos',
    preFetch: true
  },
  ventas: {
    path: '/ventas',
    preFetch: true
  },
  fincas: {
    path: '/fincas',
    preFetch: true
  },
  reportes: {
    path: '/reportes',
    preFetch: true
  },
  signOff: {
    path: '/auth/sign-off',
    preFetch: true
  },
  signIn: {
    path: '/auth/sign-in',
    preFetch: true
  },
  signedIn: {
    path: '/auth/signed-in',
    preFetch: true
  }
}
