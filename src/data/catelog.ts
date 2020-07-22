import { RentalItem } from '../types/Rental';
import i18n from '../i18n';

export const catalog: { [key: string]: RentalItem[] } = {
  en: [
    {
      id: 'canon-5d-mark-iii',
      name: 'Canon 5D mark III (Body Only)',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['photography', 'camera:dslr'],
      description: {
        short: 'Great versatile camera for all situations.',
        full:
          '22.3MP Full-Frame CMOS Sensor; 3.2" High-Res LCD; DIGIC 5+ Processor; 61-Point AF; Full HD 1080/30p & 720/60p Formats. Includes: 2 batteries, battery charger, Canon software.',
      },
      price_per_day: 120,
      preview_image_url: 'https://img.vistek.net/prodimg/large/261855.jpg',
      loading: false,
      slug: 'canon-5d-mark-iii',
    },
    {
      id: 'R305699',
      name: 'Sony SEL FE 70-200 f/2.8 GM OSS',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['photography', 'lens:camera'],
      description: {
        short: 'An F2.8 telephoto zoom like no other',
        full:
          'G Master design and technology in a new constant F2.8 telephoto zoom that offers unsurpassed rendering, blazing AF, and extraordinary image stabilization performance.',
      },
      price_per_day: 60,
      preview_image_url: 'https://img.vistek.net/prodimg/xlarge/408124.jpg',
      loading: false,
      slug: 'sony-sel-fe-70-200-f-2.8',
    },
    {
      id: 'R304314',
      name: 'Canon C300 Cinema EOS Camcorder Body',
      available_locations: ['Toronto', 'Vancouver'],
      category: ['camera:camcorder'],
      description: {
        short: 'Leave No Story Untold.',
        full: `Bringing Canon's expertise and decades of experience designing sensors, lenses, image processing and design to the world of motion picture capture, the EOS C300 camera has been designed to meet the demanding needs of cinema industry professionals, providing a modular, portable and eminently adaptable system of cameras, lenses and accessories built for moviemaking in the 21st century.`,
      },
      price_per_day: 200,
      preview_image_url: 'https://img.vistek.net/prodimg/large/260658.jpg',
      loading: false,
      slug: 'canon-c300-cinema-eos-camcorder-body',
    },
    {
      id: 'R303387',
      name: 'Canon EF24mm f/3.5 L TS-e II Lens',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['lens:camera'],
      description: {
        short:
          'Compact, wide-angle lens which enables tilt and shift movements..',
        full: `A superb refinement to a true Canon classic, the TS-E 24mm f/3.5L II offers enhanced functionality and image quality in its most popular tilt-shift focal length. Designed with UD glass to minimize and compensate for chromatic aberrations and a specially coated aspherical element for the highest possible glare-free image quality, this tilt-shift lens features an angle of view of 84° on a full-frame camera.`,
      },
      price_per_day: 50,
      preview_image_url: 'https://img.vistek.net/prodimg/large/242966.jpg',
      loading: false,
      slug: 'canon-ef24mm-f35-l-tse-ii-lens',
    },
    {
      id: 'R306044',
      name: 'Rode Microphones Video Mic Pro PLUS',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['audio:mic'],
      description: {
        short: 'Best-In-Class Rycote Lyre Suspension System Onboard',
        full: `The RØDE VideoMic Pro+ is a new addition to the best-in-market on-camera category. It is a true shotgun microphone designed for use with camcorders, DSLR cameras and portable audio recorders as a source of primary and reference audio.`,
      },
      price_per_day: 20,
      preview_image_url: 'https://img.vistek.net/prodimg/large/418177.jpg',
      loading: false,
      slug: 'rode-microphones-video-mic-pro-plus',
    },
  ],
  fr: [
    {
      id: 'canon-5d-mark-iii',
      name: 'Canon 5D mark III (Corps seulement)',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['photography', 'camera:dslr'],
      description: {
        short: 'Superbe appareil photo polyvalent pour toutes les situations.',
        full:
          'Capteur CMOS plein cadre 22,3 Mpx ; écran LCD 3,2" à haut-réseau ; processeur DIGIC 5+ ; AF 61 points ; formats Full HD 1080/30p et 720/60p. Inclus : 2 piles, chargeur de piles, logiciel Canon.',
      },
      price_per_day: 120,
      preview_image_url: 'https://img.vistek.net/prodimg/large/261855.jpg',
      loading: false,
      slug: 'canon-5d-mark-iii',
    },
    {
      id: 'R305699',
      name: 'Sony SEL FE 70-200 f/2.8 GM OSS',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['photography', 'lens:camera'],
      description: {
        short: 'Un télézoom F2.8 pas comme les autres',
        full:
          "G Maîtrisez la conception et la technologie d'un nouveau télézoom à focale constante F2.8 qui offre un rendu inégalé, un AF fulgurant et des performances extraordinaires en matière de stabilisation d'image.",
      },
      price_per_day: 60,
      preview_image_url: 'https://img.vistek.net/prodimg/xlarge/408124.jpg',
      loading: false,
      slug: 'sony-sel-fe-70-200-f-2.8',
    },
    {
      id: 'R304314',
      name: 'Boîtier du caméscope Canon C300 Cinema EOS',
      available_locations: ['Toronto', 'Vancouver'],
      category: ['camera:camcorder'],
      description: {
        short: 'Ne laissez aucune histoire non racontée.',
        full: `En apportant l'expertise et les décennies d'expérience de Canon en matière de conception de capteurs, d'objectifs, de traitement de l'image et de design au monde de la capture cinématographique, la caméra EOS C300 a été conçue pour répondre aux besoins exigeants des professionnels de l'industrie cinématographique, en fournissant un système modulaire, portable et éminemment adaptable de caméras, d'objectifs et d'accessoires conçus pour le cinéma du 21e siècle.`,
      },
      price_per_day: 200,
      preview_image_url: 'https://img.vistek.net/prodimg/large/260658.jpg',
      loading: false,
      slug: 'canon-c300-cinema-eos-camcorder-body',
    },
    {
      id: 'R303387',
      name: 'Canon EF24mm f/3.5 L TS-e II Lens',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['lens:camera'],
      description: {
        short:
          "Objectif grand angle compact qui permet des mouvements d'inclinaison et de décalage..",
        full: `Un superbe raffinement d'un vrai classique de Canon, le TS-E 24 mm f/3,5L II offre une fonctionnalité et une qualité d'image améliorées dans sa focale à bascule la plus populaire. Conçu avec du verre UD pour minimiser et compenser les aberrations chromatiques et un élément asphérique spécialement revêtu pour une qualité d'image sans éblouissement, cet objectif à bascule présente un angle de vue de 84° sur un appareil photo plein cadre.`,
      },
      price_per_day: 50,
      preview_image_url: 'https://img.vistek.net/prodimg/large/242966.jpg',
      loading: false,
      slug: 'canon-ef24mm-f35-l-tse-ii-lens',
    },
    {
      id: 'R306044',
      name: 'Rode Microphones Video Mic Pro PLUS',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['audio:mic'],
      description: {
        short:
          'Le meilleur système de suspension de lyre Rycote de sa catégorie à bord',
        full: `Le VideoMic Pro+ de RØDE est un nouveau venu dans la catégorie des meilleures caméras du marché. Il s'agit d'un véritable micro-canon conçu pour être utilisé avec les caméscopes, les appareils photo reflex numériques et les enregistreurs audio portables comme source audio principale et de référence.`,
      },
      price_per_day: 20,
      preview_image_url: 'https://img.vistek.net/prodimg/large/418177.jpg',
      loading: false,
      slug: 'rode-microphones-video-mic-pro-plus',
    },
  ],
  cn: [
    {
      id: 'canon-5d-mark-iii',
      name: 'Canon 5D mark III (Body Only)',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['photography', 'camera:dslr'],
      description: {
        short: 'Great versatile camera for all situations.',
        full:
          '22.3MP Full-Frame CMOS Sensor; 3.2" High-Res LCD; DIGIC 5+ Processor; 61-Point AF; Full HD 1080/30p & 720/60p Formats. Includes: 2 batteries, battery charger, Canon software.',
      },
      price_per_day: 120,
      preview_image_url: 'https://img.vistek.net/prodimg/large/261855.jpg',
      loading: false,
      slug: 'canon-5d-mark-iii',
    },
    {
      id: 'R305699',
      name: 'Sony SEL FE 70-200 f/2.8 GM OSS',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['photography', 'lens:camera'],
      description: {
        short: 'An F2.8 telephoto zoom like no other',
        full:
          'G Master design and technology in a new constant F2.8 telephoto zoom that offers unsurpassed rendering, blazing AF, and extraordinary image stabilization performance.',
      },
      price_per_day: 60,
      preview_image_url: 'https://img.vistek.net/prodimg/xlarge/408124.jpg',
      loading: false,
      slug: 'sony-sel-fe-70-200-f-2.8',
    },
    {
      id: 'R304314',
      name: 'Canon C300 Cinema EOS Camcorder Body',
      available_locations: ['Toronto', 'Vancouver'],
      category: ['camera:camcorder'],
      description: {
        short: 'Leave No Story Untold.',
        full: `Bringing Canon's expertise and decades of experience designing sensors, lenses, image processing and design to the world of motion picture capture, the EOS C300 camera has been designed to meet the demanding needs of cinema industry professionals, providing a modular, portable and eminently adaptable system of cameras, lenses and accessories built for moviemaking in the 21st century.`,
      },
      price_per_day: 200,
      preview_image_url: 'https://img.vistek.net/prodimg/large/260658.jpg',
      loading: false,
      slug: 'canon-c300-cinema-eos-camcorder-body',
    },
    {
      id: 'R303387',
      name: 'Canon EF24mm f/3.5 L TS-e II Lens',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['lens:camera'],
      description: {
        short:
          'Compact, wide-angle lens which enables tilt and shift movements..',
        full: `A superb refinement to a true Canon classic, the TS-E 24mm f/3.5L II offers enhanced functionality and image quality in its most popular tilt-shift focal length. Designed with UD glass to minimize and compensate for chromatic aberrations and a specially coated aspherical element for the highest possible glare-free image quality, this tilt-shift lens features an angle of view of 84° on a full-frame camera.`,
      },
      price_per_day: 50,
      preview_image_url: 'https://img.vistek.net/prodimg/large/242966.jpg',
      loading: false,
      slug: 'canon-ef24mm-f35-l-tse-ii-lens',
    },
    {
      id: 'R306044',
      name: 'Rode Microphones Video Mic Pro PLUS',
      available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
      category: ['audio:mic'],
      description: {
        short: 'Best-In-Class Rycote Lyre Suspension System Onboard',
        full: `The RØDE VideoMic Pro+ is a new addition to the best-in-market on-camera category. It is a true shotgun microphone designed for use with camcorders, DSLR cameras and portable audio recorders as a source of primary and reference audio.`,
      },
      price_per_day: 20,
      preview_image_url: 'https://img.vistek.net/prodimg/large/418177.jpg',
      loading: false,
      slug: 'rode-microphones-video-mic-pro-plus',
    },
  ],
};

export const VisionaryCatelog = () => {
  return catalog[i18n.language];
};
