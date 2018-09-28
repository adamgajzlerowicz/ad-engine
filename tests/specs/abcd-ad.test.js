import abcdAd from '../pages/abcd-ad.page';
import adSlots from '../common/adSlots';
import { timeouts } from '../common/timeouts';
import helpers from '../common/helpers';

const { expect } = require('chai');

describe('It will test abcd ads', () => {
	beforeEach(() => {
		browser.url(abcdAd.pageLink);
		browser.waitForVisible(helpers.pageBody);
	});

	describe('It will test top leaderboard', () => {
		beforeEach(() => {
			browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
		});

		it('will test dimensions and visibility', () => {
			const size = browser.getElementSize(adSlots.topLeaderboard);
			const tableOfErrors = [];

			try {
				expect(size.width)
					.to
					.equal(adSlots.adProductsTopLeaderboardWidth, 'Width incorrect');
				expect(size.height)
					.to
					.equal(adSlots.abcdLeaderboardHeight, 'Height incorrect');
			} catch (error) {
				tableOfErrors.push(error.message);
			}
			try {
				expect(browser.isVisibleWithinViewport(adSlots.topLeaderboard), 'Top leaderboard not in viewport')
					.to
					.be
					.true;
			} catch (error) {
				tableOfErrors.push(error.message);
			}

			expect(tableOfErrors.length, helpers.errorFormatter(tableOfErrors))
				.to
				.equal(0);
		});

		it('will test line item id', () => {
			expect(browser.element(adSlots.topLeaderboard).getAttribute(adSlots.lineItemParam))
				.to
				.equal(abcdAd.topLeaderboardLineItemId, 'Line item ID mismatch');
		});

		it('will test if leaderboard does not obstruct the navbar', () => {
			expect(browser.isVisibleWithinViewport(helpers.navbar), 'Navbar not visible')
				.to
				.be
				.true;
		});

		it('will test redirect on click', () => {
			browser.click(adSlots.topLeaderboard);

			const tabIds = browser.getTabIds();

			browser.switchTab(tabIds[1]);
			helpers.waitForUrl(helpers.fandomWord);
			expect(browser.getUrl())
				.to
				.include(helpers.fandomWord);
			helpers.closeNewTabs();
		});

		describe('It will test video player in leaderboard', () => {
			beforeEach(() => {
				helpers.waitToStartPlaying();
			});

			it('will test if video player is visible', () => {
				expect(browser.isVisible(`${adSlots.topLeaderboard} ${abcdAd.videoPlayer}`), 'Video player not in viewport')
					.to
					.be
					.true;
			});

			it('will test if clicking the button unmutes the video', () => {
				browser.moveToObject(`${adSlots.topLeaderboard} ${abcdAd.videoPlayer}`);
				browser.click(abcdAd.unmuteButton);
				expect(browser.isExisting(`${abcdAd.unmuteButton}${adSlots.buttonIsOnClass}`), 'Video not unmuted')
					.to
					.be
					.false;
			});
		});
	});

	describe('It will test top boxad', () => {
		beforeEach(() => {
			browser.waitForVisible(adSlots.topBoxad, timeouts.standard);
		});

		it('will test dimensions and visibility', () => {
			const size = browser.getElementSize(adSlots.topBoxad);
			const tableOfErrors = [];

			try {
				expect(size.width)
					.to
					.equal(adSlots.boxadWidth, 'Top boxad width incorrect');
				expect(size.height)
					.to
					.equal(adSlots.boxadHeight, 'Top boxad height incorrect');
			} catch (error) {
				tableOfErrors.push(error.message);
			}
			try {
				expect(browser.isVisibleWithinViewport(adSlots.topBoxad), 'Top boxad not in viewport')
					.to
					.be
					.true;
			} catch (error) {
				tableOfErrors.push(error.message);
			}

			expect(tableOfErrors.length, helpers.errorFormatter(tableOfErrors))
				.to
				.equal(0);
		});

		it('will test line item id', () => {
			expect(browser.element(adSlots.topBoxad).getAttribute(adSlots.lineItemParam))
				.to
				.equal(abcdAd.topBoxadLineItemId, 'Line item ID mismatch');
		});

		it('will test redirect on click', () => {
			browser.click(adSlots.topBoxad);

			const tabIds = browser.getTabIds();

			browser.switchTab(tabIds[1]);
			helpers.waitForUrl(helpers.fandomWord);
			expect(browser.getUrl())
				.to
				.include(helpers.fandomWord);
			helpers.closeNewTabs();
		});
	});
});