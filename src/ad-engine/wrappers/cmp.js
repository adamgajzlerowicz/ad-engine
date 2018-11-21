export class Cmp {
	get exists() {
		return !!window.__cmp;
	}

	/**
	 * @param {function(object)} cb Callback receiving current bids
	 * @returns {!Promise} If `cb` has been omitted
	 */
	getConsentData(param, cb) {
		if (cb) {
			window.__cmp('getConsentData', param, consentData => cb(consentData));
			return {};
		}
		return new Promise((resolve) => {
			window.__cmp('getConsentData', param, consentData => resolve(consentData));
		});
	}

	override(newCmp) {
		window.__cmp = newCmp;
	}
}

export const cmp = new Cmp();
