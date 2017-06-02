requirejs.config({
	baseUrl: '../js',
	paths: {	//相对baseUrl的路径
		jquery: './libs/jquery.min',
		bootstrap: './libs/bootstrap',
		codemirror: './libs/codemirror',
		gridstack: './libs/gridstack', 
		ejs: './libs/ejs',
		d3: './libs/d3',
		navActive: './common/navActive'
	},
	map: {
		'*': {
            'css': './libs/css'
        }
	},
	shim: {   
		bootstrap: {
			deps: ['jquery', 'css!../css/libs/bootstrap.css']
		}
	}	  
});

require(['jquery', 'navActive', 'bootstrap', 'css!../css/blog.css'], function($, navActive) {
	navActive.init();
});