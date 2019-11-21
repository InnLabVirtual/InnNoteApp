import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

export default class FirebaseService {
    async signIn () {
      try {
        const response = await auth.signInAnonymously()
        return { user: response.user }
      } catch (error) {
        return { error }
      }
    }
  
    
    async onCreatePostIt ({text, color}) {
        await database().ref().child('posts').push({
          text: text,
          autor: 'autor',
          color: color
        });  
      }
  }