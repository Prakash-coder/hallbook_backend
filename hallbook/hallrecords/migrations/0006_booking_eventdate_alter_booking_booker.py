# Generated by Django 4.1.5 on 2023-03-07 06:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hallrecords', '0005_alter_booking_booker'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='eventDate',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='booking',
            name='booker',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='booked_events', to=settings.AUTH_USER_MODEL),
        ),
    ]