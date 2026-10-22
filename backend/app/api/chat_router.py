from fastapi import APIRouter
from app.services.chat_service import ChatService
from app.schemas.chat_schema import ChatRequest, ChatResponse

router = APIRouter(prefix="/chat", tags=["chat"])

@router.post("/response", response_model=ChatResponse)
async def get_response(chatRequest: ChatRequest):
    chat_response = ChatService.responseToUser(userMessage=chatRequest.userMessage)
    return chat_response