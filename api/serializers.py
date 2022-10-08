from rest_framework import serializers
from api.models import Task

#create serializers here
class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Task
        fields="__all__"

