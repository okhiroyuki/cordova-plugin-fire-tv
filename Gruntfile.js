module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                'esversion': 6
            },
            files: [
                'Gruntfile.js',
                'patch.js',
            ]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default',
        'Runs code style check on editor code',
        ['jshint']);
};
