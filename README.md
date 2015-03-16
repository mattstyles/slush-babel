# slush-es2015 [![Build Status](https://secure.travis-ci.org/mattstyles/slush-es2015.png?branch=master)](https://travis-ci.org/mattstyles/slush-es2015) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-es2015.png)](http://badges.enytc.com/for/npm/slush-es2015)

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

Install `slush` and `slush-es2015` globally:

```bash
npm i -g slush
npm i -g slush-es2015
```

### Usage

Create a new folder for your project and run the slush generator within it:

```bash
mkdir awesome-app && cd $_
slush es2015
```

## Building your awesome app

There are a couple of `gulp` commands included to get your awesome app up and running, `build` will get prepare things for production whilst `watch` will produce a development build with sourcemaps and flowcheck support.

```
npm run build
npm run watch
```

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/mattstyles/slush-es2015/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/mattstyles/slush-es2015/issues).

## License

[WTFPL](https://github.com/mattstyles/slush-es2015/blob/master/LICENSE)

Copyright (c) 2015, Matt Styles
