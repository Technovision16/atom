from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

# Create your models here.
@python_2_unicode_compatible
class Portfolio(models.Model):
	name = models.CharField(max_length=200, null=True)
	email = models.EmailField(null=True)

	def __str__(self):
		return self.name


