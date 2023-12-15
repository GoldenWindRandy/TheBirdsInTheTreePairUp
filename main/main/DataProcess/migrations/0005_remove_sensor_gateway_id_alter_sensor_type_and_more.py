# Generated by Django 4.2.7 on 2023-12-06 09:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("DataProcess", "0004_statusinfo"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="sensor",
            name="gateway_id",
        ),
        migrations.AlterField(
            model_name="sensor",
            name="type",
            field=models.CharField(max_length=100, verbose_name="传感器名称"),
        ),
        migrations.AlterField(
            model_name="statusinfo",
            name="value",
            field=models.CharField(max_length=100, verbose_name="值"),
        ),
    ]
