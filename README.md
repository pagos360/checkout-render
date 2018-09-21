Pagos360.com checkout render
===================================

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Demo</title>
</head>
<body>
    <a href="https://checkout.pagos360.com/modal/payment-request/<<PAYMENT_REQUEST_UUIID>>" 
       id="pagos360-pay-button"
    >
        Pagar con Pagos360.com
    </a>

    <script type="text/javascript">
        (function () {
            function load() {
                window.isLoaded !== true && (function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.async = true;
                    s.src = document.location.protocol + "//checkout.pagos360.com/render.js";
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                    window.isLoaded = true;
                })();
            }

            window.isLoaded !== true ? (window.attachEvent ? window.attachEvent('onload', load) : window.addEventListener('load', load, false)) : null;
        })();
    </script>
</body>
</html>
```