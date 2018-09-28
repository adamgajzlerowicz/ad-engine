import floatingRailAd from '../pages/floating-rail-ad.page';
import adSlots from '../common/adSlots';
import { timeouts } from '../common/timeouts';
import helpers from '../common/helpers';

const { expect } = require('chai');

describe('It will test floating rail ads', () => {
	beforeEach(() => {
		browser.url(floatingRailAd.pageLink);
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
					.equal(adSlots.leaderboardWidth, 'Width incorrect');
				expect(size.height)
					.to
					.equal(adSlots.leaderboardHeight, 'Height incorrect');
			} catch (error) {
				tableOfErrors.push(error.message);
			}
			try {
				expect(browser.isVisibleWithinViewport(adSlots.topLeaderboard), 'Top leaderboard not visible in viewport')
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
				.equal(floatingRailAd.topLeaderboardLineItemId, 'Line item ID mismatch');
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
				expect(browser.isVisibleWithinViewport(adSlots.topBoxad), 'Top boxad not visible in viewport')
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
			expect(browser.element(adSlots.topBoxad)
				.getAttribute(adSlots.lineItemParam))
				.to
				.equal(floatingRailAd.topBoxadLineItemId, 'Line item ID mismatch');
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

		it('will test if rail scrolls with the content', () => {
			helpers.slowScroll(500);
			expect(browser.element(floatingRailAd.rail).getAttribute(helpers.classProperty))
				.to
				.equal(floatingRailAd.attributeRailScrolling, 'Rail did not scroll');
		});
	});
});