import {dynaFetch, IError} from "dyna-fetch";
import {JSDOM} from "jsdom";

export const fetchPublishedGoogleDoc = (publicUrl: string): Promise<string> => {
	return dynaFetch(publicUrl)
		.then((response: Response) => response.text())
		.then((htmlText: any) => {
			const dom = new JSDOM(htmlText);
			const contentElement: HTMLElement = dom.window.document.querySelector('#contents');
			if (contentElement) {
				clearContent(contentElement);
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

const clearContent = (contentElement: HTMLElement): void => {
	let pElements: HTMLElement[] = [];
	Array(12).fill(null)
		.forEach((value: any, index: number) => {
			pElements = pElements.concat(Array.apply(this, contentElement.querySelectorAll(`p.c${index}`)));
		});

	pElements.forEach((element: HTMLElement) => {
		element.style.marginRight = "0";
		element.style.paddingRight = "0";
	});

	const imageElements: HTMLImageElement[] = Array.apply(this, contentElement.querySelectorAll('img'));
	imageElements.forEach((imageElement: HTMLImageElement) => {
		// image
		imageElement.style.height = "";
		imageElement.style.maxWidth = "100%";

		// span
		imageElement.parentElement.style.maxWidth = "100%";
		imageElement.parentElement.style.textIndent = "0";
		imageElement.parentElement.style.height = "";

		// p
		imageElement.parentElement.parentElement.style.textIndent = "0";
	})
};