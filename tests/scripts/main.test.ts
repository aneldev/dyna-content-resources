import {fetchPublishedGoogleDoc} from "../../src";
import {IError} from "dyna-fetch";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('Fetch published google doc content', () => {
	it('should fetch a test content', (done: Function) => {
		const docUrl: string = "https://docs.google.com/document/d/e/2PACX-1vSGkwqH7rRNX3WMTMRRl2Mb9cIskxwpIwC9OGHpYJof0RKUYUZ5Gq30_nBA4ZAk4nezMO33iVjmzxJV/pub";
		console.log('fetching');
		fetchPublishedGoogleDoc(docUrl)
			.then((htmlText: string) => {
				expect(htmlText).not.toBe("");
				expect(htmlText).not.toBe(null);
				expect(htmlText).not.toBe(undefined);
				expect(htmlText.length > 10).toBe(true);
				done();
			})
			.catch((error: IError) => {
				expect(error).toBe(null);
				done();
			});
		expect(true).toBe(true);
	});
});
