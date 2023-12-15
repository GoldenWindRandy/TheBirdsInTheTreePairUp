from django.urls import path,include
from DataProcess import views



urlpatterns = [
    path('sendData/', views.Return_Data),

]