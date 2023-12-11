from django.urls import path
from langchain_model import views

urlpatterns = [
    path('answer/', views.Return_answer),
]
