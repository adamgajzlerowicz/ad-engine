import { expect } from 'chai';
import { stickyAd } from '../../pages/sticky-ad.page';
import { adSlots } from '../../common/ad-slots';
import { timeouts } from '../../common/timeouts';
import { helpers } from '../../common/helpers';

describe('sticky-ad template', () => {
	beforeEach(() => {
		browser.url(stickyAd.pageLink);
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
	});

	afterEach(() => {
		browser.scroll(0, 0);
	});

	it('should stick and unstick', () => {
		expect(browser.isExisting(stickyAd.stickedSlot), 'Top leaderboard is sticked too soon').to.be
			.false;

		helpers.slowScroll(500);

		expect(browser.isExisting(stickyAd.stickedSlot), 'Top leaderboard is not sticked').to.be.true;

		helpers.waitForViewabillityCounted(timeouts.unstickTime);
		helpers.slowScroll(1000);

		expect(browser.isExisting(stickyAd.stickedSlot), 'Top leaderboard is not unsticked properly').to
			.be.false;
	});

	it('should not stick if viewability is counted', () => {
		helpers.waitForViewabillityCounted(timeouts.unstickTime);
		helpers.slowScroll(500);

		expect(browser.isExisting(stickyAd.stickedSlot), 'Top leaderboard should not stick').to.be
			.false;
	});

	it('should unstick if close button is clicked', () => {
		helpers.slowScroll(200);

		expect(browser.isExisting(stickyAd.stickedSlot), 'Top leaderboard is not sticked').to.be.true;

		browser.click(`${stickyAd.stickedSlot} ${stickyAd.classUnstickButton}`);

		expect(browser.isExisting(stickyAd.stickedSlot), 'Top leaderboard is not sticked').to.be.false;
	});
});
