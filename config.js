export const Config = {
    // Website
    WEBSITE_BASE_URL: 'https://tanaos.com/',

    // API
    API_BASE_URL: 'https://compute.tanaos.com',

    // Platform
    PLATFORM_BASE_URL: 'https://platform.tanaos.com',
    PLATFORM_PLANS_PAGE_URL: 'https://platform.tanaos.com/profile/plans',

    // Docs
    DOCS_URL: 'https://docs.tanaos.com/artifex/',

    DOCS_TEXT_CLASSIFICATION_EXAMPLES: 'https://docs.tanaos.com/artifex/text-classification/code-examples/',
    DOCS_TEXT_CLASSIFICATION_TRAIN: 'https://docs.tanaos.com/artifex/text-classification/train/',
    DOCS_TEXT_CLASSIFICATION_INFERENCE: 'https://docs.tanaos.com/artifex/text-classification/inference/',

    DOCS_GUARDRAIL_EXAMPLES: 'https://docs.tanaos.com/artifex/guardrail/code_examples/',
    DOCS_GUARDRAIL_TRAIN: 'https://docs.tanaos.com/artifex/guardrail/train/',
    DOCS_GUARDRAIL_INFERENCE: 'https://docs.tanaos.com/artifex/guardrail/inference/',

    DOCS_INTENT_CLASSIFICATION_TRAIN: 'https://docs.tanaos.com/artifex/intent-classifier/train/',
    DOCS_INTENT_CLASSIFICATION_INFERENCE: 'https://docs.tanaos.com/artifex/intent-classifier/inference/',

    DOCS_RERANKER_TRAIN: 'https://docs.tanaos.com/artifex/reranker/train/',
    DOCS_RERANKER_INFERENCE: 'https://docs.tanaos.com/artifex/reranker/inference/',

    DOCS_SENTIMENT_ANALYSIS_TRAIN: 'https://docs.tanaos.com/artifex/sentiment-analysis/train/',
    DOCS_SENTIMENT_ANALYSIS_INFERENCE: 'https://docs.tanaos.com/artifex/sentiment-analysis/inference/',

    DOCS_EMOTION_DETECTION_TRAIN: 'https://docs.tanaos.com/artifex/emotion-detection/train/',
    DOCS_EMOTION_DETECTION_INFERENCE: 'https://docs.tanaos.com/artifex/emotion-detection/inference/',

    DOCS_NER_TRAIN: 'https://docs.tanaos.com/artifex/named-entity-recognition/train/',
    DOCS_NER_INFERENCE: 'https://docs.tanaos.com/artifex/named-entity-recognition/inference/',

    DOCS_TEXT_ANONYMIZATION_TRAIN: 'https://docs.tanaos.com/artifex/text-anonymization/train/',
    DOCS_TEXT_ANONYMIZATION_INFERENCE: 'https://docs.tanaos.com/artifex/text-anonymization/inference/',

    TANAOS_API_DEMO: 'https://colab.research.google.com/github/tanaos/tanaos-docs/blob/master/blueprints/tanaos-api/tanaos-api-tutorial.ipynb',
    get TANAOS_API_DEMO_GUARDRAIL() { return `${this.TANAOS_API_DEMO}#scrollTo=ptAF6Efb3-6-`; },
    get TANAOS_API_DEMO_INTENT_CLASSIFICATION() { return `${this.TANAOS_API_DEMO}#scrollTo=jytV4CBv4nT7`; },
    get TANAOS_API_DEMO_SPAM_DETECTION() { return `${this.TANAOS_API_DEMO}#scrollTo=3418gc_N4-fF`; },
    get TANAOS_API_DEMO_SENTIMENT_ANALYSIS() { return `${this.TANAOS_API_DEMO}#scrollTo=nOvE4a5H5QUX`; },
    get TANAOS_API_DEMO_EMOTION_DETECTION() { return `${this.TANAOS_API_DEMO}#scrollTo=gdcmvZlR55K2`; },
    get TANAOS_API_DEMO_NAMED_ENTITY_RECOGNITION() { return `${this.TANAOS_API_DEMO}#scrollTo=cEnZ2iu64IqM`; },
    get TANAOS_API_DEMO_TEXT_ANONYMIZATION() { return `${this.TANAOS_API_DEMO}#scrollTo=ZDbuM6Xk4atr`; },
    get TANAOS_API_DEMO_TOPIC_CLASSIFICATION() { return `${this.TANAOS_API_DEMO}#scrollTo=2hb4qVeQ6JQH`; },

    // Github
    SYNTHEX_GITHUB_URL: 'https://github.com/tanaos/synthex',
    ARTIFEX_GITHUB_URL: 'https://github.com/tanaos/artifex',
    ARTIFEX_NEW_MODEL_SUGGESTION_URL: 'https://github.com/tanaos/artifex/discussions/new?category=task-suggestions',
    ARTIFEX_NEW_MODEL_SUGGESTIONS_LIST_URL: 'https://github.com/tanaos/artifex/discussions/categories/task-suggestions',

    // Socials
    TWITTER_URL: 'https://x.com/tanaosai',
    HUGGINGFACE_URL: 'https://huggingface.co/tanaos',
    LINKEDIN_URL: 'https://www.linkedin.com/company/tanaos',
    GITHUB_URL: 'https://github.com/tanaos',

    // Session Storage
    DISPLAY_BANNER_SESSION_STORAGE_FLAG: 'displayBanner',

    // Routes
    HOME_ROUTE: '/',
    BLOG_ROUTE: '/blog/',
    BLOG_POST_ROUTE: (slug) => `/blog/${slug}/`,
    MODELS_TICKET_CLASSIFICATION_ROUTE: '/models/ticket-classification/',
    MODELS_CONTACT_FORM_SPAM_FILTER_ROUTE: '/models/contact-form-spam-filter/',
    MODELS_EMAIL_INTENT_DETECTION_ROUTE: '/models/email-intent-detection/',

    // Blog posts
    TASK_SPECIFIC_LLMS_POST: '/blog/task-specific-llms/',
    OFFLINE_NLP_POST: '/blog/offline-nlp/',
    GUARDRAIL_MODELS_POST: '/blog/guardrail-models/',

    // Hugging Face
    GUARDRAIL_HF_LINK: 'https://huggingface.co/tanaos/tanaos-guardrail-v2',
    INTENT_CLASSIFICATION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-intent-classifier-v1',
    RERANKER_HF_LINK: 'https://huggingface.co/cross-encoder/mmarco-mMiniLMv2-L12-H384-v1',
    SENTIMENT_ANALYSIS_HF_LINK: 'https://huggingface.co/tanaos/tanaos-sentiment-analysis-v1',
    EMOTION_DETECTION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-emotion-detection-v1',
    NER_HF_LINK: 'https://huggingface.co/tanaos/tanaos-NER-v1',
    TEXT_ANONYMIZATION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-text-anonymizer-v1',
    SPAM_DETECTION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-spam-detection-v1',
    TOPIC_CLASSIFICATION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-topic-classification-v1',
};