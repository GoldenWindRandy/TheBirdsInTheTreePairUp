from django.shortcuts import render
# 导入requests库，用于发送HTTP请求
import requests
from django.http import JsonResponse
import datetime as dt

# 定义接口的URL，替换为你想要查询的接口地址
baseUrl = "http://47.99.94.249:20000"
token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoiTUFERSBCWSBZV0VWT0VSIiwiYXVkIjpbInl3emoiXSwidXNlcl9pZCI6MTcyNjU1NTEwOTA5MjQwOTM0NSwidXNlcl9tb2JpbGUiOiIxODA5MzU2ODA0NyIsInVzZXJfbmFtZSI6IjE4MDkzNTY4MDQ3Iiwic2NvcGUiOlsiYWNjb3VudHMiLCJob3VzZXMiXSwiZXhwIjoyNzAwNDc3ODU2LCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJqdGkiOiI4MDE2Njk1Ni0xNzBhLTRkZGUtOWMwOS1iYzgwYTI5MzdkYTIiLCJjbGllbnRfaWQiOiJjb20ueXdldm9lci55d3pqLnVzZXIifQ.L-WP10Hene7y-PrfIxTmRvAZI_b6qDJ72HYdbH703bg"
# 存储传感器ID
IDList = []
# 存储传感器信息
SensorInformation = {}
# 存储传感器温度和湿度信息。
TemperatureInformation = {}


# 把时间戳转换成毫秒时间
def timestamp_to_timestr(timestamp):
    timestamp = int(timestamp / 1000)
    return str(dt.datetime.fromtimestamp(timestamp))


# 从网关查询传感器信息
def QueryingSensorList():
    url = baseUrl + "/humiditysensors/by_gateway"
    GatewayID = "1623139019465859074"
    params = {"gateway_id": GatewayID}
    headers = {"Authorization": token}
    response = requests.get(url=url, params=params, headers=headers)

    # 检查响应的状态码，如果是200表示成功
    if response.status_code == 200:
        # 解析响应的内容，一般是JSON格式的数据
        data = response.json()
        # 打印或处理数据，根据你的需求修改
        # 遍历data中的data键对应的列表，每个元素是一个字典
        for item in data["data"]:
            IDList.append(item["id"])
    else:
        print("请求失败，状态码为", response.status_code)


# 从温湿度ID获得温湿度传感器信息
def QueryingSensorInformation():
    headers = {"Authorization": token}
    for ID in IDList:
        url = baseUrl + "/humiditysensors/" + str(ID)
        response = requests.get(url=url, headers=headers)
        SensorInformation[ID] = response.json()["data"]


# 从温湿度ID得到温湿度详细信息
def QueryingTemperatureAndHumidityInformation():
    headers = {"Authorization": token}
    for ID in IDList:
        url = baseUrl + "/humiditysensors/" + str(ID) + "/detail"
        response = requests.get(url=url, headers=headers)
        TemperatureInformation[ID] = response.json()["data"]


QueryingSensorList()
QueryingSensorInformation()
QueryingTemperatureAndHumidityInformation()

# 遍历IDList，打印每个传感器的ID、传感器类型、传感器位置、传感器状态、传感器温度、传感器湿度、传感器校准温度、传感器校准湿度、传感器校准时间
# for id in IDList:
#     print(id)
#     print("")
#     print(SensorInformation[id])
# print("----------")
# print(TemperatureInformation[id])
# print("-----------------------------------------")
# print(IDList[0])
# print("----------")
# # print(SensorInformation[IDList[0]])
# # print("----------")
# print(TemperatureInformation[IDList[0]]['properties'])


# 定义一个函数，用于获取房间ID
def Get_RoomID(item, TemperatureInformation):
    # 获取房间ID
    RoomID = TemperatureInformation[item]["humiditySensorDO"]["room_id"]
    # 将房间ID存入字典中
    dict = {"room_id": RoomID}
    # 返回字典
    return dict

# 定义函数Get_serial，用于获取温度传感器的序列号
# 参数item：温度传感器的索引
# 参数TemperatureInformation：温度信息字典
def Get_serial(item, TemperatureInformation):
    # 获取温度传感器的序列号
    SERIAL = TemperatureInformation[item]["humiditySensorDO"]["serial"]
    # 将序列号存入字典
    dict = {"serial": SERIAL}
    # 返回字典
    return dict


