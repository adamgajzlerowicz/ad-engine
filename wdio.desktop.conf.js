/* global browser */
/* eslint-disable import/no-extraneous-dependencies */

const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

global.wdioEnvironment = 'desktop';

exports.config = merge(
	wdioConf.config,
	{
		specs: ['tests/specs/**/*.desktop.test.js'],
		capabilities: [
			{
				browserName: 'chrome',
				loggingPrefs: {
					browser: 'ALL',
				},
			},
		],
		before() {
			browser.windowHandleSize({ width: 1600, height: 900 });
		},
		after() {
			browser.windowHandleSize({ width: 1600, height: 900 });
		},
	},
	{ clone: false },
);
