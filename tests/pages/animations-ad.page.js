const scrollWaitTime = 500;

class AnimationsAd {
	constructor() {
		this.pageLink = 'slots/animations/';
		this.topLeaderboardHeightWhenHidden = 0;
		this.topLeaderboardStyle = 'style';
		this.collapsedAdMaxHeight = 'max-height: 0px;';
		this.waitForAnimationsTime = 10000; // currently added only for animations ad, as top leaderboard hides after 6 seconds
	}

	/**
	 * Pauses everything so animation can finish its action.
	 */
	waitToScroll() {
		browser.pause(scrollWaitTime);
	}
}

export default new AnimationsAd();