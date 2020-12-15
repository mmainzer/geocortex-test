const $ = require('jquery');
import { getReportUrl } from './getReport.js';

export let fips;
export let feature;

export function cursor(e) {
	let selected = e.currentTarget;
	$(selected).css('cursor','pointer');
}

export function getArea(e) {

	let selected = e.currentTarget;
	feature = $(selected).attr('feature');
	fips = $(selected).attr('id');

	fips = parseInt( fips );
	feature = parseInt( feature );

	$("#"+fips).addClass('active');
	// remove color of inactive header
	$( 'li' ).not( "#"+fips ).removeClass('active');

	// console.log(url);

	getReportUrl(feature, fips);

}