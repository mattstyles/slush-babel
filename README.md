# slush-es2015 [![Build Status](https://secure.travis-ci.org/mattstyles/slush-babel.png?branch=master)](https://travis-ci.org/mattstyles/slush-babel) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-babel.png)](http://badges.enytc.com/for/npm/slush-babel)

> Scaffold for a babel-browserify-react-less-hogan built site

## Tech included by default

* React
* Flux
* Babel (handles jsx transformation)
* Flatiron Director
* EventEmitter3
* Web-animations-js
* Less
* Lesshat (for css3 shizzle)
* Hogan

## Getting Started

Install `slush` and `slush-babel` globally:

```bash
npm i -g slush
npm i -g slush-babel
```

### Usage

Create a new folder for your project and run the slush generator within it:

```bash
mkdir awesome-app && cd $_
slush babel
```

## Building your awesome app

There are a couple of `gulp` commands included to get your awesome app up and running, `build` will prepare things for production whilst `watch` will produce a development build with sourcemaps and flowcheck support.

```
npm run build
npm run watch
```

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/mattstyles/slush-babel/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/mattstyles/slush-babel/issues).

## License

[WTFPL](https://github.com/mattstyles/slush-babel/blob/master/LICENSE)

Copyright (c) 2015, Matt Styles
