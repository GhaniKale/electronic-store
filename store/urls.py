from django.urls import path
from .views import (
    product_list,
    product_detail,
    add_to_cart,
    cart_view,
    checkout_whatsapp
)

urlpatterns = [
    path('', product_list, name='product_list'),
    path('produk/<int:pk>/', product_detail, name='product_detail'),
    path('add-to-cart/<int:pk>/', add_to_cart, name='add_to_cart'),
    path('cart/', cart_view, name='cart'),
    path('checkout/', checkout_whatsapp, name='checkout'),  # 👈 INI WAJIB
]
