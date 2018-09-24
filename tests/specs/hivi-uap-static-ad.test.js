import hiviUapStatic from '../pages/hivi-uap-static-ad.page';
import adSlots from '../common/adSlots';
import { timeouts } from '../common/timeouts';
import helpers from '../common/helpers';

const { expect } = require('chai');

describe('It will test uap hivi static slots', () => {
	beforeEach(() => {
		browser.url(hiviUapStatic.pageLink);
		browser.waitForVisible(helpers.pageBody);
	});

	afterEach(() => {
		browser.scroll(0, 0);
	});

	// Top Leaderboard tests

	it('will test visibility and dimensions of top leaderboard', () => {
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);

		const size = browser.getElementSize(adSlots.topLeaderboard);
		const tableOfErrors = [];

		try {
			expect(size.width)
				.to
				.equal(adSlots.uapTopLeaderboardWidth, 'Top leaderboard width incorrect');
			expect(size.height)
				.to
				.equal(adSlots.uapTopLeaderboardHeight, 'Top leaderboard height incorrect');
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

		expect(tableOfErrors.length, `Errors found: ${tableOfErrors.toString()}`)
			.to
			.equal(0);
	});

	it('will test line item id and creative id of top leaderboard', () => {
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
		expect(browser.element(adSlots.topLeaderboard).getAttribute(adSlots.lineItemParam))
			.to
			.equal(hiviUapStatic.topLeaderboardlineItemId, 'Line item ID mismatch');
		expect(browser.element(adSlots.topLeaderboard).getAttribute(adSlots.creativeItemParam))
			.to
			.equal(hiviUapStatic.topLeaderboardcreativeId, 'Creative ID mismatch');
	});

	it('will test redirect on click on top leaderboard', () => {
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
		browser.click(adSlots.topLeaderboard);

		const tabIds = browser.getTabIds();

		browser.switchTab(tabIds[1]);
		helpers.waitForUrl(helpers.lukeSkywalkerLegacy);
		expect(browser.getUrl())
			.to
			.equal(helpers.lukeSkywalkerLegacy);
		helpers.closeNewTabs();
	});

	it('will test closing the top leaderboard', () => {
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
		browser.click(hiviUapStatic.closeLeaderboardButton);
		expect(browser.element(adSlots.topLeaderboard).getAttribute(hiviUapStatic.slotResult))
			.to
			.equal(hiviUapStatic.slotCollapsed, 'Slot has not collapsed');
	});

	it('will test top leaderboard unsticking after scroll', () => {
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
		helpers.slowScroll(3000);
		expect(browser.isVisibleWithinViewport(adSlots.topLeaderboard), 'Top leaderboard in viewport')
			.to
			.be
			.false;
	});

	// Top Boxad tests

	it('will test top boxad dimensions and visibility', () => {
		browser.waitForVisible(adSlots.topBoxad, timeouts.standard);

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

		expect(tableOfErrors.length, `Errors found: ${tableOfErrors.toString()}`)
			.to
			.equal(0);
	});

	it('will test line item id and creative id of top boxad', () => {
		browser.waitForVisible(adSlots.topBoxad, timeouts.standard);
		expect(browser.element(adSlots.topBoxad).getAttribute(adSlots.lineItemParam))
			.to
			.equal(hiviUapStatic.topBoxadLineItemId, 'Line item ID mismatch');
		expect(browser.element(adSlots.topBoxad).getAttribute(adSlots.creativeItemParam))
			.to
			.equal(hiviUapStatic.topBoxadCreativeId, 'Creative ID mismatch');
	});

	it('will test redirect on click on top boxad', () => {
		browser.waitForVisible(adSlots.topBoxad, timeouts.standard);
		browser.click(adSlots.topBoxad);

		const tabIds = browser.getTabIds();

		browser.switchTab(tabIds[1]);
		helpers.waitForUrl(helpers.lukeSkywalkerLegacy);
		expect(browser.getUrl())
			.to
			.equal(helpers.lukeSkywalkerLegacy);
		helpers.closeNewTabs();
	});

	// Incontent Boxad tests

	it('will test incontent boxad dimensions and visibility', () => {
		browser.scroll(0, 1000);
		browser.waitForVisible(adSlots.incontentBoxad, timeouts.standard);

		const size = browser.getElementSize(adSlots.incontentBoxad);
		const tableOfErrors = [];

		try {
			expect(size.width)
				.to
				.equal(adSlots.boxadWidth, 'Incontent boxad width incorrect');
			expect(size.height)
				.to
				.equal(adSlots.boxadHeight, 'Incontent boxad height incorrect');
		} catch (error) {
			tableOfErrors.push(error.message);
		}
		try {
			expect(browser.isVisibleWithinViewport(adSlots.incontentBoxad))
				.to
				.be
				.true;
		} catch (error) {
			tableOfErrors.push(error.message);
		}

		expect(tableOfErrors.length, `Errors found: ${tableOfErrors.toString()}`)
			.to
			.equal(0);
	});

	it('will test line item id and creative id of top boxad', () => {
		browser.scroll(0, 1000);
		browser.waitForVisible(adSlots.incontentBoxad, timeouts.standard);
		expect(browser.element(adSlots.incontentBoxad).getAttribute(adSlots.lineItemParam))
			.to
			.equal(hiviUapStatic.incontentBoxadLineItemId, 'Line item ID mismatch');
		expect(browser.element(adSlots.incontentBoxad).getAttribute(adSlots.creativeItemParam))
			.to
			.equal(hiviUapStatic.incontentBoxadCreativeId, 'Creative ID mismatch');
	});

	it('will test redirect on click on incontent boxad', () => {
		browser.scroll(0, 1000);
		browser.waitForVisible(adSlots.incontentBoxad, timeouts.standard);
		browser.click(adSlots.incontentBoxad);

		const tabIds = browser.getTabIds();

		browser.switchTab(tabIds[1]);
		helpers.waitForUrl(helpers.lukeSkywalkerLegacy);
		expect(browser.getUrl())
			.to
			.equal(helpers.lukeSkywalkerLegacy);
		helpers.closeNewTabs();
	});

	// Bottom Leaderboard tests

	it('will test bottom leaderboard dimensions and visibility', () => {
		helpers.slowScroll(6000);

		const size = browser.getElementSize(adSlots.bottomLeaderboard);
		const tableOfErrors = [];

		try {
			expect(size.width)
				.to
				.equal(adSlots.uapBottomLeaderboardWidth, 'Bottom leaderboard width incorrect');
			expect(size.height)
				.to
				.equal(adSlots.uapBottomLeaderboardHeight, 'Bottom leaderboard height incorrect');
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

		expect(tableOfErrors.length, `Errors found: ${tableOfErrors.toString()}`)
			.to
			.equal(0);
	});

	it('will test line item id and creative id of bottom leaderboard', () => {
		helpers.slowScroll(6000);
		browser.waitForVisible(adSlots.bottomLeaderboard, timeouts.standard);
		expect(browser.element(adSlots.bottomLeaderboard).getAttribute(adSlots.lineItemParam))
			.to
			.equal(hiviUapStatic.bottomLeaderboardLineItemId, 'Line item ID mismatch');
		expect(browser.element(adSlots.bottomLeaderboard).getAttribute(adSlots.creativeItemParam))
			.to
			.equal(hiviUapStatic.bottomLeaderboardCreativeId, 'Creative ID mismatch');
	});

	it('will test redirect on click on bottom leaderboard', () => {
		helpers.slowScroll(6000);
		browser.waitForVisible(adSlots.bottomLeaderboard, timeouts.standard);
		browser.click(adSlots.bottomLeaderboard);

		const tabIds = browser.getTabIds();

		browser.switchTab(tabIds[1]);
		helpers.waitForUrl(helpers.lukeSkywalkerLegacy);
		expect(browser.getUrl())
			.to
			.equal(helpers.lukeSkywalkerLegacy);
		helpers.closeNewTabs();
	});
});
