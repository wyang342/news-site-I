# Overview
In this challenge, we will focus on creating three components that we will later use as we create a news site similar to [Reddit](https://www.reddit.com/).

Each of the three components listed below has been stubbed out - your mission is to create the content that the component should `render`, and handle the `props` that are being passed in appropriately. It's also your decision on whether your components should be functional components or class components. There's no wrong answer here. Here are some guidelines to help you decide:
- If your component simply renders text to the screen (whether passed by props or not), use functional components
- If it does much more than that (e.g., doing a lot with state or using lifecycle methods), use class components.

All of the components today have been stubbed out as class components. If you want to change them to functional components, feel free to do so.

While these components can be viewed in your browser by running `npm run start`, there are unit tests already created that test the component behaviors specified below.

### Tests
You can run the provided tests at any time with `npm test`. If you get errors you may have to run the following commands:
```sh
$ npm uninstall watchman -g
$ brew install watchman
$ npm install 
$ npm test 
```

## Component I: ArticleTeaser
The `ArticleTeaser` component should accept the following `props` from `App.js`:
1. `id` - a number
2. `title` - a string
3. `created_date` - a string
4. `handleTitleClick` - a event handling function

All of these `props` will always be passed in.

The `ArticleTeaser` component should:
1. Display the `title` inside of an `<a>` tag.
2. When the `title` `<a>` tag is clicked, it should call `this.props.handleTitleClick(this.props.id);`. Will arrow functions be useful here?
3. Display the `created_date` in a `<p>` tag.

**Do you think ArticleTeaser should be a functional component or class component?**

## Component II: Article
The `Article` component should accept the following `props`:
1. `title` - a string
2. `created_date` - a string
3. `abstract` - a string
4. `byline` - a string (optional)
5. `image` - a url string (optional)

The `title`, `abstract`, and `created_date` `props` will always contain values. `image` and `byline` may be set, but they may also be null. Be sure to account for this.

The `Article` component should:
1. Display the `title` inside of an `<h1>` tag.
2. Display the `created_date` in a `<p>` tag.
3. Display the `byline` (if it exists) in an `<h2>` tag.
4. Display the `image` (if it exists) in an `<img>` tag (the value of `image` should be set to the `src` attribute of the `<img>` tag).
5. Display the `abstract` inside of a `<p>` tag.

**Do you think Article should be a functional component or class component?**


## Component III: AppNav
The `AppNav` component should accept the following `props`:
1. `navItems` - an array of navItem objects.
2. `handleNavClick` - a function. Will arrow functions be useful here?

The `AppNav` component should return a `<nav>` component that contains `<a>`'s as children - one for every item in the `this.props.navItems` array.

The AppNav component should:
1) Map through `this.props.navItems` to create an array of `<a>` elements. The objects within `this.props.navItems` look something like this:
```
{
 label: "NYREGION",
 value: "nyregion"
}
```
When transforming/mapping the `nav` item objects in `this.props.navItems` into an array of `<a>` tags, you'll want to use the `label` property (displayed in the example above) as the text that appears on screen. At the same time, you will want to attach an event handler to each `<a>`'s `onClick` event. `onClick` should call `this.props.handleNavClick`, and pass the 'value' property from the `nav` item object.

**Do you think AppNav should be a functional component or class component?**
