from app.schemas.chat_schema import ChatResponse

class ChatService:
    def responseToUser(userMessage: str):
        iaResponse = "Respuesta provisional a: " + userMessage

        chat_response = ChatResponse(iaResponse=iaResponse)

        return chat_response