import React from "react";
import { useLanguage } from "../LanguageContext";

// Define the members data directly in the file
const members = [
  {
    "name": "Nicole Elmôr",
    "position": "Head of Finance",
    "bio": "Me chamo Nicole e sou Class of 2026! Estou cursando um double major em Economia e Ciência de Dados. Sou de São Paulo.",
    "profilePicture": "/Facetune_13-09-2024-13-52-00 - Nicole Elmor.jpeg",
    "links": {
      "LinkedIn": "https://linkedin.com/in/nicoleelmor",
      "Email": "nicoleelmor@berkeley.edu",
      "Instagram": "https://www.instagram.com/nicoleelmor"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Joe Wang",
    "position": "Head of Operations",
    "bio": "Nasci em Shanghai, China, e vivi em São Paulo, Brasil. Estudo Ciência de Computação na UC Berkeley, e adoro tecnologia!",
    "profilePicture": "/20240922_184547 - Joe Wang.jpg",
    "links": {
      "LinkedIn": "https://linkedin.com/in/joseph-wang-zz",
      "Email": "zezhou_wang@berkeley.edu",
      "Instagram": "https://www.instagram.com/joewangzz"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Gabriel Abreu",
    "position": "Operations Member",
    "bio": "Meu nome é Gabriel, sou freshman estudando economia política. Nasci em Recife e me mudei para a Califórnia aos 16 anos. Sempre fui apaixonado pelo comércio internacional, mas também gosto de acompanhar a indústria do entretenimento e a geopolítica global.",
    "profilePicture": "/Gabriel Abreu.Headshot - Gabriel Fernandes Barros de Abreu.jpeg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/gabriel-abreu-845037329",
      "Email": "gabriel.abreu@berkeley.edu",
      "Instagram": "https://www.instagram.com/gabriel.abreu"
    },
    "group": "Board Members"
  },
  {
    "name": "Daniel Liao",
    "position": "Co-President",
    "bio": "Me chamo Daniel e sou um junior cursando Economia. Nasci e vivi a minha vida toda em São Paulo, capital. Sou apaixonado pelo mundo de finanças, mercado de capitais e, futebol (vai Corinthians)!",
    "profilePicture": "/11-DSCF2363 - Daniel Liao.jpg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/daniel-bern%C3%A1th-liao-545518213",
      "Email": "danielbernathliao@berkeley.edu",
      "Instagram": "https://www.instagram.com/danielbernathliao"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Júlia Araújo",
    "position": "Social Affairs Member",
    "bio": "Me chamo Júlia e sou uma sophomore cursando Media Studies! Meus pais são de Recife, mas eu cresci em Los Angeles. Gosto de passear pela praia, ler, e tenho uma paixão por mídia e cultura popular.",
    "profilePicture": "/9986470F-FEC2-441D-B19A-D05362D8241E - Julia Lins Araujo.jpeg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/julia-araujo-6035202bb",
      "Email": "juliaaraujo@berkeley.edu",
      "Instagram": "https://www.instagram.com/juliaaraujo"
    },
    "group": "Board Members"
  },
  {
    "name": "Sinead Bermudez",
    "position": "Social Affairs Member",
    "bio": "Eu sou Sinead, sou freshman, e fiz um intercâmbio no interior de São Paulo por um ano. Estou estudando linguística e adoro jogar futebol e cantar.",
    "profilePicture": "/IMG_9905 - Sinead Alessandra Bermudez.jpeg",
    "links": {
      "LinkedIn": "N/A",
      "Email": "sineadbermudez@berkeley.edu",
      "Instagram": "https://www.instagram.com/sineadbermudez"
    },
    "group": "Board Members"
  },
  {
    "name": "Roni Kriger",
    "position": "Tech Member",
    "bio": "Sou Roni Kriger, estudante de Engenharia Elétrica e Ciência da Computação. Tenho grande paixão por tecnologia e inovação. Além dos estudos, gosto de explorar novos avanços em inteligência artificial e me dedicar a projetos desafiadores na área.",
    "profilePicture": "/IMG_4563 - Roni Kriger.jpeg",
    "links": {
      "LinkedIn": "https://linkedin.com/in/ronikriger",
      "Email": "ronikriger@berkeley.edu",
      "Instagram": "https://www.instagram.com/ronikriger"
    },
    "group": "Board Members"
  },
  {
    "name": "Brisa Vicente Brown",
    "position": "Head of Marketing",
    "bio": "Me chamo Brisa e sou estudante de terceiro ano cursando diploma duplo em Nutrição, com foco em Biologia Metabólica, e Português. Vivi em San Diego, Califórnia, e aprendi português em casa com minha mãe, de São Paulo. Me preparo para a área médica e sou apaixonada por nutrição, saúde e culturas.",
    "profilePicture": "/Brisa Brown photo - Brisa Vicente Brown.jpg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/brisa-brown-559728304",
      "Email": "brisabrown@berkeley.edu",
      "Instagram": "https://www.instagram.com/brisabrown"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Lucas Camargo",
    "position": "Co-President",
    "bio": "Me chamo Lucas e sou um junior cursando Economia e Ciência de Dados. Natural de São Paulo, sou fascinado pelo mundo das finanças e tecnologia, e principalmente pelo uso de inteligência artificial e estatística no mercado financeiro. E, claro, não podia esquecer da minha paixão por futebol!",
    "profilePicture": "/148-DSCF2500 - Lucas Carvalho da Rocha Camargo.jpg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/lucas-camargo-133852222",
      "Email": "lucas.camargo@berkeley.edu",
      "Instagram": "https://www.instagram.com/lucascamargo"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Luiz Felipe Barbosa",
    "position": "Marketing Member",
    "bio": "Sou o Luiz, um Junior cursando Mathematics e Media Studies. Sou de São Paulo, capital, e morei no Brasil até o fim do ensino médio. Gosto muito de política, tecnologia e arte, sempre com o foco de aprender sobre o mundo!",
    "profilePicture": "/another good one - Luiz Felipe Pratini de Moraes Barbosa.jpeg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/luiz-felipe-barbosa-5989a9294",
      "Email": "lbarb021@berkeley.edu",
      "Instagram": "https://www.instagram.com/luizbarbosa"
    },
    "group": "Board Members"
  },
  {
    "name": "Leonardo Soffiatti",
    "position": "Head of Operations",
    "bio": "Meu nome é Leonardo e sou um sophomore estudando Engenharia Elétrica e Ciência da Computação. Sou de Curitiba e me interesso por ciência, tecnologia, matemática, jogos e livros!!",
    "profilePicture": "/IMG_5605 - Leonardo Guimaraes Soffiatti.jpeg",
    "links": {
      "LinkedIn": "https://linkedin.com/in/leonardosoffiatti",
      "Email": "leonardo.soffiatti@berkeley.edu",
      "Instagram": "https://www.instagram.com/leonardosoffiatti"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Bruno Jose Ferreira de Meirelles Fonseca",
    "position": "Finance Member",
    "bio": "Prazer meu nome é Bruno, sou um junior cursando Economia. Eu nasci e fui criado em Salvador mas com 18 anos me mudei para França para a primeira parte do meu duplo diploma. Adoro política e direito internacional mas também andar de cavalo e ir para praia.",
    "profilePicture": "/410-DSCF2763 - Bruno Jose Ferreira de Meirelles Fonseca.jpg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/bruno-jose-fonseca-65303b225/",
      "Email": "brunojose.fonseca@berkeley.edu",
      "Instagram": "https://www.instagram.com/brunojosefonseca"
    },
    "group": "Board Members"
  },
  {
    "name": "Bruno Vieira",
    "position": "Operations Member",
    "bio": "Me chamo Bruno e sou um junior cursando EECS. Nasci e vivi minha vida toda em Campinas e tenho interesse no mercado financeiro. Nas minhas horas vagas jogo futebol e vou na academia.",
    "profilePicture": "/IMG_8008 - Bruno Borges Vieira.jpg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/bruno-borges-marques-vieira",
      "Email": "bruno.vieira@berkeley.edu",
      "Instagram": "https://www.instagram.com/brunovieira"
    },
    "group": "Board Members"
  },
  {
    "name": "Thaís Dubost",
    "position": "Head of Social Affairs",
    "bio": "Meu nome é Thais e sou uma sophomore estudando Biologia Molecular (MCB). Nasci no Brasil, sou meio francesa, e já morei em cinco países diferentes! Sou apaixonada por genética e quero trabalhar com pesquisa na área da saúde. Além disso, adoro fazer hipismo!",
    "profilePicture": "/IMG_1241 - Thais Dubost.jpeg",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/thais-dubost",
      "Email": "thaisdubost@berkeley.edu",
      "Instagram": "https://www.instagram.com/thaisdubost"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Tiffanie Guichard",
    "position": "Tech Member",
    "bio": "Me chamo Tiffanie e sou uma sophomore cursando ciência da computação. Nasci no México e morei em Turquia metade da minha vida. Sou fascinada pela cultura brasileira e pelo país. Comecei a aprender português no início do meu primeiro ano!",
    "profilePicture": "/2023_June_Grduation Tiffanie_0004_a - Tiffanie Angelique Guichard.jpeg",
    "links": {
      "LinkedIn": "http://linkedin.com/in/tiffanie-guichard-742735285",
      "Email": "tiffanieguichard@berkeley.edu",
      "Instagram": "https://www.instagram.com/tiffanieguichard"
    },
    "group": "Board Members"
  }
];

