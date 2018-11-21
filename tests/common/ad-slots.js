class AdSlots {
	constructor() {
		this.topLeaderboard = '#top_leaderboard';
		this.bottomLeaderboard = '#bottom_leaderboard';
		this.topBoxad = '#top_boxad';
		this.incontentBoxad = '#incontent_boxad';
		this.repeatableBoxad = '#repeatable_boxad_';
		this.invisibleHighImpact = '#invisible_high_impact_2';
		this.railModule = '.rail-module';
		this.leaderboardWidth = 728; // shared between leaderboards; fixed value
		this.leaderboardHeight = 90; // shared between leaderboards; fixed value
		this.boxadWidth = 300; // shared between boxads; fixed value
		this.boxadHeight = 250; // shared between boxads; fixed value
		this.railModuleWidth = 300;
		this.railModuleHeight = 600;
		this.lineItemIdAttribute = 'data-gpt-line-item-id';
		this.resultAttribute = 'data-slot-result';
		this.viewedAttribute = 'data-slot-viewed';
		this.adLoaded = 'success';
		this.adViewed = 'true';
		this.adCollapsed = 'collapse';
		this.inhouseLineItemId = '271491732';
		this.wikiaAdapterLineItemId = '321546972';
		this.defaultDesktopRatio = 4;
		this.resolvedDesktopRatio = 10;
		this.defaultMobileRatio = 1.77;
		this.resolvedMobileRatio = 3;
		this.floatingRailTopBoxadRequestPattern = '.*gampad\\/ads\\?.*top_boxad';
		this.floatingRailTopBoxadReplaceRegexp = /.*gampad\/ads\?/;
	}
}

export default new AdSlots();