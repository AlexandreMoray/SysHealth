from django.db import models

# Create your models here.
class User (models.Model):
    name = models.CharField(max_length=60)
    temperature = models.FloatField(max_length = 45)
    oxygen = models.FloatField(max_length = 45)
    heartRate = models.FloatField(max_length = 45)
    breath = models.FloatField(max_length = 45)

    def __str__(self):
        return self.name

class Doctor (models.Model):

    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name