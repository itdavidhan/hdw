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
			deps: ['jquery', 'css!../../css/bootstrap.css']
		}
	}	  
});

define(['jquery', 'bootstrap'], function($) {
	console.log('news', $);
	var $btn = $('button');

	$btn.on('click', function() {
		alert(1);
	});
});