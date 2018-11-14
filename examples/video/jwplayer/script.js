import { context, events, utils } from '@wikia/ad-engine';
import { jwplayerAdsFactory } from '@wikia/ad-products';
import 'jwplayer-fandom/dist/wikiajwplayer.js';

import adContext from '../../context';
import video from './video';

import '../../styles.scss';

const f15sVideoId = utils.queryString.get('f15s');

context.extend(adContext);
context.set('targeting.artid', 355);
context.set('targeting.skin', 'oasis');
context.set('custom.device', utils.client.getDeviceType());
context.set('custom.adLayout', 'article');
context.set('options.tracking.kikimora.player', true);
context.set('options.video.isMidrollEnabled', utils.queryString.get('midroll') === '1');
context.set('options.video.isPostrollEnabled', utils.queryString.get('postroll') === '1');
context.set('options.video.adsOnNextVideoFrequency', parseInt(utils.queryString.get('capping'), 10) || 3);

if (f15sVideoId) {
	const map = {};
	map[f15sVideoId] = 5.0;

	context.set('options.featuredVideo15sEnabled', true);
	context.set('options.featuredVideo15sMap', map);
}

events.on(events.VIDEO_PLAYER_TRACKING_EVENT, (eventInfo) => {
	const request = new window.XMLHttpRequest();
	const queryUrl = Object.keys(eventInfo).map(key => `${key}=${eventInfo[key]}`).join('&');

	request.open('GET', `http://example.com?${queryUrl}`);
	request.send();
});

const playlist = [video];
const playerOptions = {
	autoplay: utils.queryString.get('autoplay') !== '0',
	mute: utils.queryString.get('mute') !== '0',
	settings: {
		showAutoplayToggle: false,
		showQuality: true
	},
	videoDetails: {
		description: playlist[0].description,
		title: playlist[0].title,
		playlist
	},
	related: {
		autoplay: true,
		playlistId: 'Y2RWCKuS',
		time: 3
	}
};
const videoAds = jwplayerAdsFactory.create({
	adProduct: 'featured-video',
	audio: !playerOptions.mute,
	autoplay: playerOptions.autoplay,
	featured: true,
	slotName: 'featured',
	videoId: video.mediaid
});

window.wikiaJWPlayer('playerContainer', playerOptions, (player) => {
	videoAds.register(player);
});

jwplayerAdsFactory.loadMoatPlugin();
