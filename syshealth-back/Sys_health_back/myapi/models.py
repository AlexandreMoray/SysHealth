from django.db import models

# Create your models here.
class User (models.Model):

    temperature = models.FloatField(max_length = 45)
    position = models.FloatField(max_length = 45)
    heartRate = models.FloatField(max_length = 45)
    breath = models.FloatField(max_length = 45)

    def __str__(self):

        return str(self.id)

class Doctor (models.Model):

    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name
