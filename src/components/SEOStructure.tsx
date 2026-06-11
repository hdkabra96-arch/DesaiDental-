import { useEffect } from "react";

export default function SEOStructure() {
  useEffect(() => {
    // 1. Set Document Title
    document.title = "Desai Dental Clinic | Dr. Ankit J Desai (MDS) | Best Dentist in Surat";

    // Helper to find or create meta/link elements in the head
    const updateOrCreateMeta = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const updateOrCreateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Set Meta Description and Keywords
    const metaDescription = "Desai Dental Clinic provides state-of-the-art dental implants, root canal treatment, cosmetic dentistry, teeth whitening, and complete family dental care in Surat. Schedule your personal consultation with Dr. Ankit J Desai (MDS) today.";
    updateOrCreateMeta("name", "description", metaDescription);

    const keywords = "Dentist in Surat, Dental Clinic Surat, Root Canal Treatment Surat, Dental Implants Surat, Cosmetic Dentist Surat, MDS Dentist Surat, Dr Ankit Desai, Nanpura Dentist, Adajan Road Dental Clinic";
    updateOrCreateMeta("name", "keywords", keywords);

    // 3. Set Canonical URL
    const currentUrl = window.location.href;
    updateOrCreateLink("canonical", currentUrl);

    // 4. Set Open Graph Tags
    updateOrCreateMeta("property", "og:type", "website");
    updateOrCreateMeta("property", "og:title", "Desai Dental Clinic | Dr. Ankit J Desai (MDS) | Best Dentist in Surat");
    updateOrCreateMeta("property", "og:description", metaDescription);
    updateOrCreateMeta("property", "og:url", currentUrl);
    updateOrCreateMeta("property", "og:site_name", "Desai Dental Clinic");
    updateOrCreateMeta("property", "og:image", "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"); // High quality clinic image mock

    updateOrCreateMeta("name", "twitter:card", "summary_large_image");
    updateOrCreateMeta("name", "twitter:title", "Desai Dental Clinic | Dr. Ankit J Desai (MDS) | Best Dentist in Surat");
    updateOrCreateMeta("name", "twitter:description", metaDescription);

    // 5. Inject JSON-LD Schema Markups (Dentist & LocalBusiness)
    const schemaScriptId = "desai-dental-schema";
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaScriptId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    const dentistSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Dentist",
          "@id": `${currentUrl}#dentist`,
          "name": "Desai Dental Clinic",
          "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
          "telephone": "+91 70695 37131",
          "url": currentUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Landmark Dotiwala Bakery, Rang Upvan Bhavan Road 1/11, Kinkhabwala Mansion, Adajan Rd, Nanpura",
            "addressLocality": "Surat",
            "addressRegion": "Gujarat",
            "postalCode": "395001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.1923232",
            "longitude": "72.8130831"
          },
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:00"
            }
          ],
          "member": {
            "@type": "Dentist",
            "name": "Dr. Ankit J Desai",
            "jobTitle": "Dental Surgeon",
            "qualification": "MDS (Master of Dental Surgery)"
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": `${currentUrl}#localbusiness`,
          "name": "Desai Dental Clinic",
          "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
          "telephone": "+91 70695 37131",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Landmark Dotiwala Bakery, Rang Upvan Bhavan Road 1/11, Kinkhabwala Mansion, Adajan Rd, Nanpura",
            "addressLocality": "Surat",
            "addressRegion": "Gujarat",
            "postalCode": "395001",
            "addressCountry": "IN"
          }
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(dentistSchema, null, 2);

    return () => {
      // Optional cleaner
    };
  }, []);

  return null;
}
