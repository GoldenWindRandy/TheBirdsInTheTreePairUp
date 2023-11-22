import http.client

from django.contrib.auth import authenticate
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
    password = str(request.data["password"])
    flag = Userinfo.objects.filter(username=username)
    if not flag.exists():
        instance = Userinfo.objects.create(username=username, password=password)
        result = default_response()
        result['data']['reseaion'] = "创建成功"
        result['data']['pk'] = instance.id
        # 需要传什么参数这块可以给
        return Response(result)
    else:
        result = default_response()
        result['data'] = "用户名已存在"
        return Response(result,  status=status.HTTP_400_BAD_REQUEST)
        # return HttpResponseBadRequest("用户名已存在")


@api_view(['POST'])
def login_view(request, format=None):
    print(request.data)
    username = request.data['username']
    password = str(request.data["password"])
    if not Userinfo.objects.filter(username=username).exists():
        result = default_response()
        result['data'] = "用户名不存在"
        return Response(result, status=status.HTTP_400_BAD_REQUEST)
        # return HttpResponseBadRequest("用户名不存在")
    user_info = Userinfo.objects.filter(username=username)[0]
    if user_info.password != password:
        result = default_response()
        result['data'] = "密码错误"
        return Response(result, status=status.HTTP_400_BAD_REQUEST)
        # return HttpResponseBadRequest("密码错误")
    result = default_response()
    result['data']['reseaion'] = "登录成功"
    return Response(result)
