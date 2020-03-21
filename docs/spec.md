# Zorko Spec

## Intro

In the document we put initial  UI/UX requirements related to Zorko Designer and Zorko Landing. Idea is to establish initial, basic UI functionality in such a way that it would be extendable with each new iteration.

## Resources

[Vega-Lite Docs](https://vega.github.io/vega-lite/docs/) -  it contains all the functionality of vega-lite (potential features of designer)

[Voyager](http://vega.github.io/voyager/) -  data explorer  realized by community behind vega/vega-lite library, allows to investigate some functionality which could be realized in zorko-designer, however take into account that it’s has other intentions, it’s main focus is data exploration but not a visualization creation

[Zorko Designer](https://thirsty-bartik-31d492.netlify.com/) - prototype of Zorko Designer

[Vega Editor](https://vega.github.io/editor/#/) - text editor for Vega/Vega-Lite specifications

## Zorko Designer

* No visual editor for vega-lite gramma designed to use on mobile (tablet) devices
* No visual editor which would allow to create and modify Vega-Lite specifications

### Goal

Establish initial UI/UX design
Establish a system to track user’s metric to be able to validate our decisions

### Use Cases

/**
 * @todo #136:1d/BA Move all UI specifics to Appendix
 *
 */

### Flow Diagram

/**
 * @todo #136:1d/UX Create Flow Diagram for basic use cases
 *
 */

### 1. Open Spec
In current iteration we are going to concentrate only on opening pre-build examples, so now other ways to start working with designer. In future it’s should be  possible to open spec from dataset like csv,json file (see Voyager)
So user need a way to choose one spec from list of available examples it’s could be done by analogy with examples in Vega Editor (see Examples)
To narrow down a scope we can disable examples which not supported yet


1. [main view](https://zpl.io/2yeQJ4q)

2. [example's view](https://zpl.io/aweA0Y1)

3. [view of Bar chart](https://zpl.io/2yeLprn)

### 2. Modify Visualization

One of the important parts of designer it’s a place to modify Mark and Encoding.  So the main screen should contain:  ability to change Marks, Encoding and see all the available Fields.

To narrow down a scope let’s assume that:

1. Mark contains only two options:  Bar and Line
1. Encoding contains only X and Y (position channels), Color (mark property channel)
1. Fields represent  [Vega Types](https://vega.github.io/vega-lite/docs/type.html#nominal): Nominal, Quantitative, Temporal, Ordinal, except Geojson

/**
 * @todo #136:3d/UX Modify visualization - list of screens in Zeplin
 *
 */


### 3. View Data Source

Provide user with ability to see source of the data

#### 3.1 View Inline Data Source

We need to inform user that it’s an inline data source even if it doesn’t have any name etc.

#### 3.2 View Data Source URL

We need to inform user that it’s a data source based on remote URL, if it doesn’t have a name, use name of file or truncate a URL (we may need a tooltip here)

To narrow down a scope we are not allowing user to modify data source.

/**
 * @todo #136:2d/UX View Data Source - list of screens in Zeplin
 *
 */

#### 4. Save as ...

Designer should allow users to download result of their work in next formats: Vega-Lite, SVG and  PNG.
It’s not necessary to directly download format, it’s possible to open generated format in separate tab so user can save it to filesystem.

/**
 * @todo #136:1d/UX Save as - list of screens in Zeplin
 *
 */

### Metrics

Let’s start with next measurements:


1. Selection of Spec from Example
    1. open specs dialog
    1. select one of spec
        1. id/name of spec
1. Modifications made for spec (mark changes, encoding changes)
    1. switch mark
        1. spec id/name
        1. mark type
    1. use position chanel
        1. spec id/name
        1. channel type
1. Data Source view
    1. opens data source view
        1. spec id/name
1. Time spent
    1. Total in designer
    1. In choose Spec Flow
    1. In Modify Visualization
    1. In Data Source View
    1. From open to download (we may derive it from other metrics)


## Zorko Landing

To Be Continuing ...
