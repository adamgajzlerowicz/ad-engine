import { expect } from 'chai';
import { cloneDeep } from 'lodash';
import { context } from '../../../src/ad-engine/services/context-service';
import { getSettings } from '../../../src/ad-bidders/prebid/prebid-settings';

describe('getBidderUuid', () => {
	let bidResponse;
	let getBidderUuid;

	before(() => {
		bidResponse = { bidderCode: 'rubicon', videoCacheKey: 'b' };
		const settings = getSettings();
		const hbUuid = settings.standard.adserverTargeting.find(x => x.key === 'hb_uuid');
		getBidderUuid = hbUuid.val;
	});

	it('should return videoCacheKey', () => {
		context.set('custom.rubiconDfp', true);
		const result = getBidderUuid(bidResponse);
		expect(result).to.equal('b');
	});

	it('should return disabled (bidderCode)', () => {
		context.set('custom.rubiconDfp', true);
		const newBidResponses = cloneDeep(bidResponse);
		newBidResponses.bidderCode = undefined;
		const result = getBidderUuid(newBidResponses);
		expect(result).to.equal('disabled');
	});

	it('should return disabled (context)', () => {
		context.set('custom.rubiconDfp', false);
		const result = getBidderUuid(bidResponse);
		expect(result).to.equal('disabled');
	});
});
