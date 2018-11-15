import { BaseAdapter } from './base-adapter';

export class Pubmatic extends BaseAdapter {
	constructor(options) {
		super(options);

		this.bidderName = 'pubmatic';
		this.publisherId = options.publisherId;
	}

	prepareConfigForAdUnit(code, { sizes, ids }) {
		switch (code.toLowerCase()) {
			case 'featured':
			case 'incontent_player':
				return this.getVideoConfig(code, ids);
			default:
				return this.getStandardConfig(code, sizes, ids);
		}
	}

	getVideoConfig(code, ids) {
		const videoParams = {
			video: {
				mimes: ['video/mp4', 'video/x-flv']
			}
		};
		return {
			code,
			mediaTypes: {
				video: {
					playerSize: [640, 480],
					context: 'instream'
				}
			},
			bids: this.getBids(ids, videoParams)
		};
	}

	getStandardConfig(code, sizes, ids) {
		return {
			code,
			mediaTypes: {
				banner: {
					sizes
				}
			},
			bids: this.getBids(ids)
		};
	}

	getBids(ids, params = {}) {
		return ids.map(adSlot => ({
			bidder: this.bidderName,
			params: {
				adSlot,
				publisherId: this.publisherId,
				...params
			}
		}));
	}
}
