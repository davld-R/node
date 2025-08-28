import cors from 'cors'

const ACCEPTED_ORIGINS = [
  // 'file:///D:/Home/universidad/Docker/node/projects/clase-3/web/index.html',
  'http://localhost:8080'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }
  }
})
