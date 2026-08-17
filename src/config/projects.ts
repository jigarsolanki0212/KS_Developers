import type { Project } from '../types/project';
import { getAssetUrl, kashiHillsAssets } from './assets';

export const kashiHillsProject: Project = {
  id: 'kashi-hills',
  name: 'K S Kashi Hills',
  slug: 'kashi-hills',
  tagline: 'An Ideal Destination Becomes Iconic · Live The Sky Life & Shops',
  developer: 'K.S. DEVELOPERS',
  status: 'Ready to Move',
  location: 'Enasan, Ahmedabad, Gujarat 382330',
  locality: 'Enasan',
  city: 'Ahmedabad',
  state: 'Gujarat',
  pincode: '382330',
  address: 'New Survey No. 340, 470, S.P. No. 110/2, F.P. No. 110, T.P. No. 412/B (Ranasan-Enasan), Daskroi, Enasan, Ahmedabad, Gujarat 382330',
  mapAddress: 'Near Skyway Elegance, Behind Shivdhara Campus, Naroda - Dehgam Road, Enasan, Ahmedabad - 382330',
  coordinates: {
    lat: 23.096785703729793,
    lng: 72.69437912915645
  },
  configurations: ['2 BHK Luxury Residences', 'Ground Floor Commercial Shops'],
  areaRange: '595.78 – 617.09 sq.ft.',
  areaRangeFormatted: '596–617 sq.ft.',
  units: 75,
  buildings: 2,
  projectAreaAcres: '0.049 Acres',
  projectAreaSqMeters: '2,176.82 sq.m',
  reraNumber: 'PR/GJ/AHMEDABAD/DASKROI/AUDA/MAA09995/310322',
  reraAuthority: 'AUDA / Gujarat RERA',
  reraRegistrationDate: '01/01/2022',
  possessionDate: 'July 2025',
  possessionStatus: 'Ready to Move',
  architect: '7-AXIS / SIDDHARTH V. PATEL',
  structuralEngineer: 'KIRAN N. PATEL',
  email: 'ksdevelopers111@gmail.com',
  phone: '+91 97247 98899',
  heroImage: getAssetUrl('brochureHero'),
  birdViewImage: getAssetUrl('birdView'),
  sitePlanImage: getAssetUrl('groundFloorPlan'),
  keyPlanImage: getAssetUrl('roadNetworkMap'),
  brochureUrl: kashiHillsAssets.local.brochurePdf,
  floorPlans: [
    {
      id: 'block-a-type-1',
      name: 'Block A — 2 BHK (Type 01)',
      variant: 'Block A · Type 01',
      bhk: '2 BHK',
      carpetAreaSqFt: 595.78,
      carpetAreaSqFtRounded: 596,
      carpetAreaSqM: 55.35,
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      image: '/assets/kashi-hills/floor-plans/block-a-type-1.jpg',
      image2D: '/assets/kashi-hills/floor-plans/block-a-type-1-2d.jpg',
      image3D: '/assets/kashi-hills/floor-plans/block-a-type-1-3d.jpg',
      description: 'Features an expansive 15-foot Drawing Room connected to a scenic sit-out balcony, large master bedroom with private attached toilet, and dedicated kitchen wash yard.',
      roomDimensions: [
        { room: 'Drawing Room', dimension: `11'0" × 15'0"`, sqFt: '165 sq.ft.' },
        { room: 'Attached Balcony', dimension: `4'6" × 7'4"`, sqFt: '33 sq.ft.' },
        { room: 'Kitchen & Dining', dimension: `9'0" × 15'0"`, sqFt: '135 sq.ft.' },
        { room: 'Wash / Utility', dimension: `6'5" × 6'7"`, sqFt: '42.3 sq.ft.' },
        { room: 'Bed Room 1 (Master)', dimension: `11'0" × 10'6"`, sqFt: '115.5 sq.ft.' },
        { room: 'Attached Toilet', dimension: `6'0" × 4'0"`, sqFt: '24 sq.ft.' },
        { room: 'Bed Room 2', dimension: `10'6" × 10'6"`, sqFt: '110.25 sq.ft.' },
        { room: 'Common Toilet', dimension: `6'0" × 4'0"`, sqFt: '24 sq.ft.' }
      ]
    },
    {
      id: 'block-a-type-2',
      name: 'Block A — 2 BHK (Type 02)',
      variant: 'Block A · Type 02',
      bhk: '2 BHK',
      carpetAreaSqFt: 617.09,
      carpetAreaSqFtRounded: 617,
      carpetAreaSqM: 57.33,
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      image: '/assets/kashi-hills/floor-plans/block-a-type-2.jpg',
      image2D: '/assets/kashi-hills/floor-plans/block-a-type-2-2d.jpg',
      image3D: '/assets/kashi-hills/floor-plans/block-a-type-2-3d.jpg',
      description: 'Enhanced master suite layout with a private attached balcony, generous second bedroom with en-suite toilet, and open-plan kitchen and dining zone.',
      roomDimensions: [
        { room: 'Drawing Room', dimension: `10'0" × 15'0"`, sqFt: '150 sq.ft.' },
        { room: 'Kitchen Area', dimension: `7'9" × 10'1"`, sqFt: '78.3 sq.ft.' },
        { room: 'Wash / Utility', dimension: `4'6" × 6'1"`, sqFt: '27.4 sq.ft.' },
        { room: 'Bed Room 1', dimension: `10'0" × 12'0"`, sqFt: '120 sq.ft.' },
        { room: 'Attached Balcony', dimension: `4'0" × 7'0"`, sqFt: '28 sq.ft.' },
        { room: 'Bed Room 2', dimension: `11'0" × 11'0"`, sqFt: '121 sq.ft.' },
        { room: 'Attached Toilet', dimension: `7'0" × 4'0"`, sqFt: '28 sq.ft.' },
        { room: 'Common Toilet', dimension: `6'0" × 4'4.5"`, sqFt: '26.25 sq.ft.' }
      ]
    },
    {
      id: 'block-b-type-1',
      name: 'Block B — 2 BHK (Type 01)',
      variant: 'Block B · Type 01',
      bhk: '2 BHK',
      carpetAreaSqFt: 596.0,
      carpetAreaSqFtRounded: 596,
      carpetAreaSqM: 55.37,
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      image: '/assets/kashi-hills/floor-plans/block-b-type-1.jpg',
      image2D: '/assets/kashi-hills/floor-plans/block-b-type-1-2d.jpg',
      image3D: '/assets/kashi-hills/floor-plans/block-b-type-1-3d.jpg',
      description: 'Square-proportioned drawing room and dining lounge facing the internal landscaped courtyard with dual master and guest bedroom separation.',
      roomDimensions: [
        { room: 'Drawing Room', dimension: `12'0" × 12'10"`, sqFt: '154 sq.ft.' },
        { room: 'Attached Balcony', dimension: `4'6" × 7'4"`, sqFt: '33 sq.ft.' },
        { room: 'Kitchen / Dining', dimension: `10'0" × 12'10"`, sqFt: '128.3 sq.ft.' },
        { room: 'Wash Area', dimension: `6'5" × 5'6"`, sqFt: '35.3 sq.ft.' },
        { room: 'Bed Room 1', dimension: `12'0" × 10'0"`, sqFt: '120 sq.ft.' },
        { room: 'Attached Toilet', dimension: `6'0" × 4'0"`, sqFt: '24 sq.ft.' },
        { room: 'Bed Room 2', dimension: `10'0" × 10'0"`, sqFt: '100 sq.ft.' },
        { room: 'Common Toilet', dimension: `6'0" × 4'0"`, sqFt: '24 sq.ft.' }
      ]
    },
    {
      id: 'block-b-type-2',
      name: 'Block B — 2 BHK (Type 02)',
      variant: 'Block B · Type 02',
      bhk: '2 BHK',
      carpetAreaSqFt: 617.0,
      carpetAreaSqFtRounded: 617,
      carpetAreaSqM: 57.32,
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      image: '/assets/kashi-hills/floor-plans/block-b-type-2.jpg',
      image2D: '/assets/kashi-hills/floor-plans/block-b-type-2-2d.jpg',
      image3D: '/assets/kashi-hills/floor-plans/block-b-type-2-3d.jpg',
      description: 'Extended bedroom configuration with direct balcony opening, large utility wash space, and central living room layout.',
      roomDimensions: [
        { room: 'Drawing Room', dimension: `10'0" × 14'0"`, sqFt: '140 sq.ft.' },
        { room: 'Kitchen', dimension: `8'9" × 10'0"`, sqFt: '87.5 sq.ft.' },
        { room: 'Wash Yard', dimension: `5'0" × 4'6"`, sqFt: '22.5 sq.ft.' },
        { room: 'Bed Room 1', dimension: `12'1" × 10'0"`, sqFt: '120.8 sq.ft.' },
        { room: 'Attached Balcony', dimension: `4'0" × 6'7.5"`, sqFt: '26.5 sq.ft.' },
        { room: 'Bed Room 2', dimension: `10'0" × 11'0"`, sqFt: '110 sq.ft.' },
        { room: 'Attached Toilet', dimension: `4'0" × 6'0"`, sqFt: '24 sq.ft.' },
        { room: 'Common Toilet', dimension: `6'0" × 4'0"`, sqFt: '24 sq.ft.' }
      ]
    }
  ],
  clusterPlans: [
    {
      id: 'ground-floor',
      title: 'Ground Floor Master Plan',
      subtitle: 'Commercial Shops, Common Plot, Block A & B Foyers',
      floorRange: 'Ground Floor',
      image: getAssetUrl('groundFloorPlan'),
      description: 'Master ground plan featuring 8 commercial front-facing shops along the 24.00 MT. wide road, 6.00 MT. southern road, central green Common Plot, pedestrian walkways, and dual lift lobbies.'
    },
    {
      id: 'typical-floors',
      title: 'Typical Residential Floor Plan (1st to 7th Floor)',
      subtitle: 'Block A & Block B (Units 101 to 706)',
      floorRange: '1st – 7th Floors',
      image: getAssetUrl('typicalFloorPlan'),
      description: '6 apartments per block per floor with central ventilation shafts, 2 automatic elevators per block, fire-safe staircase exits, and wide airy corridors.'
    },
    {
      id: 'basement-parking',
      title: 'Basement Parking Floor Plan',
      subtitle: 'Full Sub-surface Vehicular & Two-Wheeler Bays',
      floorRange: 'Basement Level',
      image: getAssetUrl('basementFloorPlan'),
      description: 'All-weather sub-surface parking with 3.00m & 4.50m driveways, dual vehicular ramp access, direct lift lobby connections, and fire suppression systems.'
    },
    {
      id: 'road-network-map',
      title: 'Regional Road & Connectivity Map',
      subtitle: 'Strategic Highway, S.P. Ring Road & Landmark Links',
      floorRange: 'Connectivity',
      image: getAssetUrl('roadNetworkMap'),
      description: 'Direct arterial connectivity on Naroda–Dehgam Road linking S.P. Ring Road, Dastan Circle, Galaxy Cinema, Nana Chiloda, Sahaj Hospital, and Gandhinagar.'
    }
  ],
  amenities: [
    {
      id: 'decorative-gate',
      title: 'Decorative Main Entrance Gate',
      category: 'security',
      description: 'Architectural gated entry with dedicated security cabin, boom barriers, and illuminated branding.',
      iconName: 'ShieldCheck',
      verified: true
    },
    {
      id: 'cctv-surveillance',
      title: '24×7 CCTV Surveillance',
      category: 'security',
      description: 'Complete HD closed-circuit coverage across entry gates, corridors, lobbies, and parking levels.',
      iconName: 'Eye',
      verified: true
    },
    {
      id: 'security-cabin',
      title: 'Security Cabin with Manned Guard',
      category: 'security',
      description: '24-hour trained security personnel managing visitor registration and vehicular flow.',
      iconName: 'ShieldCheck',
      verified: true
    },
    {
      id: 'automatic-lifts',
      title: 'Each Block – 2 Automatic Lift',
      category: 'convenience',
      description: 'Two branded automatic high-speed elevators per block equipped with Auto Rescue Device (ARD).',
      iconName: 'ArrowUpDown',
      verified: true
    },
    {
      id: 'water-supply',
      title: '24 Hrs Water Supply',
      category: 'convenience',
      description: 'High-capacity dual underground and overhead water tanks with automated booster pumps.',
      iconName: 'Droplets',
      verified: true
    },
    {
      id: 'fire-safety',
      title: 'Fire Safety System',
      category: 'security',
      description: 'Fully certified fire hydrants, hose reels, and emergency pressure equipment on every floor.',
      iconName: 'Flame',
      verified: true
    },
    {
      id: 'children-play-area',
      title: "Children Play Area",
      category: 'lifestyle',
      description: 'Dedicated recreational outdoor play zone with soft landscaping for children.',
      image: getAssetUrl('childrenPlayArea'),
      iconName: 'Smile',
      verified: true
    },
    {
      id: 'spacious-garden',
      title: 'Spacious Garden & Common Plot',
      category: 'environment',
      description: 'Central lush green common plot between towers for community gatherings, yoga, and evening walks.',
      image: getAssetUrl('landscapeGarden'),
      iconName: 'Trees',
      verified: true
    },
    {
      id: 'senior-citizen-sitting',
      title: 'Senior Citizen Sitting',
      category: 'wellness',
      description: 'Quiet, shaded sitting pavilions situated within the garden greenery for elders.',
      iconName: 'Users',
      verified: true
    }
  ],
  specifications: [
    {
      category: 'Structure',
      items: [
        { label: 'Framed Structure', value: 'Earthquake Resistant R.C.C. Frame Structure compliant with IS Code' }
      ]
    },
    {
      category: 'Flooring',
      items: [
        { label: 'Entire Flat', value: 'Vitrified Tiles in Entire Flat' },
        { label: 'Terrace Level', value: 'China Mosaic Flooring with Water Proofing' }
      ]
    },
    {
      category: 'Kitchen',
      items: [
        { label: 'Platform & Sink', value: 'Platform with Granite Top and S.S. Sink' },
        { label: 'Wall Dado', value: 'Vitrified Tiles Flooring Dado up to Lintel Level' }
      ]
    },
    {
      category: 'Toilet / Plumbing',
      items: [
        { label: 'Bathroom Wall Dado', value: 'Color Glazed Tiles Dado up to Lintel Level in all Bathrooms' },
        { label: 'Plumbing & Fittings', value: 'Concealed Plumbing with Good Quality Fittings' }
      ]
    },
    {
      category: 'Doors & Windows',
      items: [
        { label: 'Doors', value: 'Decorative Main Door & Internal Flush Door' },
        { label: 'Windows', value: 'Aluminum Coated Section Windows with Clear Glass' }
      ]
    },
    {
      category: 'Electrification',
      items: [
        { label: 'Wiring & Planning', value: 'Concealed Fittings & Modular Switch With Architecture Planning' }
      ]
    },
    {
      category: 'Wall / Paint',
      items: [
        { label: 'External Wall', value: 'External Double Coat Sand Face Plaster With Acrylic Paint' },
        { label: 'Internal Wall', value: 'Internal Mala Plaster With Wall Putty' }
      ]
    },
    {
      category: 'Terrace',
      items: [
        { label: 'Waterproofing', value: 'China Mosaic Flooring With Water Proofing Treatment' }
      ]
    }
  ],
  gallery: [
    {
      id: 'gal-brochure-1',
      title: 'Kashi Hills — 3D Exterior Elevation Render',
      category: 'elevation',
      image: getAssetUrl('brochureHero'),
      caption: 'Full-width 3D architectural rendering of the twin residential towers with ground-floor commercial arcade.'
    },
    {
      id: 'gal-1',
      title: 'Architectural Elevation — Front Perspective',
      category: 'elevation',
      image: getAssetUrl('elevation01'),
      caption: 'Contemporary facade featuring modern Indian architectural articulation, clean geometry, and expansive balconies.'
    },
    {
      id: 'gal-2',
      title: 'Building Elevation — Angular View',
      category: 'elevation',
      image: getAssetUrl('elevation02'),
      caption: 'Exterior profile showcasing the dual-tower layout, textured finishes, and vertical rhythm.'
    },
    {
      id: 'gal-6',
      title: 'Bird’s-Eye Project Overview',
      category: 'aerial',
      image: getAssetUrl('birdView'),
      caption: 'Aerial viewpoint highlighting the twin tower configuration, green courtyards, and Enasan connectivity.'
    },
    {
      id: 'gal-4',
      title: 'Architectural Close-up Detail',
      category: 'exterior',
      image: getAssetUrl('closeUp'),
      caption: 'Close-up perspective of exterior balcony railings, lintel bands, and textured paint work.'
    },
    {
      id: 'gal-5',
      title: 'Side Elevation & Approach Road',
      category: 'exterior',
      image: getAssetUrl('sideView'),
      caption: 'Side perspective facing the internal landscaped driveway and parking approaches.'
    },
    {
      id: 'gal-7',
      title: 'Landscaped Garden Walkway',
      category: 'garden',
      image: getAssetUrl('garden01'),
      caption: 'Lush greenery, perimeter planting, and shaded walking paths for residents.'
    },
    {
      id: 'gal-8',
      title: 'Central Garden Courtyard',
      category: 'garden',
      image: getAssetUrl('garden02'),
      caption: 'Open-air communal green spaces crafted for relaxation and evening walks.'
    },
    {
      id: 'gal-9',
      title: 'Landscape Greenery & Sit-outs',
      category: 'garden',
      image: getAssetUrl('garden03'),
      caption: 'Serene landscape corners framing the residential architecture.'
    },
    {
      id: 'gal-10',
      title: 'Decorative Entrance Lobby',
      category: 'interior',
      image: getAssetUrl('entranceLobby'),
      caption: 'Welcoming ground floor reception foyer with contemporary architectural lighting.'
    },
    {
      id: 'gal-11',
      title: 'All-Weather Dedicated Parking',
      category: 'exterior',
      image: getAssetUrl('carParking'),
      caption: 'Spacious vehicle bays ensuring hassle-free vehicular movement.'
    },
    {
      id: 'gal-12',
      title: 'Equipped Children Play Area',
      category: 'lifestyle',
      image: getAssetUrl('childrenPlayArea'),
      caption: 'Safe outdoor play facilities for young children within the secure perimeter.'
    }
  ]
};

