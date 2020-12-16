const $ = require('jquery');
import { run } from "@vertigis/reporting-client";

export const getReportUrl = async (featureId, fips) => {
	console.log(featureId);
	console.log(fips);
	// const test = 'https://www.google.com/';
	// window.open(test, '_blank');
	let itemId = "84ffd6b1be0647588256e0bb1a1e9226";

	const url = await run(itemId, {
		parameters: {
			FeatureIds: [featureId],
			CountyFipsCode: [fips],
			UserLogo:undefined,
			GPCLogo1:undefined,
			GPCLogo2:"https://services.selectgeorgia.com/data/logos/GeorgiaPowerVertical.png"
		}
	});
	console.log(url);
	
	window.open(url, '_blank');
}

