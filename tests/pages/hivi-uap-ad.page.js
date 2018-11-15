import helpers from '../common/helpers';
import { timeouts } from '../common/timeouts';

class HiviUap {
	constructor() {
		this.pageLink = 'templates/hivi-uap/';
		this.videoPlayer = '.video-player';
		this.playerFullscreen = `${this.videoPlayer}.video-player-fullscreen`;
		this.playerFullscreenButton = `${this.videoPlayer} .toggle-fullscreen-button`;
		this.volumeButton = `${this.videoPlayer} .volume-button`;
		this.playPauseButton = `${this.videoPlayer} .play-pause-button`;
		this.topPlayerFrame = 'iframe[id="google_ads_iframe_/5441/wka.life/_project43//article/test/top_leaderboard_0"]';
		this.bottomPlayerFrame = 'iframe[id="google_ads_iframe_/5441/wka.life/_project43//article/test/bottom_leaderboard_0"]';
		this.replayOverlay = '.replay-overlay';
		this.buttonIsOnClass = '.is-on';
		this.closeLeaderboardButton = 'button';
		this.fullScreen = '.stop-scrolling';
		this.firstCall = '4466763538'; // applies only to top leaderboard
		this.secondCall = '4511050296'; // top and incontent boxad and bottom leaderboard
		this.videoLength = 45000;
	}

	/**
	 * Waits for the video to finish playing.
	 */
	waitForVideoToFinish() {
		browser.pause(this.videoLength);
	}

	/**
	 * Takes slot size and its ratio and waits for the desired dimensions.
	 * @param adSlot Slot to take dimensions from
	 * @param ratio value to divide by
	 */
	waitForResolved(adSlot, ratio) {
		browser.waitUntil(
			() => browser.getElementSize(adSlot, 'height') >= helpers.calculateHeightWithRatio(adSlot, ratio),
			timeouts.standard, // only because it fails too often with standard, despite working on debug
			'Dimensions not changed',
			timeouts.interval);
	}
}

export default new HiviUap();
