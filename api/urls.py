from django.contrib import admin
from django.urls import path,include
from api.views import TaskViewSet
from rest_framework import routers


router= routers.DefaultRouter()
router.register(r'tasks',TaskViewSet)

urlpatterns = [
path('',include(router.urls))
]