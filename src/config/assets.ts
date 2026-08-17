export interface AssetConfig {
  sources: {
    housing: string;
    easyProps: string;
    propTiger: string;
    a2zProperty: string;
    brochure: string;
    reraVerify: string;
  };
  remote: {
    hero: string;
    elevation01: string;
    elevation02: string;
    elevation03: string;
    closeUp: string;
    sideView: string;
    garden01: string;
    garden02: string;
    garden03: string;
    birdView: string;
    floorPlan596: string;
    floorPlan617: string;
    layoutPlan01: string;
    layoutPlan02: string;
    clusterGround: string;
    cluster1stTo7th: string;
    clusterBasement: string;
    keyPlan: string;
    locationPlan: string;
    landscapeGarden: string;
    entranceLobby: string;
    carParking: string;
    childrenPlayArea: string;
  };
  local: {
    hero: string;
    brochureHero: string;
    elevation01: string;
    elevation02: string;
    elevation03: string;
    closeUp: string;
    sideView: string;
    birdView: string;
    garden01: string;
    garden02: string;
    garden03: string;
    floorPlan596: string;
    floorPlan617: string;
    blockAType1: string;
    blockAType2: string;
    blockBType1: string;
    blockBType2: string;
    groundFloorPlan: string;
    typicalFloorPlan: string;
    basementFloorPlan: string;
    clusterGround: string;
    cluster1stTo7th: string;
    clusterBasement: string;
    keyPlan: string;
    locationPlan: string;
    roadNetworkMap: string;
    landscapeGarden: string;
    entranceLobby: string;
    carParking: string;
    childrenPlayArea: string;
    brochurePdf: string;
    brochurePages: string[];
  };
  brand: {
    logo: string;
    logoDark: string;
    logoWhite: string;
    officialLogoPng: string;
    projectLogo: string;
    projectLogoWhite: string;
    projectLogoGoldPng: string;
    favicon: string;
  };
}

