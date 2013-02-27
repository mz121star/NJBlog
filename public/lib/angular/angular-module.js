define([ '../lib/angular/angular'], function (angular) {
	if (typeof _ != 'undefined') {
		_.noConflict();
	}

	if(typeof $ != 'undefined') {
		$.noConflict() ;
	}
    return window.angular;
});