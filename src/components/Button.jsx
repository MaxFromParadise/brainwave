import ButtonSvg from '../assets/svg/ButtonSvg';

export default function Button({
	className,
	href,
	onClick,
	children,
	px,
	white,
}) {
	const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
		px || 'px-7'
	} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
	const spanClasses = 'z-10 relative';
	const renderButton = () => (
		<button onClick={onClick} className={classes}>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</button>
	);
	const renderLink = () => (
		<a href={href} className={classes}>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(white)}
		</a>
	);
	return href ? renderLink() : renderButton();
}
