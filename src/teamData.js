const sethMiller = {
  name: 'Seth Miller',
  pdga: '117533',
  divison: 'MPO',
  favEvent: 'Steel City Shootout',
  favCourse: 'Maple Hill',
  picture: 'seth-miller-headshot.jpg',
};

const alexKrause = {
  name: 'Alexander Krause',
  pdga: '100061',
  divison: 'MPO',
  favEvent: '',
  favCourse: '',
  picture: 'alex-krause-headshot.jpg',
};

const andyHumphrey = {
  name: 'Andy Humphrey',
  pdga: '241249',
  divison: 'MA1',
  favEvent: '',
  favCourse: '',
  picture: 'andy-humphrey-headshot.jpg',
};

const brandynLee = {
  name: 'Brandyn Lee',
  pdga: '146785',
  divison: 'MA1',
  favEvent: '',
  favCourse: '',
  picture: 'brandyn-lee-headshot.jpg',
};

const carterMartinson = {
  name: 'Carter Martinson',
  pdga: '202817',
  divison: 'MA2',
  favEvent: '',
  favCourse: '',
  picture: 'carter-martinson-headshot.jpg',
};
const hankKirwan = {
  name: 'Hank Kirwan',
  pdga: '9059',
  divison: 'MP40',
  favEvent: '',
  favCourse: '',
  picture: 'hank-kirwan-headshot.jpg',
};
const jeromeKnott = {
  name: 'Jerome Knott',
  pdga: '42369',
  divison: 'MPO',
  favEvent: '',
  favCourse: '',
  picture: 'jerome-knott-headshot.jpg',
};
const maverickRobertson = {
  name: 'Maverick Robertson',
  pdga: '65118',
  divison: 'MPO',
  favEvent: '',
  favCourse: '',
  picture: 'maverick-robertson-headshot.jpg',
};
const nickGreenfield = {
  name: 'Nick Greenfield',
  pdga: '96947',
  divison: 'MA1',
  favEvent: '',
  favCourse: '',
  picture: 'nick-greenfield-headshot.jpg',
};
const nikkoLocastro = {
  name: 'Nikko Locastro',
  pdga: '11534',
  divison: 'MPO',
  favEvent: '',
  favCourse: '',
  picture: 'nikko-locastro-headshot.jpg',
};
const noahVialpando = {
  name: 'Noah Vialpando',
  pdga: '100966',
  divison: 'MA1',
  favEvent: '',
  favCourse: '',
  picture: null,
};
const peterHeidlauf = {
  name: 'Peter Heidlauf',
  pdga: '127191',
  divison: 'MPO',
  favEvent: '',
  favCourse: '',
  picture: 'peter-heidlauf-headshot.jpg',
};

const level12 = {
  name: 'TKD 12',
  description:
    'An active TKD Twelve Member is a dynamic and dedicated athlete who embodies a passion for the sport both on and off the course. This individual is characterized by a relentless work ethic, consistently engaging in rigorous training routines to enhance their skills, physical fitness, and mental acuity. Their commitment to excellence is evident in their strategic approach to the game, as they fine-tune their throwing techniques.',
  players: [
    alexKrause,
    andyHumphrey,
    brandynLee,
    carterMartinson,
    hankKirwan,
    jeromeKnott,
    maverickRobertson,
    nickGreenfield,
    nikkoLocastro,
    noahVialpando,
    peterHeidlauf,
    sethMiller,
  ],
};

const levelAmbassador = {
  name: 'TKD Ambassador',
  description:
    "An active TKD Ambassador is an advocate for the team and the sport; serving as an example of sportsmanship,humility, and a genuine love for the disc golf community. Beyond the competitive arena, they actively contributeto the team's comradery, fostering a positive and supportive environment for their fellow teammates. This division of the team is not just about being an athlete, but a driving force, shaping the team's culture and positively impacting the local and national disc golf community.",
  players: [
    'Adam Callard',
    'Chris Walls',
    'David Corcoran',
    'Doug Fournet',
    'Elliot Cassio',
    'Emily Douglas',
    'Heather Corinne',
    'Ian Vilevac',
    'Jadyn Johnson',
    'Jesse Serna',
    'Jesse Tix',
    'Jessica Fournet',
    'Keith Jacobs',
    'Kory Horn',
    'Mike Palma',
    'Nicholas Scott',
    'Noah Sathre',
    'Otis Forrest Jr.',
    'Xena Williams',
  ],
};

const teamBOTC = {
  name: 'TKD Boots on the Course',
  description:
    'Boots on the Course is a division of the TKD Ambassadors made up of a dedicated community of individuals who selflessly contribute their time, skills, and enthusiasm to enhance the disc golf experience for players and enthusiasts alike. This group can be found organizing and coordinating events, maintaining courses, and providing valuable support during tournaments. These volunteers may wear many hats,from course designers and event planners to scorekeepers and ambassadors for the sport. Their collective efforts extend beyond the visible aspects of the game, as they work diligently to foster a welcoming and inclusive environment for all participants. Their active involvement adds an invaluable layer to the vibrant tapestry of the disc golf community, making the game more accessible and enjoyable for everyone involved.',
  players: [
    'David Corcoran',
    'Jeremy Spencer',
    'Jim Klingensmith',
    'Jim Stack',
    'Santos Montoya',
    'Steve Sells',
  ],
};

const teamAlpha = {
  name: 'TKD Alpha',
  description:
    'Gen Alpha is a dynamic and spirited group of young players who bring a fresh and energetic perspective to the sport. Comprising enthusiastic individuals ranging from beginners to emerging talents, this team is united by a shared love for disc golf and a collective eagerness to learn and grow. Coaches and mentors play a pivotal role in nurturing their skills, providing guidance, and instilling values of sportsmanship and teamwork. The Gen Alphas is not just about honing athletic abilities but also about fostering a sense of community and friendship among its members. As these young players navigate the disc golf courses with enthusiasm and determination, they embody the future of the sport carrying the spirit of fun and teamwork into every throw and every shared victory.',
  players: ['Alex Chahal', 'Tanner Cripe'],
};

const allTeams = [level12, levelAmbassador, teamBOTC, teamAlpha];

export default allTeams;
