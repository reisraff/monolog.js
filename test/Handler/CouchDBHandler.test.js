/*global describe,it,beforeEach*/
"use strict";

var monolog = require('../../index');
var assert = require('assert');
var stream = require('stream');
var http = require('http');

describe('monolog.processor.CouchDBHandler', function() {
	beforeEach(function() {
		this.record = {
			message: "logging to couchdb",
			extra: {},
			context: {},
			level: 100
		};
		this.options = {
			host: process.env.COUCHDB_HOST || "localhost",
			dbname: process.env.COUCHDB_LOGGER || "logger",
			port: process.env.COUCHDB_PORT || 5984,
			username:process.env.COUCHDB_USERNAME || undefined,
			password:process.env.COUCHDB_PASSWORD || undefined
		};
		this.couchDBHandler = new monolog.handler.CouchDBHandler(this.options);
	});
	//if (process.env.NODE_ENV !== "development") {
		it('should write record in couchdb', function(done) {
			this.couchDBHandler.handle(this.record, function(err, res) {
				assert(!err);
				assert(res);
				console.log(res);
				done();
			});

		});
	//}
});