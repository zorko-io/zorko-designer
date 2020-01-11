import _ from 'lodash';

/**
 * @todo #56:30m/DEV Static import of JSON doesn't work on CI
 *  Issues with location '../../../public/spec/vega-lite/index.json'
 *  during CI build, switch to relative HTTP call, as far as examples are part of
 *  designer assets
 *
 */

import examplesCollection from './exampleCollection.json';

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
