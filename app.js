/**
 * «Ловлю на слове!» (Lifestyle / Стиль Жизни)
 * 100% Pure Vanilla JavaScript — Zero dependencies, zero frameworks, 100% offline.
 * Works directly via file://, GitHub Pages, or any web server.
 */

// =============================================================================
// 1. DATA & CONSTANTS
// =============================================================================

const STORAGE_KEY = 'lovlyu_na_slove_lifestyle_strict_single_slot_v1_saved_game_state';
const THEME_KEY = 'lovlyu_na_slove_theme';

const SVG_ICONS = {
  utensils: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M12 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  apple: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,
  car: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  waves: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="6"/></svg>`,
  shirt: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
  dog: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.996 1 1.157-.366 1.838-1.284 2.128-2.188"/><path d="M14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.996 1-1.157-.366-1.838-1.284-2.128-2.188"/><path d="M7 14c1.66 0 3-1.34 3-3 0-1.3-1.5-3-3-3s-3 1.7-3 3c0 1.66 1.34 3 3 3z"/><path d="M17 14c1.66 0 3-1.34 3-3 0-1.3-1.5-3-3-3s-3 1.7-3 3c0 1.66 1.34 3 3 3z"/><path d="M9 19c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"/></svg>`,
  candy: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 9.5 5 5"/><circle cx="12" cy="12" r="5"/><path d="M16 8l5-5-2 4 4-2-7 3"/><path d="M8 16l-5 5 2-4-4 2 7-3"/></svg>`,
  building: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4"/><path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  glass: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.8 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12h12"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  music: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  clapperboard: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-3 17.2-5Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11Z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/></svg>`,
  sprout: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
  dices: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.41 2.41 0 0 0 0-3.41l-4.5-4.5a2.41 2.41 0 0 0-3.41 0L10 6.08"/><circle cx="8" cy="16" r="1"/><circle cx="6" cy="14" r="1"/><circle cx="10" cy="18" r="1"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  users: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  rotate: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>`,
  info: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  help: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  arrowDown: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  play: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  volume2: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  volumeX: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>`
};

const CATEGORIES = [
  { id: 'cook_dishes', name: 'Блюда из кулинарной книги', shortName: 'Кулинарные блюда', icon: 'utensils', examples: ['Борщ', 'Бефстроганов', 'Блины', 'Буритто', 'Баница'], desc: 'Любые готовые блюда, супы, салаты, гарниры, закуски, выпечка.' },
  { id: 'fruits_veggies', name: 'Фрукты и овощи', shortName: 'Фрукты и овощи', icon: 'apple', examples: ['Банан', 'Брокколи', 'Баклажан', 'Брусника', 'Брюква'], desc: 'Свежие или приготовленные плоды растений, ягоды, бахчевые, корнеплоды.' },
  { id: 'auto_parts_brands', name: 'Автозапчасти и марки автомобилей', shortName: 'Авто и запчасти', icon: 'car', examples: ['Бампер', 'Багажник', 'Брызговик', 'Bentley', 'Bugatti'], desc: 'Марки машин, автопроизводители, детали, механизмы и узлы автомобиля.' },
  { id: 'water_bodies', name: 'Названия океанов, рек и озёр', shortName: 'Океаны, реки, озёра', icon: 'waves', examples: ['Байкал', 'Балтика', 'Белое море', 'Березина', 'Баренцево море'], desc: 'Географические водные объекты: океаны, моря, реки, озера, проливы, каналы.' },
  { id: 'toys_games', name: 'Игрушки и названия игр', shortName: 'Игрушки и игры', icon: 'gamepad', examples: ['Бадминтон', 'Барби', 'Бакуган', 'Бильярд', 'Баскетбол'], desc: 'Настольные, видео-, уличные игры, конструкторы, куклы, спортивные игры.' },
  { id: 'clothes_designers', name: 'Предметы одежды, имена дизайнеров и марки одежды', shortName: 'Одежда и бренды', icon: 'shirt', examples: ['Брюки', 'Блузка', 'Балаклава', 'Ботинки', 'Balenciaga'], desc: 'Предметы гардероба, обувь, аксессуары, дизайнеры, модельеры и бренды.' },
  { id: 'animals', name: 'Животные', shortName: 'Животные', icon: 'dog', examples: ['Белка', 'Барсук', 'Бегемот', 'Бобёр', 'Бурундук'], desc: 'Дикие и домашние звери, птицы, рыбы, насекомые, рептилии.' },
  { id: 'sweets_brands', name: 'Сладости и торговые марки сладостей', shortName: 'Сладости и конфеты', icon: 'candy', examples: ['Безе', 'Барни', 'Баунти', 'Батончик', 'Булочка'], desc: 'Конфеты, шоколад, пирожные, десерты, выпечка, мороженое и их бренды.' },
  { id: 'cities', name: 'Города', shortName: 'Города', icon: 'building', examples: ['Берлин', 'Барселона', 'Белгород', 'Бостон', 'Братислава'], desc: 'Города любых стран мира: столицы, миллионники, исторические и малые города.' },
  { id: 'countries', name: 'Страны', shortName: 'Страны', icon: 'globe', examples: ['Бразилия', 'Бельгия', 'Болгария', 'Беларусь', 'Боливия'], desc: 'Современные и исторические признанные государства всех континентов.' },
  { id: 'sports', name: 'Виды спорта', shortName: 'Виды спорта', icon: 'trophy', examples: ['Биатлон', 'Бокс', 'Баскетбол', 'Бадминтон', 'Бобслей'], desc: 'Олимпийские, игровые, индивидуальные и командные спортивные дисциплины.' },
  { id: 'professions', name: 'Профессии', shortName: 'Профессии', icon: 'briefcase', examples: ['Бухгалтер', 'Библиотекарь', 'Бармен', 'Балерина', 'Биолог'], desc: 'Специальности, должности, занятия, ремесла и служебные звания.' },
  { id: 'drinks_brands', name: 'Напитки и марки напитков', shortName: 'Напитки и марки', icon: 'glass', examples: ['Байкал', 'Боржоми', 'Бурбон', 'Бренди', 'Березовый сок'], desc: 'Безалкогольные и алкогольные напитки, чаи, кофе, соки, лимонады, бренды.' },
  { id: 'electronics_brands', name: 'Электроприборы и их торговые марки', shortName: 'Электроприборы', icon: 'zap', examples: ['Блендер', 'Бойлер', 'Бритва', 'Bosch', 'Braun'], desc: 'Бытовая техника, электроника, инструменты, гаджеты и торговые марки.' },
  { id: 'music_instruments_artists', name: 'Музыкальные инструменты, музыканты, группы, названия песен', shortName: 'Музыка и группы', icon: 'music', examples: ['Балалайка', 'Баян', 'Бас-гитара', 'Би-2', 'Баста'], desc: 'Инструменты, исполнители, вокалисты, композиторы, ансамбли и хиты.' },
  { id: 'movies_tv_actors', name: 'Названия фильмов и телепередач, имена актёров и телеведущих', shortName: 'Кино и актёры', icon: 'clapperboard', examples: ['Брат', 'Бумер', 'Бэтмен', 'Безруков', 'Бодров'], desc: 'Фильмы, сериалы, ток-шоу, мультфильмы, актёры, актрисы и телеведущие.' },
  { id: 'books_authors', name: 'Названия книг и имена авторов', shortName: 'Книги и авторы', icon: 'book', examples: ['Булгаков', 'Блок', 'Бунин', 'Белая гвардия', 'Бесы'], desc: 'Литературные произведения, повести, романы, поэмы, писатели и поэты.' },
  { id: 'plants', name: 'Растения', shortName: 'Растения и деревья', icon: 'sprout', examples: ['Берёза', 'Багульник', 'Бегония', 'Бук', 'Барбарис'], desc: 'Деревья, кустарники, полевые и комнатные цветы, травы, мхи, папоротники.' }
];

const CATEGORIES_MAP = new Map(CATEGORIES.map(c => [c.id, c]));

const LETTER_TILES = [
  { id: 'tile_a', letters: ['А'], displayLabel: 'А', isComposite: false },
  { id: 'tile_b', letters: ['Б'], displayLabel: 'Б', isComposite: false },
  { id: 'tile_v', letters: ['В'], displayLabel: 'В', isComposite: false },
  { id: 'tile_g', letters: ['Г'], displayLabel: 'Г', isComposite: false },
  { id: 'tile_d', letters: ['Д'], displayLabel: 'Д', isComposite: false },
  { id: 'tile_e_yo_zh', letters: ['Е', 'Ё', 'Ж'], displayLabel: 'Е, Ё, Ж', isComposite: true },
  { id: 'tile_z', letters: ['З'], displayLabel: 'З', isComposite: false },
  { id: 'tile_i_y', letters: ['И', 'Й'], displayLabel: 'И, Й', isComposite: true },
  { id: 'tile_k', letters: ['К'], displayLabel: 'К', isComposite: false },
  { id: 'tile_l', letters: ['Л'], displayLabel: 'Л', isComposite: false },
  { id: 'tile_m', letters: ['М'], displayLabel: 'М', isComposite: false },
  { id: 'tile_n', letters: ['Н'], displayLabel: 'Н', isComposite: false },
  { id: 'tile_o', letters: ['О'], displayLabel: 'О', isComposite: false },
  { id: 'tile_p', letters: ['П'], displayLabel: 'П', isComposite: false },
  { id: 'tile_r', letters: ['Р'], displayLabel: 'Р', isComposite: false },
  { id: 'tile_s', letters: ['С'], displayLabel: 'С', isComposite: false },
  { id: 'tile_t', letters: ['Т'], displayLabel: 'Т', isComposite: false },
  { id: 'tile_u', letters: ['У'], displayLabel: 'У', isComposite: false },
  { id: 'tile_f_kh', letters: ['Ф', 'Х'], displayLabel: 'Ф, Х', isComposite: true },
  { id: 'tile_ts_ch_sh_shch', letters: ['Ц', 'Ч', 'Ш', 'Щ'], displayLabel: 'Ц, Ч, Ш, Щ', isComposite: true },
  { id: 'tile_e_yu_ya', letters: ['Э', 'Ю', 'Я'], displayLabel: 'Э, Ю, Я', isComposite: true }
];

const AVAILABLE_AVATARS = ['🐱', '🦊', '🐼', '🦁', '🐻', '🐰', '🐸', '🦉', '🐯', '🐧'];
const AVAILABLE_COLORS = ['#0d9488', '#ea580c', '#7c3aed', '#0284c7', '#e11d48', '#16a34a'];

// =============================================================================
// 2. OFFLINE SOUND ENGINE (Web Audio API)
// =============================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playDiceRoll() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const count = 8;
    for (let i = 0; i < count; i++) {
      const delay = Math.pow(i / count, 1.4) * 0.45;
      const t = now + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(350 + Math.random() * 400, t);
      filter.Q.setValueAtTime(5, t);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140 + Math.random() * 180, t);
      osc.frequency.exponentialRampToValueAtTime(70, t + 0.04);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.003);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.06);
    }
  }

  playTick(isUrgent = false) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = isUrgent ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(isUrgent ? 880 : 660, now);
    osc.frequency.exponentialRampToValueAtTime(isUrgent ? 440 : 330, now + 0.03);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(isUrgent ? 0.2 : 0.08, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  playTimeUpGong() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [320, 480, 640, 960].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.25 / (idx + 1), now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.9);
    });
  }

  playGemChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [587.33, 880, 1174.66].forEach((freq, idx) => {
      const t = now + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.4);
    });
  }

  playVictory() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    let offset = 0;
    notes.forEach((freq) => {
      const t = now + offset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.25, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.35);
      offset += 0.15;
    });
  }
}

const sounds = new SoundEngine();

// =============================================================================
// 3. GAME STATE & LOCALSTORAGE
// =============================================================================

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createDefaultState() {
  const initialCategories = shuffle(CATEGORIES);
  return {
    version: 1,
    currentStage: 'stage_players',
    roundNumber: 1,
    targetCrystals: 15,
    activeFirstPlayerIndex: 0,
    players: [
      { id: 'p1', name: 'Игрок 1', color: AVAILABLE_COLORS[0], avatar: '🐱', crystals: 0, assignedCategoryId: null },
      { id: 'p2', name: 'Игрок 2', color: AVAILABLE_COLORS[1], avatar: '🦊', crystals: 0, assignedCategoryId: null },
      { id: 'p3', name: 'Игрок 3', color: AVAILABLE_COLORS[2], avatar: '🐼', crystals: 0, assignedCategoryId: null }
    ],
    dice: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      categoryId: initialCategories[i % initialCategories.length].id,
      assignedPlayerId: null
    })),
    deck: shuffle(LETTER_TILES),
    discardPile: [],
    currentLetterTile: null,
    timerSeconds: 90,
    timerDuration: 90,
    isTimerRunning: false,
    winnerPlayerId: null
  };
}

let gameState = (function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Storage error:', e);
  }
  return createDefaultState();
})();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

// =============================================================================
// 4. TIMER TICKER
// =============================================================================

let timerInterval = null;

function setupTimerInterval() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (gameState.isTimerRunning && gameState.timerSeconds > 0) {
      gameState.timerSeconds--;
      if (gameState.timerSeconds <= 10 && gameState.timerSeconds > 0) {
        sounds.playTick(true);
      }
      if (gameState.timerSeconds === 0) {
        gameState.isTimerRunning = false;
        sounds.playTimeUpGong();
      }
      saveState();
      renderTimerWidgets();
    }
  }, 1000);
}

// =============================================================================
// 5. DOM ELEMENTS & CONTROLLERS
// =============================================================================

const appEl = document.getElementById('app');

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon(next === 'dark');
}

function updateThemeIcon(isDark) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) btn.innerHTML = isDark ? SVG_ICONS.sun : SVG_ICONS.moon;
}

function toggleMute() {
  sounds.isMuted = !sounds.isMuted;
  const btn = document.getElementById('mute-toggle-btn');
  if (btn) {
    btn.innerHTML = sounds.isMuted ? SVG_ICONS.volumeX : SVG_ICONS.volume2;
    btn.style.color = sounds.isMuted ? 'var(--rose-primary)' : '';
  }
}

// Switch Stage
function setStage(stageId) {
  gameState.currentStage = stageId;
  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Render main app
function renderApp() {
  // Update Stepper buttons
  ['stage_players', 'stage_dice', 'stage_timer', 'stage_scoring'].forEach((s, idx) => {
    const btn = document.getElementById(`step-${s}`);
    if (btn) {
      btn.className = `step-btn ${gameState.currentStage === s ? 'active' : ''}`;
    }
  });

  const container = document.getElementById('stage-view-container');
  if (!container) return;

  switch (gameState.currentStage) {
    case 'stage_players':
      renderStagePlayers(container);
      break;
    case 'stage_dice':
      renderStageDice(container);
      break;
    case 'stage_timer':
      renderStageTimer(container);
      break;
    case 'stage_scoring':
      renderStageScoring(container);
      break;
  }
}

// =============================================================================
// 6. STAGE 1: PLAYERS & TARGET
// =============================================================================

function renderStagePlayers(container) {
  container.innerHTML = `
    <div class="card card-banner">
      <div class="banner-header">
        <div class="banner-title-wrap">
          <div class="stage-num-badge">1</div>
          <div>
            <h2 class="stage-title">Этап 1: Выбор состава игроков</h2>
            <div class="stage-desc">Настройте участников (от 2 до 6) и победную цель</div>
          </div>
        </div>
        <button class="info-help-btn" onclick="openRulesModal()" title="Правила игры">${SVG_ICONS.help}</button>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">
        В «Ловлю на слове!» играют от 2 до 6 человек. Каждый берет ширму, лист и ручку. Нажатием «1-й ходит» можно указать начинающего раунд (по правилам — самый младший).
      </p>
    </div>

    <!-- Target Crystals -->
    <div class="card target-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 1.4rem;">🏆</span>
        <div>
          <div style="font-size: 0.85rem; font-weight: 800;">Цель игры (победные кристаллы)</div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">Стандарт правил «Стиль Жизни»: 15 кристаллов</div>
        </div>
      </div>
      <div class="target-btns">
        ${[10, 15, 20].map(n => `
          <button class="target-pill ${gameState.targetCrystals === n ? 'active' : ''}" onclick="setTargetCrystals(${n})">${n} 💎</button>
        `).join('')}
      </div>
    </div>

    <!-- Players List -->
    <div class="card">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 6px; font-weight: 800; font-size: 0.9rem;">
          ${SVG_ICONS.users}
          <span>Игроки (${gameState.players.length} из 6)</span>
        </div>
        ${gameState.players.length < 6 ? `
          <button class="btn-primary" style="padding: 6px 12px; font-size: 0.75rem; min-height: 38px;" onclick="addPlayer()">
            + Добавить игрока
          </button>
        ` : ''}
      </div>

      <div class="players-grid">
        ${gameState.players.map((p, idx) => `
          <div class="player-item-card ${idx === gameState.activeFirstPlayerIndex ? 'first-player' : ''}">
            <div class="player-input-wrap">
              <select class="avatar-select" onchange="changeAvatar('${p.id}', this.value)">
                ${AVAILABLE_AVATARS.map(av => `<option value="${av}" ${av === p.avatar ? 'selected' : ''}>${av}</option>`).join('')}
              </select>
              <input type="text" class="player-name-input" value="${p.name}" oninput="changePlayerName('${p.id}', this.value)" placeholder="Имя игрока">
            </div>

            <div style="display: flex; align-items: center; gap: 4px;">
              <button class="btn-make-first ${idx === gameState.activeFirstPlayerIndex ? 'active' : ''}" onclick="setFirstPlayer(${idx})">
                ${idx === gameState.activeFirstPlayerIndex ? '1-й ходит' : 'Сделать 1-м'}
              </button>
              ${gameState.players.length > 2 ? `
                <button class="btn-remove-player" onclick="removePlayer('${p.id}')" title="Удалить">${SVG_ICONS.trash}</button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; padding-top: 4px;">
      <button class="btn-primary btn-block" onclick="setStage('stage_dice')">
        <span>Начать партию → Этап 2: Бросок кубиков</span>
        ${SVG_ICONS.arrowRight}
      </button>
    </div>
  `;
}

function setTargetCrystals(num) {
  gameState.targetCrystals = num;
  saveState();
  renderApp();
}

function setFirstPlayer(idx) {
  gameState.activeFirstPlayerIndex = idx;
  saveState();
  renderApp();
}

function changeAvatar(id, av) {
  const p = gameState.players.find(x => x.id === id);
  if (p) {
    p.avatar = av;
    saveState();
  }
}

function changePlayerName(id, name) {
  const p = gameState.players.find(x => x.id === id);
  if (p) {
    p.name = name || 'Игрок';
    saveState();
  }
}

function addPlayer() {
  if (gameState.players.length >= 6) return;
  const idx = gameState.players.length + 1;
  gameState.players.push({
    id: 'p_' + Date.now(),
    name: `Игрок ${idx}`,
    color: AVAILABLE_COLORS[(idx - 1) % AVAILABLE_COLORS.length],
    avatar: AVAILABLE_AVATARS[(idx - 1) % AVAILABLE_AVATARS.length],
    crystals: 0,
    assignedCategoryId: null
  });
  saveState();
  renderApp();
}

function removePlayer(id) {
  if (gameState.players.length <= 2) return;
  gameState.players = gameState.players.filter(p => p.id !== id);
  if (gameState.activeFirstPlayerIndex >= gameState.players.length) {
    gameState.activeFirstPlayerIndex = 0;
  }
  saveState();
  renderApp();
}

// =============================================================================
// 7. STAGE 2: DICE ROLL & SELECTION (UNIFIED WINDOW)
// =============================================================================

function getNextUnassignedPlayer() {
  for (let i = 0; i < gameState.players.length; i++) {
    const idx = (gameState.activeFirstPlayerIndex + i) % gameState.players.length;
    if (!gameState.players[idx].assignedCategoryId) {
      return gameState.players[idx];
    }
  }
  return null;
}

function renderStageDice(container) {
  const currentPicker = getNextUnassignedPlayer();
  const allPicked = gameState.players.every(p => p.assignedCategoryId !== null);
  const pickedCount = gameState.players.filter(p => p.assignedCategoryId !== null).length;
  const firstPlayer = gameState.players[gameState.activeFirstPlayerIndex] || gameState.players[0];

  container.innerHTML = `
    <div class="card card-banner">
      <div class="banner-header">
        <div class="banner-title-wrap">
          <div class="stage-num-badge">2</div>
          <div>
            <h2 class="stage-title">Этап 2: Бросок и выбор кубиков · Раунд ${gameState.roundNumber}</h2>
            <div class="stage-desc">Первый ходит: ${firstPlayer.avatar} ${firstPlayer.name}</div>
          </div>
        </div>
        <button class="info-help-btn" onclick="openRulesModal()" title="Правила игры">${SVG_ICONS.help}</button>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted);">
        Лимиты слов: для своего кубика — <strong>до 3 слов</strong>; для кубиков соперников — <strong>суммарно до ${gameState.players.length} слов</strong>.
      </div>
    </div>

    <!-- Unified Dice Window -->
    <div id="dice-window-box" class="dice-window">
      <div class="dice-controls-bar">
        <button id="btn-roll" class="btn-roll-dice" onclick="rollAllDice()">
          ${SVG_ICONS.dices}
          <span>Бросить все 6 кубиков</span>
        </button>

        ${!allPicked && currentPicker ? `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Сейчас выбирает:</span>
            <span class="picker-badge" id="picker-badge"style="background-color: ${currentPicker.color};">
              <span>${currentPicker.avatar}</span>
              <span>${currentPicker.name}</span>
            </span>
          </div>
        ` : `
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 800; color: var(--teal-primary);">
            ${SVG_ICONS.check}
            <span>Все ${gameState.players.length} игроков выбрали свои темы!</span>
          </div>
        `}
      </div>

      <div class="dice-grid">
        ${gameState.dice.map((die, idx) => {
    const cat = CATEGORIES_MAP.get(die.categoryId) || CATEGORIES[0];
    const assignedP = die.assignedPlayerId ? gameState.players.find(p => p.id === die.assignedPlayerId) : null;
    const isSelectable = !allPicked && !assignedP && !!currentPicker;

    return `
            <div class="die-card ${assignedP ? 'assigned' : isSelectable ? 'selectable' : ''}" onclick="${isSelectable ? `pickDie(${die.id})` : ''}">
              <div class="die-header">
                <span class="die-num">№${idx + 1}</span>
                <div style="display: flex; align-items: center; gap: 4px;">
                  <button style="background: none; border: none; color: var(--text-muted); cursor: pointer;" onclick="event.stopPropagation(); showCategoryModal('${cat.id}')">
                    ${SVG_ICONS.info}
                  </button>
                  ${assignedP ? `
                    <span class="die-assigned-pill" style="background-color: ${assignedP.color};">
                      ${assignedP.avatar} ${assignedP.name}
                    </span>
                  ` : ''}
                </div>
              </div>

              <div style="margin: 6px 0; text-align: center;">
                <div class="die-icon-box">
                  ${SVG_ICONS[cat.icon] || SVG_ICONS.help}
                </div>
                <div class="die-name">${cat.shortName}</div>
              </div>

              <div>
                ${isSelectable ? `
                  <button class="btn-pick-die">Выбрать</button>
                ` : assignedP ? `
                  <button class="btn-unpick-die" onclick="event.stopPropagation(); unpickDie(${die.id})">Отменить</button>
                ` : '<div style="height: 36px;"></div>'}
              </div>
            </div>
          `;
  }).join('')}
      </div>
    </div>

    <!-- Selected Topics Summary (Click to smooth scroll down) -->
    <div class="topics-summary-box" onclick="scrollToBottomAction()" title="Нажмите, чтобы прокрутить страницу вниз">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 6px; font-size: 0.82rem; font-weight: 800;">
          ${SVG_ICONS.users}
          <span>Выбранные темы игроков на этот раунд:</span>
        </div>
        <div style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 700; color: var(--teal-primary);">
          <span>Вниз к переходу</span>
          ${SVG_ICONS.arrowDown}
        </div>
      </div>

      <div class="topics-summary-grid">
        ${gameState.players.map(p => {
    const assignedDie = gameState.dice.find(d => d.assignedPlayerId === p.id);
    const cat = assignedDie ? CATEGORIES_MAP.get(assignedDie.categoryId) : null;
    return `
            <div class="topic-summary-item">
              <div style="display: flex; align-items: center; gap: 6px; min-width: 0;">
                <span style="font-size: 1.1rem; flex-shrink: 0;">${p.avatar}</span>
                <div style="min-width: 0;">
                  <div style="font-size: 0.75rem; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name}</div>
                  <div style="font-size: 0.7rem; color: var(--teal-primary); font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${cat ? cat.shortName : 'Выбирает...'}
                  </div>
                </div>
              </div>
              <span style="font-size: 0.65rem; font-weight: 800; padding: 2px 6px; border-radius: 999px; background-color: ${p.color}; color: #ffffff;">
                ${p.crystals}💎
              </span>
            </div>
          `;
  }).join('')}
      </div>
    </div>

    <!-- Bottom CTA Button (Anchored target) -->
    <div id="dice-bottom-cta" style="display: flex; justify-content: flex-end; padding-top: 4px;">
      <button class="btn-primary btn-block ${allPicked ? 'btn-amber' : ''}" style="${!allPicked ? 'opacity: 0.6; cursor: not-allowed;' : ''}" onclick="${allPicked ? 'proceedToStage3()' : ''}">
        <span>${allPicked ? 'Все выбрали кубики → Этап 3: Открыть букву и запустить таймер' : `Осталось выбрать тему: ${gameState.players.length - pickedCount} игр.`}</span>
        ${SVG_ICONS.arrowRight}
      </button>
    </div>
  `;
}

function scrollToDiceWindow() {
  const box = document.getElementById('picker-badge');
  if (box) {
    const rect = box.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({ top: Math.max(0, rect.top + scrollTop - 64), behavior: 'smooth' });
  }
}

function scrollToBottomAction() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

function rollAllDice() {
  const btn = document.getElementById('btn-roll');
  if (btn) btn.disabled = true;
  sounds.playDiceRoll();

  setTimeout(scrollToDiceWindow, 80);

  setTimeout(() => {
    const shuffledCats = shuffle(CATEGORIES);
    gameState.dice = Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      categoryId: shuffledCats[i % shuffledCats.length].id,
      assignedPlayerId: null
    }));
    gameState.players.forEach(p => p.assignedCategoryId = null);
    saveState();
    renderApp();
    setTimeout(scrollToDiceWindow, 100);
  }, 600);
}

function pickDie(dieId) {
  const picker = getNextUnassignedPlayer();
  if (!picker) return;

  const targetDie = gameState.dice.find(d => d.id === dieId);
  if (!targetDie || targetDie.assignedPlayerId) return;

  sounds.playTick();
  targetDie.assignedPlayerId = picker.id;
  picker.assignedCategoryId = targetDie.categoryId;
  saveState();
  renderApp();

  const allPicked = gameState.players.every(p => p.assignedCategoryId !== null);
  if (allPicked) {
    // Requirement 2: Auto-scroll down with a short delay (500ms) to the proceed button!
    setTimeout(scrollToBottomAction, 500);
  }
}

function unpickDie(dieId) {
  const targetDie = gameState.dice.find(d => d.id === dieId);
  if (!targetDie || !targetDie.assignedPlayerId) return;

  sounds.playTick();
  const player = gameState.players.find(p => p.id === targetDie.assignedPlayerId);
  if (player) player.assignedCategoryId = null;
  targetDie.assignedPlayerId = null;

  saveState();
  renderApp();
}

function proceedToStage3() {
  sounds.playTick();
  if (!gameState.currentLetterTile) {
    if (gameState.deck.length === 0) {
      gameState.deck = shuffle(LETTER_TILES);
      gameState.discardPile = [];
    }
    gameState.currentLetterTile = gameState.deck.shift();
  }
  gameState.timerSeconds = gameState.timerDuration;
  gameState.isTimerRunning = false;
  setStage('stage_timer');

  const element = document.getElementById('letter-tile-box');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', // Плавная прокрутка
      block: 'start'      // К какому краю экрана прижать элемент ('start', 'center', 'end', 'nearest')
    });
  }
}

// =============================================================================
// 8. STAGE 3: LETTER & 90S TIMER (STRICTLY 2 COLUMNS FOR TABLETOP DISPLAY)
// =============================================================================

function renderStageTimer(container) {
  const tile = gameState.currentLetterTile;
  const isComposite = tile && tile.isComposite;
  const minutes = Math.floor(gameState.timerSeconds / 60);
  const seconds = gameState.timerSeconds % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  const isUrgent = gameState.timerSeconds <= 10 && gameState.timerSeconds > 0;

  container.innerHTML = `
    <!-- Top banner -->
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 0 4px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <div class="stage-num-badge" style="width: 32px; height: 32px; font-size: 0.85rem;">3</div>
        <div>
          <h2 style="font-size: 0.95rem; font-weight: 800; line-height: 1.2;">Этап 3: Буква раунда и таймер 90 секунд</h2>
          <div style="font-size: 0.72rem; color: var(--text-muted);">Положите телефон на стол — темы видны всем игрокам</div>
        </div>
      </div>
      <button class="info-help-btn" onclick="openRulesModal()" title="Правила">${SVG_ICONS.help}</button>
    </div>

    <!-- Letter Token & Sand Timer Hero Card -->
    <div class="letter-hero-card">
      <!-- Big Letter Token -->
      <div style="display: flex; align-items: center; gap: 14px;">
        <div class="letter-tile-box" id="letter-tile-box" ${isComposite ? 'composite' : ''}">
          ${tile ? tile.displayLabel : '?'}
        </div>
        <div>
          <div style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: var(--amber-hover);">
            ${isComposite ? 'Составная буква' : 'Буква раунда'}
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; margin-top: 2px;">
            ${isComposite ? `Любая: ${tile.letters.join(', ')}` : `Слова на букву «${tile ? tile.letters[0] : '?'}»`}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">
            Осталось в колоде: ${gameState.deck.length} из 21
          </div>
        </div>
      </div>

      <!-- Digital Sand Timer & Controls -->
      <div style="display: flex; align-items: center; gap: 12px; justify-content: space-between;">
        <div class="timer-digits-box">
          <div style="font-size: 0.65rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">Песочные часы</div>
          <div id="stage3-timer-digits" class="timer-digits ${isUrgent ? 'urgent' : ''}">${timeFormatted}</div>
          <div class="timer-progress-track">
            <div id="stage3-timer-progress" class="timer-progress-fill" style="width: ${(gameState.timerSeconds / gameState.timerDuration) * 100}%;"></div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 6px;">
          ${!gameState.isTimerRunning ? `
            <button class="btn-primary" style="padding: 8px 14px; font-size: 0.8rem; min-height: 44px;" onclick="startTimerAndScroll()">
              ${SVG_ICONS.play}
              <span>Старт 90с</span>
            </button>
          ` : `
            <button class="btn-primary" style="padding: 8px 14px; font-size: 0.8rem; min-height: 44px; background-color: var(--bg-card-sub); color: var(--text-main);" onclick="pauseTimer()">
              ${SVG_ICONS.pause}
            </button>
          `}
          <button style="padding: 8px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-card-sub); font-size: 0.75rem; font-weight: 700; color: var(--text-main); cursor: pointer; min-height: 44px;" onclick="addTimerSecs(15)">
            +15с
          </button>
        </div>
      </div>
    </div>

    <!-- Start Banner if not running -->
    ${!gameState.isTimerRunning && gameState.timerSeconds > 0 ? `
      <div class="card" style="background-color: var(--teal-primary); color: #ffffff; flex-direction: row; align-items: center; justify-content: space-between; gap: 8px;">
        <div style="font-size: 0.8rem; font-weight: 700;">Все игроки готовы? Нажмите для старта:</div>
        <button class="btn-primary btn-amber" style="padding: 8px 16px; font-size: 0.8rem; min-height: 40px;" onclick="startTimerAndScroll()">
          ${SVG_ICONS.play}
          <span>Запустить таймер (90 сек)</span>
        </button>
      </div>
    ` : ''}

    <!-- STRICTLY 2 COLUMNS: TABLETOP TOPICS DISPLAY -->
    <div id="stage3-topics-section" class="card">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 800;">
          <span style="color: var(--teal-primary);">${SVG_ICONS.users}</span>
          <span>Открытые темы игроков (2 столбика):</span>
        </div>
        <div style="font-size: 0.72rem; font-weight: 700; color: var(--teal-primary);">
          Ловушки: суммарно до ${gameState.players.length} слов
        </div>
      </div>

      <div class="stage3-topics-grid">
        ${gameState.players.map(p => {
    const assignedDie = gameState.dice.find(d => d.assignedPlayerId === p.id);
    const cat = assignedDie ? CATEGORIES_MAP.get(assignedDie.categoryId) : null;
    return `
            <div class="stage3-topic-card" onclick="${cat ? `showCategoryModal('${cat.id}')` : ''}">
              <div class="stage3-topic-bar" style="background-color: ${p.color};"></div>
              <div class="stage3-icon-box">
                ${cat ? SVG_ICONS[cat.icon] || SVG_ICONS.help : '?'}
              </div>
              <div style="min-width: 0; flex: 1;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
                  <span style="font-size: 0.75rem; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${p.avatar} ${p.name}
                  </span>
                  <span style="font-size: 0.65rem; font-weight: 800; color: #ffffff; background-color: ${p.color}; padding: 1px 6px; border-radius: 999px;">
                    ${p.crystals}💎
                  </span>
                </div>
                <div class="stage3-title">${cat ? cat.shortName : 'Не выбрана'}</div>
                <div style="font-size: 0.68rem; color: var(--text-muted); margin-top: 2px;">Свой: до 3 сл.</div>
              </div>
            </div>
          `;
  }).join('')}
      </div>
    </div>

    <!-- Finish CTA Button -->
    <div style="display: flex; justify-content: flex-end; padding-top: 4px;">
      <button class="btn-primary btn-block" onclick="proceedToScoring()">
        <span>Время вышло → Этап 4: Проверка слов и кристаллы</span>
        ${SVG_ICONS.arrowRight}
      </button>
    </div>
  `;
}

function renderTimerWidgets() {
  const digits = document.getElementById('stage3-timer-digits');
  const prog = document.getElementById('stage3-timer-progress');
  if (digits) {
    const minutes = Math.floor(gameState.timerSeconds / 60);
    const seconds = gameState.timerSeconds % 60;
    digits.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (gameState.timerSeconds <= 10 && gameState.timerSeconds > 0) {
      digits.classList.add('urgent');
    } else {
      digits.classList.remove('urgent');
    }
  }
  if (prog) {
    prog.style.width = `${(gameState.timerSeconds / gameState.timerDuration) * 100}%`;
  }
}

function startTimerAndScroll() {
  if (gameState.timerSeconds === 0) {
    gameState.timerSeconds = gameState.timerDuration;
  }
  gameState.isTimerRunning = true;
  sounds.playTick();
  saveState();
  renderApp();

  setTimeout(() => {
    const topics = document.getElementById('stage3-topics-section');
    if (topics) {
      const rect = topics.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({ top: Math.max(0, rect.top + scrollTop - 68), behavior: 'smooth' });
    }
  }, 150);
}

function pauseTimer() {
  gameState.isTimerRunning = false;
  saveState();
  renderApp();
}

function addTimerSecs(secs) {
  gameState.timerSeconds += secs;
  saveState();
  renderTimerWidgets();
}

function proceedToScoring() {
  gameState.isTimerRunning = false;
  sounds.playTick();
  setStage('stage_scoring');
}

// =============================================================================
// 9. STAGE 4: SCORING & CELEBRATION
// =============================================================================

function renderStageScoring(container) {
  const firstPlayer = gameState.players[gameState.activeFirstPlayerIndex] || gameState.players[0];
  const winner = gameState.players.find(p => p.crystals >= gameState.targetCrystals);

  if (winner) {
    sounds.playVictory();
  }

  container.innerHTML = `
    <div class="card card-banner">
      <div class="banner-header">
        <div class="banner-title-wrap">
          <div class="stage-num-badge">4</div>
          <div>
            <h2 class="stage-title">Этап 4: Проверка слов и начисление кристаллов</h2>
            <div class="stage-desc">Зачитывание слов, «Ловлю на слове!» и кристаллы</div>
          </div>
        </div>
        <button class="info-help-btn" onclick="openRulesModal()" title="Правила">${SVG_ICONS.help}</button>
      </div>

      <div style="background-color: var(--bg-card); padding: 12px; border-radius: var(--radius-md); font-size: 0.78rem; line-height: 1.5; border: 1px solid var(--border-color);">
        <div style="font-weight: 800; color: var(--teal-primary); margin-bottom: 4px;">Как происходит ловля на слове:</div>
        <div>1. Игроки по очереди, начиная с <strong>${firstPlayer.avatar} ${firstPlayer.name}</strong>, зачитывают слова для своего символа.</div>
        <div>2. Если соперник записал такое же слово, он кричит <strong>«Поймал на слове!»</strong> — слово вычёркивается (0 очков).</div>
        <div>3. За каждое слово, которого нет у соперников — игрок получает <strong>+1 кристалл 💎</strong>.</div>
      </div>
    </div>

    <!-- Winner Celebration Banner -->
    ${winner ? `
      <div class="card" style="background: linear-gradient(135deg, #f59e0b, #ea580c); color: #ffffff; text-align: center; padding: 1.5rem;">
        <div style="font-size: 2.5rem;">🎉 🏆 💎</div>
        <h3 style="font-size: 1.4rem; font-weight: 900; margin: 6px 0;">Победитель: ${winner.avatar} ${winner.name}!</h3>
        <p style="font-size: 0.85rem; opacity: 0.95;">Набрано ${winner.crystals} кристаллов! Партия выиграна!</p>
        <div style="margin-top: 12px;">
          <button class="btn-primary" style="background: #ffffff; color: #0f172a;" onclick="resetEntireGame()">
            Начать новую игру
          </button>
        </div>
      </div>
    ` : ''}

    <!-- Players Scoring Cards -->
    <div class="card">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">
          Начисление кристаллов
        </span>
        <span style="font-size: 0.8rem; font-weight: 800; color: var(--amber-hover);">
          Цель: ${gameState.targetCrystals} 💎
        </span>
      </div>

      <div class="scoring-grid">
        ${gameState.players.map((p, idx) => {
    const assignedDie = gameState.dice.find(d => d.assignedPlayerId === p.id);
    const cat = assignedDie ? CATEGORIES_MAP.get(assignedDie.categoryId) : null;
    const isFirst = idx === gameState.activeFirstPlayerIndex;
    const progress = Math.min(100, (p.crystals / gameState.targetCrystals) * 100);

    return `
            <div class="scoring-item-card">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 1.6rem;">${p.avatar}</span>
                  <div>
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <span style="font-size: 0.9rem; font-weight: 800;">${p.name}</span>
                      ${isFirst ? '<span style="font-size: 0.65rem; background: var(--teal-light); color: var(--teal-hover); padding: 1px 6px; border-radius: 4px; font-weight: 700;">1-й</span>' : ''}
                    </div>
                    <div style="font-size: 0.75rem; color: var(--teal-primary); font-weight: 700;">
                      ${cat ? cat.shortName : 'Без темы'}
                    </div>
                  </div>
                </div>

                <div class="scoring-controls">
                  <button class="btn-crystal-mod" onclick="modifyCrystals('${p.id}', -1)" ${p.crystals <= 0 ? 'disabled style="opacity: 0.4;"' : ''}>-</button>
                  <span class="crystal-score-text">${p.crystals} 💎</span>
                  <button class="btn-crystal-mod plus" onclick="modifyCrystals('${p.id}', 1)">+</button>
                </div>
              </div>

              <div class="score-bar-track">
                <div class="score-bar-fill" style="width: ${progress}%;"></div>
              </div>
            </div>
          `;
  }).join('')}
      </div>
    </div>

    <!-- Next Round CTA -->
    ${!winner ? `
      <div style="display: flex; justify-content: flex-end; padding-top: 4px;">
        <button class="btn-primary btn-block" onclick="nextRoundAction()">
          <span>Завершить раунд и перейти к Раунду ${gameState.roundNumber + 1} (Этап 2: Кубики)</span>
          ${SVG_ICONS.rotate}
        </button>
      </div>
    ` : ''}
  `;
}

function modifyCrystals(playerId, delta) {
  const p = gameState.players.find(x => x.id === playerId);
  if (p) {
    p.crystals = Math.max(0, p.crystals + delta);
    if (delta > 0) sounds.playGemChime();
    saveState();
    renderApp();
  }
}

function nextRoundAction() {
  sounds.playTick();
  gameState.roundNumber++;
  gameState.activeFirstPlayerIndex = (gameState.activeFirstPlayerIndex + 1) % gameState.players.length;
  gameState.currentStage = 'stage_dice';
  gameState.currentLetterTile = null;
  gameState.timerSeconds = gameState.timerDuration;
  gameState.isTimerRunning = false;
  gameState.players.forEach(p => p.assignedCategoryId = null);

  const shuffledCats = shuffle(CATEGORIES);
  gameState.dice = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    categoryId: shuffledCats[i % shuffledCats.length].id,
    assignedPlayerId: null
  }));

  saveState();
  renderApp();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// =============================================================================
// 10. MODALS (RULES, SYMBOLS, RESET CONFIRM)
// =============================================================================

function openRulesModal() {
  document.getElementById('rules-modal').classList.add('open');
}

function closeRulesModal() {
  document.getElementById('rules-modal').classList.remove('open');
}

function showCategoryModal(categoryId) {
  const cat = CATEGORIES_MAP.get(categoryId);
  if (!cat) return;
  document.getElementById('symbol-title').textContent = cat.name;
  document.getElementById('symbol-desc').textContent = cat.desc;
  document.getElementById('symbol-examples').innerHTML = cat.examples.map(ex => `<li><strong>${ex}</strong></li>`).join('');
  document.getElementById('symbol-modal').classList.add('open');
}

function closeCategoryModal() {
  document.getElementById('symbol-modal').classList.remove('open');
}

function openResetModal() {
  document.getElementById('reset-modal').classList.add('open');
}

function closeResetModal() {
  document.getElementById('reset-modal').classList.remove('open');
}

function resetEntireGame() {
  sounds.playTick();
  gameState = createDefaultState();
  saveState();
  closeResetModal();
  renderApp();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Standalone Sand Timer Tab
function showStandaloneTimer() {
  const container = document.getElementById('stage-view-container');
  if (!container) return;

  container.innerHTML = `
    <div class="card" style="text-align: center; padding: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 900; margin-bottom: 0.5rem;">Автономный таймер песочных часов</h2>
      <p style="font-size: 0.8rem; color: var(--text-muted); max-width: 450px; margin: 0 auto 1.5rem;">
        Используйте этот экран, если играете с реальными физическими кубиками и картонными карточками, и вам нужен только таймер с гонгом 90 секунд.
      </p>

      <div style="font-family: monospace; font-size: 3.5rem; font-weight: 900; margin: 1rem 0;" id="standalone-timer-digits">
        ${Math.floor(gameState.timerSeconds / 60)}:${gameState.timerSeconds % 60 < 10 ? '0' : ''}${gameState.timerSeconds % 60}
      </div>

      <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 1.5rem;">
        <button class="btn-primary" style="padding: 10px 24px;" onclick="startTimerAndScroll()">
          ${SVG_ICONS.play} <span>Старт</span>
        </button>
        <button class="btn-primary" style="padding: 10px 18px; background: var(--bg-card-sub); color: var(--text-main);" onclick="pauseTimer()">
          ${SVG_ICONS.pause} <span>Пауза</span>
        </button>
        <button class="btn-primary" style="padding: 10px 18px; background: var(--bg-card-sub); color: var(--text-main);" onclick="gameState.timerSeconds = 90; renderApp();">
          ${SVG_ICONS.rotate} <span>Сброс 90с</span>
        </button>
      </div>

      <div style="display: flex; justify-content: center; gap: 8px;">
        <button class="target-pill" onclick="gameState.timerDuration = 60; gameState.timerSeconds = 60; renderApp();">60с</button>
        <button class="target-pill active" onclick="gameState.timerDuration = 90; gameState.timerSeconds = 90; renderApp();">90с (стандарт)</button>
        <button class="target-pill" onclick="gameState.timerDuration = 120; gameState.timerSeconds = 120; renderApp();">120с</button>
      </div>
    </div>
  `;
}

// 18 Symbols Reference View
function showSymbolsReference() {
  const container = document.getElementById('stage-view-container');
  if (!container) return;

  container.innerHTML = `
    <div class="card card-banner">
      <h2 class="stage-title">Официальный справочник 18 символов</h2>
      <p style="font-size: 0.8rem; color: var(--text-muted);">
        Расшифровка всех символов на 6 кубиках из правил игры «Ловлю на слове!» от издательства «Стиль Жизни».
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem;">
      ${CATEGORIES.map(c => `
        <div class="card" style="padding: 1rem; cursor: pointer;" onclick="showCategoryModal('${c.id}')">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="die-icon-box" style="margin: 0; width: 44px; height: 44px;">
              ${SVG_ICONS[c.icon] || SVG_ICONS.help}
            </div>
            <div>
              <div style="font-size: 0.85rem; font-weight: 800;">${c.name}</div>
              <div style="font-size: 0.72rem; color: var(--teal-primary); font-weight: 700;">${c.shortName}</div>
            </div>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 6px;">${c.desc}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// =============================================================================
// 11. INITIALIZATION ON DOM LOAD
// =============================================================================

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupTimerInterval();
  renderApp();
});
