from Login import views
from django.urls import path

urlpatterns = [
    path('userlist/', views.user_list.as_view()),
    path('login/', views.login_view),
    path('register/', views.Register),
    path('user/<int:pk>/', views.user_detail.as_view()),
]
