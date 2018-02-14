import { logger, makeLazyQueue } from '../utils';
import { context } from './context-service';
import { slotService } from './slot-service';

const logGroup = 'btf-blocker';

function finishQueue() {
	this.atfEnded = true;

	if (window.ads.runtime.disableBtf) {
		const slots = context.get('slots');

		Object.keys(slots).forEach((adSlotKey) => {
			const adSlot = slots[adSlotKey];

			if (!adSlot.aboveTheFold && this.unblockedSlots.indexOf(adSlot.slotName) === -1) {
				slotService.disable(adSlot.slotName);
			}
		});
	}

	this.slotsQueue.start();
}

class BtfBlockerService {
	constructor() {
		this.slotsQueue = [];
		this.atfEnded = false;
		this.unblockedSlots = [];
	}

	init() {
		makeLazyQueue(this.slotsQueue, ({ adSlot, fillInCallback }) => {
			logger(logGroup, adSlot.getId(), 'Filling delayed BTF slot');
			fillInCallback(adSlot);
		});

		context.push('listeners.slot', { onRenderEnded: (adSlot) => {
			logger(logGroup, adSlot.getId(), 'Slot rendered');
			if (!this.atfEnded && adSlot.isAboveTheFold()) {
				finishQueue.bind(this)();
			}
		} });
	}

	push(adSlot, fillInCallback) {
		if (!this.atfEnded && !adSlot.isAboveTheFold()) {
			this.slotsQueue.push({ adSlot, fillInCallback });
			logger(logGroup, adSlot.getId(), 'BTF slot pushed to queue');
			return;
		}

		if (this.atfEnded && !adSlot.isEnabled()) {
			logger(logGroup, adSlot.getId(), 'BTF slot blocked');
			return;
		}

		logger(logGroup, adSlot.getId(), 'Filling in slot');
		fillInCallback(adSlot);
	}

	unblock(slotName) {
		logger(logGroup, slotName, 'Unblocking slot');

		this.unblockedSlots.push(slotName);
		slotService.enable(slotName);
	}
}

export const btfBlockerService = new BtfBlockerService();