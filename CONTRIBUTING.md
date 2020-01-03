# Contributing

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

When contributing to this repository, please first discuss the change you wish to make via github issue.
Please note we have a code of conduct, please follow it in all your interactions with the project.

*Table of Contents*
[Code of Conduct](./code-of-conduct.md)
[What should I know before I get started?](#what-should-i-know-before-i-get-started)
[Pull Request Process](#pull-request-process)

## What should I know before I get started ?

### Design Decisions

Designer use redux+react stack. Visualization rendering performed by vega library.

 Application consist within next layers

 1. Presenter - control access to state data structures read/modification operations
 1. Slices -  modules  provide immutable reducer and actions to manipulate within app state slice
 1. Selectors - modules with read only access to all app state, provides caching functionality
 1. Components - 'dummy' components, which has no relations for `Slices` and `Selectors`, just pure react components
 1. Containers - react components connected to store, actions hardly use `Selectors`

#### Presenters

Classes around plain state object used by application root state, their propose is to incapsulate read/update operations
over plain state object, so any consumers can do state changes without burden of data massaging object directly.

Main consumers of presenters in applications are `Reducers`, secondary consumers are `Selectors`

 `Presenters`  are very important to cover with unit tests, because they are in a core of Application. See [Unit Test](#unit-tests)

### Slices

Each slice is a module which exposes immutable reducer and functions for actions creators

### Selectors

Selector functions for read-only operation over root app state.
Should use cache to optimize React re-rendering.

### Components

*Reusable* react components, should't have no dependencies to Redux, try to keep them as simple as possible, use functional components only and hooks

### Containers

Components which have dependencies to redux (actions, selectors etc), may contains react components not connected directly for
store and used only in one place

### Project Structure

### Root `src` folders overview

`packages/` - contains all reusable utilites, typings etc, organized in a way that it could be exctracted as separates npm module without big effort
`containers/` - all `Containers` see previous sections for more details
`components/` - all reusable react components
`selectors/` - all `Selectors` over store
`slices/` - all `Slices`
`store/` - contains functions/objects to build Redux store instance

> Other folder in 'src' are not welcome

Example:

```
|-packages/
    |-reducer-presenters/
    |-logger-middlewares/
|-containers/
    |-analyticBoard/
        |-AnalyticBoardContainer.tsx
    |-app/
        |-AppContainer.tsx
|-components/
    |-layout/
        |-HeaderLayout.tsx
    |-Button.tsx
    |-Input.tsx
    |-Form.tsx
|-selectors/
    |-analyticBoardSelectors.ts
|-slices/
    |-analyticBoard/
        |-analyticBoardActions.ts
        |-analyticBoardReducer.ts
        |-index.ts
|-store/
```


### Unit Tests

Project has a requirement for high level of code coverage with unit test for next entitles: `Presenters`, `Reducers` and
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
