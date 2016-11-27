## STACK

![Stack](stack.png)

- [NodeJS](https://github.com/nodejs/node)

    Unfortunately, browser can't just directly request data from pokeapi on the fly. 
    
    So, each request that browser wants to get from it has to go through a middleware server. That's what [NodeJS](https://github.com/nodejs/node) attractively
    does for Pokedex under the hood. A minimalist proxy server between the browser and pokeapi.

- [ReactJS](https://github.com/facebook/react)

    Javascript players around the world couldn't be more surprised. [ReactJS](https://github.com/facebook/react) has become Viral in a Real-World Front-End Engineering.
    This month, it manages to overcome its ancestor AngularJS in popularity in github's repo stars.

    So what [ReactJS](https://github.com/facebook/react) does here is awesomely rendering UI components to the browser and bringing the Native-like web experience
    to users.

- [Redux](https://github.com/reactjs/redux)

    [Redux](https://github.com/reactjs/redux) is another Javascript's bada** framework that every JS player should pay attention to. It simplify the state flow
    by collecting them inside one predictable container called Store. Combined with [ReactJS](https://github.com/facebook/react), It helps me build Pokedex
    from small reusable UI components to an Interactive Single Page Application.

    I also separate most of heavy logic works inside action generators, so my components are even cleaner to focusly work with
    UI and UX.

- [Webpack](https://github.com/webpack/webpack)

    I have yet to go far with this guy. But long story short, it does cool things like (combined with [Babel](https://github.com/babel/babel)) auto-transpiling my ES6 code to ES5
    and bundling them into one piece! Even separate them into 3 specific bundles. The first one is style.css which contains all stylesheets for my app,
    vendor.js which is a tight bundle of third party modules, and the last one is the main course app.js .

## Undone To-do list

- Pre-render all Pokemon names before loads the entire pokemon data
- Fetch Pokemon based on the exact filter name when no pokemon found on client side name-filtering
- Server-side Rendering Single Page Application
- Enrich UI and UX with Javascript and CSS3

