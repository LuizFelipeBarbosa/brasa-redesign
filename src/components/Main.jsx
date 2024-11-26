import React from "react";
import brasaEventImg from "../assets/insta.png";
import Carousel from "./Carousel";
import img1 from "../assets/103.png";
import img2 from "../assets/104.png";
import img3 from "../assets/105.png";
import img4 from "../assets/106.png";
import img5 from "../assets/107.png";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import Events from '../pages/Events.jsx'

function Main() {
	const { language, toggleLanguage } = useLanguage();

	const translations = {
		en: {
			title_1: "WHAT",
			title_2: "IS",
			title_3: "BRASA?",
			body_text_1:
				"The <strong>Brazilian Student Association at UC Berkeley</strong> is dedicated to establishing lasting relationships among Brazilian students at our university and with BRASA members from other universities abroad. Together, all BRASA organizations <strong>create a “home away from home” environment</strong>, providing essential <strong>support and community</strong> to Brazilians studying abroad.",
			body_text_2:
				"Our goals include <strong>promoting Brazilian culture and the Portuguese language, assisting prospective students during their application process,</strong> and organizing events and panels within the BRASA community. We also offer networking opportunities, such as <strong>professional and academic exchange programs</strong> with leading Brazilian institutions, to foster connections that benefit our members both personally and professionally.",
			members: "MEMBERS",
			years: "SEMESTERS IN OPERATION",
			alumni: "ALUMNI",
			majors: "MAJORS",
			events: "EVENTS",
			events_text:
				"BRASA Berkeley hosts a series of events throughout the year, from meetings to welcome new students to gatherings to celebrate Brazilian music and culture. Our events enrich the BRASA experience, allowing members to celebrate their heritage, share their unique journeys, and build lasting memories.",
			events_button: 
				"Come to our events!",
			professional: "PROFESSIONAL",
			professional_text:
				"BRASA Berkeley is not just about community building. It's a gateway to invaluable professional development opportunities. These include networking events and discussions with leading professionals from global institutions. These initiatives are designed to connect students to mentors, academic exchanges, and career opportunities that can significantly enhance their personal and professional growth.",
			professional_button:
				"Sign up for our newsletter!",
			community: "COMMUNITY",
			community_text:
				`BRASA Berkeley fosters a vibrant and supportive network for Brazilian students at UC Berkeley, connecting them with peers and Brazilians in the Bay Area. This community serves as a welcoming "home away from home", promoting Brazilian culture, language, and traditions while providing crucial resources to help students thrive academically and socially.`,
			community_button: 
				"Join us!",
		},
		pt: {
			title_1: "O QUE",
			title_2: "É A",
			title_3: "BRASA?",
			body_text_1:
				"A <strong>Brazilian Student Association at UC Berkeley</strong> é dedicada a estabelecer relacionamentos duradouros entre estudantes brasileiros em nossa universidade e com membros da BRASA de outras universidades no exterior. Juntas, todas as organizações BRASA <strong>criam um ambiente de “lar longe de casa”</strong>, proporcionando <strong>apoio e comunidade essenciais</strong> para brasileiros estudando no exterior.",
			body_text_2:
				"Nossos objetivos incluem <strong>promover a cultura brasileira e a língua portuguesa, auxiliar os estudantes em potencial durante o processo de inscrição</strong> e organizar eventos e painéis dentro da comunidade BRASA. Também oferecemos oportunidades de networking, como <strong>programas de intercâmbio profissional e acadêmico</strong> com instituições brasileiras líderes, para fomentar conexões que beneficiem nossos membros tanto pessoal quanto profissionalmente.",
			members: "MEMBROS",
			years: "SEMESTRES EM OPERAÇÃO",
			alumni: "ALUMNI",
			majors: "MAJORS",
			events: "EVENTOS",
			events_text:
			"A BRASA Berkeley realiza uma série de eventos durante todo o ano, que incluem desde encontros para receber novos alunos até celebrações da música e da cultura brasileira. Nossos eventos enriquecem a experiência da BRASA, proporcionando espaços para os associados celebrarem sua herança, compartilharem suas jornadas únicas e construírem juntos memórias duradouras.",
			events_button: 
				"Venha aos nossos eventos!",
				professional: "PROFISSIONAL",
			professional_text:
				"Além da construção de comunidades, a BRASA Berkeley oferece incríveis  e enriquecedoras oportunidades de desenvolvimento profissional, incluindo eventos de networking e discussões com profissionais líderes de instituições globais. Essas iniciativas conectam os alunos a mentores, intercâmbios acadêmicos e oportunidades de carreira que potencializam seu crescimento pessoal e profissional.",
			professional_button: "Assine a nossa newsletter!",
			community: "COMUNIDADE",
			community_text:
			`A BRASA Berkeley é uma rede vibrante de apoio para estudantes brasileiros em UC Berkeley, conectando-os com colegas e brasileiros estudantes que moram na Bay Area. Esta comunidade serve como um acolhedor "lar longe de casa", promovendo a cultura, a língua e as tradições brasileiras, ao mesmo tempo que fornece recursos cruciais para ajudar os alunos a prosperar acadêmica e socialmente.`,
			community_button:
			"Junte-se a nós!",
		},
	};

	const images_1 = [img1, img2, img3, img4, img5];
	const images = [img4, img3, img2, img5, img1];
	const images_2 = [img3, img4, img5, img1, img2];

	return (
		<div className="">
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
				<div className="p-4 flex gap-2 md:flex-col items-end justify-center">
					<h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-lime-600">
						{translations[language].title_1}
					</h1>
					<h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-amber-400">
						{translations[language].title_2}
					</h1>
					<h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-blue-700">
						{translations[language].title_3}
					</h1>
				</div>

				<p className="p-4 max-w-[45ch] flex flex-col items-center justify-center mx-auto md:mx-0">
					<span
						dangerouslySetInnerHTML={{
							__html: translations[language].body_text_1,
						}}
					/>
					<br />
					<span
						dangerouslySetInnerHTML={{
							__html: translations[language].body_text_2,
						}}
					/>
				</p>
			</div>

			<div className="relative bg-blue-950 p-8">
				<div className="custom-shape-divider-top-1726614760">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
				<div className="mx-auto my-12">
					<div className="max-w-[1200px] mx-auto my-auto flex flex-col md:flex-row gap-4 ">
						{/* BRASA DATA OR FUN FACTS */}
						<div className="flex flex-col grow items-center justify-center">
							<h1 className="text-8xl font-semibold mb-2 text-lime-600">
								180+
							</h1>
							<p className="mx-auto text-white">
								{translations[language].members}
							</p>
						</div>
						<div className="flex flex-col grow items-center justify-center">
							<h1 className="text-8xl font-semibold mb-2 text-amber-400">
								9
							</h1>
							<p className="mx-auto text-white">
								{translations[language].years}
							</p>
						</div>
						<div className="flex flex-col grow items-center justify-center">
							<h1 className="text-8xl font-semibold mb-2 text-white">
								150
							</h1>
							<p className="mx-auto text-white">
								{translations[language].alumni}
							</p>
						</div>
						<div className="flex flex-col grow items-center justify-center">
							<h1 className="text-8xl font-semibold mb-2 text-lime-600">
								20+
							</h1>
							<p className="mx-auto text-white">
								{translations[language].majors}
							</p>
						</div>
					</div>
				</div>
				<div className="custom-shape-divider-bottom-1726614683">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
			</div>
			<div className="pt-4">
				<div className="max-w-[1200px] mx-auto mb-4">
					<div className="grid md:grid-cols-2 grid-cols-1">
						<div className="p-12 flex flex-col gap-8 items-center align-middle">
							<h1 className="text-4xl mt-auto text-lime-600 font-semibold tracking-wide">
								{translations[language].community}
							</h1>
							<p className="">
								{translations[language].community_text}
							</p>
							<a href="https://forms.gle/CGyCXrU9YHJGYqfU7">
                        		<button className="flex bg-lime-600 hover:bg-lime-800 text-gray-100 text-2xl font-bold py-2 px-4 rounded mb-24">
								{translations[language].community_button}
                   				</button>
                   			</a>
							
						</div>
						<Carousel images={images} />
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1">
						<Carousel
							className="order-last md:order-none"
							images={images_1}
						/>
						<div className="p-12 flex flex-col gap-8 items-center align-middle">
							<h1 className="text-4xl mt-auto text-amber-400 font-semibold tracking-wide">
								{translations[language].professional}
							</h1>
							<p className="">
								{translations[language].professional_text}
							</p>
							<a href="https://forms.gle/mQuKiA6uS4y9PrKY8">
                        		<button className="flex bg-amber-400 hover:bg-amber-600 text-gray-100 text-2xl font-bold py-2 px-4 rounded mb-24">
								{translations[language].professional_button}
                   				</button>
                   			</a>
							
						</div>
					</div>
					<div className="grid md:grid-cols-2 grid-cols-1">
						<div className="p-12 flex flex-col gap-8 items-center align-middle">
							<h1 className="text-4xl mt-auto text-blue-700 font-semibold tracking-wide">
								{translations[language].events}
							</h1>
							<p className="">
								{translations[language].events_text}
							</p>
							
							<Link 
								to=''
								className="flex opacity-0 bg-blue-700 hover:bg-blue-950 text-gray-100 text-2xl font-bold py-2 px-4 rounded mb-6" >
									{translations[language].events_button}
							</Link>
						</div>
						<Carousel images={images_2} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
