import { LightbulbIcon, BriefcaseIcon, LocationPinIcon, HandshakeIcon, CalendarIcon } from './icons.jsx'; // [1, 2, 3, 4]

const timelineData = [
  {
    id: 'event-2022',
    year: '2022',
    icon: LightbulbIcon, // [1, 2]
    mainText: 'YOUR TEXT 01',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#FFEDE0', // Nền thẻ chính (cam nhạt)
      secondary: '#FFB380', // Nền tiêu đề/năm (cam trung bình)
      accent: '#FF6B00', // Nền vòng tròn biểu tượng (cam sáng)
    },
  },
  {
    id: 'event-2021',
    year: '2021',
    icon: BriefcaseIcon, // [1, 2]
    mainText: 'YOUR TEXT 02',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#E0F2FF', // Nền thẻ chính (xanh lam rất nhạt)
      secondary: '#A0D9FF', // Nền tiêu đề/năm (xanh lam trung bình nhạt)
      accent: '#007BFF', // Nền vòng tròn biểu tượng (xanh lam sáng)
    },
  },
  {
    id: 'event-2020',
    year: '2020',
    icon: LocationPinIcon, // [1, 2]
    mainText: 'YOUR TEXT 03',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#FFE0E0', // Nền thẻ chính (hồng nhạt)
      secondary: '#FF8080', // Nền tiêu đề/năm (đỏ trung bình)
      accent: '#FF0000', // Nền vòng tròn biểu tượng (đỏ sáng)
    },
  },
  {
    id: 'event-2019',
    year: '2019',
    icon: HandshakeIcon, // [1, 2]
    mainText: 'YOUR TEXT 04',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#E0E6FF', // Nền thẻ chính (tím lavender nhạt)
      secondary: '#809FFF', // Nền tiêu đề/năm (xanh tím trung bình)
      accent: '#4B0082', // Nền vòng tròn biểu tượng (chàm/tím đậm)
    },
  },
  {
    id: 'event-2018',
    year: '2018',
    icon: CalendarIcon, // [1, 2]
    mainText: 'YOUR TEXT 05',
    description: "Lorem ipsum is simply dummy texts and typessettings industry's. Lorem been the industry's standard dummy when an unknown printers and typesetting industry's.Lorem ipsum is simply dummy texts and typessettings industry's",
    colorScheme: {
      primary: '#F0E0FF', // Nền thẻ chính (tím lavender rất nhạt)
      secondary: '#C080FF', // Nền tiêu đề/năm (tím trung bình)
      accent: '#8000FF', // Nền vòng tròn biểu tượng (tím sáng)
    },
  },
];

export default timelineData;