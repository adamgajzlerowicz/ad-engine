import { BaseAdapter } from './base-adapter';

export class Openx extends BaseAdapter {
	constructor(options) {
		super(options);

		this.bidderName = 'openx';
		this.delDomain = options.delDomain;
	}

	prepareConfigForAdUnit(code, { sizes, unit }) {
		return {
			code,
			mediaTypes: {
				banner: {
					sizes,
				},
			},
			bids: [
				{
					bidder: this.bidderName,
					params: {
						unit,
						delDomain: this.delDomain,
					},
				},
			],
		};
	}
}
