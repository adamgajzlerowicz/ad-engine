import * as adEngine from '@wikia/ad-engine';

interface MyWindow extends Window{
    moatPrebidApi?: any;
    moatYieldReady?: any;
}
declare var window: MyWindow;


const logGroup = 'moat-yi';

adEngine.events.registerEvent('MOAT_YI_READY');

/**
 * Injects MOAT YI script
 * @returns {Promise}
 */
function loadScript() {
	const partnerCode = adEngine.context.get('services.moatYi.partnerCode');
	const url = `//z.moatads.com/${partnerCode}/yi.js`;

	return adEngine.utils.scriptLoader.loadScript(url, 'text/javascript', true, 'first');
}

/**
 * MOAT YI service handler
 */
class MoatYi {
	/**
	 * Requests MOAT YI service and saves page level data in targeting
	 * @returns {Promise}
	 */
	call() {
		if (!adEngine.context.get('services.moatYi.enabled') || !adEngine.context.get('services.moatYi.partnerCode')) {
			adEngine.utils.logger(logGroup, 'disabled');
			return Promise.resolve();
		}

		let moatYeildReadyResolve;
		const promise = new Promise((resolve) => {
			moatYeildReadyResolve = resolve;
		});
		adEngine.utils.logger(logGroup, 'loading');
		window.moatYieldReady = () => {
			this.importPageParams();
			moatYeildReadyResolve();
		};
		adEngine.context.set('targeting.m_data', 'waiting');

		loadScript().then(() => {
			adEngine.utils.logger(logGroup, 'ready');
		});

		return promise;
	}

	/**
	 * Adds page params to targeting
	 * @returns {void}
	 */
	importPageParams() {
		if (window.moatPrebidApi && typeof window.moatPrebidApi.getMoatTargetingForPage === 'function') {
			const pageParams = window.moatPrebidApi.getMoatTargetingForPage() || {};

			adEngine.context.set('targeting.m_data', pageParams.m_data);
			adEngine.events.emit(adEngine.events.MOAT_YI_READY, `m_data=${pageParams.m_data}`);
			adEngine.utils.logger(logGroup, 'moatYieldReady', pageParams);
		}
	}
}

export const moatYi = new MoatYi();
