from typing import Dict, Any, AsyncGenerator
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)

async def astream_voice_order(session_id: str, user_input: str, current_order: Dict = None) -> AsyncGenerator[Dict, None]:
    current_order = current_order or {}
    
    prompt = f"""你是一个专业的语音下单助手。
当前订单信息: {current_order}
用户说: {user_input}

请用自然口语回复，并提取订单信息。输出 JSON 格式：
{{
  \"reply\": \"回复文本\",
  \"order_update\": {{...}},
  \"is_complete\": false,
  \"needs_confirmation\": false
}}"""
    
    response = await llm.ainvoke([HumanMessage(content=prompt)])
    try:
        import json
        result = json.loads(response.content)
        yield result
    except:
        yield {{
            \"reply\": response.content,
            \"order_update\": {{}},
            \"is_complete\": False,
            \"needs_confirmation\": False
        }}
"""