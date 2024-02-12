const mix = require('laravel-mix');

mix.styles([
'resources/css/all.min.css',
'resources/css/adminlte.min.css',
'resources/css/config.css',
], 'public/css/plantilla.css')
.js('resources/js/app.js', 'public/js')
.scripts([
'resources/js/adminlte.min.js',
'resources/js/demo.js',
], 'public/js/plantilla.js')
.copy('resources/fontawesome/webfonts', 'public/webfonts')
.copy('resources/img', 'public/img');