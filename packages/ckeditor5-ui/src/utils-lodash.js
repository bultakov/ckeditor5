/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals module */

'use strict';

// This module returns the list of Lo-Dash methods that will be exported to the main "utils" module. It is coded in a
// way that it can be used by the CKEditor core code in "utils" as well as from Node.js with the configurations for
// `grunt lodash`.
//
// https://lodash.com/docs

( function() {
	// The list of Lo-Dash methods to include in "utils".
	// It is mandatory to execute `grunt lodash` after changes to this list.
	var lodashInclude = [
		'extend',
		'isFunction'
	];

	// Make this compatible with CommonJS as well so it can be used in Node (e.g. "grunt lodash").
	if ( typeof module == 'object' && module.exports ) {
		module.exports = lodashInclude;
	} else {
		CKEDITOR.define( function() {
			return lodashInclude;
		} );
	}
} )();
