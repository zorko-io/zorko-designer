import firebase from 'firebase/app';
import 'firebase/analytics';
import {firebaseConfig} from '../../firebase.config';

/**
 * @todo #36:15m/DEV Move analytic initialization to composition root
 *  move all initializations composition root
 *  I assume it's index.ts, however it might be store as well,
 */

const app = firebase.initializeApp(firebaseConfig);

const analytics = app.analytics();

export const ZorkoDesigerEventNames = {
  EDIT_CONTENT: 'edit_content'
};

interface EditContentEvent {
  type: string;
  id: string;
  changeType: string;
}

type FirebaseAnalyticType = firebase.analytics.Analytics;

export class ZorkoDesignerAnalyticFacade {
  private analytics: FirebaseAnalyticType;

  constructor(firebaseAnalytic: FirebaseAnalyticType) {
    this.analytics = firebaseAnalytic;
  }

  logEvent(event, params) {
    analytics.logEvent(event, params);
  }

  editContent(content: EditContentEvent) {
    this.logEvent(ZorkoDesigerEventNames.EDIT_CONTENT, {
      ['content_type']: content.type,
      ['change_type']: content.changeType,
      ['content_id']: content.id
    });
  }
}

export const zorkoDesignerAnalytic = new ZorkoDesignerAnalyticFacade(analytics);
