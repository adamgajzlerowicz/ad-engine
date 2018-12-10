import * as adEngine from '@wikia/ad-engine';

interface MyWindow extends Window{
    grumi?: any,
}
declare var window: MyWindow;


const logGroup = 'geo-edge';
const scriptDomainId = 'd3b02estmut877';

/**
 * Injects Geo Edge Site Side Protection script
 * @returns {Promise}
 */
function loadScript() {
	const geoEdgeLibraryUrl = `//${scriptDomainId}.cloudfront.net/grumi-ip.js`;

	return adEngine.utils.scriptLoader.loadScript(geoEdgeLibraryUrl, 'text/javascript', true, 'first');
}

/**
 * GeoEdge service handler
 */
class GeoEdge {
	/**
	 * Requests service and injects script tag
	 * @returns {Promise}
	 */
	call() {
		const geoEdgeKey = adEngine.context.get('services.geoEdge.id');
		const geoEdgeConfig = adEngine.context.get('services.geoEdge.config');

		if (!adEngine.context.get('services.geoEdge.enabled') || !geoEdgeKey) {
			adEngine.utils.logger(logGroup, 'disabled');

			return Promise.resolve();
		}

		adEngine.utils.logger(logGroup, 'loading');
		window.grumi = {
			cfg: geoEdgeConfig,
			key: geoEdgeKey
		};

		return loadScript().then(() => {
			adEngine.utils.logger(logGroup, 'ready');
		});
	}
}

export const geoEdge = new GeoEdge();
