from email.policy import default
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

#creating task Model
class Task(models.Model):
    task_id=models.AutoField(primary_key=True)
    taskInfo = models.CharField(max_length=50)
    checked = models.BooleanField(default=False)