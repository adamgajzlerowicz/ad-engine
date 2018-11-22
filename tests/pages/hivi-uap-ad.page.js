class HiviUapDesktop extends HiviUap {
	constructor() {
		super();
		this.videoPlayer = '.video-player';
	}
}

class HiviUapMobile extends HiviUap {
	constructor() {
		super();
		this.videoPlayer = '.video-player';
	}
}


export class HiviUap {
	static make() {
		if (wdEnvironment.mobile) {
			return new HiviUapMobile();
		}
		return new HiviUapDesktop();
	}

	constructor() {
		this.pageLink = 'templates/hivi-uap/';
		this.videoPlayer = '';
		this.playerFullscreen = `${this.videoPlayer}.video-player-fullscreen`;
		this.playerFullscreenButton = `${this.videoPlayer} .toggle-fullscreen-button`;
		this.volumeButton = `${this.videoPlayer} .volume-button`;
		this.playPauseButton = `${this.videoPlayer} .play-pause-button`;
		this.topPlayerFrame = 'iframe[id="google_ads_iframe_/5441/wka.life/_project43//article/test/top_leaderboard_0"]';
		this.bottomPlayerFrame = 'iframe[id="google_ads_iframe_/5441/wka.life/_project43//article/test/bottom_leaderboard_0"]';
		this.replayOverlay = '.replay-overlay';
		this.buttonIsOn = '.is-on';
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

	clickPlayer() {
		browser.waitForVisible(this.newVideoPlayer);
		browser.click(this.newVideoPlayer);
		browser.isVisible(this.buttonIsOn);
	}
}

export default HiviUap.make();

