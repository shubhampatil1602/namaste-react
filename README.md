# Namaste React 😄

- One of the reason for react is fast is it uses virtual dom, diff algo., reconciliation.

- Virtual DOM is the object representation of DOM.

- Reconciliation is, The algorithm React uses to diff one tree with another to determine which parts need to be changed.

- In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application.

- package.json is a configuration for npm.

- npm is a package manager. Collection of packages.

- create-react-app uses webpack and babel bts.

- Two type of dependencies we can install : 1) Dev-dependencies (used in development phase) 2) Normal (production).

- Packages are aka dependencies. node_modules is a collection of dependencies.

- If you have package.json & package-lock.json, you can recreate/install all your node_modules.

- Most imp. package in our project is a bundler. (webpack, parcel, vite, etc...)

- JSX - HTML-like or XML-like syntax.

- JSX => Babel transpiles it to React.createElement => JS Object => HTMLElement(render) => And this all done by Babel. Babel is converting JSX to React.createElement.

- Two ways to create Components in react: 1) Class Based (old) and 2) Functional Based Compponents (new).

- A functional component is normal JS function that returns JSX code or React element.

- Component Composition -> Component inside ReactComponent.

- Functional components are JS functions and Props are like passing arguments to functional components.

- ConfigDrivenUI - data is driven by config with the help of backend api. In short different content for different locations.

- Two types of export/import. 1) export default componentName -> import componentName from "path" 2) using export keyword infront of variable (named export) -> import { name } from "path"

### 🚀 `To install a package we use npm and to execute a package we use npx command.`

## foodhub

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - RestaurantContainer
  - RestaurantCards
  - Img
  - Name of resto, star, cuisine, delivery time
- Footer
  - Copyright
  - Links
  - Address
  - Contact us

## React Hooks

- Normal JS utility functions

- Whenever a state variable updates, react re-render the components.

- There are multiple hooks in react but here are 2 very imp hooks:

  - useState() -> used to generate powerful state variables in react.
  - useEffect() -> used when we have to make an external api calls.

- Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).

## What is Parcel doing for us ?

- Dev Build
- Local Server
- Hot Module Replacement (HMR). Automatic reloding page on save.
- It uses File Watching Algorithm - written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - it gives support of older browsers.
- Diagnostic - beautiful errors
- Error Handling
- HTTPs
- Tree Shaking - remove unused code.

## Packages to install:

1. Start with npm init (it create package.json)
2. npm i -D parcel (-D refers to dev-dependency)
3. npx parcel sourceFile (localhost)
4. Install react & react-dom as normal dependency
