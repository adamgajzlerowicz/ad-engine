export function getTopOffset(element) {
	const elementWindow = element.ownerDocument.defaultView;

	let topPos = 0;

	do {
		topPos += element.offsetTop;
		element = element.offsetParent;
	} while (element !== null);

	if (elementWindow && elementWindow.frameElement) {
		topPos += getTopOffset(elementWindow.frameElement);
	}

	return topPos;
}

export function isInViewport(element, topOffset = 0, bottomOffset = 0) {
	const elementHeight = element.offsetHeight,
		elementTop = getTopOffset(element),
		elementBottom = elementTop + elementHeight,
		scrollPosition = window.scrollY,
		viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
		viewportTop = topOffset + scrollPosition,
		viewportBottom = bottomOffset + scrollPosition + viewportHeight;

	return elementTop >= (viewportTop - elementHeight / 2) &&
		elementBottom <= (viewportBottom + elementHeight / 2);
}
