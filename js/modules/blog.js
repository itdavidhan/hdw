requirejs.config({
	baseUrl: '../js/libs',
	paths: {	//相对baseUrl的路径
		jquery: './jquery.min',
		bootstrap: './bootstrap',
		codemirror: './codemirror',
		gridstack: './gridstack', 
		ejs: './ejs',
		d3: './d3' 
	},
	map: {
		'*': {
            'css': '../libs/css'
        }
	},
	shim: {   
		bootstrap: {
			deps: ['jquery', 'css!../../css/libs/bootstrap.css']
		}
	}	  
});

define(['jquery', 'bootstrap', 'css!../../css/blog.css'], function() {
	console.log('blog');
});