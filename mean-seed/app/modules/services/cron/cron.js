/**
@fileOverview
Some additional array/object functions that lodash doesn't seem to have..

@module array
@class array

@toc
//public
*/

'use strict';

var CronJob = require('cron').CronJob;
var self;

/**
@param {Object} opts
*/
function Cron(opts) {
	self =this;
}


Cron.prototype.testRun =function(params) {
	new CronJob('* * * * * 2000', function(){
    	console.log('You will see this message every second');
	}, null, true, "");
};

module.exports = new Cron({});