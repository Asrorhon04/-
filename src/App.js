import './App.css';
import row1_image1 from './row1_image1.jpg';
import row1_image2 from './row1_image2.jpg';
import row1_image3 from './row1_image3.jpg';
import row2_image1 from './row2_image1.jpg';
import row2_image2 from './row2_image2.jpg';
import row2_image3 from './row2_image3.jpg';
import row3_image1 from './row3_image1.jpg';
import row3_image2 from './row3_image2.jpg';
import row3_image3 from './row3_image3.jpg';
import facebook from './facebook.wix_mp';
import dots from './dots.webp';
import twitter from './twitter.webp';
import pinterest from './pinterest.webp';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="container header_container">
					<div className="header__up">
						<a href="#" className="header__link link">
							Олег Марков
						</a>
					</div>
					<nav className="nav">
						<ul className="nav navbar">
							<li className="nav__link link">Главная</li>
							<li className="nav__link link">Обо мне</li>
							<li className="nav__link link">Связаться</li>
						</ul>
					</nav>
				</div>
			</header>
			<main className="main">
				<div className="container">
					<div className="main__container">
						<div className="main__row">
							<div className="main__img">
								<img src={row1_image1} alt="" />
							</div>
							<div className="main__img">
								<img src={row1_image2} alt="" />
							</div>
							<div className="main__img">
								<img src={row1_image3} alt="" />
							</div>
						</div>
						<div className="main__row">
							<div className="main__img">
								<img src={row2_image1} alt="" />
							</div>
							<div className="main__img">
								<img src={row2_image2} alt="" />
							</div>
							<div className="main__img">
								<img src={row2_image3} alt="" />
							</div>
						</div>
						<div className="main__row">
							<div className="main__img">
								<img src={row3_image1} alt="" />
							</div>
							<div className="main__img">
								<img src={row3_image2} alt="" />
							</div>
							<div className="main__img">
								<img src={row3_image3} alt="" />
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="footer">
				<div className="container">
					<p className="footer__title">
						© 2023 Олег Марков. Сайт создан на <a href="#" className="link">Wix.com.</a>
					</p>
					<div className="footer__icons">
						<a href="#" className="icon__facebook footer__link">
							<img src={facebook} alt="" />
						</a>
						<a href="#" className="icon__dots footer__link">
							<img src={dots} alt="" />
						</a>
						<a href="#" className="icon__twitter footer__link">
							<img src={twitter} alt="" />
						</a>
						<a href="#" className="icon__pinterest footer__link">
							<img src={pinterest} alt="" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
