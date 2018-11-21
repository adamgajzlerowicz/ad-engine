export class Apstag {
	init(apsConfig) {
		this.configureApstag();
		window.apstag.init(apsConfig);
	}

	/** @private */
	configureApstag() {
		window.apstag = window.apstag || {};
		window.apstag._Q = window.apstag._Q || [];

		if (typeof window.apstag.init === 'undefined') {
			window.apstag.init = (...args) => {
				this.configureApstagCommand('i', args);
			};
		}

		if (typeof window.apstag.fetchBids === 'undefined') {
			window.apstag.fetchBids = (...args) => {
				this.configureApstagCommand('f', args);
			};
		}
	}

	/** @private */
	configureApstagCommand(command, args) {
		window.apstag._Q.push([command, args]);
	}

	/**
	 * @private
	 * @param {object} bidsConfig configuration of bids
	 * @param {function(object)} callback Callback receiving current bids
	 * @returns {!Promise} If `callback` has been omitted
	 */
	fetchBids(bidsConfig, cb) {
		if (cb) {
			window.apstag.fetchBids(bidsConfig, currentBids => cb(currentBids));
			// DISCUSS: consistent-return... maybe not?
			return {};
		}
		return new Promise((resolve) => {
			window.apstag.fetchBids(bidsConfig, currentBids => resolve(currentBids));
		});
	}

	targetingKeys() {
		return window.apstag.targetingKeys();
	}

	enableDebug() {
		window.apstag.debug('enable');
	}

	disableDebug() {
		window.apstag.debug('disable');
	}
}

export const apstag = new Apstag();
