import { expect } from 'chai';
import btfOnlyAd from '../../pages/btf-only-ad.page';
import adSlots from '../../common/ad-slots';
import { timeouts } from '../../common/timeouts';
import helpers from '../../common/helpers';

describe('BTF Only ads page: incontent boxad', () => {
	let adStatus;

	before(() => {
		browser.url(btfOnlyAd.pageLink);
		browser.waitForVisible(btfOnlyAd.finishQueueButton, timeouts.standard);
		browser.click(btfOnlyAd.finishQueueButton);
		helpers.slowScroll(2500);
		helpers.waitForExpanded(adSlots.incontentBoxad);
		adStatus = helpers.getSlotStatus(adSlots.incontentBoxad);
	});

	it('Check if boxad is visible and in viewport after clicking on the button', () => {
		expect(adStatus.inViewport, 'Not in viewport')
			.to
			.be
			.true;
	});
});

