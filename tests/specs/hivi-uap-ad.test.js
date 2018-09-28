import hiviUap from '../pages/hivi-uap-ad.page';
import adSlots from '../common/adSlots';
import { timeouts } from '../common/timeouts';
import helpers from '../common/helpers';

const { expect } = require('chai');

describe('It will test uap hivi slots', () => {
	beforeEach(() => {
		browser.url(hiviUap.pageLink);
		browser.waitForVisible(helpers.pageBody);
	});

	afterEach(() => {
		browser.scroll(0, 0);
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
					.equal(adSlots.uapTopLeaderboardHeight, 'Height incorrect');
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
				.equal(hiviUap.topLineItemId, 'Line item ID mismatch');
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

		it('will test closing the top leaderboard', () => {
			browser.click(hiviUap.closeLeaderboardButton);
			expect(browser.element(adSlots.topLeaderboard).getAttribute(hiviUap.slotResult))
				.to
				.equal(hiviUap.slotCollapsed, 'Slot has not collapsed');
		});

		it('will test top leaderboard unsticking after scroll', () => {
			helpers.slowScroll(3000);
			expect(browser.isVisibleWithinViewport(adSlots.topLeaderboard), 'Top leaderboard in viewport')
				.to
				.be
				.false;
		});

		describe('It will test video player in top leaderboard', () => {
			beforeEach(() => {
				helpers.waitToStartPlaying();
				browser.moveToObject(hiviUap.videoPlayer);
			});

			it('will test opening the full screen player', () => {
				browser.click(hiviUap.playerFullscreenButton);
				expect(browser.isExisting(hiviUap.fullScreen), 'Top leaderboard not on full screen')
					.to
					.be
					.true;
			});

			it('will test pausing the video', () => {
				browser.click(`${adSlots.topLeaderboard} ${hiviUap.playPauseButton}`);
				expect(browser.isExisting(`${hiviUap.playPauseButton}${hiviUap.buttonIsOnClass}`), 'Video not paused')
					.to
					.be
					.false;
			});

			it('will test unmuting the video', () => {
				browser.click(hiviUap.volumeButton);
				expect(browser.isExisting(`${hiviUap.volumeButton}${hiviUap.buttonIsOnClass}`), 'Video not unmuted')
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
					.equal(adSlots.boxadWidth, 'Width incorrect');
				expect(size.height)
					.to
					.equal(adSlots.boxadHeight, 'Height incorrect');
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
				.equal(hiviUap.topLineItemId, 'Line item ID mismatch');
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

	describe('It will test incontent boxad', () => {
		beforeEach(() => {
			browser.scroll(0, 1000);
			browser.waitForVisible(adSlots.incontentBoxad, timeouts.standard);
		});

		it('will test dimensions and visibility', () => {
			const size = browser.getElementSize(adSlots.incontentBoxad);
			const tableOfErrors = [];

			try {
				expect(size.width)
					.to
					.equal(adSlots.boxadWidth, 'Width incorrect');
				expect(size.height)
					.to
					.equal(adSlots.boxadHeight, 'Height incorrect');
			} catch (error) {
				tableOfErrors.push(error.message);
			}
			try {
				expect(browser.isVisibleWithinViewport(adSlots.incontentBoxad), 'Incontent boxad not in viewport')
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
			expect(browser.element(adSlots.incontentBoxad).getAttribute(adSlots.lineItemParam))
				.to
				.equal(hiviUap.bottomLineItemId, 'Line item ID mismatch');
		});

		it('will test redirect on click', () => {
			browser.click(adSlots.incontentBoxad);

			const tabIds = browser.getTabIds();

			browser.switchTab(tabIds[1]);
			helpers.waitForUrl(helpers.fandomWord);
			expect(browser.getUrl())
				.to
				.include(helpers.fandomWord);
			helpers.closeNewTabs();
		});
	});

	describe('It will test bottom leaderboard', () => {
		beforeEach(() => {
			helpers.slowScroll(7000);
			browser.waitForVisible(adSlots.bottomLeaderboard, timeouts.standard);
		});

		it('will test dimensions and visibility', () => {
			const size = browser.getElementSize(adSlots.bottomLeaderboard);
			const tableOfErrors = [];

			try {
				expect(size.width)
					.to
					.equal(adSlots.uapBottomLeaderboardWidth, ' Width incorrect');
				expect(size.height)
					.to
					.equal(adSlots.uapBottomLeaderboardHeight, 'Height incorrect');
			} catch (error) {
				tableOfErrors.push(error.message);
			}
			try {
				expect(browser.isVisibleWithinViewport(adSlots.bottomLeaderboard), 'Bottom leaderboard not in viewport')
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
			expect(browser.element(adSlots.bottomLeaderboard).getAttribute(adSlots.lineItemParam))
				.to
				.equal(hiviUap.bottomLineItemId, 'Line item ID mismatch');
		});

		it('will test redirect on click', () => {
			browser.click(adSlots.bottomLeaderboard);

			const tabIds = browser.getTabIds();

			browser.switchTab(tabIds[1]);
			helpers.waitForUrl(helpers.fandomWord);
			expect(browser.getUrl())
				.to
				.include(helpers.fandomWord);
			helpers.closeNewTabs();
		});

		describe('It will test video player in bottom leaderboard', () => {
			beforeEach(() => {
				browser.waitForVisible(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer}`, timeouts.standard);
				helpers.waitToStartPlaying();
				browser.moveToObject(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer}`);
			});

			it('will test opening the fullscreen player', () => {
				browser.click(`${adSlots.bottomLeaderboard} ${hiviUap.playerFullscreenButton}`);
				expect(browser.isExisting(hiviUap.fullScreen), 'Video not on full screen')
					.to
					.be
					.true;
			});

			it('will test pausing the video', () => {
				browser.click(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer} ${hiviUap.playPauseButton}`);
				expect(browser.isExisting(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer} ${hiviUap.playPauseButton}${hiviUap.buttonIsOnClass}`), 'Video not paused')
					.to
					.be
					.false;
			});

			it('will test unmuting the video', () => {
				browser.click(`${adSlots.bottomLeaderboard} ${hiviUap.volumeButton}`);
				expect(browser.isExisting(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer} ${hiviUap.volumeButton}${hiviUap.buttonIsOnClass}`), 'Video not unmuted')
					.to
					.be
					.false;
			});
		});
	});
});