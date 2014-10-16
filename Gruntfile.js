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
                src: ['app/lib/jquery/dist/jquery.min.js', 'app/lib/oauth-js/dist/oauth.min.js'],
                dest: 'build/vendor.js'
            },
            app: {
                src: ['app/scripts/**/*.js'],
                dest: 'build/app.js'
            }
        },

        concat: {
            'build/twicker.js': ['build/vendor.js', 'build/app.js']
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