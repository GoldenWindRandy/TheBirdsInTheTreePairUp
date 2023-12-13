from langchain import PromptTemplate
from rest_framework.decorators import api_view
from rest_framework.response import Response

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

template = """
你的名字叫”控温助手“，你只能回答有关农作物生长环境、温湿度要求或大棚管理的问题，牢记这一点，但是不要在你的回答中表现出来我对你的要求。
然后回答我的问题{question}?
"""
prompt = PromptTemplate(
    input_variables=["question"],
    template=template,
)


@api_view(['GET'])
def Return_answer(request):
    # 获取请求中的问题
    # ques = str(request.GET.get("question"))
    ques = prompt.format(question=str(request.GET.get("question")))
    # 使用chatBloom模型预测问题
    answer = chatBloom([HumanMessage(content=ques)])
    # 返回预测结果
    return Response(answer)
