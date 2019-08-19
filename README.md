# React Five

In this lecture we cover React Router and how to implement a routing system into our React applications.

Traditionally, when we wanted to create a website that uses multiple pages, we would need to make a request to a server to send back a specific html file to show in the browser. Everytime we would make a request it would cause our web page to reload and this can sometimes be very slow.

A great example of this is the New York Times webpage that can be found [here](https://www.nytimes.com/).

In modern day web development using libraries and frameworks such as React, only uses a single html file and allow us to create a single page application and prevents us from having to request new html files to display every time we want to route to another page.

So how do we create a single page application that allows us to have multiple pages?

In React, we can use a library called `React Router Dom` that will handle what is being displayed to the screen based on the URL.

This will allow us to create a multi page application effect, with the lightning fast speed of a single page application.

## React Router

The library that we will be using to implement a routing system into our React application is called `react-router-dom`. Go ahead and install it into your project by running the terminal command

```bash
$ npm install --save react-router-dom
```

### Hash Router

We will be using a specific router from react router called `Hash Router`.

Now that we have `react-router-dom` installed in our project, let's go ahead and setup the router. In `index.js` we will import HashRouter.

> Make sure to wrap it in curly braces!

```js
import {HashRouter} from 'react-router-dom';
```

Now since we have it imported, we want to wrap our entire application in it, so we will wrap the `HashRouter` component around our `App` component that is being rendered inside of `reactDOM.render()`.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import HashRouter
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    // Wrap App with HashRouter
    <HashRouter>
        <App />
    </HashRouter>, 
document.getElementById('root'));
```

The goal for Hash Router is to keep our user interface in sync with what ther URL is. Meaning, that will display specific components on what the URL in our browser is.

### Route

Route is the component we will use from `react-router-dom` to determine a specific route for what component will be displayed based on the URL.

We first need to import it into our file to use.

```js
import {Route} from 'react-router-dom';
```

> Make sure to use object destructering!

We can now use `Route` inside of our JSX and give it specific props to determine what component is displayed based off of the URL path.

```js
<Route />
```

#### Component

The `component` prop is the prop we can add to determine what component is displayed.

```js
<Route component={Home} />
```

Above we are rendering a the Home component for this route. Now we just need to determine what the URL path or route will be to display this component.

#### Path

The `path` prop will determine what the URL path should be to display the component.

```js
<Route path='/home' component={Home} />
```

Above, we have determined that if the URL ends with '/home' then the Home component will be displayed.

#### Exact

Another prop that we can add to our Route is `exact`. This prop will tell the route that the URL needs to match up exactly with the path we defined on our Route.

```js
<Route exact path='/home' component={Home} />
```

Above, we have declared the URL needs to end exactly with '/home'. If we have anything following or before the '/home' then the component will not be displayed.

This is extremely important to include if we want our base route to be displayed correctly.  We can determine what our base route is by creating a route for '/'.

```js
// bad
<Route path='/' component={Home} />

// good
<Route exact path='/' component={Home} />
```

