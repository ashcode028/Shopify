"""
Django settings for web project.

Generated by 'django-admin startproject' using Django 2.2.3.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import json
import django_heroku
import dj_database_url
# with open('/etc/config.json') as config_file:
# 	config=json.load(config_file)
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY", default="foo")
# SECRET_KEY=config['SECRET_KEY']
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = int(os.environ.get("DEBUG", default=1))

ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS", default="*").split(" ")
# ALLOWED_HOSTS=['192.168.2.238','0.0.0.0']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'products.apps.ProductsConfig',
    'accounts.apps.AccountsConfig',
    'carts.apps.CartsConfig',
    'profiles.apps.ProfilesConfig',
    'seller.apps.SellerConfig',
    'orders.apps.OrdersConfig',
    'django_filters',
    'livereload',
    'django_rest_passwordreset',
    'django_otp',
    'django_otp.plugins.otp_totp',
    'whitenoise.runserver_nostatic',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django_otp.middleware.OTPMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'livereload.middleware.LiveReloadScript',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'web.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'dist')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'web.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    # "default": {
    #     "ENGINE": os.environ.get("SQL_ENGINE", "django.db.backends.mysql"),
    #     "NAME": os.environ.get("SQL_DATABASE",  "shopify"),
    #     "USER": os.environ.get("SQL_USER", "user1"),
    #     "PASSWORD": os.environ.get("SQL_PASSWORD", "Hellothere1234$"),
    #     "HOST": os.environ.get("SQL_HOST", "0.0.0.0"),
    #     "PORT": os.environ.get("SQL_PORT", "3306"),
    # }

    # "default": {
    #     "ENGINE": os.environ.get("SQL_ENGINE", "django.db.backends.sqlite3"),
    #     "NAME": os.environ.get("SQL_DATABASE", os.path.join(BASE_DIR, "db.sqlite3")),
    #     "USER": os.environ.get("SQL_USER", "user"),
    #     "PASSWORD": os.environ.get("SQL_PASSWORD", "password"),
    #     "HOST": os.environ.get("SQL_HOST", "localhost"),
    #     "PORT": os.environ.get("SQL_PORT", "5432"),
    # }
    'default': dj_database_url.config(default=os.getenv('DATABASE_URL'))
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'dist/static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

# Custom user model

AUTH_USER_MODEL = 'accounts.User'
AUTHENTICATION_BACKENDS = (
    'accounts.backends.CustomBackend',
    'django.contrib.auth.backends.ModelBackend'
)

# Rest framework

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
}

LOGOUT_REDIRECT_URL = '/login'
LOGIN_REDIRECT_URL = '/login'

OTP_ADMIN_HIDE_SENSITIVE_DATA = True
# OTP_EMAIL_THROTTLE_FACTOR = 300
# OTP_TOTP_THROTTLE_FACTOR = False
# CSRF token
CSRF_COOKIE_NAME = "XSRF-TOKEN"

SECURE_REFERRER_POLICY ='strict-origin'

# prevents xss attack
SECURE_BROWSER_XSS_FILTER = True

# Secure cookies
SESSION_COOKIE_SECURE = True
# CSRF Cookie Secure
CSRF_COOKIE_SECURE = True

# to https only
# SECURE_HSTS_SECONDS=31536999
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
# SECURE_HSTS_PRELOAD=True
# SECURE_SSL_REDIRECT = True

SECURE_CONTENT_TYPE_NOSNIFF= True

# DENY CLICKJACKING ATTACK
X_FRAME_OPTIONS = 'DENY'
# Local settings for production

try:
    from local_settings import *
except ImportError:
    pass

django_heroku.settings(locals())