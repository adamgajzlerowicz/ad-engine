import { context, events, slotTweaker, utils } from '@wikia/ad-engine';
import AdvertisementLabel from '../interface/advertisement-label';
import CloseButton from '../interface/close-button';

export class Interstitial {
	constructor(adSlot) {
		this.adSlot = adSlot;
		this.config = context.get('templates.interstitial');
	}

	static getName() {
		return 'interstitial';
	}

	static getDefaultConfig() {
		return {
			onInit: () => {},
		};
	}

	init() {
		const wrapper = this.adSlot.getElement();
		const closeButton = new CloseButton({
			onClick: () => {
				document.documentElement.classList.remove('stop-scrolling');
				slotTweaker.hide(this.adSlot);
				utils.logger(Interstitial.getName(), 'closed');
			},
		});
		const label = new AdvertisementLabel();

		this.config.onInit();

		wrapper.appendChild(closeButton.render());
		wrapper.appendChild(label.render());
		wrapper.classList.add('interstitial');
		wrapper.classList.add('out-of-page-template');
		document.documentElement.classList.add('stop-scrolling');

		slotTweaker.adjustIframeByContentSize(this.adSlot);

		utils.logger(Interstitial.getName(), 'init');

		events.once(events.BEFORE_PAGE_CHANGE_EVENT, () => {
			document.documentElement.classList.remove('stop-scrolling');
		});
	}
}
