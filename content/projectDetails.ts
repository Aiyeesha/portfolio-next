import type { GalleryImage } from "@/components/ImageGallery";

export type ProjectSection =
  | { type: "bullets"; title: string; items: string[] }
  | { type: "text"; title: string; paragraphs: string[] }
  | { type: "metrics"; title: string; items: { label: string; value: string; note?: string }[] }
  | { type: "timeline"; title: string; steps: { title: string; description: string }[] }
  | { type: "resources"; title: string; items: { label: string; href: string; note?: string }[] }
  | { type: "code"; title: string; language?: string; code: string; downloadUrl?: string };

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
      { src: "/projects/legarant-axg-salesforce-deployment/changes-1.png", alt: "Legarant‑AXG — Heroku changes (1)" },
      { src: "/projects/legarant-axg-salesforce-deployment/changes-2.webp", alt: "Legarant‑AXG — Heroku changes (2)" },
      { src: "/projects/legarant-axg-salesforce-deployment/deploy-1.png", alt: "Legarant‑AXG — Deployment evidence (1)" },
      { src: "/projects/legarant-axg-salesforce-deployment/deploy-2.webp", alt: "Legarant‑AXG — Deployment evidence (2)" }
    ],
    locales: {
      en: {
        heroSubtitle:
          "Integrate AXG into Legarant’s Salesforce and deliver a mobile-ready integration layer (REST + Heroku).",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "Legarant (life insurance) acquired AXG to expand into Germany. The goal was to keep Legarant’s Salesforce org as the single CRM and ingest key AXG data.",
              "The integration was one-way (AXG → Salesforce), with a mobile app planned. We also needed an outbound REST call to query Salesforce customers from the integration layer."
            ]
          },
          {
            type: "bullets",
            title: "What I delivered",
            items: [
              "Postman collection covering the required REST calls (standard API + custom endpoints where needed).",
              "Custom Apex REST controllers to implement business rules not covered by the standard Contact API (create-or-return, soft-delete via DELETE).",
              "A Heroku app connected to Salesforce (mobile-ready), with data replication and documented configuration changes.",
              "A deployment package + runbook: components to deploy, manual steps, and validation checklist for test and production."
            ]
          },
          {
            type: "timeline",
            title: "Implementation workflow",
            steps: [
              {
                title: "1) Integration design",
                description:
                  "Clarified data direction (AXG → Salesforce), identified endpoints, and defined authentication (Connected App + OAuth username/password flow)."
              },
              {
                title: "2) API implementation & tests",
                description:
                  "Built and validated the API calls in Postman. Added custom REST Apex where the standard API could not meet the spec (Contact creation rules and DELETE behavior)."
              },
              {
                title: "3) Heroku layer for mobile",
                description:
                  "Provisioned the app on Heroku, connected it to Salesforce, and validated bi-directional sync (Heroku ↔ Salesforce) for the required objects."
              },
              {
                title: "4) Data consistency hardening",
                description:
                  "Implemented automatic population of the External ID used for synchronization (trigger-based) to guarantee uniqueness and avoid manual errors."
              },
              {
                title: "5) Release & documentation",
                description:
                  "Produced a deployment document (components + manual steps) and a changes log for the Heroku setup, then prepared the demo checklist for stakeholders."
              }
            ]
          },
          {
            type: "metrics",
            title: "Quality & guardrails",
            items: [
              { label: "API correctness", value: "Postman collection validated against specs" },
              { label: "Business rules coverage", value: "Custom REST Apex for create/DELETE requirements" },
              { label: "Sync reliability", value: "External ID auto-filled to ensure uniqueness" },
              { label: "Operational readiness", value: "Deployment runbook + validation checklist" }
            ]
          },
          {
            type: "resources",
            title: "Deliverables",
            items: [
              { label: "Postman collection (JSON)", href: "/docs/projects/legarant-axg-salesforce-deployment/postman-collection.json" },
              { label: "Heroku changes (PDF)", href: "/docs/projects/legarant-axg-salesforce-deployment/heroku-changes.pdf" },
              { label: "Deployment guide (PDF)", href: "/docs/projects/legarant-axg-salesforce-deployment/deployment.pdf" },
              { label: "Requirements / spec (PDF)", href: "/docs/projects/legarant-axg-salesforce-deployment/requirements.pdf" },
              { label: "Staging link (TXT)", href: "/docs/projects/legarant-axg-salesforce-deployment/sandbox-link.txt" }
            ]
          },
          {
            type: "code",
            title: "Links (repo + staging)",
            language: "text",
            code: `Repository: https://github.com/Aiyeesha/Projet-12/tree/main\nStaging app: https://legarant-staging-78a7880351d1.herokuapp.com`,
            downloadUrl: "/docs/projects/legarant-axg-salesforce-deployment/implementation-repo.txt"
          }
        ]
      },
      fr: {
        heroSubtitle:
          "Intégrer AXG dans Salesforce (Legarant) et livrer une couche d’intégration prête pour une app mobile (REST + Heroku).",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "LEGARANT (assurance vie) a racheté AXG pour s’implanter en Allemagne. L’objectif était de conserver l’org Salesforce de Legarant comme CRM principal et d’y intégrer les données clés d’AXG.",
              "L’intégration est unidirectionnelle (AXG → Salesforce). Une application mobile étant prévue, il fallait aussi une couche applicative (hébergeur type Heroku) connectée à Salesforce, et des appels REST pour requêter la base clients."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai livré",
            items: [
              "Une collection Postman couvrant les appels REST demandés (API standard + endpoints custom si nécessaire).",
              "Des contrôleurs REST Apex pour implémenter des règles métiers non couvertes par l’API standard Contact (création « si absent sinon renvoyer l’Id », suppression logique via DELETE).",
              "Une application déployée sur Heroku et connectée à Salesforce, avec réplication des données et documentation des changements de configuration.",
              "Un package de déploiement + runbook : liste des composants, actions manuelles, et checklist de validation (test puis production)."
            ]
          },
          {
            type: "timeline",
            title: "Workflow d’implémentation",
            steps: [
              {
                title: "1) Cadrage de l’intégration",
                description:
                  "Validation du sens de données (AXG → Salesforce), identification des endpoints et choix d’authentification (Connected App + OAuth username/password)."
              },
              {
                title: "2) Implémentation & tests API",
                description:
                  "Construction et validation des appels dans Postman. Ajout d’API custom Apex REST quand l’API standard ne respectait pas le cahier des charges (création Contact et comportement DELETE)."
              },
              {
                title: "3) Couche Heroku pour le mobile",
                description:
                  "Déploiement sur Heroku, connexion à Salesforce, et vérification de la synchronisation bidirectionnelle (Heroku ↔ Salesforce) sur les objets nécessaires."
              },
              {
                title: "4) Fiabilisation de la synchronisation",
                description:
                  "Automatisation du remplissage de l’External ID utilisé pour la synchro (trigger) afin de garantir l’unicité et éviter les erreurs de saisie manuelle."
              },
              {
                title: "5) Déploiement & documentation",
                description:
                  "Rédaction du document de déploiement (composants + actions manuelles) et du document de changements Heroku, puis préparation de la démo."
              }
            ]
          },
          {
            type: "metrics",
            title: "Qualité & garde-fous",
            items: [
              { label: "Conformité API", value: "Collection Postman testée selon les specs" },
              { label: "Règles métiers", value: "API custom Apex REST pour les exigences create/DELETE" },
              { label: "Fiabilité synchro", value: "External ID auto‑renseigné avec unicité" },
              { label: "Prêt pour run", value: "Runbook de déploiement + checklist de validation" }
            ]
          },
          {
            type: "resources",
            title: "Livrables",
            items: [
              { label: "Collection Postman (JSON)", href: "/docs/projects/legarant-axg-salesforce-deployment/postman-collection.json" },
              { label: "Changements Heroku (PDF)", href: "/docs/projects/legarant-axg-salesforce-deployment/heroku-changes.pdf" },
              { label: "Document de déploiement (PDF)", href: "/docs/projects/legarant-axg-salesforce-deployment/deployment.pdf" },
              { label: "Cahier des charges (PDF)", href: "/docs/projects/legarant-axg-salesforce-deployment/requirements.pdf" },
              { label: "Lien staging (TXT)", href: "/docs/projects/legarant-axg-salesforce-deployment/sandbox-link.txt" }
            ]
          },
          {
            type: "code",
            title: "Liens (repo + staging)",
            language: "text",
            code:
              `Repository: https://github.com/Aiyeesha/Projet-12/tree/main
Staging app: https://legarant-staging-78a7880351d1.herokuapp.com
`,
            downloadUrl: "/docs/projects/legarant-axg-salesforce-deployment/implementation-repo.txt"
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
            type: "text",
            title: "Context",
            paragraphs: [
              "LTP is an early-stage product (Le Temps des Papillons) that needed a pragmatic Salesforce backend prototype to validate key workflows.",
              "The goal was to deliver a solid technical foundation: clear data model assumptions, secure access rules, and reliable REST endpoints ready for integration."
            ]
          },
          {
            type: "bullets",
            title: "Problem",
            items: [
              "Build a backend prototype that is easy to evolve while staying compliant with Salesforce governor limits.",
              "Define access rights and validation rules early to prevent inconsistent data.",
              "Prepare an import strategy to bootstrap the org with realistic datasets."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Technical specifications for the prototype (Apex services + REST endpoints).",
              "UML diagram to document the model and relationships.",
              "Access rights strategy (profiles/permission sets) aligned with roles.",
              "Import strategy to load data safely and validate constraints."
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Technical specifications (PDF).",
              "UML diagram (PDF).",
              "Access rights document (PDF).",
              "Import strategy document (PDF).",
              "Original brief / requirements (PDF + DOCX)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & tools",
            items: [
              "Salesforce Platform (Apex, REST, security model).",
              "Documentation-driven delivery (specs + UML)."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Apex backend prototype for LTP",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "LTP (Le Temps des Papillons) est un produit en phase de démarrage qui avait besoin d’un prototype de backend Salesforce pragmatique pour valider les workflows clés.",
              "L’objectif : poser des fondations techniques solides (modèle de données, règles de sécurité) et exposer des endpoints REST fiables, prêts pour l’intégration."
            ]
          },
          {
            type: "bullets",
            title: "Problématique",
            items: [
              "Construire un prototype évolutif tout en respectant les limites Salesforce (governor limits).",
              "Définir très tôt les droits d’accès et les validations pour éviter les incohérences.",
              "Préparer une stratégie d’import pour initialiser l’org avec des données réalistes."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Spécifications techniques du prototype (services Apex + endpoints REST).",
              "Diagramme UML pour documenter le modèle et les relations.",
              "Stratégie de droits d’accès (profils/permission sets) alignée avec les rôles.",
              "Stratégie d’import de données avec validations et contrôles."
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Spécifications techniques (PDF).",
              "Diagramme UML (PDF).",
              "Droits d’accès (PDF).",
              "Stratégie d’import (PDF).",
              "Cahier des charges / brief (PDF + DOCX)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & outils",
            items: [
              "Salesforce Platform (Apex, REST, modèle de sécurité).",
              "Livraison pilotée par la documentation (spécifications + UML)."
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
            type: "text",
            title: "Context",
            paragraphs: [
              "iDEM Connect required an Apex backend to manage subscription and contract lifecycles with clear business rules and reliable automation.",
              "The focus was on maintainability (service layer), robustness (batch/scheduler), and documented delivery (functional grid + test evidence)."
            ]
          },
          {
            type: "bullets",
            title: "Problem",
            items: [
              "Model and automate subscription/contract state transitions.",
              "Avoid governor limit issues by using scalable patterns (async where relevant).",
              "Provide clear documentation so the solution can be handed over safely."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Apex triggers + service layer for separation of concerns.",
              "Batch + Scheduler to process recurring updates safely.",
              "Test strategy and execution report to validate core flows.",
              "Functional grid to map requirements to implementation."
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Functional requirements (PDF).",
              "Feature grid (PDF).",
              "Code excerpt (TXT).",
              "Documentation (PDF).",
              "Test report (PDF)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & tools",
            items: [
              "Salesforce Platform (Apex, Triggers, Batch, Scheduler).",
              "Unit tests + documentation as first-class deliverables."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Apex backend development (iDEM Connect)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "iDEM Connect nécessitait un backend Apex pour gérer le cycle de vie des abonnements et des contrats, avec des règles métier claires et une automatisation fiable.",
              "Le travail a été orienté maintenabilité (couche service), robustesse (batch/scheduler) et livraison documentée (grille fonctionnelle + preuves de tests)."
            ]
          },
          {
            type: "bullets",
            title: "Problématique",
            items: [
              "Modéliser et automatiser les transitions d’état abonnement/contrat.",
              "Éviter les problèmes de limites Salesforce via des patterns scalables (async si nécessaire).",
              "Produire une documentation claire pour un transfert en toute confiance."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Triggers Apex + couche service pour séparer responsabilités et faciliter la maintenance.",
              "Batch + Scheduler pour exécuter des traitements récurrents en sécurité.",
              "Stratégie de tests + rapport d’exécution pour valider les parcours clés.",
              "Grille de fonctionnalités pour relier les exigences à l’implémentation."
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Cahier des charges (PDF).",
              "Grille de fonctionnalités (PDF).",
              "Extrait de code (TXT).",
              "Documentation (PDF).",
              "Rapport de tests (PDF)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & outils",
            items: [
              "Salesforce Platform (Apex, Triggers, Batch, Scheduler).",
              "Tests unitaires + documentation comme livrables à part entière."
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
            type: "text",
            title: "Context",
            paragraphs: [
              "FASHA had an existing Apex backend that needed reliability and performance improvements before scaling.",
              "The priority was to eliminate governor-limit risks, make batch processing safer, and document the refactoring decisions."
            ]
          },
          {
            type: "bullets",
            title: "Problem",
            items: [
              "Remove SOQL/DML in loops and other anti-patterns that can break at scale.",
              "Improve batch processing and resilience for long-running jobs.",
              "Strengthen maintainability: clearer logic boundaries and safer error handling."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Refactor critical flows with bulk-safe patterns (collections, maps, query consolidation).",
              "Improve batch design to handle larger volumes without timeouts.",
              "Document the approach so the team can extend it consistently."
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Project framing note (PDF).",
              "Repository / source reference (TXT).",
              "Refactoring notes and recommended patterns (in docs)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & tools",
            items: [
              "Salesforce Platform (Apex, Batch).",
              "Performance and bulkification best practices."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Apex backend optimization (FASHA)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "FASHA disposait d’un backend Apex existant qui nécessitait des améliorations de fiabilité et de performance avant montée en charge.",
              "La priorité : réduire les risques liés aux governor limits, sécuriser les traitements batch et documenter les choix de refactorisation."
            ]
          },
          {
            type: "bullets",
            title: "Problématique",
            items: [
              "Supprimer les SOQL/DML dans les boucles et les anti-patterns qui cassent à grande échelle.",
              "Améliorer le traitement batch et la résilience des jobs longs.",
              "Renforcer la maintenabilité : logique plus claire, gestion d’erreurs plus sûre."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Refactorisation avec des patterns bulk-safe (collections, maps, consolidation des requêtes).",
              "Amélioration du design batch pour gérer des volumes plus importants sans timeout.",
              "Documentation de l’approche pour des évolutions cohérentes."
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Note de cadrage (PDF).",
              "Référence dépôt / source (TXT).",
              "Notes de refactorisation et patterns recommandés (documentation)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & outils",
            items: [
              "Salesforce Platform (Apex, Batch).",
              "Bonnes pratiques performance & bulkification."
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
            type: "text",
            title: "Context",
            paragraphs: [
              "WireBright had an existing Visualforce-based application and needed to migrate key pages and interactions to the Lightning experience.",
              "The goal was to reduce technical debt, modernize the UX, and keep business behavior equivalent with clear before/after evidence."
            ]
          },
          {
            type: "bullets",
            title: "Problem",
            items: [
              "Migrate Visualforce pages and legacy JavaScript buttons without breaking existing processes.",
              "Align the solution with Lightning UX standards and secure access rules.",
              "Provide installation and operational guidance for a safe rollout."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Migration plan: mapping of Visualforce pages to Lightning equivalents.",
              "Rework of interactions (buttons/actions) to fit Lightning patterns.",
              "Validation with screenshots and functional checks (before/after)."
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Technical specifications (PDF).",
              "Migration documentation (DOCX).",
              "Installation manual for EG Manufacturing (PDF).",
              "Lightning advantages / rationale (PDF).",
              "Before/after evidence (screenshots)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & tools",
            items: [
              "Salesforce (Visualforce, Lightning Experience).",
              "Change management and deployment documentation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Visualforce to Lightning migration (WireBright)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "WireBright disposait d’une application basée sur Visualforce et souhaitait migrer des pages et interactions clés vers l’expérience Lightning.",
              "L’objectif : réduire la dette technique, moderniser l’UX, et conserver un comportement métier équivalent avec des preuves avant/après."
            ]
          },
          {
            type: "bullets",
            title: "Problématique",
            items: [
              "Migrer les pages Visualforce et les boutons JavaScript legacy sans casser les processus existants.",
              "Aligner la solution avec les standards UX Lightning et les règles de sécurité.",
              "Produire des guides d’installation/exploitation pour un déploiement serein."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Plan de migration : mapping des pages Visualforce vers leurs équivalents Lightning.",
              "Refonte des interactions (boutons/actions) selon les patterns Lightning.",
              "Validation via captures d’écran et contrôles fonctionnels (avant/après)."
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Spécifications techniques (PDF).",
              "Documentation de migration (DOCX).",
              "Manuel d’installation EG Manufacturing (PDF).",
              "Explication des avantages Lightning (PDF).",
              "Preuves avant/après (captures)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & outils",
            items: [
              "Salesforce (Visualforce, Lightning Experience).",
              "Accompagnement au changement + documentation de déploiement."
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
        src: "/projects/avenir-telecom-lightning-app/image-e5a88d7b.webp",
        alt: "avenir-telecom-lightning-app — 1"
      },
      {
        src: "/projects/avenir-telecom-lightning-app/image.webp",
        alt: "avenir-telecom-lightning-app — 2"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Lightning app delivery & backlog (Avenir Télécom)",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "Avenir Télécom needed a Lightning application for sales teams, with a clear delivery strategy and a structured backlog for improvements.",
              "The work combined functional analysis (audit, corrections), delivery planning (tests, backlog), and documentation to enable ongoing iterations."
            ]
          },
          {
            type: "bullets",
            title: "Problem",
            items: [
              "Deliver a usable Lightning app aligned with business needs.",
              "Prioritize fixes and evolutions with a maintainable backlog.",
              "Provide test evidence and an audit trail for quality and decision-making."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Delivery strategy and implementation plan.",
              "Audit report to identify gaps and improvement opportunities.",
              "Backlog (initial + evolutions/corrections) with prioritization.",
              "Test plan and supporting artifacts to validate key scenarios."
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Requirements / specification (PDF).",
              "Audit report (PDF).",
              "Corrections & evolutions requests (PDF).",
              "Backlogs (XLSX).",
              "Test workbook (XLSX).",
              "Strategy documents (PDF)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & tools",
            items: [
              "Salesforce Lightning (App Builder, configuration, delivery practices).",
              "Agile delivery (backlog management, test planning)."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Lightning app delivery & backlog (Avenir Télécom)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Avenir Télécom avait besoin d’une application Lightning pour les équipes commerciales, avec une stratégie de livraison claire et un backlog structuré pour les évolutions.",
              "Le travail combine analyse fonctionnelle (audit, corrections), planification de delivery (tests, backlog) et documentation pour permettre des itérations continues."
            ]
          },
          {
            type: "bullets",
            title: "Problématique",
            items: [
              "Livrer une application Lightning utilisable et alignée avec les besoins métier.",
              "Prioriser corrections et évolutions via un backlog maintenable.",
              "Apporter des preuves de tests et une traçabilité pour la qualité et la décision."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Stratégie de livraison et plan d’implémentation.",
              "Rapport d’audit pour identifier les écarts et opportunités d’amélioration.",
              "Backlog (initial + évolutions/corrections) avec priorisation.",
              "Plan de tests et artefacts associés pour valider les scénarios clés."
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Cahier des charges (PDF).",
              "Rapport d’audit (PDF).",
              "Demandes de corrections & d’évolutions (PDF).",
              "Backlogs (XLSX).",
              "Cahier de tests (XLSX).",
              "Documents de stratégie (PDF)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & outils",
            items: [
              "Salesforce Lightning (App Builder, configuration, pratiques de delivery).",
              "Approche agile (gestion de backlog, planification de tests)."
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
        src: "/projects/tours-for-life-salesforce-solution/screenshot-1.webp",
        alt: "tours-for-life-salesforce-solution — 1"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Salesforce solution design (Tours For Life)",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "Tours For Life needed a clear Salesforce solution blueprint before implementation: data model, automation, security rules and a delivery plan.",
              "The objective was to translate business needs into actionable functional and technical specifications, ready for build and iteration."
            ]
          },
          {
            type: "bullets",
            title: "Problem",
            items: [
              "Design a scalable data model aligned with real-life operations.",
              "Define automation boundaries (Flows vs Apex) and security access patterns.",
              "Provide onboarding and environment guidance (sandbox creation) for a smooth project execution."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Functional requirements and user journeys translated into Salesforce objects and relationships.",
              "Technical specification covering automation, security, and deployment considerations.",
              "Sandbox creation guide to standardize environments and reduce setup friction."
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Functional brief / requirements (PDF).",
              "Project presentation and deliverables (DOCX/PDF).",
              "Sandbox creation guide (PDF)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & tools",
            items: [
              "Salesforce (data model, automation, security).",
              "Documentation-first approach (specs, guides)."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Salesforce solution design (Tours For Life)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Tours For Life avait besoin d’un blueprint de solution Salesforce avant implémentation : modèle de données, automatisations, règles de sécurité et plan de delivery.",
              "L’objectif : traduire les besoins métier en spécifications fonctionnelles et techniques actionnables, prêtes à être construites et itérées."
            ]
          },
          {
            type: "bullets",
            title: "Problématique",
            items: [
              "Concevoir un modèle de données scalable et aligné avec les opérations terrain.",
              "Définir les limites d’automatisation (Flows vs Apex) et les patterns d’accès sécurité.",
              "Fournir un guide d’onboarding/environnements (création sandbox) pour fiabiliser l’exécution."
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Exigences fonctionnelles et parcours utilisateurs traduits en objets Salesforce et relations.",
              "Spécifications techniques couvrant automatisation, sécurité et considérations de déploiement.",
              "Guide de création sandbox pour standardiser les environnements et réduire les frictions."
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Cahier des charges (PDF).",
              "Présentation projet / livrables (DOCX/PDF).",
              "Guide de création sandbox (PDF)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & outils",
            items: [
              "Salesforce (modèle de données, automatisation, sécurité).",
              "Approche pilotée par la documentation (spécifications, guides)."
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
        src: "/projects/digit-learning-salesforce-update/inscriptions-formation-acheter-firefox-1.png",
        alt: "digit-learning-salesforce-update — 3"
      },
      {
        src: "/projects/digit-learning-salesforce-update/inscriptions-formation-acheter-firefox-2.png",
        alt: "digit-learning-salesforce-update — 4"
      }
    ],
    locales: {
      en: {
        heroSubtitle: "Salesforce application update (Digit Learning)",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "Digit Learning had an existing Salesforce application that required a structured audit, targeted fixes, and clearer operational documentation.",
              "The objective was to improve reliability of business processes (enrollments, statuses, capacity tracking) while keeping the org maintainable." 
            ]
          },
          {
            type: "bullets",
            title: "Problem",
            items: [
              "Clarify requirements through interviews and translate them into actionable changes.",
              "Fix inconsistencies and automate core workflows with safe, testable patterns.",
              "Provide deployment and data import guidance for a reproducible rollout." 
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Audit and analysis reports to identify gaps and root causes.",
              "Configuration and automation improvements (Flows, validation, reporting) aligned with the target process.",
              "Deployment guide + import guide to ensure reliable operations and onboarding." 
            ]
          },
          {
            type: "bullets",
            title: "Deliverables",
            items: [
              "Interview notes (PDF).",
              "Audit report and analysis report (DOCX).",
              "Deployment guide (PDF).",
              "Data import guide (PDF) + CSV templates.",
              "Package / installation link (TXT)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & tools",
            items: [
              "Salesforce (custom objects, Flows, reports/dashboards).",
              "Deployment and documentation practices (repeatable rollout)."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Salesforce application update (Digit Learning)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Digit Learning disposait déjà d’une application Salesforce, mais elle nécessitait un audit structuré, des corrections ciblées et une documentation opérationnelle plus solide.",
              "L’objectif : fiabiliser les processus métier (inscriptions, statuts, suivi des capacités) tout en gardant une org maintenable." 
            ]
          },
          {
            type: "bullets",
            title: "Problématique",
            items: [
              "Clarifier les besoins via entretiens et les traduire en changements concrets.",
              "Corriger les incohérences et automatiser les workflows clés avec des patterns fiables.",
              "Fournir des guides de déploiement et d’import pour un passage en production reproductible." 
            ]
          },
          {
            type: "bullets",
            title: "Solution",
            items: [
              "Rapports d’audit et d’analyse pour identifier écarts et causes racines.",
              "Améliorations de configuration et d’automatisation (Flows, validations, reporting) alignées sur le processus cible.",
              "Guide de déploiement + guide d’import pour fiabiliser l’exploitation et l’onboarding." 
            ]
          },
          {
            type: "bullets",
            title: "Livrables",
            items: [
              "Notes d’entretiens (PDF).",
              "Rapport d’audit et rapport d’analyse (DOCX).",
              "Guide de déploiement (PDF).",
              "Guide d’import des données (PDF) + modèles CSV.",
              "Lien package / installation (TXT)."
            ]
          },
          {
            type: "bullets",
            title: "Stack & outils",
            items: [
              "Salesforce (objets custom, Flows, rapports/tableaux de bord).",
              "Pratiques de déploiement et de documentation (rollout reproductible)."
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
      { src: "/projects/tssr-windows-autopilot-provisioning/tssr-1.webp", alt: "Autopilot provisioning — OOBE / setup" },
      { src: "/projects/tssr-windows-autopilot-provisioning/tssr-2.webp", alt: "Autopilot provisioning — PowerShell hash collection" },
      { src: "/projects/tssr-windows-autopilot-provisioning/tssr-3.webp", alt: "Autopilot provisioning — provisioning flow" },
      { src: "/projects/tssr-windows-autopilot-provisioning/tssr-4.webp", alt: "Autopilot provisioning — validation (grouptag / domain)" }
    ],
    locales: {
      en: {
        heroSubtitle: "Windows Autopilot provisioning (Dell fleet)",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "During my internship (MSP environment), I helped prepare and deliver large device batches for different customers.",
              "The goal was to standardize Windows provisioning so every device is compliant, up to date, and ready for the end user with minimal manual steps."
            ]
          },
          {
            type: "bullets",
            title: "Scope & goals",
            items: [
              "Apply a clean baseline image ('vanilla' Windows) with current OEM drivers.",
              "Collect the hardware hash and hand it over to the Intune/Autopilot administration team for device registration.",
              "Trigger the Autopilot provisioning (apps, scripts, policies), then seal the device for delivery.",
              "Run final checks: drivers, activation, device naming, domain / tenant targeting (group tag)."
            ]
          },
          {
            type: "timeline",
            title: "Operational runbook (high level)",
            steps: [
              { title: "1) Apply baseline image", description: "Boot from the Dell ImageAssist USB key and deploy the vanilla Windows 10 image with the correct, up‑to‑date model drivers." },
              { title: "2) Enter OOBE + open CMD", description: "At first boot (OOBE), open a command prompt with Shift+F10 (or Shift+Fn+F10 depending on the device)." },
              { title: "3) Run PowerShell + allow scripts", description: "Start PowerShell, set the execution policy to allow the Autopilot script to run (per the runbook). Use an offline USB key to export the CSV output." },
              { title: "4) Collect hardware hash", description: "Install and run Get‑WindowsAutopilotInfo to export the hardware hash as a CSV file." },
              { title: "5) Registration workflow", description: "Send the CSV to the customer/DSI team. Wait for confirmation that the device has been imported into Intune and assigned to the correct Autopilot profile." },
              { title: "6) Start Autopilot provisioning", description: "Close the console and trigger the provisioning step (e.g., the Windows key action defined by the customer). Start provisioning and monitor progress." },
              { title: "7) Reseal & reboot", description: "Once provisioning completes, reseal the device so it boots into the standard first‑use experience. Reboot and verify the expected lock screen / group tag." },
              { title: "8) Final validation", description: "Verify naming conventions, domain/tenant targeting, Windows activation, and that required apps and policies are in place." }
            ]
          },
          {
            type: "metrics",
            title: "What I measured / validated",
            items: [
              { label: "Provisioning time per device", value: "~35 minutes", note: "Varies with network bandwidth and app/policy payload." },
              { label: "Evidence collected", value: "Autopilot CSV hash + screenshots", note: "Used for traceability and handover." },
              { label: "Quality gates", value: "Drivers + activation + naming + policies", note: "Final checks before delivery to end users." }
            ]
          },
          {
            type: "bullets",
            title: "Tools",
            items: [
              "Dell ImageAssist (vanilla image + current drivers).",
              "PowerShell + Get‑WindowsAutopilotInfo (hardware hash export).",
              "Microsoft Intune / Autopilot (import, profile assignment, provisioning).",
              "Windows activation & device readiness checks (drivers, updates)."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Provisionnement Windows Autopilot (parc Dell)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Lors de mon stage (environnement MSP), j’ai participé à la préparation et à la livraison de lots de postes pour plusieurs clients.",
              "L’objectif était de standardiser le provisionnement Windows afin que chaque machine soit conforme, à jour et prête à l’emploi, avec un minimum d’actions manuelles."
            ]
          },
          {
            type: "bullets",
            title: "Périmètre & objectifs",
            items: [
              "Appliquer une image de base propre (Windows « vanilla ») avec des drivers OEM récents.",
              "Récupérer le hardware hash et le transmettre à l’équipe d’administration Intune/Autopilot pour l’enrôlement.",
              "Déclencher le provisionnement Autopilot (apps, scripts, politiques), puis « resceller » le poste pour la livraison.",
              "Effectuer les contrôles finaux : drivers, activation, nommage, ciblage domaine/tenant (group tag)."
            ]
          },
          {
            type: "timeline",
            title: "Procédure opérationnelle (niveau macro)",
            steps: [
              { title: "1) Appliquer l’image de base", description: "Démarrer sur la clé USB Dell ImageAssist et déployer l’image Windows 10 « vanilla » avec les pilotes à jour pour le modèle." },
              { title: "2) OOBE + ouverture du CMD", description: "Au premier démarrage (OOBE), ouvrir un invite de commandes avec Shift+F10 (ou Shift+Fn+F10 selon le modèle)." },
              { title: "3) PowerShell + autoriser l’exécution", description: "Lancer PowerShell, ajuster la policy d’exécution pour exécuter le script Autopilot (selon la procédure). Utiliser une clé USB pour exporter le CSV." },
              { title: "4) Récupérer le hardware hash", description: "Installer et exécuter Get‑WindowsAutopilotInfo afin d’exporter le hardware hash dans un fichier CSV." },
              { title: "5) Workflow d’enrôlement", description: "Transmettre le CSV à l’équipe DSI/Intune du client. Attendre la confirmation d’import dans Intune et d’affectation au bon profil Autopilot." },
              { title: "6) Lancer le provisionnement Autopilot", description: "Fermer la console puis déclencher le mode de provisionnement (action spécifique client). Démarrer et suivre l’avancement." },
              { title: "7) Resceller & redémarrer", description: "Une fois terminé, resceller le poste pour revenir à une expérience « prêt à livrer ». Redémarrer et vérifier l’écran attendu (grouptag / verrouillage)." },
              { title: "8) Validation finale", description: "Contrôler les conventions de nommage, le ciblage (domaine/tenant), l’activation Windows, et la présence des applications/politiques requises." }
            ]
          },
          {
            type: "metrics",
            title: "Contrôles & résultats",
            items: [
              { label: "Temps de provisionnement / poste", value: "≈ 35 minutes", note: "Variable selon le réseau et la charge (apps/politiques)." },
              { label: "Preuves / traçabilité", value: "CSV hardware hash + captures", note: "Pour la passation et le suivi." },
              { label: "Gates qualité", value: "Drivers + activation + nommage + policies", note: "Avant remise à l’utilisateur final." }
            ]
          },
          {
            type: "bullets",
            title: "Outils",
            items: [
              "Dell ImageAssist (image « vanilla » + drivers récents).",
              "PowerShell + Get‑WindowsAutopilotInfo (export hardware hash).",
              "Microsoft Intune / Autopilot (import, affectation profil, provisioning).",
              "Vérifications Windows (activation, drivers, mises à jour)."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-secure-wipe-and-imaging",
    locales: {
      en: {
        heroSubtitle: "Secure device preparation at scale",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "In an MSP context, I supported the preparation of customer device batches before deployment to end users.",
              "The workflow combined certified data erasure with reimaging and final quality checks (drivers, updates, activation)."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Performed secure wipes on desktop devices using Blancco (license‑based certified erasure).",
              "Reinstalled a standardized Windows image using a Sysprep‑based deployment method.",
              "Updated drivers and firmware where required and applied OS updates.",
              "Validated Windows activation and delivery readiness for each device."
            ]
          },
          {
            type: "bullets",
            title: "Why it matters",
            items: [
              "Certified wipe provides auditable evidence of data destruction and reduces legal/security risk.",
              "Standard imaging reduces variability, accelerates delivery, and improves supportability (known baseline).",
              "Final checks prevent avoidable incidents on day‑1 (missing drivers, activation issues, outdated OS)."
            ]
          },
          {
            type: "bullets",
            title: "Tools",
            items: [
              "Blancco (secure erase + reporting).",
              "Sysprep imaging workflow.",
              "Windows update / driver management and activation validation."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Préparation sécurisée de postes à grande échelle",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "En environnement MSP, j’ai participé à la préparation de lots de postes clients avant déploiement aux utilisateurs finaux.",
              "Le workflow combinait effacement sécurisé certifié, re‑imaging et contrôles qualité (drivers, mises à jour, activation)."
            ]
          },
          {
            type: "bullets",
            title: "Réalisations",
            items: [
              "Effacement sécurisé des postes fixes avec Blancco (effacement certifié via licences).",
              "Réinstallation d’une image Windows standardisée via une méthode de déploiement basée sur Sysprep.",
              "Mise à jour des drivers/firmwares si nécessaire et application des mises à jour Windows.",
              "Vérification de l’activation Windows et de l’état « prêt à livrer » pour chaque poste."
            ]
          },
          {
            type: "bullets",
            title: "Apport",
            items: [
              "L’effacement certifié fournit une traçabilité (preuve) et réduit le risque légal/sécurité.",
              "L’image standard réduit la variabilité, accélère la livraison et facilite le support (baseline connue).",
              "Les contrôles finaux évitent les incidents « day‑1 » (drivers manquants, activation, OS obsolète)."
            ]
          },
          {
            type: "bullets",
            title: "Outils",
            items: [
              "Blancco (effacement sécurisé + reporting).",
              "Workflow d’image Sysprep.",
              "Gestion Windows Update / drivers et contrôle d’activation."
            ]
          }
        ]
      }
    }
  },

  {
    slug: "tssr-incident-management-rmm",
    gallery: [
      { src: "/projects/tssr-incident-management-rmm/datto-rmm-dashboard-redacted.jpg", alt: "Datto RMM — dashboard" },
      { src: "/projects/tssr-incident-management-rmm/autotask-dashboard-redacted.jpg", alt: "Autotask — ticketing dashboard" },
      { src: "/projects/tssr-incident-management-rmm/malwarebytes-activity-redacted.jpg", alt: "Malwarebytes — activity / detections" },
      { src: "/projects/tssr-incident-management-rmm/mitre-attack.webp", alt: "MITRE ATT&CK — reference" }
    ],
    locales: {
      en: {
        heroSubtitle: "Incident handling with RMM, ticketing & endpoint security",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "During my internship at Midrange Group, I worked alongside the operations team (Exploitation) and the technical support team.",
              "The workflow combined a ticketing system (Autotask), remote monitoring/management (Datto RMM + Splashtop), and endpoint security tooling (e.g., Webroot / Malwarebytes)."
            ]
          },
          {
            type: "bullets",
            title: "Mission",
            items: [
              "Triage user incidents, reproduce the issue when possible, and collect the right evidence.",
              "Use remote access to investigate quickly (without onsite travel).",
              "Apply a safe remediation (allowlisting, configuration change, or security action), then validate with the user.",
              "Document the resolution in the ticket and capture learnings as a lightweight runbook."
            ]
          },
          {
            type: "timeline",
            title: "Typical incident flow",
            steps: [
              { title: "Ticket intake", description: "Incident opened by phone/email/agent; assignment to Support or Operations depending on scope." },
              { title: "Remote session", description: "Start a Splashtop session from Datto RMM to observe the issue live and gather context." },
              { title: "Investigation", description: "Check endpoint security alerts/logs, confirm the exact blocked resource, and identify the control that triggered (policy/rule/category)." },
              { title: "Remediation", description: "Apply the least‑privilege fix (e.g., allowlist a legitimate URL/domain in the security console) and keep an audit trail." },
              { title: "Validation", description: "Retest with the user, confirm normal behavior, and ensure no side effects on other policies or endpoints." },
              { title: "Closure", description: "Update the Autotask ticket: steps, root cause, changes made, and prevention recommendations." }
            ]
          },
          {
            type: "bullets",
            title: "Tools & references",
            items: [
              "Autotask (ticket lifecycle, communication, traceability).",
              "Datto RMM + Splashtop (remote monitoring and remote assistance).",
              "Endpoint security consoles (Webroot / Malwarebytes) for investigation and allowlisting.",
              "MITRE ATT&CK as a shared vocabulary when mapping suspicious activity." 
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Gestion d’incidents avec RMM, ticketing & outils de sécurité",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Lors de mon stage chez Midrange Group, j’ai travaillé en lien avec l’équipe Exploitation et l’équipe Support Technique.",
              "Le fonctionnement s’appuyait sur un outil de ticketing (Autotask), une plateforme RMM (Datto RMM + Splashtop) et des consoles de sécurité endpoint (ex. Webroot / Malwarebytes)."
            ]
          },
          {
            type: "bullets",
            title: "Mission",
            items: [
              "Qualifier l’incident (symptômes, impact, périmètre) et collecter des éléments factuels.",
              "Investiguer à distance via une prise en main (Splashtop) pour gagner du temps et éviter un déplacement.",
              "Appliquer une remédiation sûre et traçable (ex. exclusion/allowlist d’une URL légitime, ajustement de règles).",
              "Valider avec l’utilisateur, puis documenter la résolution et les actions préventives."
            ]
          },
          {
            type: "timeline",
            title: "Déroulé type d’un incident",
            steps: [
              { title: "Ouverture / affectation", description: "Ticket ouvert par téléphone / email / agent; affectation Support ou Exploitation selon la nature du sujet." },
              { title: "Prise en main", description: "Connexion Splashtop depuis Datto RMM pour observer le problème et comprendre le contexte." },
              { title: "Investigation", description: "Analyse des alertes/logs de sécurité, identification précise de la ressource bloquée et de la règle/politique déclenchée." },
              { title: "Remédiation", description: "Correction au plus juste (least privilege) : par exemple, ajout en allowlist/exclusion d’un domaine/URL légitime, avec traçabilité." },
              { title: "Validation", description: "Re-tests avec l’utilisateur, vérification de l’absence d’effets de bord sur les autres postes/politiques." },
              { title: "Clôture", description: "Mise à jour du ticket Autotask : cause racine, actions réalisées, preuves, recommandations." }
            ]
          },
          {
            type: "bullets",
            title: "Outils & références",
            items: [
              "Autotask (cycle de vie des tickets, communication, traçabilité).",
              "Datto RMM + Splashtop (supervision et assistance à distance).",
              "Consoles endpoint (Webroot / Malwarebytes) pour analyser et autoriser/bloquer.",
              "MITRE ATT&CK pour cartographier/qualifier une activité suspecte." 
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-acronis-backup-recovery",
    gallery: [
      { src: "/projects/tssr-acronis-backup-recovery/acronis-dashboard-redacted.jpg", alt: "Acronis — dashboard / alerts" }
    ],
    locales: {
      en: {
        heroSubtitle: "Backup & recovery operations (Acronis)",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "As part of operations work, I used Acronis Cyber Protect Cloud / Acronis Cyber Backup to supervise backups for client environments.",
              "The objective was to keep backups reliable: detect failures early, remediate root causes (storage, connectivity, corruption), and validate recovery readiness."
            ]
          },
          {
            type: "bullets",
            title: "What I did",
            items: [
              "Daily dashboard review (alerts, job status, storage consumption).",
              "Investigate failures: full repository, offline host, transfer/network issues, corrupted backups.",
              "Remediation: cleanup/retention adjustments, fix connectivity (NAS/network), recreate plans when needed, rerun jobs.",
              "Verification: confirm job success and, when applicable, perform/prepare restore checks (granular or full).",
              "Document recurring causes and the remediation playbook."
            ]
          },
          {
            type: "timeline",
            title: "Operational workflow",
            steps: [
              { title: "Supervise", description: "Check dashboard alerts and failed jobs across sites/clients." },
              { title: "Diagnose", description: "Identify the failure reason (storage thresholds, offline devices, corruption, network transfer)." },
              { title: "Fix", description: "Apply the right corrective action: retention cleanup, plan adjustment, network/NAS remediation, recreate a plan if corrupted." },
              { title: "Validate", description: "Rerun backup jobs and verify success; ensure recovery objectives remain achievable." },
              { title: "Report", description: "Update runbooks and share prevention recommendations with the team." }
            ]
          },
          {
            type: "bullets",
            title: "Tools",
            items: [
              "Acronis Cyber Protect Cloud (cloud backups + security visibility).",
              "Acronis Cyber Backup (local/NAS backups, centralized management).",
              "Datto RMM (as a complementary view for endpoints/availability when needed)."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Exploitation sauvegardes & restauration (Acronis)",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Dans un contexte d’exploitation, j’ai utilisé Acronis Cyber Protect Cloud / Acronis Cyber Backup pour superviser les sauvegardes d’environnements clients.",
              "L’objectif : garantir la fiabilité des sauvegardes (détection rapide des échecs), corriger les causes racines (stockage, réseau, corruption) et maintenir la capacité de restauration."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai fait",
            items: [
              "Revue quotidienne des tableaux de bord (alertes, jobs en échec, capacité de stockage).",
              "Analyse des causes d’échec : dépôt saturé (seuil ~75%), hôte arrêté/déconnecté, problèmes réseau/transfert, sauvegarde corrompue.",
              "Remédiation : nettoyage/rétention, correction réseau/NAS, recréation de plan si corruption, relance des jobs.",
              "Vérification : confirmation du succès et préparation/contrôle de la capacité de restauration (granulaire ou complète).",
              "Capitalisation : documentation des causes récurrentes et d’une procédure reproductible."
            ]
          },
          {
            type: "timeline",
            title: "Workflow d’exploitation",
            steps: [
              { title: "Superviser", description: "Contrôler alertes et jobs en échec sur les parcs / sites." },
              { title: "Diagnostiquer", description: "Identifier la cause (stockage, hôte hors-ligne, corruption, réseau/transfert)." },
              { title: "Corriger", description: "Appliquer l’action adaptée : rétention/nettoyage, ajustements, correction NAS/réseau, recréation de plan si nécessaire." },
              { title: "Valider", description: "Relancer la sauvegarde et vérifier la réussite; s’assurer que les objectifs de restauration restent atteignables." },
              { title: "Documenter", description: "Mettre à jour runbooks et recommandations de prévention." }
            ]
          },
          {
            type: "bullets",
            title: "Outils",
            items: [
              "Acronis Cyber Protect Cloud (sauvegardes cloud + visibilité sécurité).",
              "Acronis Cyber Backup (sauvegardes locales/NAS, gestion centralisée).",
              "Datto RMM (vue complémentaire sur disponibilité/postes si besoin)."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-virtualization-windows-server-2022",
    gallery: [
      { src: "/projects/tssr-virtualization-windows-server-2022/tssr-1.png", alt: "VMware Workstation — VM creation" },
      { src: "/projects/tssr-virtualization-windows-server-2022/tssr-2.webp", alt: "Windows Server 2022 — network settings" },
      { src: "/projects/tssr-virtualization-windows-server-2022/tssr-3.webp", alt: "Active Directory — OU/users/groups" },
      { src: "/projects/tssr-virtualization-windows-server-2022/tssr-4.webp", alt: "WDS — PXE deployment" }
    ],
    locales: {
      en: {
        heroSubtitle: "Virtualization lab: Windows Server 2022 + AD DS",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "Training lab to build a full Windows infrastructure from scratch on a type‑2 hypervisor.",
              "The objective was to simulate a small company environment and validate key system administration tasks end‑to‑end."
            ]
          },
          {
            type: "bullets",
            title: "What I built",
            items: [
              "VM networking design (NAT network, controlled DHCP, static addressing).",
              "Windows Server 2022 installation + baseline hardening (static IPv4, IPv6 disable when required, VMware Tools).",
              "Directory services stack: AD DS + DNS + DHCP.",
              "Deployment services: WDS with PXE boot + Windows 10 client deployment and domain join.",
              "Ops building blocks: shared folder, OU structure, groups/users, roaming profile, mapped drive, GPOs."
            ]
          },
          {
            type: "timeline",
            title: "Implementation steps",
            steps: [
              { title: "1) Hypervisor & VM creation", description: "Create the server VM in VMware Workstation (resources aligned with the lab spec). Configure a dedicated NAT network (e.g., 192.168.100.0/24) with DHCP disabled when required." },
              { title: "2) Server installation", description: "Install Windows Server 2022, then set a static IPv4 address and apply baseline settings. Install VMware Tools for better UX and drivers." },
              { title: "3) Server identity", description: "Rename the server as per naming convention and reboot to apply changes." },
              { title: "4) AD DS / DNS", description: "Install AD DS (DNS included), promote the server to a domain controller, and validate name resolution." },
              { title: "5) DHCP", description: "Install DHCP, define scopes/options, and validate lease distribution for lab clients." },
              { title: "6) File services & structure", description: "Add an extra disk if needed, create and share a folder, set share/NTFS permissions, and model OUs/groups/users." },
              { title: "7) GPO & roaming", description: "Create and link GPOs, configure roaming profiles and mapped drives, then validate on the client side." },
              { title: "8) WDS / PXE deployment", description: "Import boot/install images, configure PXE, deploy a Windows 10 client via network boot, join it to the domain, and confirm policies apply." }
            ]
          },
          {
            type: "bullets",
            title: "Key takeaways",
            items: [
              "Treat networking (addressing, DNS, DHCP) as a prerequisite for everything else.",
              "Automate / standardize where possible (WDS deployment, GPO baselines).",
              "Validate continuously: after each role install, confirm expected behavior before moving on."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Lab virtualisation : Windows Server 2022 + AD DS",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Lab de formation visant à construire une infrastructure Windows complète sur un hyperviseur de type 2.",
              "L’objectif : simuler un environnement « petite entreprise » et valider les tâches d’administration de bout en bout."
            ]
          },
          {
            type: "bullets",
            title: "Ce que j’ai construit",
            items: [
              "Conception du réseau VM (NAT dédié, DHCP maîtrisé, adressage statique).",
              "Installation Windows Server 2022 + paramétrage de base (IPv4 statique, désactivation IPv6 si demandé, VMware Tools).",
              "Socle annuaire : AD DS + DNS + DHCP.",
              "Services de déploiement : WDS avec boot PXE + déploiement d’un client Windows 10 et jointure au domaine.",
              "Briques « ops » : partage de fichiers, UO, groupes/utilisateurs, profil itinérant, lecteur mappé, GPO."
            ]
          },
          {
            type: "timeline",
            title: "Étapes de réalisation",
            steps: [
              { title: "1) Hyperviseur & création VM", description: "Créer la VM serveur dans VMware Workstation (ressources selon le cahier des charges). Configurer un réseau NAT dédié (ex. 192.168.100.0/24) avec DHCP désactivé si requis." },
              { title: "2) Installation du serveur", description: "Installer Windows Server 2022, puis configurer une IPv4 statique et appliquer les réglages de base. Installer VMware Tools pour les drivers et le confort." },
              { title: "3) Identité du serveur", description: "Renommer le serveur selon la convention et redémarrer pour appliquer." },
              { title: "4) AD DS / DNS", description: "Installer AD DS (DNS inclus), promouvoir le serveur en contrôleur de domaine et valider la résolution DNS." },
              { title: "5) DHCP", description: "Installer DHCP, définir les scopes/options, puis valider la distribution des baux côté clients." },
              { title: "6) Fichiers & structure", description: "Ajouter un disque si nécessaire, créer/partager un dossier, régler les droits (partage + NTFS), modéliser UO/groupes/utilisateurs." },
              { title: "7) GPO & itinérance", description: "Créer et lier les GPO, configurer les profils itinérants et les lecteurs mappés, puis valider côté poste client." },
              { title: "8) WDS / déploiement PXE", description: "Importer les images boot/install, configurer PXE, déployer un client Windows 10 via le réseau, le joindre au domaine et vérifier l’application des GPO." }
            ]
          },
          {
            type: "bullets",
            title: "Points clés",
            items: [
              "Le réseau (adressage, DNS, DHCP) est un prérequis : sans lui, tout le reste tombe.",
              "Standardiser/automatiser dès que possible (WDS, baselines GPO).",
              "Valider au fil de l’eau : après chaque rôle, vérifier le résultat avant de poursuivre."
            ]
          }
        ]
      }
    }
  },
  {
    slug: "tssr-pfsense-squid-proxy",
    gallery: [
      { src: "/projects/tssr-pfsense-squid-proxy/tssr-1.webp", alt: "pfSense — interfaces WAN/LAN" },
      { src: "/projects/tssr-pfsense-squid-proxy/tssr-2.webp", alt: "Squid — proxy configuration" },
      { src: "/projects/tssr-pfsense-squid-proxy/tssr-3.webp", alt: "Firewall rules — allow proxy traffic" },
      { src: "/projects/tssr-pfsense-squid-proxy/tssr-4.webp", alt: "Client settings — proxy + validation" }
    ],
    locales: {
      en: {
        heroSubtitle: "Network security lab: pfSense + Squid proxy",
        sections: [
          {
            type: "text",
            title: "Context",
            paragraphs: [
              "Training lab to secure internet access for a private network using a dedicated firewall and an explicit proxy.",
              "The design used a pfSense VM with two network interfaces: WAN bridged to the upstream internet access and LAN connected to the internal virtual network."
            ]
          },
          {
            type: "bullets",
            title: "Goals",
            items: [
              "Provide a controlled egress point (firewall) for the private network.",
              "Add an HTTP/HTTPS proxy (Squid) to enforce access control lists and generate audit logs.",
              "Keep the setup reproducible with a clear runbook and validation checklist."
            ]
          },
          {
            type: "timeline",
            title: "Implementation steps",
            steps: [
              { title: "1) Install pfSense VM", description: "Deploy a pfSense VM with two NICs and complete the base installation." },
              { title: "2) Configure WAN", description: "Set WAN parameters according to the ISP / upstream access method and confirm outbound connectivity." },
              { title: "3) Configure LAN", description: "Assign LAN IP/subnet to match the private network and ensure clients can reach the gateway." },
              { title: "4) Install Squid", description: "From pfSense Packages, install Squid and open the Squid Proxy Server settings under Services." },
              { title: "5) Configure proxy", description: "Enable the proxy, set the listening port, define ACLs (who can use it, what can be accessed), and tune cache/options as required." },
              { title: "6) Firewall rules", description: "Create rules to allow LAN clients to reach the proxy and allow the proxy to reach the internet (HTTP/HTTPS). Keep rules minimal and explicit." },
              { title: "7) Client configuration", description: "Configure each client to use the proxy (IP + port) at OS or browser level." },
              { title: "8) Validation", description: "Test browsing, verify blocks/allow rules, and review Squid logs to confirm policy enforcement and traceability." }
            ]
          },
          {
            type: "bullets",
            title: "Security notes",
            items: [
              "Prefer least‑privilege rules: allow only required egress ports and destinations.",
              "For HTTPS inspection, be explicit about legal/compliance constraints and certificate management (lab scope unless mandated).",
              "Log review is part of operations: validate that logs are usable and stored safely."
            ]
          }
        ]
      },
      fr: {
        heroSubtitle: "Lab sécurité réseau : pfSense + proxy Squid",
        sections: [
          {
            type: "text",
            title: "Contexte",
            paragraphs: [
              "Lab de formation visant à sécuriser l’accès Internet d’un réseau privé via un firewall dédié et un proxy explicite.",
              "Le design repose sur une VM pfSense avec deux interfaces : WAN en bridge vers l’accès Internet et LAN connecté au réseau interne de virtualisation."
            ]
          },
          {
            type: "bullets",
            title: "Objectifs",
            items: [
              "Fournir un point de sortie contrôlé (pare‑feu) pour le réseau privé.",
              "Ajouter un proxy HTTP/HTTPS (Squid) pour appliquer des ACL et produire des logs d’audit.",
              "Rendre l’installation reproductible avec une procédure claire et une checklist de validation."
            ]
          },
          {
            type: "timeline",
            title: "Étapes de mise en œuvre",
            steps: [
              { title: "1) Installer la VM pfSense", description: "Déployer une VM pfSense avec 2 cartes réseau et finaliser l’installation de base." },
              { title: "2) Configurer le WAN", description: "Renseigner les paramètres WAN selon le mode d’accès (FAI / amont) et valider la connectivité sortante." },
              { title: "3) Configurer le LAN", description: "Définir l’IP et le sous‑réseau LAN correspondant au réseau privé et vérifier l’accès à la passerelle." },
              { title: "4) Installer Squid", description: "Depuis Packages, installer Squid puis accéder à Services > Squid Proxy Server." },
              { title: "5) Paramétrer le proxy", description: "Activer le proxy, définir le port d’écoute, configurer les ACL (qui/quoi), et ajuster cache/options selon le besoin." },
              { title: "6) Règles firewall", description: "Créer les règles permettant aux clients LAN d’atteindre le proxy, et au proxy de sortir vers Internet (HTTP/HTTPS). Rester minimal et explicite." },
              { title: "7) Configurer les clients", description: "Paramétrer chaque client pour utiliser le proxy (IP + port) au niveau OS ou navigateur." },
              { title: "8) Valider", description: "Tester la navigation, vérifier les blocages/autorisation, et contrôler les logs Squid pour confirmer l’application des règles et la traçabilité." }
            ]
          },
          {
            type: "bullets",
            title: "Notes sécurité",
            items: [
              "Appliquer le moindre privilège : n’autoriser que les flux nécessaires (ports/destinations).",
              "Pour l’inspection HTTPS : cadrer les contraintes légales/compliance et la gestion des certificats (hors scope sauf demande).",
              "La revue des logs fait partie du RUN : s’assurer que les logs sont lisibles et correctement conservés."
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
        src: "/projects/tai-disk-partition-backup-restore/tai-1.webp",
        alt: "tai-disk-partition-backup-restore — 1"
      },
      {
        src: "/projects/tai-disk-partition-backup-restore/tai-2.webp",
        alt: "tai-disk-partition-backup-restore — 2"
      },
      {
        src: "/projects/tai-disk-partition-backup-restore/tai-3.webp",
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
        src: "/projects/tai-roaming-profile-adds/tai-1.webp",
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
        src: "/projects/tai-email-configuration-guide/tai-1.webp",
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
  gallery: [
    {
      src: "/projects/hemebiotech-java-debug/cover.png",
      alt: "hemebiotech-java-debug — cover"
    }
  ],
  locales: {
    en: {
      heroSubtitle: "Debugging and stabilizing a Java back-end (HemeBiotech)",
      sections: [
        {
          type: "text",
          title: "Context",
          paragraphs: [
            "Training project focused on diagnosing and fixing defects in a Java application.",
            "Goal: understand the existing codebase, reproduce issues, apply targeted fixes, and validate via tests."
          ]
        },
        {
          type: "bullets",
          title: "What I did",
          items: [
            "Analyzed the initial project brief and identified expected behaviors.",
            "Reproduced defects locally and traced root causes in the code (DAO/services/tests).",
            "Applied fixes with minimal, safe changes to restore correct behavior.",
            "Added/updated tests when needed to prevent regressions."
          ]
        },
        {
          type: "bullets",
          title: "Verification",
          items: [
            "Ran unit tests and validated functional scenarios described in the brief.",
            "Checked edge cases and ensured changes did not break existing features."
          ]
        },
        {
          type: "resources",
          title: "Resources",
          items: [
            {
              label: "Project brief (PDF)",
              href: "/docs/projects/hemebiotech-java-debug/guide-etapes-cles.pdf"
            },
            {
              label: "Email exchange (PDF)",
              href: "/docs/projects/hemebiotech-java-debug/echange-email.pdf",
              note: "Sanitized"
            },
            {
              label: "GitHub repository",
              href: "https://github.com/Aiyeesha/DAHOUMANE-Aicha-Imene-Debuggez-une-application-Java.git"
            },
            {
              label: "Download code link (PDF)",
              href: "/docs/projects/hemebiotech-java-debug/code.pdf"
            }
          ]
        },
        {
          type: "code",
          title: "Repository link",
          language: "text",
          code: "https://github.com/Aiyeesha/DAHOUMANE-Aicha-Imene-Debuggez-une-application-Java.git",
          downloadUrl: "/docs/projects/hemebiotech-java-debug/code.pdf"
        }
      ]
    },
    fr: {
      heroSubtitle: "Débogage et stabilisation d’un back-end Java (HemeBiotech)",
      sections: [
        {
          type: "text",
          title: "Contexte",
          paragraphs: [
            "Projet de formation centré sur le diagnostic et la correction de dysfonctionnements dans une application Java.",
            "Objectif : comprendre le code existant, reproduire les anomalies, corriger de manière ciblée et valider par des tests."
          ]
        },
        {
          type: "bullets",
          title: "Ce que j’ai fait",
          items: [
            "Analyse du brief et des comportements attendus.",
            "Reproduction des anomalies en local et recherche des causes racines (DAO/services/tests).",
            "Corrections minimales et sûres pour rétablir le comportement attendu.",
            "Ajout/ajustement de tests si nécessaire pour éviter les régressions."
          ]
        },
        {
          type: "bullets",
          title: "Validation",
          items: [
            "Exécution des tests unitaires et validation des scénarios fonctionnels.",
            "Vérification de cas limites et absence d’impact négatif sur l’existant."
          ]
        },
        {
          type: "resources",
          title: "Ressources",
          items: [
            {
              label: "Brief du projet (PDF)",
              href: "/docs/projects/hemebiotech-java-debug/guide-etapes-cles.pdf"
            },
            {
              label: "Échange email (PDF)",
              href: "/docs/projects/hemebiotech-java-debug/echange-email.pdf",
              note: "Sanitisé"
            },
            {
              label: "Dépôt GitHub",
              href: "https://github.com/Aiyeesha/DAHOUMANE-Aicha-Imene-Debuggez-une-application-Java.git"
            },
            {
              label: "Télécharger le lien code (PDF)",
              href: "/docs/projects/hemebiotech-java-debug/code.pdf"
            }
          ]
        },
        {
          type: "code",
          title: "Lien du dépôt",
          language: "text",
          code: "https://github.com/Aiyeesha/DAHOUMANE-Aicha-Imene-Debuggez-une-application-Java.git",
          downloadUrl: "/docs/projects/hemebiotech-java-debug/code.pdf"
        }
      ]
    }
  }
},

{
  slug: "parkit-java-testing",
  gallery: [
    {
      src: "/projects/parkit-java-testing/2024-06-07 00_45_59-TEST JACOCO Parking Service class.png",
      alt: "parkit-java-testing — tests"
    },
    {
      src: "/projects/parkit-java-testing/2024-06-07 00_48_38-TEST Surefire with details in Clone of WIN10 DEV SALESFORCE - VMware Workstation.png",
      alt: "parkit-java-testing — surefire"
    }
  ],
  locales: {
    en: {
      heroSubtitle: "Testing and validating a Java feature implementation (Parkit)",
      sections: [
        {
          type: "text",
          title: "Context",
          paragraphs: [
            "Training project focused on test strategy, correctness and non‑regression on a Java application.",
            "Goal: validate an implementation, strengthen tests, and provide evidence (reports, coverage)."
          ]
        },
        {
          type: "bullets",
          title: "What I did",
          items: [
            "Reviewed functional expectations and existing code paths.",
            "Executed and improved unit tests (JUnit) to cover the main scenarios and edge cases.",
            "Used build tooling and reports (Surefire / JaCoCo) to confirm execution and coverage.",
            "Documented findings and validated the final behavior."
          ]
        },
        {
          type: "resources",
          title: "Resources",
          items: [
            {
              label: "Project brief (PDF)",
              href: "/docs/projects/parkit-java-testing/guide-etapes.pdf"
            },
            {
              label: "Technical onboarding kit (PDF)",
              href: "/docs/projects/parkit-java-testing/kit-technique-onboarding.pdf"
            },
            {
              label: "GitHub repository",
              href: "https://github.com/Aiyeesha/ParkingSystem.git"
            },
            {
              label: "Download repository link (TXT)",
              href: "/docs/projects/parkit-java-testing/code.txt"
            }
          ]
        },
        {
          type: "code",
          title: "Repository link",
          language: "text",
          code: "https://github.com/Aiyeesha/ParkingSystem.git",
          downloadUrl: "/docs/projects/parkit-java-testing/code.txt"
        }
      ]
    },
    fr: {
      heroSubtitle: "Tests et validation d’une fonctionnalité Java (Parkit)",
      sections: [
        {
          type: "text",
          title: "Contexte",
          paragraphs: [
            "Projet de formation orienté stratégie de test, validation fonctionnelle et non‑régression sur une application Java.",
            "Objectif : valider une implémentation, renforcer les tests et produire des preuves (rapports, couverture)."
          ]
        },
        {
          type: "bullets",
          title: "Ce que j’ai fait",
          items: [
            "Analyse des attentes fonctionnelles et des chemins de code existants.",
            "Exécution et amélioration des tests unitaires (JUnit) pour couvrir scénarios principaux et cas limites.",
            "Exploitation des rapports de build (Surefire / JaCoCo) pour vérifier l’exécution et la couverture.",
            "Documentation des résultats et validation du comportement final."
          ]
        },
        {
          type: "resources",
          title: "Ressources",
          items: [
            {
              label: "Brief du projet (PDF)",
              href: "/docs/projects/parkit-java-testing/guide-etapes.pdf"
            },
            {
              label: "Kit technique onboarding (PDF)",
              href: "/docs/projects/parkit-java-testing/kit-technique-onboarding.pdf"
            },
            {
              label: "Dépôt GitHub",
              href: "https://github.com/Aiyeesha/ParkingSystem.git"
            },
            {
              label: "Télécharger le lien du dépôt (TXT)",
              href: "/docs/projects/parkit-java-testing/code.txt"
            }
          ]
        },
        {
          type: "code",
          title: "Lien du dépôt",
          language: "text",
          code: "https://github.com/Aiyeesha/ParkingSystem.git",
          downloadUrl: "/docs/projects/parkit-java-testing/code.txt"
        }
      ]
    }
  }
},

{
  slug: "pochlib-ui",
  gallery: [
    {
      src: "/projects/pochlib-ui/cover.png",
      alt: "pochlib-ui — cover"
    }
  ],
  locales: {
    en: {
      heroSubtitle: "Front-end UI implementation for Poch'Lib",
      sections: [
        {
          type: "text",
          title: "Context",
          paragraphs: [
            "Training project focused on building a clean, usable UI based on functional specifications.",
            "Goal: deliver HTML/CSS/JS screens that match the spec and are easy to extend."
          ]
        },
        {
          type: "bullets",
          title: "What I did",
          items: [
            "Translated the functional spec into pages/components and UI states.",
            "Implemented layouts and interactions using HTML, CSS and vanilla JavaScript.",
            "Ensured responsive behavior and consistent typography/spacing."
          ]
        },
        {
          type: "resources",
          title: "Resources",
          items: [
            {
              label: "Functional specifications (PDF)",
              href: "/docs/projects/pochlib-ui/specifications.pdf"
            },
            {
              label: "GitHub repository",
              href: "https://github.com/Aiyeesha/Projet-6-Creez-une-interface-utilisateur-pour-votre-application-PochLib.git"
            },
            {
              label: "Download repository link (TXT)",
              href: "/docs/projects/pochlib-ui/code.txt"
            }
          ]
        },
        {
          type: "code",
          title: "Repository link",
          language: "text",
          code: "https://github.com/Aiyeesha/Projet-6-Creez-une-interface-utilisateur-pour-votre-application-PochLib.git",
          downloadUrl: "/docs/projects/pochlib-ui/code.txt"
        }
      ]
    },
    fr: {
      heroSubtitle: "Implémentation d’une interface front-end pour Poch’Lib",
      sections: [
        {
          type: "text",
          title: "Contexte",
          paragraphs: [
            "Projet de formation axé sur la réalisation d’une interface utilisateur à partir de spécifications fonctionnelles.",
            "Objectif : livrer des écrans HTML/CSS/JS conformes au brief et facilement maintenables."
          ]
        },
        {
          type: "bullets",
          title: "Ce que j’ai fait",
          items: [
            "Traduction des spécifications en pages/composants et états UI.",
            "Intégration des écrans et interactions en HTML, CSS et JavaScript (vanilla).",
            "Vérification du responsive et cohérence des espacements/typos."
          ]
        },
        {
          type: "resources",
          title: "Ressources",
          items: [
            {
              label: "Spécifications fonctionnelles (PDF)",
              href: "/docs/projects/pochlib-ui/specifications.pdf"
            },
            {
              label: "Dépôt GitHub",
              href: "https://github.com/Aiyeesha/Projet-6-Creez-une-interface-utilisateur-pour-votre-application-PochLib.git"
            },
            {
              label: "Télécharger le lien du dépôt (TXT)",
              href: "/docs/projects/pochlib-ui/code.txt"
            }
          ]
        },
        {
          type: "code",
          title: "Lien du dépôt",
          language: "text",
          code: "https://github.com/Aiyeesha/Projet-6-Creez-une-interface-utilisateur-pour-votre-application-PochLib.git",
          downloadUrl: "/docs/projects/pochlib-ui/code.txt"
        }
      ]
    }
  }
}

];
