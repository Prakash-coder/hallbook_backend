# Generated by Django 4.1.5 on 2023-03-08 04:47

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hallrecords', '0008_merge_20230308_0447'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='rejected',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='booking',
            name='eventDate',
            field=models.DateField(default=datetime.date.today),
        ),
    ]