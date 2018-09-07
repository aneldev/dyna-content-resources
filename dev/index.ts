import {fetchPublishedGoogleDoc} from "../src";
import {IError} from "dyna-fetch";

const docUrl: string = "https://docs.google.com/document/d/e/2PACX-1vSGkwqH7rRNX3WMTMRRl2Mb9cIskxwpIwC9OGHpYJof0RKUYUZ5Gq30_nBA4ZAk4nezMO33iVjmzxJV/pub";

console.log('fetching');
fetchPublishedGoogleDoc(docUrl)
	.then((htmlText: string) => {
		console.log('output');
		console.log(htmlText);
	})
	.catch((error: IError) => {
		console.error(error);
	});