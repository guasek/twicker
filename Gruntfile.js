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
        }
    });

    grunt.registerTask('init', [
        //TODO: Download bower components.
    ]);

    grunt.registerTask('build', [
        //TODO: Generate application file.
    ])

    grunt.registerTask('watch', [
        //TODO: Browserify
    ]);

    grunt.registerTask('default', [
        'watch'
    ]);
};