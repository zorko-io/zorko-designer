import firebase from 'firebase';
import 'firebase/analytics';
import {firebaseConfig} from '../../firebase.config'

const app = firebase.initializeApp(firebaseConfig);

const analytics = app.analytics();

export const FirebaseAnalytic = {
  logEvent(event, params) {
    analytics.logEvent(event, params);
  }
};
