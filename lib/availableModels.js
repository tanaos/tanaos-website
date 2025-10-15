export async function getAvailableModels() {
    return [
        {
            name: "Guardrail Model",
            description: "Guardrail models are used to flag unsafe, harmful or off-topic messages in chatbots and virtual assistants.",
            emoji: "🛡️",
            imageUrl: "/images/available-models/guardrail.png",
            trainingCode: `from artifex import Artifex

guardrail = Artifex().guardrail

guardrail.train(
    instructions=[
        "Soft medical advice is allowed, but it should be general and not specific to any individual.",
        "Anything that is about cosmetic products, including available products or their usage, is allowed.",
        "Anything else, including hard medical advice, is not allowed under any circumstances.",
    ]
)
`,
            inferenceCode: `from artifex import Artifex

guardrail = Artifex().guardrail

# NOTE: train your Guardrail model before using it for inference.

label = guardrail("This is a sample safe sentence.")
print(label)

# >>> "safe"
`,
        },
        {
            name: "Intent Classification Model",
            description: "Intent classification models help in understanding user intents in conversational AI applications.",
            emoji: "🗣️",
            imageUrl: "/images/available-models/intent-classification.png",
            trainingCode: `from artifex import Artifex

intent_classifier = Artifex().intent_classifier

intent_classifier.train(
    classes={
        "send_email": "Intent to send an email to someone.",
        "schedule_meeting": "Intent to schedule a meeting with someone.",
        "cancel_meeting": "Intent to cancel a previously scheduled meeting.",
        "reschedule_meeting": "Intent to change the date or time of a previously scheduled meeting.",
    }
)
`,
            inferenceCode: `from artifex import Artifex

intent_classifier = Artifex().intent_classifier

# NOTE: train your Intent Classification model before using it for inference.

label = intent_classifier("I forgot to set up that meeting with John, could you do that for me?")
print(label)

# >>> "schedule_meeting"
`,
        },
    ]
}