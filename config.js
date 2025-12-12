export const Config = {
    // Website
    WEBSITE_BASE_URL: 'https://tanaos.com/',

    // API
    API_BASE_URL: 'https://compute.tanaos.com',

    // Platform
    PLATFORM_BASE_URL: 'https://platform.tanaos.com',

    // Docs
    DOCS_URL: 'https://docs.tanaos.com/artifex/',

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

    // Github
    SYNTHEX_GITHUB_URL: 'https://github.com/tanaos/synthex',
    ARTIFEX_GITHUB_URL: 'https://github.com/tanaos/artifex',
    ARTIFEX_NEW_MODEL_SUGGESTION_URL: 'https://github.com/tanaos/artifex/discussions/new?category=task-suggestions',
    ARTIFEX_NEW_MODEL_SUGGESTIONS_LIST_URL: 'https://github.com/tanaos/artifex/discussions/categories/task-suggestions',

    // Socials
    TWITTER_URL: 'https://x.com/tanaosai',
    HUGGINGFACE_URL: 'https://huggingface.co/tanaos',
    LINKEDIN_URL: 'https://www.linkedin.com/company/tanaos',

    // Session Storage
    DISPLAY_BANNER_SESSION_STORAGE_FLAG: 'displayBanner',

    // Routes
    HOME_ROUTE: '/',
    BLOG_ROUTE: '/blog/',
    BLOG_POST_ROUTE: (slug) => `/blog/${slug}/`,

    // Blog posts
    TASK_SPECIFIC_LLMS_POST: '/blog/task-specific-llms/',
    OFFLINE_NLP_POST: '/blog/offline-nlp/',
    GUARDRAIL_MODELS_POST: '/blog/guardrail-models/',

    // Hugging Face
    GUARDRAIL_HF_LINK: 'https://huggingface.co/tanaos/tanaos-guardrail-v1',
    INTENT_CLASSIFICATION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-intent-classifier-v1',
    RERANKER_HF_LINK: 'https://huggingface.co/cross-encoder/mmarco-mMiniLMv2-L12-H384-v1',
    SENTIMENT_ANALYSIS_HF_LINK: 'https://huggingface.co/tanaos/tanaos-sentiment-analysis-v1',
    EMOTION_DETECTION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-emotion-detection-v1',
    NER_HF_LINK: 'https://huggingface.co/tanaos/tanaos-NER-v1',
    TEXT_ANONYMIZATION_HF_LINK: 'https://huggingface.co/tanaos/tanaos-text-anonymizer-v1'
};