from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
"""For basic init and call"""
import os

from langchain.chat_models import QianfanChatEndpoint
from langchain.schema.messages import HumanMessage

########################私人API，记得报销############################
os.environ["QIANFAN_AK"] = "wLRppEb0pBay9jZmDyZeG0Zk"
os.environ["QIANFAN_SK"] = "bzqLAMI57mtMttrS54O0ycpBaz8Ggdsf"
####################################################################

chatBloom = QianfanChatEndpoint(
    streaming=True,
    model="ERNIE-Bot",
)

@api_view(['GET'])
def Return_answer(request):
    # 获取请求中的问题
    ques = str(request.GET.get("question"))
    # 使用chatBloom模型预测问题
    answer = chatBloom([HumanMessage(content=ques)])
    # 返回预测结果
    return Response(answer)