# 定义函数Get_Humidity，用于获取湿度信息
def Get_Humidity(item, TemperatureInformation):
    # 获取湿度信息
    Humidity = TemperatureInformation[item]["properties"]["HUMIDITY"]
    ID = Humidity["id"]
    # 获取湿度名称
    CHS_NAME = Humidity["chs_name"]
    # 获取可控制性
    CONTROLLABLE = Humidity["controllable"]
    # 获取湿度值
    VALUE = Humidity["value"]
    # 获取更新时间
    UPDATE_TIME = timestamp_to_timestr(Humidity["update_time"])
    # 将湿度信息存入字典
    dict = {
        "id": ID,
        "chs_name": CHS_NAME,
        "controllable": CONTROLLABLE,
        "value": VALUE,
        "update_time": UPDATE_TIME,
    }
    # 返回湿度信息字典
    return dict


# 定义一个函数，用于获取温度信息
def Get_Temperature(item, TemperatureInformation):
    # 获取温度信息
    Temperature = TemperatureInformation[item]["properties"]["TEMPERATURE"]
    ID = Temperature["id"]
    # 获取温度名称
    CHS_NAME = Temperature["chs_name"]
    # 获取温度是否可控制
    CONTROLLABLE = Temperature["controllable"]
    # 获取温度值
    VALUE = Temperature["value"]
    # 获取温度更新时间
    UPDATE_TIME = timestamp_to_timestr(Temperature["update_time"])
    # 将温度信息存入字典
    dict = {
        "id": ID,
        "chs_name": CHS_NAME,
        "controllable": CONTROLLABLE,
        "value": VALUE,
        "update_time": UPDATE_TIME,
    }
    # 返回温度信息字典
    return dict

# # 定义一个函数，用于获取开关信息
# def Get_Power(item, TemperatureInformation):
#     # 从TemperatureInformation中获取item的开关信息
#     Power = TemperatureInformation[item]["properties"]["POWER"]
#     # 获取开关信息的chs_name
#     CHS_NAME = Power["chs_name"]
#     # 获取开关信息的controllable
#     CONTROLLABLE = Power["controllable"]
#     # 获取开关信息的value
#     VALUE = Power["value"]
#     # 获取开关信息的update_time，并将其转换为字符串
#     UPDATE_TIME = timestamp_to_timestr(Power["update_time"])
#     # 将获取的开关信息存入字典中
#     dict = {
#         "chs_name": CHS_NAME,
#         "controllable": CONTROLLABLE,
#         "value": VALUE,
#         "update_time": UPDATE_TIME,
#     }
#     # 返回字典
#     return dict

# 定义一个函数，用于合并属性，参数为item和TemperatureInformation
def merge_Properties(item, TemperatureInformation):
    # 获取温度信息
    Temperature = Get_Temperature(item, TemperatureInformation)
    # 获取湿度信息
    Humidity = Get_Humidity(item, TemperatureInformation)
    # # 获取开关信息
    # Power = Get_Power(item, TemperatureInformation)
    # 将温度、湿度、开关信息合并到字典中
    dict = {"HUMIDITY": Humidity, "TEMPERATURE": Temperature}
    # 返回合并后的字典
    return dict


# 定义一个函数，用于返回数据
def Return_Data(request):
    # 创建一个空列表，用于存储数据
    Info = []
    # 遍历IDList列表
    for item in IDList:
        # 创建一个空列表，用于存储每一项数据
        item_List = []
        # 调用Get_RoomID函数，获取Roomid_dict字典
        Roomid_dict = Get_RoomID(item, TemperatureInformation)
        # 调用Get_serial函数，获取serial_dict字典
        serial_dict = Get_serial(item, TemperatureInformation)
        # 调用merge_Properties函数，获取properties_dict字典
        properties_dict = merge_Properties(item, TemperatureInformation)
        # 将Roomid_dict、serial_dict、properties_dict合并
        merged_dict = {**Roomid_dict, **serial_dict, **properties_dict}
        # 将合并后的字典添加到item_List列表中
        item_List.append(merged_dict)
        # 将item_List列表添加到Info列表中
        Info.append(item_List)
    # 返回一个JsonResponse对象，其中包含Info列表
    return JsonResponse(Info,safe=False)

