import hiviUap from '../../pages/hivi-uap-ad.page';
import adSlots from '../../common/adSlots';
import { timeouts } from '../../common/timeouts';
import helpers from '../../common/helpers';

const { expect } = require('chai');

describe('Desktop HiVi UAP ads page: top leaderboard', () => {
	let adStatus;
	let defaultDimensions;
	let scrollDimensions;
	let refreshDimensions;
	let videoFinishedDimensions;

	before(() => {
		browser.url(hiviUap.pageLink);
		helpers.waitForExpanded(adSlots.topLeaderboard);

		defaultDimensions = helpers.checkUAPSizeSlotRatio(adSlots.topLeaderboard, adSlots.defaultDesktopRatio);

		helpers.slowScroll(500);

		scrollDimensions = helpers.checkUAPSizeSlotRatio(adSlots.topLeaderboard, adSlots.resolvedDesktopRatio);

		helpers.reloadPageAndWaitForSlot(hiviUap.pageLink, adSlots.topLeaderboard);
		helpers.refreshPageAndWaitForSlot(adSlots.topLeaderboard);
		helpers.waitForExpanded(adSlots.topLeaderboard);

		refreshDimensions = helpers.checkUAPSizeSlotRatio(adSlots.topLeaderboard, adSlots.resolvedDesktopRatio);

		helpers.reloadPageAndWaitForSlot(hiviUap.pageLink, adSlots.topLeaderboard);
		hiviUap.waitForVideoToFinish();
		hiviUap.waitForResolved(adSlots.topLeaderboard, adSlots.resolvedDesktopRatio);

		videoFinishedDimensions = helpers.checkUAPSizeSlotRatio(adSlots.topLeaderboard, adSlots.resolvedDesktopRatio);
	});

	beforeEach(() => {
		browser.url(hiviUap.pageLink);
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
		adStatus = helpers.getSlotStatus(adSlots.topLeaderboard);
	});

	afterEach(() => {
		browser.scroll(0, 0);
	});

	it('Check if slot is visible in viewport', () => {
		expect(adStatus.inViewport, 'Not in viewport')
			.to
			.be
			.true;
	});

	it('Check if default dimensions are correct', () => {
		expect(defaultDimensions.status, defaultDimensions.capturedErrors)
			.to
			.be
			.true;
	});

	it('Check if resolved dimensions after scroll are correct', () => {
		expect(scrollDimensions.status, scrollDimensions.capturedErrors)
			.to
			.be
			.true;
	});

	it('Check if resolved dimensions after refresh are correct', () => {
		expect(refreshDimensions.status, refreshDimensions.capturedErrors)
			.to
			.be
			.true;
	});

	it('Check if resolved dimensions after video finished playing are correct', () => {
		expect(videoFinishedDimensions.status, videoFinishedDimensions.capturedErrors)
			.to
			.be
			.true;
	});

	it('Check if navbar is visible in viewport', () => {
		expect(browser.isVisibleWithinViewport(helpers.navbar), 'Navbar not visible')
			.to
			.be
			.true;
	});

	it('Check if redirect on click works', () => {
		expect(helpers.adRedirect(adSlots.topLeaderboard), 'Wrong link after redirect')
			.to
			.be
			.true;
	});

	it('Check if the line item id is from the same campaign', () => {
		helpers.waitForLineItemIdAttribute(adSlots.topLeaderboard);
		expect(helpers.getLineItemId(adSlots.topLeaderboard))
			.to
			.equal(hiviUap.firstCall, 'Line item ID mismatch');
	});

	it('Check if closing top leaderboard works properly', () => {
		browser.waitForVisible(hiviUap.closeLeaderboardButton, timeouts.standard);
		browser.click(hiviUap.closeLeaderboardButton);
		helpers.waitForCollapsed(adSlots.topLeaderboard);
	});
});

