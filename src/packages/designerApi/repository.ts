import _ from 'lodash';
import examplesCollection from '../../../public/spec/vega-lite/index.json';

export async function fetchExamplesRepositories() {
  function toResources(items) {
    return Object.keys(items).map(key => {
      let item = items[key];

      if (_.isArray(item)) {
        return {
          id: key,
          name: key,
          resources: item
        };
      }

      if (!item.name) {
        item = toResources(item);
        return {
          id: key,
          name: key,
          resources: item
        };
      }

      return item;
    });
  }

  const resources = toResources(examplesCollection);

  return Promise.resolve([
    {
      id: 'Vega-Lite',
      name: 'Vega-Lite',
      resources
    }
  ]);
}
