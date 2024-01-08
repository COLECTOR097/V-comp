import Link from 'next/link'
import Image from 'next/image'
import {ReactElement} from "react";

import Burger from '@/assets/images/svg/burger.svg'
import Logo from '@/assets/images/svg/logo.svg'
import Catalog from '@/assets/images/svg/catalog.svg'
import User from '@/assets/images/svg/user-icon.svg'
import Search from '@/assets/images/svg/search.svg'

export default function Header():ReactElement {
	return (
		<header className="header">
			<div className="wrapper bg-blue-950 flex items-center justify-between px-48 py-2">
				<div className={'header-right flex gap-6 items-center'}>
					<Image
						src={Burger}
						className={'cursor-pointer'}
						alt="burger menu icon"
					/>
					<nav className="nav-links flex gap-6 text-white font-medium text-xs">
						<Link href='#'>Акции</Link>
						<Link href='#'>Кредит</Link>
						<Link href='#'>Оплата и доставка</Link>
						<Link href='#'>Помощь</Link>
						<Link href='#'>Скупка Б/У</Link>
						<Link href='#'>Контакты</Link>
					</nav>
				</div>
				<div className={'header-left flex items-center gap-8 cursor-pointer'}>
					<div className="header-lang flex gap-1 text-white">
						<span>RU</span>
						/
						<span>EN</span>
					</div>
					<div className="header-user">
						<Image src={User} alt={'user home page icon'}/>
					</div>
				</div>
			</div>
			<div className="pre-header flex justify-between shadow-md px-48 py-6">
				<Link href={'#'}><Image src={Logo} alt={'logo of website'}/></Link>
				<button className="catalog flex items-center gap-2 bg-green-600 text-white py-2 px-3 rounded">
					КАТАЛОГ ТОВАРОВ
					<Image src={Catalog} alt={'catalog button icon'}/>
				</button>
				<div className="input flex ">
					<input type="text" placeholder={'Поиск'}/>
					<Image src={Search} alt={'search icon'}/>

				</div>
			</div>
		</header>
	)
}