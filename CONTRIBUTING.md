# Contributing

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

When contributing to this repository, please first discuss the change you wish to make via github issue.
Please note we have a code of conduct, please follow it in all your interactions with the project.

*Table of Contents*
[What should I know before I get started?](#what-should-i-know-before-i-get-started)
[Pull Request Process](#pull-request-process)
[Code of Conduct](#code-of-conduct)

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

React components, should't have dependencies to Redux, try to keep them as simple as possible, use functional components only and hooks

### Containers

Components which have dependencies to redux (actions, selectors etc)


### Project Structure

/**
 * @todo #72:30m/DEV Doc - project structure
 *  mention naming conventions
 */

### Unit Tests

/**
 * @todo #72:15m/DEV Doc - Explain reasons for strict unit coverage
 *  define suggestions on how/when to write unit tests
 *
 */


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


## Code of Conduct

/**
 * @todo #72:15m/DEV Doc - Move to separate file
 */

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at igornester@gmail.com. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
