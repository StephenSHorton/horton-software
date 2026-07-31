/** Fixed RGBeast-style ambient stage: grid, smoke orbs, noise, vignette. */
export function AmbientStage() {
	return (
		<div className="fx" aria-hidden>
			<div className="fx-base" />
			<div className="fx-grid" />
			<div className="fx-orb fx-orb-a" />
			<div className="fx-orb fx-orb-b" />
			<div className="fx-orb fx-orb-c" />
			<div className="fx-orb fx-orb-d" />
			<div className="fx-noise" />
			<div className="fx-vignette" />
		</div>
	);
}
