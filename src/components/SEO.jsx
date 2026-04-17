import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'BabaERP - Complete ERP Solutions for Your Business',
  description = 'Transform your business with BabaERP comprehensive ERP solution. Streamline operations, increase efficiency, and drive growth with integrated business management. Serving supermarkets, restaurants, finance, and more.',
  keywords = 'ERP, Enterprise Resource Planning, Business Management, Inventory Management, Financial Management, CRM, BabaERP, Business Software, Kerala ERP',
  ogImage = '/hero.png',
  ogUrl = 'https://babaerp.com',
  type = 'website'
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${ogUrl}#organization`,
        "name": "BabaERP",
        "url": ogUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${ogUrl}/favicon.svg`,
          "width": 512,
          "height": 512
        },
        "description": "Leading ERP solutions provider for businesses of all sizes",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+255675303030",
          "contactType": "sales",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://api.whatsapp.com/send?phone=+255675303030"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${ogUrl}#software`,
        "name": "BabaERP",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "Contact for pricing",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "150"
        },
        "description": "Comprehensive ERP solution for business management including inventory, finance, CRM, and more"
      },
      {
        "@type": "WebSite",
        "@id": `${ogUrl}#website`,
        "url": ogUrl,
        "name": "BabaERP",
        "publisher": {
          "@id": `${ogUrl}#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${ogUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${ogUrl}#webpage`,
        "url": ogUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${ogUrl}#website`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${ogUrl}${ogImage}`,
          "width": 1200,
          "height": 630
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": ogUrl
            }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${ogUrl}#localbusiness`,
        "name": "BabaERP Solutions",
        "description": "ERP solutions provider serving businesses globally with expertise in Kerala market",
        "areaServed": [
          "Kerala",
          "India",
          "Global"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ERP Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Supermarket ERP Solution",
                "description": "Complete ERP solution for supermarket management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Restaurant ERP Solution",
                "description": "Comprehensive restaurant management system"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Financial Management ERP",
                "description": "Advanced financial and accounting management"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${ogUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What industries does BabaERP serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BabaERP serves diverse industries including supermarkets, restaurants, finance & accounting, workshops, sales and purchases, auto-parts shops, and provides comprehensive reports & analytics."
            }
          },
          {
            "@type": "Question",
            "name": "What modules are available in BabaERP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BabaERP offers modules for Inventory Management, Accounting & Finance, Human Resources, Customer Relations (CRM), Procurement, and Manufacturing."
            }
          },
          {
            "@type": "Question",
            "name": "How does BabaERP implementation work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our implementation process includes Discovery & Analysis, Custom Module Selection, Implementation & Training, and Ongoing Optimization to ensure maximum efficiency."
            }
          }
        ]
      }
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BabaERP" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${ogUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="BabaERP - Complete ERP Solutions" />
      <meta property="og:site_name" content="BabaERP" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${ogUrl}${ogImage}`} />
      <meta property="twitter:image:alt" content="BabaERP - Complete ERP Solutions" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="application-name" content="BabaERP" />
      <meta name="apple-mobile-web-app-title" content="BabaERP" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  )
}

export default SEO
