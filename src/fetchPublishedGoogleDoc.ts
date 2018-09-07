import {dynaFetch, IError} from "dyna-fetch";
import {JSDOM} from "jsdom";

export const fetchPublishedGoogleDoc = (publicUrl: string): Promise<string> => {
	return dynaFetch(publicUrl)
		.then((response: Response) => response.text())
		.then((htmlText: any) => {
			const dom = new JSDOM(htmlText);
			const contentElement: HTMLElement = dom.window.document.querySelector('#contents');
			if (contentElement) {
				return Promise.resolve(contentElement.innerHTML);
			}
			else {
				return Promise.reject({
					section: "dyna-content-resources/fetchPublishedGoogleDoc",
					code: "1809070950",
					message: "Resource is no longer compatible, #contents cannot be found",
				} as IError);
			}
		});
};