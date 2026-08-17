export interface FloorPlan {
  id: string;
  name: string;
  variant: string;
  bhk: string;
  carpetAreaSqFt: number;
  carpetAreaSqFtRounded: number;
  carpetAreaSqM: number;
  bathrooms: number;
  bedrooms: number;
  balconies: number;
  image: string;
  image2D?: string;
  image3D?: string;
  description: string;
  roomDimensions: {
    room: string;
    dimension: string;
    sqFt?: string;
  }[];
}

export interface Amenity {
  id: string;
  title: string;
  category: 'wellness' | 'security' | 'convenience' | 'environment' | 'lifestyle';
  description: string;
  image?: string;
  iconName: string;
  verified: boolean;
}

export interface SpecificationCategory {
  category: string;
  items: {
    label: string;
    value: string;
  }[];
}

export interface ClusterPlan {
  id: string;
  title: string;
  subtitle: string;
  floorRange: string;
  image: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  developer: string;
  status: 'Ready to Move' | 'Under Construction' | 'Completed' | 'Upcoming';
  location: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  address: string;
  mapAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  configurations: string[];
  areaRange: string;
  areaRangeFormatted: string;
  units: number;
  buildings: number;
  projectAreaAcres: string;
  projectAreaSqMeters: string;
  reraNumber: string;
  reraAuthority: string;
  reraRegistrationDate: string;
  possessionDate: string;
  possessionStatus: string;
  architect: string;
  structuralEngineer: string;
  email: string;
  phone?: string;
  amenities: Amenity[];
  specifications: SpecificationCategory[];
  floorPlans: FloorPlan[];
  clusterPlans: ClusterPlan[];
  sitePlanImage: string;
  keyPlanImage: string;
  brochureUrl: string;
  gallery: {
    id: string;
    title: string;
    category: 'elevation' | 'exterior' | 'garden' | 'aerial' | 'interior' | 'layout' | 'lifestyle';
    image: string;
    caption: string;
  }[];
  heroImage: string;
  birdViewImage: string;
}
