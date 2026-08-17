import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>;
}

export const SEOHead: React.FC<SEOProps> = ({
  title = 'K.S. Developers | Premium 2 BHK Flats in Naroda & Enasan Ahmedabad | Kashi Hills',
  description = 'Buy ready-to-move 2 BHK flats & shops at K S Kashi Hills in Enasan, Naroda-Dehgam Road, Ahmedabad by K.S. Developers. AUDA & GujRERA registered PR/GJ/AHMEDABAD/DASKROI/AUDA/MAA09995/310322. High carpet area, modern amenities, bank loan approved.',
  keywords = '2 BHK Flat in Naroda Ahmedabad, Buy 2 BHK Home Enasan, K S Kashi Hills, Kashi Hills Ahmedabad, Flats near Naroda Dehgam Road, AUDA approved 2 BHK flats Ahmedabad, K.S. Developers, Ready to move flats Naroda, GujRERA PR/GJ/AHMEDABAD/DASKROI/AUDA/MAA09995/310322, Residential Projects Ahmedabad',
  canonicalPath,
  jsonLd
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `https://ksdevelopers.in${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector("meta[name='keywords']");
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. Update Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // 6. Inject Route-Specific JSON-LD Schema
    if (jsonLd) {
      let scriptTag = document.getElementById('route-jsonld') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(jsonLd);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonicalUrl, jsonLd]);

  return null;
};
