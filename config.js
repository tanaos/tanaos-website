export const Config = {
    // Website
    WEBSITE_BASE_URL: 'https://tanaos.com/',

    // API
    API_BASE_URL: 'https://compute.tanaos.com',

    // Platform
    PLATFORM_BASE_URL: 'https://platform.tanaos.com',

    // Docs
    DOCS_URL: 'https://docs.tanaos.com/artifex/',
    DOCS_TRAIN_GUARDRAIL_URL: 'https://docs.tanaos.com/artifex/guardrail/train/',
    DOCS_GUARDRAIL_INTRO_URL: 'https://docs.tanaos.com/artifex/guardrail/intro/',
    DOCS_INTENT_CLASSIFICATION_INTRO_URL: 'https://docs.tanaos.com/artifex/intent-classifier/intro/',

    // Github
    SYNTHEX_GITHUB_URL: 'https://github.com/tanaos/synthex',
    ARTIFEX_GITHUB_URL: 'https://github.com/tanaos/artifex',
    ARTIFEX_NEW_MODEL_SUGGESTION_URL: 'https://github.com/tanaos/artifex/discussions/new?category=task-suggestions',
    ARTIFEX_NEW_MODEL_SUGGESTIONS_LIST_URL: 'https://github.com/tanaos/artifex/discussions/categories/task-suggestions',

    // Socials
    TWITTER_URL: 'https://x.com/tanaosai',
    HUGGINGFACE_URL: 'https://huggingface.co/tanaos',
    LINKEDIN_URL: 'https://www.linkedin.com/company/tanaos',

    // Demo
    ARTIFEX_GUARDRAIL_DEMO_URL: 'https://colab.research.google.com/github/tanaos/tanaos-docs/blob/master/blueprints/artifex/guardrail.ipynb',
    ARTIFEX_INTENT_CLASSIFIER_DEMO_URL: 'https://colab.research.google.com/github/tanaos/tanaos-docs/blob/master/blueprints/artifex/intent_classifier.ipynb',

    // Session Storage
    DISPLAY_BANNER_SESSION_STORAGE_FLAG: 'displayBanner',

    // Routes
    HOME_ROUTE: '/',
    BLOG_ROUTE: '/blog/',
    BLOG_POST_ROUTE: (slug) => `/blog/${slug}/`,

    // Blog posts
    TASK_SPECIFIC_LLMS_POST: '/blog/task-specific-llms/',
    OFFLINE_NLP_POST: '/blog/offline-nlp/',
};