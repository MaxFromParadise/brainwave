import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { brainwave } from '../assets';
import MenuSvg from '../assets/svg/MenuSvg';
import { navigation } from '../constants';
import Button from './Button';
import { HambugerMenu } from './design/Header';

export function Header() {
	const pathname = useLocation();
	const [openNavigation, setOpenNavigation] = useState(false);
	const toggleNavigation = () => {
		if (openNavigation) {
			setOpenNavigation(false);
			enablePageScroll();
		} else {
			setOpenNavigation(true);
			disablePageScroll();
		}
	};
	const handleClick = () => {
		if (!openNavigation) return;
		enablePageScroll();
		setOpenNavigation(false);
	};
	return (
		<div
			className={`fixed left-0 w-full top-0 z-50 border-b border-n-6 lg:backdrop-blur-sm lg:bg-n-8/90 ${
				openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
			}`}
		>
			<div className='flex items-center  px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
				<a className='block w-[12rem] xl:mr-8' href='#hero'>
					<img src={brainwave} width={190} height={40} alt='brainwave' />
				</a>
				<nav
					className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent ${
						openNavigation ? 'flex' : 'hidden'
					}`}
				>
					<div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
						{navigation.map((item) => (
							<a
								className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
									item.onlyMobile ? 'lg:hidden' : ''
								} px-6 py-6 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
									pathname.hash === item.url
										? 'z-2 lg:text-n-1'
										: 'lg:text-n-1/50'
								} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
								key={item.id}
								href={item.url}
								onClick={handleClick}
							>
								{item.title}
							</a>
						))}
					</div>
					<HambugerMenu />
				</nav>
				<a
					href='#signup'
					className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'
				>
					New Account
				</a>
				<Button href='#login' className='hidden lg:flex'>
					sign in
				</Button>
				<Button
					onClick={toggleNavigation}
					className='ml-auto lg:hidden'
					px='px-3'
				>
					<MenuSvg openNavigation={openNavigation} />
				</Button>
			</div>
		</div>
	);
}