describe('Desktop HiVi UAP ads page: video player in top leaderboard', () => {
	beforeEach(() => {
		browser.url(hiviUap.pageLink);
		browser.waitForVisible(adSlots.topLeaderboard, timeouts.standard);
		helpers.waitToStartPlaying();
		browser.moveToObject(`${adSlots.topLeaderboard} ${hiviUap.videoPlayer}`);
	});

	it('Check if opening the full screen player works properly', () => {
		browser.waitForEnabled(`${adSlots.topLeaderboard} ${hiviUap.playerFullscreenButton}`,
			timeouts.standard);
		browser.click(`${adSlots.topLeaderboard} ${hiviUap.playerFullscreenButton}`);
		browser.waitForVisible(hiviUap.playerFullscreen, timeouts.standard);
	});

	it('Check if pausing the video works properly', () => {
		browser.waitForEnabled(`${adSlots.topLeaderboard} ${hiviUap.playPauseButton}`, timeouts.standard);
		browser.click(`${adSlots.topLeaderboard} ${hiviUap.playPauseButton}`);
		browser.waitForExist(`${adSlots.topLeaderboard} ${hiviUap.playPauseButton}${hiviUap.buttonIsOnClass}`,
			timeouts.standard, true);
	});

	it('Check if unmuting the video works properly', () => {
		browser.waitForEnabled(`${adSlots.topLeaderboard} ${hiviUap.volumeButton}`, timeouts.standard);
		browser.click(`${adSlots.topLeaderboard} ${hiviUap.volumeButton}`);
		browser.waitForExist(`${adSlots.topLeaderboard} ${hiviUap.volumeButton}${hiviUap.buttonIsOnClass}`,
			timeouts.standard, true);
	});

	it('Check if replaying the video works properly', () => {
		hiviUap.waitForVideoToFinish();
		browser.waitForExist(`${hiviUap.videoPlayer}${helpers.classHidden}`, timeouts.standard);
		helpers.switchToFrame(hiviUap.topPlayerFrame);
		browser.waitForVisible(hiviUap.replayOverlay, timeouts.standard);
		browser.click(hiviUap.replayOverlay);
		browser.frame();
		browser.waitForExist(`${adSlots.topLeaderboard} ${hiviUap.videoPlayer}`, timeouts.standard);
	});
});

describe('Desktop HiVi UAP ads page: top boxad', () => {
	beforeEach(() => {
		browser.url(hiviUap.pageLink);
		browser.waitForVisible(adSlots.topBoxad, timeouts.standard);
	});

	it('Check if line item id is from the same campaign', () => {
		helpers.waitForLineItemIdAttribute(adSlots.topBoxad);
		expect(helpers.getLineItemId(adSlots.topBoxad))
			.to
			.equal(hiviUap.secondCall, 'Line item ID mismatch');
	});
});

describe('Desktop HiVi UAP ads page: incontent boxad', () => {
	beforeEach(() => {
		browser.url(hiviUap.pageLink);
		browser.scroll(0, 1000);
		browser.waitForVisible(adSlots.incontentBoxad, timeouts.standard);
	});

	it('Check if line item id is from the same campaign', () => {
		helpers.waitForLineItemIdAttribute(adSlots.incontentBoxad);
		expect(helpers.getLineItemId(adSlots.incontentBoxad))
			.to
			.equal(hiviUap.secondCall, 'Line item ID mismatch');
	});
});

