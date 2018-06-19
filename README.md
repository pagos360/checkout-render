Pagos360.com checkout render
===================================

Quick start
-----------

- Clone the repo: `git clone https://github.com/pagos360/pagos360-v2.git`
- That's it!

How to use
-------------------

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Demo</title>
</head>
<body>
    <a href="{checkout url}" id="pagos360-pay-button">
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