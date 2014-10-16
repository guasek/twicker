'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'app/scripts/{,*/}*.js'
            ]
        },

        browserify: {
            vendor: {
                src: ['bower_components/oauth-js/dist/oauth.min.js'],
                dest: 'app/build/vendor.js'
            },
            app: {
                src: ['app/scripts/**/*.js'],
                dest: 'app/build/app.js'
            }
        },

        concat: {
            'app/build/twicker.js': [
                'bower_components/jquery/dist/jquery.min.js',
                'app/build/vendor.js',
                'app/build/app.js'
            ]
        }
    });

    grunt.registerTask('build', [
        'jshint',
        'browserify',
        'concat'
    ]);

    grunt.registerTask('watch', [
        //TODO: Watchify
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};