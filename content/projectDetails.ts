import type { GalleryImage } from "@/components/ImageGallery";

export type ProjectSection =
  | { type: "bullets"; title: string; items: string[] }
  | { type: "text"; title: string; paragraphs: string[] }
  | { type: "metrics"; title: string; items: { label: string; value: string; note?: string }[] }
  | { type: "timeline"; title: string; steps: { title: string; description: string }[] };

export type ProjectDetails = {
  slug: string;
  locales?: {
    en?: { heroSubtitle?: string; sections?: ProjectSection[] };
    fr?: { heroSubtitle?: string; sections?: ProjectSection[] };
  };
  gallery?: GalleryImage[];
};

/**
 * Per-project content (sections + gallery).
 * Screenshots live under /public/projects/<slug>/.
 */
export const projectDetails: ProjectDetails[] = [
  {
    slug: "legarant-axg-salesforce-deployment",
    gallery: [
      {
        src: "/projects/legarant-axg-salesforce-deployment/changes-1.png",
        alt: "legarant-axg-salesforce-deployment — 1"
      },
      {
        src: "/projects/legarant-axg-salesforce-deployment/changes-2.png",
        alt: "legarant-axg-salesforce-deployment — 2"
      },
      {
        src: "/projects/legarant-axg-salesforce-deployment/deploy-1.png",
        alt: "legarant-axg-salesforce-deployment — 3"
      },
      {
        src: "/projects/legarant-axg-salesforce-deployment/deploy-2.png",
        alt: "legarant-axg-salesforce-deployment — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Salesforce deployment with Heroku (Legarant‑AXG)",
        sections: [
          {
            type: "bullets",
            title: "Goals",
            items: [
              "Define a deployment process (environments, prerequisites, validations).",
              "Reduce risk of production rollout with traceability and tests."
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Deployment guide + evidence (PDF).",
              "API test collection (Postman JSON).",
              "Implementation notes and sandbox procedures."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Salesforce deployment with Heroku (Legarant‑AXG)",
        sections: [
          {
            type: "bullets",
            title: "Objectifs",
            items: [
              "Formaliser un process de déploiement (environnements, prérequis, validations).",
              "Sécuriser le passage en production avec traçabilité et tests."
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Guide de déploiement + preuves (PDF).",
              "Collection de tests / appels API (Postman JSON).",
              "Notes d’implémentation et procédures sandbox."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "ltp-apex-backend-prototype",
    gallery: [
      {
        src: "/projects/ltp-apex-backend-prototype/shot-1.svg",
        alt: "ltp-apex-backend-prototype — 1"
      },
      {
        src: "/projects/ltp-apex-backend-prototype/shot-2.svg",
        alt: "ltp-apex-backend-prototype — 2"
      },
      {
        src: "/projects/ltp-apex-backend-prototype/shot-3.svg",
        alt: "ltp-apex-backend-prototype — 3"
      },
      {
        src: "/projects/ltp-apex-backend-prototype/logo-fea9770b.png",
        alt: "ltp-apex-backend-prototype — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Apex backend prototype for LTP",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Apex backend prototype for LTP",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "idemconnect-apex-backend",
    locales: {
      en: {
        heroSubtitle: "Apex backend development (iDEM Connect)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Apex backend development (iDEM Connect)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "fasha-apex-backend-optimization",
    locales: {
      en: {
        heroSubtitle: "Apex backend optimization (FASHA)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Apex backend optimization (FASHA)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "wirebright-visualforce-to-lightning",
    gallery: [
      {
        src: "/projects/wirebright-visualforce-to-lightning/HomepageClassique-68a9ec8d.png",
        alt: "wirebright-visualforce-to-lightning — 1"
      },
      {
        src: "/projects/wirebright-visualforce-to-lightning/HomepageClassique.png",
        alt: "wirebright-visualforce-to-lightning — 2"
      },
      {
        src: "/projects/wirebright-visualforce-to-lightning/HomepageLightning-8f498899.png",
        alt: "wirebright-visualforce-to-lightning — 3"
      },
      {
        src: "/projects/wirebright-visualforce-to-lightning/HomepageLightning.png",
        alt: "wirebright-visualforce-to-lightning — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Visualforce to Lightning migration (WireBright)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Visualforce to Lightning migration (WireBright)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "avenir-telecom-lightning-app",
    gallery: [
      {
        src: "/projects/avenir-telecom-lightning-app/image-e5a88d7b.png",
        alt: "avenir-telecom-lightning-app — 1"
      },
      {
        src: "/projects/avenir-telecom-lightning-app/image.png",
        alt: "avenir-telecom-lightning-app — 2"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Lightning app delivery & backlog (Avenir Télécom)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Lightning app delivery & backlog (Avenir Télécom)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tours-for-life-salesforce-solution",
    gallery: [
      {
        src: "/projects/tours-for-life-salesforce-solution/DAHOUMANE_Aïcha_Imène_capture_decran_022024.png",
        alt: "tours-for-life-salesforce-solution — 1"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Salesforce solution design (Tours For Life)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Salesforce solution design (Tours For Life)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "digit-learning-salesforce-update",
    gallery: [
      {
        src: "/projects/digit-learning-salesforce-update/Comparatif entre des taux de transformations du statut prospect en client actif(1).png",
        alt: "digit-learning-salesforce-update — 1"
      },
      {
        src: "/projects/digit-learning-salesforce-update/Comparatif entre des taux de transformations du statut prospect en client actif.png",
        alt: "digit-learning-salesforce-update — 2"
      },
      {
        src: "/projects/digit-learning-salesforce-update/2023-12-07 16_11_58-Inscriptions Formation Acheter — Mozilla Firefox(1).png",
        alt: "digit-learning-salesforce-update — 3"
      },
      {
        src: "/projects/digit-learning-salesforce-update/2023-12-07 16_11_58-Inscriptions Formation Acheter — Mozilla Firefox.png",
        alt: "digit-learning-salesforce-update — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Salesforce application update (Digit Learning)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Salesforce application update (Digit Learning)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "cicd-pipeline-setup",
    locales: {
      en: {
        heroSubtitle: "CI/CD pipeline setup",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "CI/CD pipeline setup",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "monitoring-automation-pack",
    locales: {
      en: {
        heroSubtitle: "Monitoring & automation pack",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Monitoring & automation pack",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-windows-autopilot-provisioning",
    gallery: [
      {
        src: "/projects/tssr-windows-autopilot-provisioning/tssr-1.png",
        alt: "tssr-windows-autopilot-provisioning — 1"
      },
      {
        src: "/projects/tssr-windows-autopilot-provisioning/tssr-2.png",
        alt: "tssr-windows-autopilot-provisioning — 2"
      },
      {
        src: "/projects/tssr-windows-autopilot-provisioning/tssr-3.png",
        alt: "tssr-windows-autopilot-provisioning — 3"
      },
      {
        src: "/projects/tssr-windows-autopilot-provisioning/tssr-4.png",
        alt: "tssr-windows-autopilot-provisioning — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Windows Autopilot provisioning (Dell fleet)",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Windows Autopilot provisioning (Dell fleet)",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-incident-management-rmm",
    gallery: [
      {
        src: "/projects/tssr-incident-management-rmm/tssr-1.png",
        alt: "tssr-incident-management-rmm — 1"
      },
      {
        src: "/projects/tssr-incident-management-rmm/tssr-2.png",
        alt: "tssr-incident-management-rmm — 2"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Incident handling with RMM & security tooling",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Incident handling with RMM & security tooling",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-virtualization-windows-server-2022",
    gallery: [
      {
        src: "/projects/tssr-virtualization-windows-server-2022/tssr-1.png",
        alt: "tssr-virtualization-windows-server-2022 — 1"
      },
      {
        src: "/projects/tssr-virtualization-windows-server-2022/tssr-2.png",
        alt: "tssr-virtualization-windows-server-2022 — 2"
      },
      {
        src: "/projects/tssr-virtualization-windows-server-2022/tssr-3.png",
        alt: "tssr-virtualization-windows-server-2022 — 3"
      },
      {
        src: "/projects/tssr-virtualization-windows-server-2022/tssr-4.png",
        alt: "tssr-virtualization-windows-server-2022 — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Virtualization lab: Windows Server 2022 + ADDS",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Virtualization lab: Windows Server 2022 + ADDS",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-pfsense-squid-proxy",
    gallery: [
      {
        src: "/projects/tssr-pfsense-squid-proxy/tssr-1.png",
        alt: "tssr-pfsense-squid-proxy — 1"
      },
      {
        src: "/projects/tssr-pfsense-squid-proxy/tssr-2.png",
        alt: "tssr-pfsense-squid-proxy — 2"
      },
      {
        src: "/projects/tssr-pfsense-squid-proxy/tssr-3.png",
        alt: "tssr-pfsense-squid-proxy — 3"
      },
      {
        src: "/projects/tssr-pfsense-squid-proxy/tssr-4.png",
        alt: "tssr-pfsense-squid-proxy — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Network security lab: pfSense + Squid proxy",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Network security lab: pfSense + Squid proxy",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tai-disk-partition-backup-restore",
    gallery: [
      {
        src: "/projects/tai-disk-partition-backup-restore/tai-1.png",
        alt: "tai-disk-partition-backup-restore — 1"
      },
      {
        src: "/projects/tai-disk-partition-backup-restore/tai-2.png",
        alt: "tai-disk-partition-backup-restore — 2"
      },
      {
        src: "/projects/tai-disk-partition-backup-restore/tai-3.png",
        alt: "tai-disk-partition-backup-restore — 3"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Disk partitioning & backup/restore (AOMEI + Windows Server Backup)",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Disk partitioning & backup/restore (AOMEI + Windows Server Backup)",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tai-wifi-access-point-setup",
    gallery: [
      {
        src: "/projects/tai-wifi-access-point-setup/tai-1.png",
        alt: "tai-wifi-access-point-setup — 1"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Wi‑Fi access point configuration",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Wi‑Fi access point configuration",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tai-roaming-profile-adds",
    gallery: [
      {
        src: "/projects/tai-roaming-profile-adds/tai-1.png",
        alt: "tai-roaming-profile-adds — 1"
      },
      {
        src: "/projects/tai-roaming-profile-adds/tai-2.png",
        alt: "tai-roaming-profile-adds — 2"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Roaming profiles with Active Directory",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Roaming profiles with Active Directory",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tai-email-configuration-guide",
    gallery: [
      {
        src: "/projects/tai-email-configuration-guide/tai-1.png",
        alt: "tai-email-configuration-guide — 1"
      },
      {
        src: "/projects/tai-email-configuration-guide/tai-2.png",
        alt: "tai-email-configuration-guide — 2"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Outlook email configuration guide",
        sections: [
          {
            type: "bullets",
            title: "Context & goals",
            items: [
              "Build a reproducible lab (VM / test bench) or address a user need.",
              "Follow a structured approach: prepare → configure → validate → document."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Configuration & hardening (network, accounts, services, rules).",
              "Validation tests (connectivity, scenarios).",
              "Wrote a step‑by‑step runbook."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Outlook email configuration guide",
        sections: [
          {
            type: "bullets",
            title: "Contexte & objectifs",
            items: [
              "Mettre en place un environnement de test (VM / lab) ou intervenir sur un besoin utilisateur.",
              "Appliquer une démarche structurée : préparation → configuration → validation → documentation."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Paramétrage et sécurisation (réseau, comptes, services, règles).",
              "Tests de fonctionnement (connectivité, performances, scénarios).",
              "Rédaction d’une procédure reproductible."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "hemebiotech-java-debug",
    locales: {
      en: {
        heroSubtitle: "Debugging a Java application (HemeBiotech)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Debugging a Java application (HemeBiotech)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "parkit-java-testing",
    gallery: [
      {
        src: "/projects/parkit-java-testing/2024-06-07 00_48_38-TEST Surefire with details in Clone of WIN10 DEV SALESFORCE - VMware Workstation.png",
        alt: "parkit-java-testing — 1"
      },
      {
        src: "/projects/parkit-java-testing/2024-06-07 00_45_59-TEST JACOCO Parking Service class.png",
        alt: "parkit-java-testing — 2"
      },
      {
        src: "/projects/parkit-java-testing/2024-06-07 00_45_59-TEST JACOCO in Clone of WIN10 DEV SALESFORCE - VMware Workstation.png",
        alt: "parkit-java-testing — 3"
      },
      {
        src: "/projects/parkit-java-testing/2024-06-07 00_48_38-TEST Surefire in Clone of WIN10 DEV SALESFORCE - VMware Workstation.png",
        alt: "parkit-java-testing — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Testing a Java feature implementation (Parkit)",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Testing a Java feature implementation (Parkit)",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "pochlib-ui",
    locales: {
      en: {
        heroSubtitle: "Front-end UI for Poch'Lib",
        sections: [
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Scoped the work: objectives, deliverables, acceptance criteria.",
              "Implemented and/or documented the solution end‑to‑end.",
              "Validated results with tests/evidence and wrote clear documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Front-end UI for Poch'Lib",
        sections: [
          {
            type: "bullets",
            title: "Ce que j’ai réalisé",
            items: [
              "Cadrage : objectifs, livrables, critères d’acceptation.",
              "Réalisation : implémentation et/ou documentation de bout en bout.",
              "Validation : tests / preuves + mise en forme de la documentation."
            ]
          }
        ]
      }
    }
  }
];
