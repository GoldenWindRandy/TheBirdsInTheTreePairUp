from django.db import models


# 定义Sensor模型，用于存储传感器信息
class Sensor(models.Model):
    # 定义传感器ID字段，最大长度为100，唯一，verbose_name为'传感器ID'
    sensor_id = models.CharField(max_length=100, unique=True, verbose_name="传感器ID")
    #    # 定义网关ID字段，最大长度为100，verbose_name为'网关ID'
    #   gateway_id = models.CharField(max_length=100, verbose_name='网关ID')
    # 定义传感器类型字段，最大长度为100，verbose_name为'传感器名称'
    type = models.CharField(max_length=100, verbose_name="传感器名称")
    # 定义用户字段，最大长度为100，verbose_name为'用户'，默认值为'none'
    user = models.CharField(max_length=100, verbose_name="用户", default="none")

    # 定义__str__方法，返回sensor_id
    def __str__(self):
        return self.sensor_id


# 定义StatusInfo模型，用于存储传感器状态信息
class StatusInfo(models.Model):
    # 定义id字段，自增，主键
    id = models.AutoField(primary_key=True)
    # 定义时间字段，自动添加，verbose_name为'时间'
    time = models.DateTimeField(auto_now_add=True, verbose_name="时间")
    # 定义传感器外键，on_delete为models.CASCADE，verbose_name为'传感器'
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE, verbose_name="传感器")
    # 定义属性字段，最大长度为100，verbose_name为'属性'
    attribute = models.CharField(max_length=100, verbose_name="属性")
    # 定义值字段，最大长度为100，verbose_name为'值'
    value = models.CharField(max_length=100, verbose_name="值")

    # 定义__str__方法，返回sensor.sensor_id-attribute-value
    def __str__(self):
        return f"{self.sensor.sensor_id}-{self.attribute}-{self.value}"
