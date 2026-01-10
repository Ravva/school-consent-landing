import Lenis from "@studio-freight/lenis";

let lenisInstance: Lenis | null = null;

export const initLenis = (): Lenis => {
	const lenis = new Lenis({
		duration: 1.5,
		easing: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (1 - t) ** 4),
		orientation: "vertical",
		gestureOrientation: "vertical",
		smoothWheel: true,
		wheelMultiplier: 1,
		touchMultiplier: 2,
		infinite: false,
	});

	lenisInstance = lenis;

	// Ignore scroll for elements with overflow-y-auto
	const originalOnScroll = (lenis as any).onScroll;
	(lenis as any).onScroll = (event: WheelEvent) => {
		const target = event.target as HTMLElement;
		const scrollableElement = target.closest('[data-lenis-prevent]');

		if (scrollableElement) {
			return;
		}

		originalOnScroll.call(lenis, event);
	};

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	return lenis;
};

export const getLenis = () => lenisInstance;
