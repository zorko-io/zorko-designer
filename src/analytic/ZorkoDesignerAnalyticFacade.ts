import firebase from 'firebase';
import 'firebase/analytics';
import EventName = firebase.analytics.EventName;

type FirebaseAnalyticType = firebase.analytics.Analytics;

interface EditContentEvent {
  type: string;
  id: string;
  changeType: string;
}

interface SelectContentParams {
  id: string;
  contentType: string;
}

interface ViewSpecsCategory {
  category: string;
}

export const ZorkoDesigerEventNames = {
  ...EventName,
  EDIT_CONTENT: 'edit_content'
};

export class ZorkoDesignerAnalyticFacade {
  private analytics: FirebaseAnalyticType;

  constructor(firebaseAnalytic: FirebaseAnalyticType) {
    this.analytics = firebaseAnalytic;
  }

  logEvent(event, params) {
    this.analytics.logEvent(event, params);
  }

  viewSpecsCategory(params: ViewSpecsCategory) {
    this.logEvent(ZorkoDesigerEventNames.VIEW_ITEM_LIST, {
      ['item_category']: params.category
    });
  }

  editContent(content: EditContentEvent) {
    this.logEvent(ZorkoDesigerEventNames.EDIT_CONTENT, {
      ['content_type']: content.type,
      ['change_type']: content.changeType,
      ['content_id']: content.id
    });
  }

  selectContent(params: SelectContentParams) {
    this.logEvent(ZorkoDesigerEventNames.SELECT_CONTENT, {
      ['content_type']: params.contentType,
      ['content_id']: params.id
    });
  }
}
