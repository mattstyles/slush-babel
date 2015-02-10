'use strict';

var os = require( 'os' );

var test = require( 'tape' );
var mockPrompt = require( './utils/mockPrompt' );
var gulp = require( 'gulp' );
var mockGulpDest = require( 'mock-gulp-dest' )( gulp );

require( '../slushfile' );

process.chdir( os.tmpDir() );

test( 'Project scaffold', function( t ) {
    t.plan( 3 );

    mockPrompt({
        name: 'test es2015'
    });

    gulp.start( 'default' )
        .once( 'stop', function() {
            mockGulpDest.assertDestContains([
                'package.json',
                'bower.json',
                'gulpfile.js',
                'README.md'
            ]);
            t.pass( 'Build files included' );

            mockGulpDest.assertDestContains([
                '.bowerrc',
                '.gitignore',
                '.jshintrc'
            ]);
            t.pass( 'Dotfiles included' );

            mockGulpDest.assertDestContains({
                src: {
                    _: 'index.hjs',
                    data: [
                        'data.json'
                    ],
                    styles: {
                        modules: [
                            'vars.less'
                        ],
                        partials: [
                            'base.less'
                        ],
                        _: 'main.less'
                    },
                    scripts: {
                        components: [
                            'appView.jsx'
                        ],
                        dispatchers: [
                            'appDispatcher.js'
                        ],
                        _: [
                            'main.jsx',
                            'polyfill.js'
                        ]
                    },
                    tmpl: [
                        'header.hjs'
                    ]
                }
            });
            t.pass( 'Project files included' );
        });
});
