# Overview

In this challenge, we will focus on creating three components that we will later use as we create a news site similar to reddit.com.  

Each of the three components listed below has been stubbed out - your mission is to create the content that the component should render, and handle the props that are being passed in appropriately. 

While these components can be viewed in your browser by running npm run start, there are unit tests already created that test the component behaviors specified below.  

## Component I: ArticleTeaser
The ArticleTeaser component should accept the following props:
1. id - a number
2. title - a string
3. created_date - a string
4. handleTitleClick - a function

All of these props will always be passed in.  

The ArticleTeaser component should:
1. Display the title inside of an `<a>` tag.
2. When the title `<a>` tag is clicked, it should call this.props.handleTitleClick(this.props.id);
3/ Display the created_date in a `<p>` tag.

## Component II: Article
The Article component should accept the following props:
1. title - a string
2. created_date - a string
3. abstract - a string
4. byline - a string (optional)
5. image - a url string (optional)

The 'title', 'abstract', and created_date props will always contain values.  'image' and 'byline' may be set, but they may also be null.  Be sure to account for this.

The Article component should:
1. Display the title inside of an `<h1>` tag.
2. Display the created_date in a `<p>` tag.
3. Display the byline (if it exists) in an `<h2>` tag.
4. Display the image (if it exists) in an `<img>` tag (the value of image should be set to the src attribute of the `<img>` tag).
5. Display the abstract inside of a `<p>` tag.


## Component III: Nav
The Nav component should accept the following props:
1. navItems - an array of navItem objects.
2. handleNavItemClick - a function

The Nav component should return a `<nav>` component that contains `<a>`'s as children - one for every item in the this.props.navItems array.  

The Nav component should:
1) Map through this.props.navItems to create an array of `<a>` elements.  The objects within this.props.navItems look something like this:  

{
  label: "NYREGION",
  value: "nyregion"
}

When transforming/mapping the nav item objects in this.props.navItems into an array of `<a>` tags, you'll want to use the label property (displayed in the example above) as the text that appears on screen.  At the same time, you will want to attach an event handler to each `<a>`'s onClick event.  onClick should call this.props.handleNavItemClick, and pass the 'value' property from the nav item object.
