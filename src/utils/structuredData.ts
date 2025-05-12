import { SITE_CONFIG } from './constants';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Posinnove',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/Logo2.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      'https://www.linkedin.com/company/posinnove',
      'https://twitter.com/posinnove',
      'https://facebook.com/posinnove',
      'https://instagram.com/posinnove'
    ],
  };
}

export function generateEducationalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalService',
    name: SITE_CONFIG.title,
    provider: {
      '@type': 'Organization',
      name: 'Posinnove',
    },
    description: SITE_CONFIG.description,
    audience: {
      '@type': 'Audience',
      audienceType: 'Educational Institutions',
    },
    educationalLevel: 'Higher Education',
    teaches: [
      'Project-based learning',
      'Industry collaboration',
      'Student employability',
      'Experiential learning'
    ],
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}