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

require([
	'jquery', 
	'bootstrap', 
	'navActive',
	'css!../css/index.css'
], function($, bootstrap, navActive) {
	// 导航active
	navActive.init();
});