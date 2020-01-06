# Contributing

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

When contributing to this repository, please first discuss the change you wish to make via github issue.
Please note we have a code of conduct, please follow it in all your interactions with the project.

*Table of Contents*
* [Code of Conduct](./code-of-conduct.md)
* [What should I know before I get started?](#what-should-i-know-before-i-get-started)
* [Pull Request Process](#pull-request-process)

## What should I know before I get started ?

### Design Decisions

Designer use redux+react stack. Visualization rendering performed by vega library.

Application consist within  `Features` each feature may has next layers

1. `Presenter` - controls access to state data structures read/modification operations
1. `Slices` -  provides reducer and actions to manipulate within particular feature state slice
1. `Selectors` - provides access to data required by feature related to it's state slice
1. `Effects` - contains interactions with side effects
1. `Components` - 'dummy' components, which has no relations for `Slices` and `Selectors`
1. `Containers` - components used by external features, usually use `Selectors` and Redux Actions

### Features

Parts of application which may contains UI. Feature usually contains store state, actions to work with that store and
already 'connected' UI component to application store.


#### Presenters

Classes around plain state object used by application root state, their propose is to encapsulate update operations
over plain state objects, so any consumers can do state changes without burden of data massaging plain object directly.

Main consumers of presenters in applications are `Reducers`, secondary consumers are `Selectors`

 `Presenters`  are very important to cover with unit tests, because they are in a core of Application. See [Unit Test](#unit-tests)

### Slices

Each slice is a module which combine action creators and single reducer for particular application store slice

Naming of files inside of slice folder

```
|-slices/
  |-index.ts                   // exports all actions and 'reducer' for current slice
  |-mySliceNameReducer.ts      // main reducer for current slice
  |-mySliceActions.ts          // all actions creators (no any think actions here)
```

Example: usage of slice
```
import {reducer, specsRemoveSuccess } from './slices/specs'

```
### Effects

Effects in that projects are [redux-thunk](https://github.com/reduxjs/redux-thunk) functions which trigger side effects.
Like API calls, timers etc.

### Selectors

Selector functions for read-only operation over root app state.
Should use cache to optimize React re-rendering.

### Components

*Reusable* React components, should't have any dependencies to Redux, try to keep them as simple as possible

### Containers

Components which have dependencies to redux (actions, selectors etc), may contains react components not connected directly for
store and used only in one place

### Project Structure

### Root `src` folders overview

`packages/` - contains all reusable utilises, typings etc, organized in a way that it could be extracted as separates npm module without big effort
`app/` - top level react components
`components/` - all reusable react components
`features/` - application's features
`store/` - contains functions/objects to build Redux store instance

> Other folder in 'src' are not welcome

Example:

```
|-packages/
    |-reducerPresenters/
    |-loggerMiddlewares/
    |-api/
|-app/
    AppContainer.tsx
|-components/
    |-layout/
        |-HeaderLayout.tsx
    |-Button.tsx
    |-Input.tsx
    |-Form.tsx
|-features/
    |-analyticBoard/
        |-components/
            |-AnalyticBoardWidget.tsx
        |-containers/
            |-AnalyticBoardContainer.tsx
        |-effects/
            |-analyticBoardEffects.ts
        |-selectors/
            |-analyticBoardSectors.ts
        |-slices/
            |-analyticBoardActions.ts
            |-analyticBoardReducer.ts
            |-index.ts
        |-presenters/
            |-AnalyticBoardState.ts
            |-AnalyticBoardPresenter.ts
            |-index.ts
    |-specs/
    |-encodings/
    |-visualizationEditor
    |-dataSources
|-store/
```

### Unit Tests

Project has a requirement for high level code coverage with unit test for next entitles: `Presenters`, `Reducers` and
`Selectors`. Test runner has a configuration for coverage threshold, it's a quite big, around ~90% for `Presenters`,`Reducers` and `Selectors`

> Unit tests for UI elements like `components` and/or `containers` are not welcome


## How can I contribute ?

### Reporting Bugs

/**
 * @todo #72:15m/DEV Doc - Define bug reporting steps
 *
 */

### Suggesting Enhancements

/**
 * @todo #72:15m/DEV Doc - Define suggestion reporting steps
 *
 */

### Your First Code Contribution

/**
 * @todo #72:15m/DEV Doc - First code contribution steps
 *
 */

## Pull Request Process

/**
 * @todo #72:30m/DEV Doc - Define pull request process
 *
 */
