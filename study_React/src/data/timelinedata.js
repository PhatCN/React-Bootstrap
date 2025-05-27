import { LightbulbIcon, BriefcaseIcon, LocationPinIcon, HandshakeIcon, CalendarIcon } from '../components/icons.jsx';

const timelineData = [
  {
    id: '1',
    year: '1999',
    icon: LightbulbIcon,
    mainText: 'START',
    description: "My born",
    colorScheme: {
      primary: '#FFEDE0',
      secondary: '#FFB380',
      accent: '#FF6B00',
    },
  },
  {
    id: '2',
    year: '2021',
    icon: BriefcaseIcon,
    mainText: 'YOUR TEXT 02',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#E0F2FF', 
      secondary: '#A0D9FF', 
      accent: '#007BFF',
    },
  },
  {
    id: '3',
    year: '2020',
    icon: LocationPinIcon,
    mainText: 'YOUR TEXT 03',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#FFE0E0',
      secondary: '#FF8080',
      accent: '#FF0000', 
    },
  },
  {
    id: '4',
    year: '2019',
    icon: HandshakeIcon, // [1, 2]
    mainText: 'YOUR TEXT 04',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#E0E6FF',
      secondary: '#809FFF',
      accent: '#4B0082',
    },
  },
  {
    id: '5',
    year: '2018',
    icon: CalendarIcon,
    mainText: 'YOUR TEXT 05',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#F0E0FF',
      secondary: '#C080FF',
      accent: '#8000FF',
    },
  },
];

export default timelineData;