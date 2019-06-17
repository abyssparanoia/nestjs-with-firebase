import * as admin from 'firebase-admin'

export default admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL,
  }),
})

declare global {
  namespace Express {
    interface Request {
      firebaseUser: admin.auth.DecodedIdToken
    }
  }
}