export const kashiHillsAssets: AssetConfig = {
  sources: {
    housing: "https://housing.com/buy-k-s-kashi-hills-by-k-s-developers-in-enasan-ahmedabad-pid-311838/",
    easyProps: "https://www.easyprops.com/project-detail/k-s-kashi-hills-for-buy-in-enasan-ahmedabad-99",
    propTiger: "https://www.proptiger.com/ahmedabad/enasan/k-s-developers-ahmedabad-kashi-hills-3385114",
    a2zProperty: "https://www.a2zproperty.in/Gujarat/Ahmedabad/kashi-hills/index.html",
    brochure: "/assets/kashi-hills/brochure/kashi-hills-brochure.pdf",
    reraVerify: "https://gujrera.gujarat.gov.in/"
  },
  remote: {
    hero: "https://im.proptiger.com/1/3385114/6/kashi-hills-elevation-154291697.jpeg",
    elevation01: "https://im.proptiger.com/1/3385114/6/kashi-hills-elevation-154291697.jpeg",
    elevation02: "https://im.proptiger.com/1/3385114/6/kashi-hills-elevation-154291698.jpeg",
    elevation03: "https://im.proptiger.com/1/3385114/6/kashi-hills-elevation-154291699.jpeg",
    closeUp: "https://easyprops.s3.dualstack.ap-south-1.amazonaws.com/images/Photos/02%20CLOSE%20UP%20VIEW%20_20250225174051796.jpg",
    sideView: "https://easyprops.s3.dualstack.ap-south-1.amazonaws.com/images/Photos/06%20Side%20view_20250225174051967.jpg",
    garden01: "https://easyprops.s3.dualstack.ap-south-1.amazonaws.com/images/Photos/07%20garden%20view%20_20250225174052108.jpg",
    garden02: "https://easyprops.s3.dualstack.ap-south-1.amazonaws.com/images/Photos/08%20Garden%20view%20_20250225174052242.jpg",
    garden03: "https://easyprops.s3.dualstack.ap-south-1.amazonaws.com/images/Photos/09%20GArden%20view_20250225174052439.jpg",
    birdView: "https://easyprops.s3.dualstack.ap-south-1.amazonaws.com/images/Photos/10%20BIRD%20VIEW%20_20250225174052604.jpg",
    floorPlan596: "https://im.proptiger.com/2/16523167/12/kashi-hills-floor-plan-floor-plan-154291788.jpeg",
    floorPlan617: "https://im.proptiger.com/2/16523168/12/kashi-hills-floor-plan-floor-plan-154291787.jpeg",
    layoutPlan01: "https://www.a2zproperty.in/Gujarat/Ahmedabad/kashi-hills/image-36473-4.jpg",
    layoutPlan02: "https://www.a2zproperty.in/Gujarat/Ahmedabad/kashi-hills/image-36473-5.jpg",
    clusterGround: "https://im.proptiger.com/1/3385114/2/kashi-hills-block-a-and-block-b-cluster-plan-for-ground-floor-154291715.jpeg",
    cluster1stTo7th: "https://im.proptiger.com/1/3385114/2/kashi-hills-block-a-and-block-b-cluster-plan-from-1st-to-7th-floor-154291714.jpeg",
    clusterBasement: "https://im.proptiger.com/1/3385114/2/kashi-hills-block-a-and-block-b-basement-cluster-plan-154291713.jpeg",
    keyPlan: "https://www.a2zproperty.in/Gujarat/Ahmedabad/kashi-hills/image-36473-9.jpg",
    locationPlan: "https://im.proptiger.com/1/3385114/5/kashi-hills-location-plan-154291722.jpeg",
    landscapeGarden: "https://im.proptiger.com/1/3385114/80/kashi-hills-landscape-garden-and-tree-planting-154291740.jpeg",
    entranceLobby: "https://im.proptiger.com/1/3385114/80/kashi-hills-entrance-lobby-154291739.jpeg",
    carParking: "https://im.proptiger.com/1/3385114/80/kashi-hills-car-parking-154291738.jpeg",
    childrenPlayArea: "https://im.proptiger.com/1/3385114/80/kashi-hills-children-s-play-area-154291737.jpeg"
  },
  local: {
    hero: "/assets/kashi-hills/hero/brochure-hero-elevation.jpg",
    brochureHero: "/assets/kashi-hills/hero/brochure-hero-elevation.jpg",
    elevation01: "/assets/kashi-hills/exterior/elevation-01.jpg",
    elevation02: "/assets/kashi-hills/exterior/elevation-02.jpg",
    elevation03: "/assets/kashi-hills/exterior/elevation-03.jpg",
    closeUp: "/assets/kashi-hills/exterior/close-up.jpg",
    sideView: "/assets/kashi-hills/exterior/side-view.jpg",
    birdView: "/assets/kashi-hills/exterior/bird-view.jpg",
    garden01: "/assets/kashi-hills/garden/garden-01.jpg",
    garden02: "/assets/kashi-hills/garden/garden-02.jpg",
    garden03: "/assets/kashi-hills/garden/garden-03.jpg",
    floorPlan596: "/assets/kashi-hills/floor-plans/block-a-type-1.jpg",
    floorPlan617: "/assets/kashi-hills/floor-plans/block-a-type-2.jpg",
    blockAType1: "/assets/kashi-hills/floor-plans/block-a-type-1.jpg",
    blockAType2: "/assets/kashi-hills/floor-plans/block-a-type-2.jpg",
    blockBType1: "/assets/kashi-hills/floor-plans/block-b-type-1.jpg",
    blockBType2: "/assets/kashi-hills/floor-plans/block-b-type-2.jpg",
    groundFloorPlan: "/assets/kashi-hills/site-plan/ground-floor-plan.jpg",
    typicalFloorPlan: "/assets/kashi-hills/site-plan/typical-floor-plan.jpg",
    basementFloorPlan: "/assets/kashi-hills/site-plan/basement-floor-plan.jpg",
    clusterGround: "/assets/kashi-hills/site-plan/ground-floor-plan.jpg",
    cluster1stTo7th: "/assets/kashi-hills/site-plan/typical-floor-plan.jpg",
    clusterBasement: "/assets/kashi-hills/site-plan/basement-floor-plan.jpg",
    keyPlan: "/assets/kashi-hills/site-plan/road-network-map.jpg",
    locationPlan: "/assets/kashi-hills/site-plan/road-network-map.jpg",
    roadNetworkMap: "/assets/kashi-hills/site-plan/road-network-map.jpg",
    landscapeGarden: "/assets/kashi-hills/amenities/landscape-garden.jpg",
    entranceLobby: "/assets/kashi-hills/amenities/entrance-lobby.jpg",
    carParking: "/assets/kashi-hills/amenities/car-parking.jpg",
    childrenPlayArea: "/assets/kashi-hills/amenities/children-play-area.jpg",
    brochurePdf: "/assets/kashi-hills/brochure/kashi-hills-brochure.pdf",
    brochurePages: [
      "/assets/kashi-hills/brochure/page-1.jpg",
      "/assets/kashi-hills/brochure/page-2.jpg",
      "/assets/kashi-hills/brochure/page-3.jpg",
      "/assets/kashi-hills/brochure/page-4.jpg",
      "/assets/kashi-hills/brochure/page-5.jpg",
      "/assets/kashi-hills/brochure/page-6.jpg",
      "/assets/kashi-hills/brochure/page-7.jpg",
      "/assets/kashi-hills/brochure/page-8.jpg",
      "/assets/kashi-hills/brochure/page-9.jpg"
    ]
  },
  brand: {
    logo: "/assets/brand/ks-developers-official-horizontal.png",
    logoDark: "/assets/brand/ks-developers-official-horizontal.png",
    logoWhite: "/assets/brand/ks-developers-official-horizontal.png",
    officialLogoPng: "/assets/brand/ks-developers-official-gold.png",
    projectLogo: "/assets/kashi-hills/branding/kashi-hills-official-gold-transparent.png",
    projectLogoWhite: "/assets/kashi-hills/branding/kashi-hills-official-gold-transparent.png",
    projectLogoGoldPng: "/assets/kashi-hills/branding/kashi-hills-official-gold-transparent.png",
    favicon: "/favicon.svg"
  }
};

export const USE_LOCAL_ASSETS = true;

export function getAssetUrl(key: keyof typeof kashiHillsAssets.local): string {
  if (USE_LOCAL_ASSETS) {
    const val = kashiHillsAssets.local[key];
    if (typeof val === 'string') return val;
    return kashiHillsAssets.local.hero;
  }
  const val = kashiHillsAssets.remote[key as keyof typeof kashiHillsAssets.remote];
  if (typeof val === 'string') return val;
  return kashiHillsAssets.local.hero;
}
