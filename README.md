News Site
===================
In this exercise, we will utilize two new libraries - [React Router](https://github.com/ReactTraining/react-router) and [React Bootstrap](https://react-bootstrap.github.io/) - to create a site in the same vein as Reddit.  We'll also get used to defining [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html).  The app has already been scaffolded a bit, the ESLint configuration has been changed so that components are required to have PropTypes defined.

The site will consist of two pages: 

 - Home Page - this page should display a list of Article Teasers.  A teaser should contain an article headline, author name, and image (see ./mockups/home.png for a mock up)
 - Article Page - this page should show the details of an article - the headline, author name, abstract, and a button that links to the main article URL.

As mentioned above, the app has already been scaffolded a bit:

 - The basic configuration for React Router has already been created - see Routes.js (which is imported by index.js).  
 - A Home Page container (aka the primary, index page route) has been created - you'll see this page when you run `yarnpkg start`.
 - A wrapper route, App.js, is included.  This wrapper is the top-level component, and is where data flow begins.  It passes a prop called `news` to all child routes/containers - the value of this prop is an object that contains all of the news data you'll display.  This data is contained within ./data/articles.json.

The following objectives will slowly walk you through the work that's needed to be done to create this app.  Without further ado, let's begin.

Containers & Routes
-------------------
First, let's stub out the additional routes that are needed for the app.  While we already have a home page route and container defined, we still need to create the page the Article Page.  

 1. Create a new directory in ./src/containers called "ArticleContainer".  
 2. Add a simple component to this directory that simply renders the text "Article".  (Copying the component in ./src/containers/home is an easy way to accomplish this).
 3. Modify ./src/Routes.js - import the Article container, and create a route that loads that component adjacent to the Home Container route (nested within the App Container route).  The path prop for the route should be `/article`
 4.  Verify that when you go to the url http://localhost:3000/article, the Article Container loads.
 5. Let's also create a "Page Not Found" route (aka a 404 page).  Repeat the process above to create the 404 page's container, and add a no match route (see [here](https://github.com/ReactTraining/react-router/blob/master/examples/route-no-match/app.js) for an example of this type of route)

ArticleTeaser Component
-------------------
Next, let's create the Article Teaser component.  This component should accept the following props:

 1. **id** - number - a unique, numeric identifier for the article
 2. **title** - string - the title of the article
 3. **author** - string - the author of the article
 4. **image** - string - an URL to one of the article's thumbnail images (found within the article object's *multimedia* variable). Note: not all articles contain images.

The article image should appear on the left - the headline and author should appear on the right.  This design can be accomplished using React Bootstrap *Col* components nested inside of a *Row* (which is nested inside of a *Grid*) Refer to the ./src/mockups/Home for an example of how this component should appear.

The title of the article should be placed inside of React Router's *Link* component (see [here](https://github.com/ReactTraining/react-router/blob/master/examples/active-links/app.js) for an example usage of the *Link* component).  The link component requires a single prop - **path**.  Set the path to `/articles/${this.props.id}`

Once the ArticleTeaser component is ready, import it into the HomeContainer component and use it - map through this.props.news.results and transform the data into an array of ArticleTeaser components, and then render them.  (Note: the ID of the article can simply be the index of the article item in the news.results array).

Clicking on any of the links in the ArticleTeaser components displayed, you should be redirected to your empty Article page, and the URL should contain the article ID (e.g. http://localhost:3000/article/0, http://localhost:3000/article/1).

Dynamic Article Container
-------------------
Now that the basic navigation behavior between the ArticleTeasers and the Article container is established, let's make the Article Container show the appropriate information.  As mentioned before, the Article Page should show the following information for the article that was clicked:

 1. Headline
 2. Author
 3. Abstract
 4. Link to the full-text article page

See article.png for a mockup.  The Article Container already has access to the news object (via this.props.news).  To determine the article to show, we should first specify the part of the URL that contains the article ID.  

In Routes.js, modify the Article Container route path to be: `article/:articleID`.  After this, add `console.log(this.props)` to your Article Container's render function, navigate http://localhost:3000/article/0, and inspect the props as they're printed to the browser console - if you haven't noticed already, our Containers receive a number of props related to the route.  See if you can find articleID within this data.  

Once you've found where the articleID route parameter lives, let's use it to parse the proper item from the news.results array and start rendering the data.  

Use React Bootstrap's *Grid*, *Col*, and *Row* components and standard HTML elements (h1's, p's, etc.) to display the data, and use React Bootstrap's *Button* component to display the link to the full-text article.

In addition to building the required functionality, ensure that no warnings or errors appear in your browser console or in your terminal.

Secondary Objectives
-------------------

 1. On the Article Page, display all images associated with the article - two on a row.
 2. Build a pagination system.  To accomplish this, you will need to add support for params (e.g. `path={:pageNumber}` in the home page route and create relatively complex logic (perhaps using Array.filter) to only show articles within news.results between the index of `((this.props.pageNumber * 5) && (this.props.pageNumber + 4))`.  For the pagination UI, see React Bootstrap's *Pagination* Component.