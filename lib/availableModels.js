export async function getAvailableModels() {
    return [
        {
            name: "Guardrail Model",
            description: "Guardrail models are used to flag unsafe, harmful or off-topic messages in chatbots and virtual assistants.",
            emoji: "🛡️",
            imageUrl: "/images/available-models/guardrail.png",
            sampleCode: `from artifex import Artifex

guardrail = Artifex().guardrail

guardrail.train(
    instructions=[
        "Soft medical advice is allowed, but it should be general and not specific to any individual.",
        "Anything that is about cosmetic products, including available products or their usage, is allowed.",
        "Anything else, including hard medical advice, is not allowed under any circumstances.",
    ]
)
`
        },
        {
            name: "Intent Classification Model",
            description: "Intent classification models help in understanding user intents in conversational AI applications.",
            emoji: "🗣️",
            imageUrl: "/images/available-models/intent-classification.png",
            sampleCode: `from artifex import Artifex

intent_classifier = Artifex().intent_classifier

intent_classifier.train(
    examples=[
        {"text": "Book a flight to New York", "intent": "book_flight"},
        {"text": "What's the weather like today?", "intent": "get_weather"},
        {"text": "Play some music", "intent": "play_music"},
    ]
)
`
        },
        {
            name: "Reranker Model",
            description: "Reranker models improve the relevance of search results by reordering them based on their relevance to a given query.",
            emoji: "🏅",
            imageUrl: "/images/available-models/reranker.png",
            sampleCode: `from artifex import Artifex

guardrail = Artifex().guardrail

guardrail.train(
    instructions=[
        "Soft medical advice is allowed, but it should be general and not specific to any individual.",
        "Anything that is about cosmetic products, including available products or their usage, is allowed.",
        "Anything else, including hard medical advice, is not allowed under any circumstances.",
    ]
)
`
        }
    ]
}