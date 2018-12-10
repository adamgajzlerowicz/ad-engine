import * as adEngine from '@wikia/ad-engine';

interface MyWindow extends Window{
    Krux?: any,
}
declare var window: MyWindow;

const logGroup = 'krux';

/**
 * Injects Krux script
 * @returns {Promise}
 */
function loadScript() {
	const kruxId = adEngine.context.get('services.krux.id');
	const kruxLibraryUrl = `//cdn.krxd.net/controltag?confid=${kruxId}`;

	return adEngine.utils.scriptLoader.loadScript(kruxLibraryUrl, 'text/javascript', true, 'first', {
		id: 'krux-control-tag'
	});
}

/**
 * Gets Krux data from localStorage
 * @param {string} key
 * @returns {string}
 */
function getKruxData(key) {
	if (window.localStorage) {
		return window.localStorage[key];
	} else if (window.navigator.cookieEnabled) {
		const match = document.cookie.match(`${key}=([^;]*)`);

		return (match && decodeURI(match[1])) || '';
	}

	return '';
}

window.Krux = window.Krux || function (...args) {
	window.Krux.q.push(args);
};
window.Krux.q = window.Krux.q || [];

/**
 * Krux service handler
 */
class Krux {
	/**
	 * Requests service, saves user id and segments in adEngine.context and exports page level params
	 * @returns {Promise}
	 */
	call() {
		if (!adEngine.context.get('services.krux.enabled') || !adEngine.context.get('options.trackingOptIn')) {
			adEngine.utils.logger(logGroup, 'disabled');
			return Promise.resolve();
		}

		adEngine.utils.logger(logGroup, 'loading');
		return loadScript().then(() => {
			this.exportPageParams();
			this.importUserData();
		});
	}

	/**
	 * Export page level params to Krux
	 * @returns {void}
	 */
	exportPageParams() {
		Object.keys(adEngine.context.get('targeting')).forEach((key) => {
			const value = adEngine.context.get(`targeting.${key}`);

			if (value) {
				window[`kruxDartParam_${key}`] = value;
			}
		});
	}

	/**
	 * Imports Krux data from localStorage
	 * @returns {void}
	 */
	importUserData() {
		const user = getKruxData('kxuser');
		const segments = getKruxData('kxsegs');

		adEngine.context.set('targeting.kuid', user || null);
		adEngine.context.set('targeting.ksg', segments ? segments.split(',') : []);
		adEngine.utils.logger(logGroup, 'data set', user, segments);
	}

	/**
	 * Returns Krux user ID
	 * @returns {string}
	 */
	getUserId() {
		return adEngine.context.get('targeting.kuid') || null;
	}

	/**
	 * Returns Krux segments
	 * @returns {string[]}
	 */
	getSegments() {
		return adEngine.context.get('targeting.ksg') || [];
	}
}

export const krux = new Krux();