// Now, define the MemberCard component within the same file
function MemberCard(props) {
  const { pfp, name, position, desc, linkedin, email, instagram } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={pfp} alt={`${name}'s Profile Picture`} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-lime-600">{name}</h2>
        <p className="text-gray-700 text-sm mb-2">{position}</p>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 pb-4 pt-2 flex space-x-4">
        {linkedin && linkedin !== "N/A" && (
          <a href={linkedin} className="text-blue-700 hover:text-blue-950">
            LinkedIn
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="text-amber-400 hover:text-amber-600">
            Email
          </a>
        )}
        {instagram && instagram !== "N/A" && (
          <a href={instagram} className="text-lime-600 hover:text-lime-800">
            Instagram
          </a>
        )}
      </div>
    </div>
  );
}

function Members() {
  const { language } = useLanguage();

  const translations = {
    en: {
      board_leadership: "BOARD LEADERSHIP",
      board_members: "BOARD MEMBERS",
    },
    pt: {
      board_leadership: "LIDERANÇA DO CONSELHO",
      board_members: "MEMBROS DO CONSELHO",
    },
  };

  // Separate members into leadership and board groups
  const boardLeadership = members.filter(
    (member) => member.group === "Board Leadership"
  );
  const boardMembers = members.filter(
    (member) => member.group === "Board Members"
  );

  return (
    <div className="max-w-[1200px] flex flex-col mx-auto">
      <h1 className="p-4 pb-0 text-4xl mx-auto">
        {translations[language].board_leadership}
      </h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        {boardLeadership.map((member, index) => (
          <MemberCard
            key={index}
            pfp={member.profilePicture || pfp}
            name={member.name}
            position={member.position}
            desc={member.bio}
            linkedin={member.links.LinkedIn}
            email={member.links.Email}
            instagram={member.links.Instagram}
          />
        ))}
      </div>
      <h1 className="p-4 py-0 text-4xl mx-auto">
        {translations[language].board_members}
      </h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {boardMembers.map((member, index) => (
          <MemberCard
            key={index}
            pfp={member.profilePicture || pfp}
            name={member.name}
            position={member.position}
            desc={member.bio}
            linkedin={member.links.LinkedIn}
            email={member.links.Email}
            instagram={member.links.Instagram}
          />
        ))}
      </div>
    </div>
  );
}

export default Members;
