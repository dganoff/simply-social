module.exports = function(grunt) {

    "use strict";

    // Display the execution time when tasks are run:
    require('time-grunt')(grunt);

    // Configuration:
    var SRC = "./src/",
        DIST = "./dist/",
        TEST = "./test/",
        SERVER_PORT = "7777";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // File references to be re-used throughout this Gruntfile:
        files: {
            js: {
                src: [
                    SRC + 'app/app.js',
                    SRC + 'app/app.route.js',
                    SRC + 'app/*/*.service.js',
                    SRC + 'app/*/*.directive.js',
                    SRC + 'app/*/*.ctrl.js'
                ],
                vendor: [
                    SRC + 'vendor/angular.min.js',
                    SRC + 'vendor/angular-ui-router.min.js',
                    SRC + 'vendor/angular-animate.min.js',
                    SRC + 'vendor/angular-touch.min.js',
                    SRC + 'vendor/underscore-min.js'
                ]
            }
        },

        postcss: {
            options: {
              // map: true,
              processors: [require('autoprefixer-core')({browsers: 'last 1 version'}).postcss]
            },
            dist: {
              src: DIST + 'css/*.css'
            }
          },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    './dist/js/app.min.js': ["<%= files.js.src %>"]
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> ver. <%= pkg.version %> <%= grunt.template.today("mm-dd-yyyy") %> */\n'
            },
            dist: {
                files: {
                    './dist/js/app.min.js': ["./dist/js/app.min.js"]
                }
            }
        },

        sass: {
            dist: {
                files: [{
                    src : ['**/*.scss', '!**/_*.scss'],
                    cwd : './scss',
                    dest : DIST + 'css',
                    ext : '.css',
                    expand : true
                }],
                options: {
                    style: 'expanded'
                }
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: SERVER_PORT,
                    base: DIST,
                    livereload: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: [SRC + 'scss/**/*.scss'],
                tasks: ['sass', 'postcss']
            },
            css: {
                files: DIST + 'css/*.css',
                options: {
                    livereload: true
                }
            },
            javascript: {
                files: [SRC + 'app/**/*.js'],
                tasks: ['jshint', 'ngAnnotate'],
                options: {
                    livereload: true
                }
            },
            vendorscripts: {
                files: [SRC + 'scripts/*.js'],
                tasks: ['concat:vendor'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: [
                    SRC + 'app/**/*.html'
                ],
                tasks: ['copy:html', 'copy:index', 'htmlhint'],
                options: {
                    livereload: true
                }
            },
            images: {
                files: [SRC + 'img/*'],
                tasks: ['copy:images'],
                options: {
                    livereload: true
                }
            }
        },

        jshint: {
            files: {
                src: [SRC + 'app/**/*.js']
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': false,
                    'spec-char-escape': false,
                    'id-unique': true,
                    'head-script-disabled': false,
                    'style-disabled': false
                },
                src: [DIST + '**/*.html']
            }
        },

        copy: {
            index: {
                files: [
                    {
                        expand: true,
                        src: [SRC + 'app/index.html'],
                        flatten: true,
                        dest: DIST
                    }
                ]
            },
            html: {
                files: [
                    {
                        expand: true,
                        src: [SRC + 'app/*/*.html'],
                        flatten: true,
                        dest: DIST + 'views'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        src: [SRC + 'img/*'],
                        flatten: true,
                        dest: DIST + 'img'
                    }
                ]
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        src: [SRC + 'fonts/*'],
                        flatten: true,
                        dest: DIST + 'fonts'
                    }
                ]
            },
            scripts: {
                files: [
                    {
                        expand: true,
                        src: [
                            // SRC + 'scripts/modernizr.min.js'
                        ],
                        flatten: true,
                        dest: DIST + 'js'
                    }
                ]
            }
        },

        concat: {
            options: {
                separator: ';\n'
            },
            app: {
                options: {
                    banner: '/*! <%= pkg.name %> ver. <%= pkg.version %> <%= grunt.template.today("mm-dd-yyyy") %> */\n'
                },
                src: ["<%= files.js.src %>"],
                dest: DIST + 'js/app.min.js'
            },
            vendor: {
                src: ["<%= files.js.vendor %>"],
                dest: DIST + 'js/vendor.js'
            }
        },

        clean: {
            build: {
                src: [DIST + "**"]
            }
        }
    });

    // Load all Grunt tasks via matchdep:
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Register Tasks:
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('build', [
        'clean',
        'sass',
        'copy',
        'htmlhint',
        'jshint',
        'ngAnnotate',
        'concat:vendor'
    ]);
};