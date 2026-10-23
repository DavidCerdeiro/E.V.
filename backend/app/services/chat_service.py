from app.schemas.chat_schema import ChatResponse
from app.core.llm import get_router_llm, get_assistant_llm, get_document_llm

def response_to_user(user_message: str) -> ChatResponse:
    messages = [
        ("system", "Eres un asistente de IA útil y servicial llamado E.V.."), #Prompt inicial para el modelo
        ("human", user_message)
    ]
    ai_message = get_assistant_llm().invoke(messages)

    chat_response = ChatResponse(model_response=ai_message.content)

    return chat_response
