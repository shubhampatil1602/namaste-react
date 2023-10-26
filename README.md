# Namaste React 😄

- package.json is a configuration for npm.

- npm is a package manager. Collection of packages.

- create-react-app uses webpack and babel bts.

- Two type of dependencies we can install : 1) Dev-dependencies (used in development phase) 2) Normal (production).

- Packages are aka dependencies. node_modules is a collection of dependencies.

- If you have package.json & package-lock.json, you can recreate/install all your node_modules.

- Most imp. package in our project is a bundler. (webpack, parcel, vite, etc...)

### 🚀 To install a package we use npm and to execute a package we use npx command.

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
