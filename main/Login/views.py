from django.http import Http404, HttpResponseBadRequest
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from utils.default_value import default_response
from .serializers import *


# Create your views here.

# 获取用户列表
class user_list(generics.ListCreateAPIView):
    queryset = Userinfo.objects.all()
    serializer_class = UserInfoSerializer


# 针对特定用户操作
class user_detail(APIView):
    def get_objects(self, pk):
        try:
            return Userinfo.objects.get(
                pk=pk)
        except Userinfo.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_objects(pk)
        serializer = UserInfoSerializer(user)
        result = default_response()
        result['data'] = serializer.data
        return Response(result)

    def put(self, request, pk, format=None):
        user = self.get_objects(pk)
        serializer = UserInfoSerializer(user, data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            result = default_response()
            result['data'] = serializer.data
            return Response(result)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_objects(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# post函数发data的
@api_view(['POST'])
def Register(request, format=None):
    print(request.data)
    username = request.data['username']
    password = request.data["password"]
    flag = Userinfo.objects.filter(username=username)
    if not flag.exists():
        instance = Userinfo.objects.create( username=username,password=password)
        result = default_response()
        result['data']['reseaion'] = "创建成功"
        result['data']['pk'] = instance.id
        # 需要传什么参数这块可以给
        return Response(result)
    else:
        result = default_response()
        result['data']['reseaion'] = "用户名已存在"
        return HttpResponseBadRequest(result)


@api_view(['POST'])
def login_view(request, format=None):
    print(request.data)
    username = request.data['username']
    password = request.data["password"]
    user_info = Userinfo.objects.filter(username=username)[0]
    result = default_response()
    if user_info is None or user_info.password != password:
        result['data']['reseaion'] = "登录失败"
        return HttpResponseBadRequest(result)
    result['data']['reseaion'] = "登录成功"
    # 需要传什么参数这块可以给
    return Response(result)
