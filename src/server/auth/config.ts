
export const localClient = {
  name: 'local',
  id: 'local',
  secret: 'local'
}

export const facebook = {
  clientId: '',
  clientSecret: '',
  callbackUrl: 'http://localhost:3000/api/auth/facebook/callback'
}

export const jwtConfig = {
  secret: 'ecjwt',
  options: {
    expiresIn: '30d'

  }
}
