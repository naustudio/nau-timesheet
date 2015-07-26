# Nau-timesheet

This application based of this repo [react-flux-router-boilerplate](https://github.com/apzentral/react-flux-router-boilerplate), you can check it out for more information.


#### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /config/                    # Configuration files for Webpack, Jest etc.
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /assets/                # All assets files
│   ├── /components/            # React components. E.g. Navbar.jsx, Calendar.jsx
│   ├── /constants/             # Enumerations used in action creators and stores
│   ├── /dispatcher/            # Dispatcher
│   ├── /layouts/               # Shared layouts for top-level components
│   ├── /pages/                 # Top-level, URL-bound React components
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /utilities/             # Utilities such as libraries or common tools
│   ├── /app.js                 # The application's bootstrap file, entry point
│   ├── /config.js              # The application's config file
│── gulpfile.js                 # Configuration file for automated builds
└── package.json                # The list of 3rd party libraries and utilities
```

#### Getting Started

1. Clone or fork this project.
2. Then run this command `$ npm install`
3. Run `$ gulp`

#### Gulp commands

```shell
$ gulp                          # run app
```

```shell
$ gulp build                    # build app
```

```shell
$ gulp --verbose                # run app as debug environment
```

#### Support

Have any feedback, feature request or anything? Please let me know.
