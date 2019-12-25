import firebase from 'firebase/app';
import 'firebase/analytics';
import {firebaseConfig} from '../../firebase.config';
import {ZorkoDesignerAnalyticFacade} from './ZorkoDesignerAnalyticFacade';

/**
 * @todo #36:15m/DEV Move analytic initialization to composition root
 *  move all initializations composition root
 *  I assume it's index.ts, however it might be store as well,
 */

const app = firebase.initializeApp(firebaseConfig);

const analytics = app.analytics();

export const zorkoDesignerAnalytic = new ZorkoDesignerAnalyticFacade(analytics);
