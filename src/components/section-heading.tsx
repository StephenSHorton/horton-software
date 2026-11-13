type SectionHeadingProps = {
	index: string;
	label: string;
	title: React.ReactNode;
	children?: React.ReactNode;
	action?: React.ReactNode;
};

export function SectionHeading({
	index,
	label,
	title,
	children,
	action,
}: SectionHeadingProps) {
	return (
		<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div className="max-w-2xl space-y-3">
				<p className="eyebrow">
					{index} <span>/</span> {label}
				</p>
				<h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
					{title}
				</h2>
				{children ? (
					<p className="text-pretty text-muted-foreground">{children}</p>
				) : null}
			</div>
			{action}
		</div>
	);
}
