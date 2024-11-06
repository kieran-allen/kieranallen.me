export type Company = {
  name: string;
  link: string;
}

export type Experience = {
  title: string;
  company: Company;
  fromTo: string;
  list: string[];
}

export type Education = {
  title: string;
  fromTo: string;
  description: string;
  degree?: string;
}

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: {
      name: "Ledger",
      link: "https://www.ledger.com"
    },
    fromTo: "May 2023 - Present",
    list: [
      "Developed live apps for Ledger Live Hub, enhancing user experience for crypto hardware wallet customers",
      "Created a create-live-app repository for bootstrapping new live apps with documentation and best practices",
      "Managed frontend team firefighting process, improving stability and reliability",
      "Led development of a new swap feature to simplify partner integration and accelerate feature releases",
      "Contributed to frontend best practices for maintainable and scalable code",
      "Developed a testing tool using Foundry and Anvil for fork testing within Ledger Live app"
    ],
  },
  {
    title: "Frontend Developer",
    company: {
      name: "TrueLayer",
      link: "https://truelayer.com"
    },
    fromTo: "September 2021 - May 2023",
    list: [
      "Designed and implemented hosted-payments-page, increasing transactions and customer satisfaction",
      "Developed truelayer-embedded-payment-page SDK for seamless integration of open banking payments flow",
      "Integrated Mock Service Worker (MSW) into the TrueLayer hosted payments page project for improved testing and development efficiency"
    ],
  },
  {
    title: "Frontend Developer",
    company: {
      name: "OVO Energy",
      link: "https://www.ovoenergy.com"
    },
    fromTo: "April 2018 - September 2021",
    list: [
      "Led migration of OVO acquisition frontend from AngularJS to React, achieving 73% decrease in time to interactive, 36% reduction in JavaScript package size & 98% reduction in CSS package size",
      "Spearheaded migration of team applications to a new AWS account, including the Terraforming of frontend application infrastructure and migration to CircleCI as the application build pipeline",
      "Implemented new renewal frontend designs, resulting in a 10% increase in customer plan renewals"
    ],
  },
  {
    title: "UI Developer",
    company: {
      name: "Playtech",
      link: "https://www.playtech.com"
    },
    fromTo: "September 2016 - April 2018",
    list: [
      "Developed data-heavy, customer-facing React applications following Agile methodologies",
      "Implemented localized date and number formatting using react-intl, enhancing UX for international clients",
      "Developed a native fetch component, eliminating the need for jQuery and optimizing application performance",
      "Refactored Redux store for cross-application use, significantly reducing codebase complexity and duplication"
    ],
  },
];

export const education: Education[] = [
  {
    title: "University College Cork",
    fromTo: "September 2011 - June 2016",
    description: "Computer Science",
    degree: "BSc"
  },
];

export const interests: string[] = [
  "Cycling",
  "Video Games",
  "Cryptocurrency",
  "Dungeons & Dragons",
  "Music Production",
];