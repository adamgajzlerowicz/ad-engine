import { vastParser } from './vast-parser';

function setAttribute(element, attribute, value) {
	if (!element || !value) {
		return;
	}

	element.setAttribute(attribute, value);
}

class VastDebugger {
	setVastAttributes(element, vastUrl, status, imaAd) {
		const vastParams = vastParser.parse(vastUrl, {
			imaAd
		});

		setAttribute(element, 'data-vast-content-type', vastParams.contentType);
		setAttribute(element, 'data-vast-creative-id', vastParams.creativeId);
		setAttribute(element, 'data-vast-line-item-id', vastParams.lineItemId);
		setAttribute(element, 'data-vast-position', vastParams.position);
		setAttribute(element, 'data-vast-size', vastParams.size);
		setAttribute(element, 'data-vast-status', status);
		setAttribute(element, 'data-vast-params', JSON.stringify(vastParams.customParams));
	}
}

export const vastDebugger = new VastDebugger();
