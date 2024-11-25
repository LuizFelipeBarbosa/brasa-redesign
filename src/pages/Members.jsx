import React from "react";
import MemberCard from "../components/MemberCard";
import { useLanguage } from "../LanguageContext";
import pfp from "lucas.png"; // Default profile picture

// Define the members data directly in the file
const members = [
  {
    "name": "Daniel Liao",
    "position": "Co-President",
    "bio": "Me chamo Daniel e sou um junior cursando Economia. Nasci e vivi a minha vida toda em São Paulo, capital. Sou apaixonado pelo mundo de finanças, mercado de capitais e, futebol (vai Corinthians)!",
    "profilePicture": "profile_picture_daniel_liao.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/daniel-bern%C3%A1th-liao-545518213",
      "Email": "danielbernathliao@berkeley.edu",
      "Instagram": "https://www.instagram.com/danielbernathliao"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Lucas Camargo",
    "position": "Co-President",
    "bio": "Me chamo Lucas e sou um junior cursando Economia e Ciência de Dados. Natural de São Paulo, sou fascinado pelo mundo das finanças e tecnologia, e principalmente pelo uso de inteligência artificial e estatística no mercado financeiro. E, claro, não podia esquecer da minha paixão por futebol!",
    "profilePicture": "profile_picture_lucas_camargo.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/lucas-camargo-133852222",
      "Email": "lucas.camargo@berkeley.edu",
      "Instagram": "https://www.instagram.com/lucascamargo"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Nicole Elmôr",
    "position": "Head of Finance",
    "bio": "Me chamo Nicole e sou Class of 2026! Estou cursando um double major em Economia e Ciência de Dados. Sou de São Paulo.",
    "profilePicture": "profile_picture_nicole_elmor.png",
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
    "profilePicture": "profile_picture_joe_wang.png",
    "links": {
      "LinkedIn": "https://linkedin.com/in/joseph-wang-zz",
      "Email": "zezhou_wang@berkeley.edu",
      "Instagram": "https://www.instagram.com/joewangzz"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Leonardo Soffiatti",
    "position": "Head of Operations",
    "bio": "Meu nome é Leonardo e sou um sophomore estudando Engenharia Elétrica e Ciência da Computação. Sou de Curitiba e me interesso por ciência, tecnologia, matemática, jogos e livros!!",
    "profilePicture": "profile_picture_leonardo_soffiatti.png",
    "links": {
      "LinkedIn": "https://linkedin.com/in/leonardosoffiatti",
      "Email": "leonardo.soffiatti@berkeley.edu",
      "Instagram": "https://www.instagram.com/leonardosoffiatti"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Thaís Dubost",
    "position": "Head of Social Affairs",
    "bio": "Meu nome é Thais e sou uma sophomore estudando Biologia Molecular (MCB). Nasci no Brasil, sou meio francesa, e já morei em cinco países diferentes! Sou apaixonada por genética e quero trabalhar com pesquisa na área da saúde. Além disso, adoro fazer hipismo!",
    "profilePicture": "profile_picture_thais_dubost.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/thais-dubost",
      "Email": "thaisdubost@berkeley.edu",
      "Instagram": "https://www.instagram.com/thaisdubost"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Brisa Vicente Brown",
    "position": "Head of Marketing",
    "bio": "Me chamo Brisa e sou estudante de terceiro ano cursando diploma duplo em Nutrição, com foco em Biologia Metabólica, e Português. Vivi em San Diego, Califórnia, e aprendi português em casa com minha mãe, de São Paulo. Me preparo para a área médica e sou apaixonada por nutrição, saúde e culturas.",
    "profilePicture": "profile_picture_brisa_vicente_brown.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/brisa-brown-559728304",
      "Email": "brisabrown@berkeley.edu",
      "Instagram": "https://www.instagram.com/brisabrown"
    },
    "group": "Board Leadership"
  },
  {
    "name": "Gabriel Abreu",
    "position": "Operations Member",
    "bio": "Meu nome é Gabriel, sou freshman estudando economia política. Nasci em Recife e me mudei para a Califórnia aos 16 anos. Sempre fui apaixonado pelo comércio internacional, mas também gosto de acompanhar a indústria do entretenimento e a geopolítica global.",
    "profilePicture": "profile_picture_gabriel_abreu.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/gabriel-abreu-845037329",
      "Email": "gabriel.abreu@berkeley.edu",
      "Instagram": "https://www.instagram.com/gabriel.abreu"
    },
    "group": "Board Members"
  },
  {
    "name": "Bruno Vieira",
    "position": "Operations Member",
    "bio": "Me chamo Bruno e sou um junior cursando EECS. Nasci e vivi minha vida toda em Campinas e tenho interesse no mercado financeiro. Nas minhas horas vagas jogo futebol e vou na academia.",
    "profilePicture": "profile_picture_bruno_vieira.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/bruno-borges-marques-vieira",
      "Email": "bruno.vieira@berkeley.edu",
      "Instagram": "https://www.instagram.com/brunovieira"
    },
    "group": "Board Members"
  },
  {
    "name": "Sinead Bermudez",
    "position": "Social Affairs Member",
    "bio": "Eu sou Sinead, sou freshman, e fiz um intercâmbio no interior de São Paulo por um ano. Estou estudando linguística e adoro jogar futebol e cantar.",
    "profilePicture": "profile_picture_sinead_bermudez.png",
    "links": {
      "LinkedIn": "N/A",
      "Email": "sineadbermudez@berkeley.edu",
      "Instagram": "https://www.instagram.com/sineadbermudez"
    },
    "group": "Board Members"
  },
  {
    "name": "Júlia Araújo",
    "position": "Social Affairs Member",
    "bio": "Me chamo Júlia e sou uma sophomore cursando Media Studies! Meus pais são de Recife, mas eu cresci em Los Angeles. Gosto de passear pela praia, ler, e tenho uma paixão por mídia e cultura popular.",
    "profilePicture": "profile_picture_julia_araujo.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/julia-araujo-6035202bb",
      "Email": "juliaaraujo@berkeley.edu",
      "Instagram": "https://www.instagram.com/juliaaraujo"
    },
    "group": "Board Members"
  },
  {
    "name": "Luiz Felipe Barbosa",
    "position": "Marketing Member",
    "bio": "Sou o Luiz, um Junior cursando Mathematics e Media Studies. Sou de São Paulo, capital, e morei no Brasil até o fim do ensino médio. Gosto muito de política, tecnologia e arte, sempre com o foco de aprender sobre o mundo!",
    "profilePicture": "profile_picture_luiz_felipe_barbosa.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/luiz-felipe-barbosa-5989a9294",
      "Email": "lbarb021@berkeley.edu",
      "Instagram": "https://www.instagram.com/luizbarbosa"
    },
    "group": "Board Members"
  },
  {
    "name": "Bruno Jose Ferreira de Meirelles Fonseca",
    "position": "Finance Member",
    "bio": "Prazer meu nome é Bruno, sou um junior cursando Economia. Eu nasci e fui criado em Salvador mas com 18 anos me mudei para França para a primeira parte do meu duplo diploma. Adoro política e direito internacional mas também andar de cavalo e ir para praia.",
    "profilePicture": "profile_picture_bruno_fonseca.png",
    "links": {
      "LinkedIn": "https://www.linkedin.com/in/bruno-jose-fonseca-65303b225/",
      "Email": "brunojose.fonseca@berkeley.edu",
      "Instagram": "https://www.instagram.com/brunojosefonseca"
    },
    "group": "Board Members"
  },
  {
    "name": "Roni Kriger",
    "position": "Tech Member",
    "bio": "Sou Roni Kriger, estudante de Engenharia Elétrica e Ciência da Computação. Tenho grande paixão por tecnologia e inovação. Além dos estudos, gosto de explorar novos avanços em inteligência artificial e me dedicar a projetos desafiadores na área.",
    "profilePicture": "profile_picture_roni_kriger.png",
    "links": {
      "LinkedIn": "https://linkedin.com/in/ronikriger",
      "Email": "ronikriger@berkeley.edu",
      "Instagram": "https://www.instagram.com/ronikriger"
    },
    "group": "Board Members"
  },
  {
    "name": "Tiffanie Guichard",
    "position": "Tech Member",
    "bio": "Me chamo Tiffanie e sou uma sophomore cursando ciência da computação. Nasci no México e morei em Turquia metade da minha vida. Sou fascinada pela cultura brasileira e pelo país. Comecei a aprender português no início do meu primeiro ano!",
    "profilePicture": "profile_picture_tiffanie_guichard.png",
    "links": {
      "LinkedIn": "http://linkedin.com/in/tiffanie-guichard-742735285",
      "Email": "tiffanieguichard@berkeley.edu",
      "Instagram": "https://www.instagram.com/tiffanieguichard"
    },
    "group": "Board Members"
  }
];

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
