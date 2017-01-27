import Context from 'ad-engine/services/context-service';
import Porvata from 'ad-engine/video/player/porvata/porvata';
import ScrollListener from 'ad-engine/listeners/scroll-listener';

const container = document.getElementById('player'),
	params = {
		autoPlay: true,
		container,
		width: 300,
		height: 250,
		slotName: 'TEST_SLOT',
		src: 'gpt'
	};

Context.set('vast.adUnitId', '/5441/wka.life/_project43//article/{src}/{pos}');
Context.set('targeting.artid', 292);
Context.set('targeting.s1', '_project43');

ScrollListener.init();
Porvata.inject(params)
	.then((video) => {
		video.addEventListener('allAdsCompleted', () => {
			video.reload();
			setTimeout(() => {
				video.play();
			}, 5000);
		});
	});