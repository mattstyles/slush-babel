'use strict';


var test = require( 'tape' );
var gulp = require( 'gulp' );
var mockGulpDest = require( 'mock-gulp-dest' )( gulp );

require( '../slushfile' );

process.chdir( __dirname );

test( 'basic test', function( t ) {
    t.plan( 1 );

    mockPrompt({
        name: 'module'
    });

    gulp.start( 'default' )
        .once( 'stop', function() {
            mockGulpDest.assertDestContains( 'package.json' );
            t.equal(1,1);
        });
});


/**
 * Mock inquirer prompt
 */
function mockPrompt (answers) {
  require('inquirer').prompt = function (prompts, done) {

    [].concat(prompts).forEach(function (prompt) {
      if (!(prompt.name in answers)) {
        answers[prompt.name] = prompt.default;
      }
    });

    done(answers);
  };
}
