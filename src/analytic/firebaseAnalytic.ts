import firebase from 'firebase/app';
import 'firebase/analytics';
import {firebaseConfig} from '../../firebase.config';

const app = firebase.initializeApp(firebaseConfig);

const analytics = app.analytics();

export const FirebaseNames = firebase.analytics.EventName;

export const FirebaseAnalytic = {
  logEvent(event, params) {
    analytics.logEvent(event, params);
  }
};
