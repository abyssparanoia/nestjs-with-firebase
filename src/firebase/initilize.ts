import * as admin from 'firebase-admin'
const serviceAccount = require('./firebase-service-account.json')

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

declare global {
  namespace Express {
    interface Request {
      firebaseUser: admin.auth.DecodedIdToken
    }
  }
}
