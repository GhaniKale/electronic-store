from django.shortcuts import render, get_object_or_404, redirect
import urllib.parse
from .models import Product


def product_list(request):
    products = Product.objects.all()
    return render(request, 'store/product_list.html', {
        'products': products
    })


def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'store/product_detail.html', {
        'product': product
    })

def add_to_cart(request, pk):
    cart = request.session.get('cart', {})

    if str(pk) in cart:
        cart[str(pk)]['qty'] += 1
    else:
        product = Product.objects.get(pk=pk)
        cart[str(pk)] = {
            'name': product.name,
            'price': product.price,
            'qty': 1
        }

    request.session['cart'] = cart
    return redirect('cart')
def cart_view(request):
    cart = request.session.get('cart', {})
    total = sum(item['price'] * item['qty'] for item in cart.values())

    return render(request, 'store/cart.html', {
        'cart': cart,
        'total': total
    })
import urllib.parse

def checkout_whatsapp(request):
    cart = request.session.get('cart', {})

    if not cart:
        return redirect('cart')

    message = "Halo, saya mau pesan:\n\n"
    total = 0

    for item in cart.values():
        subtotal = item['price'] * item['qty']
        total += subtotal
        message += f"- {item['name']} x {item['qty']} = Rp {subtotal}\n"

    message += f"\nTotal: Rp {total}"
    message += "\n\nTerima kasih 🙏"

    phone_number = "6283817073505"  # GANTI dengan nomor WhatsApp kamu
    encoded_message = urllib.parse.quote(message)

    whatsapp_url = f"https://wa.me/{phone_number}?text={encoded_message}"

    return redirect(whatsapp_url)