export const allProjects: Project[] = [
  kashiHillsProject
];

export const corporateData = {
  name: 'K.S. DEVELOPERS',
  tagline: 'Building spaces that become part of your story.',
  subtagline: 'Premium Residential & Commercial Real Estate in Ahmedabad',
  established: '2021',
  headquarters: 'Ahmedabad, Gujarat',
  email: 'ksdevelopers111@gmail.com',
  phone: '+91 97247 98899',
  phoneSecondary: '+91 814 1111 815',
  whatsapp: '919724798899',
  address: 'Near Skyway Elegance, Behind Shivdhara Campus, Naroda - Dehgam Road, Enasan, Ahmedabad - 382330',
  pillars: [
    {
      title: 'Architectural Clarity',
      description: 'We prioritize functional geometry, generous natural daylight, and uncompromised ventilation over transient ornamental trends.'
    },
    {
      title: 'Uncompromising Quality',
      description: 'From IS-code compliant earthquake-resistant RCC structures to vitrified tiles and precision plumbing, every millimeter matters.'
    },
    {
      title: 'Absolute Transparency',
      description: 'RERA registered, clear legal titles, honest carpet-area disclosures, and reliable delivery timelines without ambiguity.'
    },
    {
      title: 'Enduring Community Value',
      description: 'Crafting residential spaces that appreciate gracefully over decades and foster tightly-knit, vibrant neighborhoods.'
    }
  ],
  stats: [
    { number: '75+', label: '2 BHK Residences & Shops' },
    { number: '100%', label: 'RERA Compliant' },
    { number: '2', label: 'Standalone Towers' },
    { number: '596–617', label: 'Sq.Ft. Carpet Area' }
  ]
};