describe('Desktop HiVi UAP ads page: bottom leaderboard', () => {
	let adStatus;
	let defaultDimensions;
	let refreshDimensions;
	let videoFinishedDimensions;

	before(() => {
		helpers.reloadPageAndWaitForSlot(hiviUap.pageLink, adSlots.topLeaderboard);
		helpers.slowScroll(7000);
		helpers.waitForExpanded(adSlots.bottomLeaderboard);

		defaultDimensions = helpers.checkDerivativeSizeSlotRatio(adSlots.bottomLeaderboard,
			helpers.wrapper,
			adSlots.defaultDesktopRatio);

		browser.refresh();
		helpers.slowScroll(7000);
		browser.waitForVisible(adSlots.bottomLeaderboard, timeouts.standard);

		refreshDimensions = helpers.checkDerivativeSizeSlotRatio(adSlots.bottomLeaderboard,
			helpers.wrapper,
			adSlots.resolvedDesktopRatio);

		helpers.reloadPageAndWaitForSlot(hiviUap.pageLink, adSlots.topLeaderboard);
		helpers.slowScroll(7000);
		browser.waitForVisible(adSlots.bottomLeaderboard, timeouts.standard);
		hiviUap.waitForVideoToFinish();

		videoFinishedDimensions = helpers.checkUAPSizeSlotRatio(adSlots.topLeaderboard,
			adSlots.resolvedDesktopRatio);
	});

	beforeEach(() => {
		adStatus = helpers.getSlotStatus(adSlots.bottomLeaderboard);
	});

	it('Check if slot is visible in viewport', () => {
		expect(adStatus.inViewport, 'Not in viewport')
			.to
			.be
			.true;
	});

	it('Check if default dimensions are correct', () => {
		expect(defaultDimensions.status, defaultDimensions.capturedErrors)
			.to
			.be
			.true;
	});

	it('Check if resolved dimensions after refresh are correct', () => {
		expect(refreshDimensions.status, refreshDimensions.capturedErrors)
			.to
			.be
			.true;
	});

	it('Check if resolved dimensions after video finished are correct', () => {
		expect(videoFinishedDimensions.status, videoFinishedDimensions.capturedErrors)
			.to
			.be
			.true;
	});

	it('Check if line item id is from the same campaign', () => {
		helpers.waitForLineItemIdAttribute(adSlots.bottomLeaderboard);
		expect(helpers.getLineItemId(adSlots.bottomLeaderboard))
			.to
			.equal(hiviUap.secondCall, 'Line item ID mismatch');
	});

	it('Check if redirect on click works properly', () => {
		expect(helpers.adRedirect(adSlots.bottomLeaderboard), 'Wrong link after redirect')
			.to
			.be
			.true;
	});
});

describe('Desktop HiVi UAP ads page: video player in bottom leaderboard', () => {
	beforeEach(() => {
		browser.url(hiviUap.pageLink);
		helpers.slowScroll(7000);
		browser.waitForVisible(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer}`, timeouts.standard);
		helpers.waitToStartPlaying();
		browser.moveToObject(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer}`);
	});

	it('Check if opening the fullscreen player works properly', () => {
		browser.waitForEnabled(`${adSlots.bottomLeaderboard} ${hiviUap.playerFullscreenButton}`,
			timeouts.standard);
		browser.click(`${adSlots.bottomLeaderboard} ${hiviUap.playerFullscreenButton}`);
		browser.waitForVisible(hiviUap.playerFullscreen, timeouts.standard);
	});

	it('Check if pausing the video works properly', () => {
		browser.waitForEnabled(`${adSlots.bottomLeaderboard} ${hiviUap.playPauseButton}`,
			timeouts.standard);
		browser.click(`${adSlots.bottomLeaderboard} ${hiviUap.playPauseButton}`);
		browser.waitForExist(`${adSlots.bottomLeaderboard} ${hiviUap.playPauseButton}${hiviUap.buttonIsOnClass}`,
			timeouts.standard, true);
	});

	it('Check if unmuting the video works properly', () => {
		browser.waitForEnabled(`${adSlots.bottomLeaderboard} ${hiviUap.volumeButton}`, timeouts.standard);
		browser.click(`${adSlots.bottomLeaderboard} ${hiviUap.volumeButton}`);
		browser.isExisting(`${adSlots.bottomLeaderboard} ${hiviUap.volumeButton}${hiviUap.buttonIsOnClass}`,
			timeouts.standard, true);
	});

	it('Check if replaying the video works properly', () => {
		hiviUap.waitForVideoToFinish();
		browser.waitForExist(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer}${helpers.classHidden}`, timeouts.standard);
		helpers.switchToFrame(hiviUap.bottomPlayerFrame);
		browser.waitForVisible(hiviUap.replayOverlay, timeouts.standard);
		browser.click(hiviUap.replayOverlay);
		browser.frame();
		browser.waitForExist(`${adSlots.bottomLeaderboard} ${hiviUap.videoPlayer}`, timeouts.standard);
	});
});
