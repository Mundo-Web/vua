@php
  $component = Route::currentRouteName();
@endphp


<!DOCTYPE html>
<html lang="es">

<head>
  @viteReactRefresh
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ env('APP_NAME', 'Vuá') }}</title>

  @isset($seoTitle)
    <meta name="title" content="{{ $seoTitle }}" />
  @endisset
  @isset($seoDescription)
    <meta name="description" content="{{ $seoDescription }}" />
  @endisset
  @isset($seoKeywords)
    <meta name="keywords" content="{{ $seoKeywords }}" />
  @endisset

  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/png">

  <link href="/lte/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <style>
    * {
      font-family: Poppins;
      box-sizing: border-box;
    }
  </style>

  @if ($component == 'Formula.jsx')
    <script type="application/javascript" src="https://checkout.culqi.com/js/v4"></script>
  @elseif ($component == 'MyAccount.jsx')
    <link href="/lte/assets/libs/dxdatagrid/css/dx.light.compact.css?v=06d3ebc8-645c-4d80-a600-c9652743c425"
      rel="stylesheet" type="text/css" id="dg-default-stylesheet" />
    <link href="/lte/assets/libs/dxdatagrid/css/dx.dark.compact.css?v=06d3ebc8-645c-4d80-a600-c9652743c425"
      rel="stylesheet" type="text/css" id="dg-dark-stylesheet" disabled="disabled" />
  @endif

  @vite(['resources/css/app.css', 'resources/js/' . Route::currentRouteName()])
  @inertiaHead

  <link href="/lte/assets/libs/quill/quill.snow.css" rel="stylesheet" type="text/css" />
  <link href="/lte/assets/libs/quill/quill.bubble.css" rel="stylesheet" type="text/css" />
  <style>
    .ql-editor blockquote {
      border-left: 4px solid #f8b62c;
      padding-left: 16px;
    }

    .ql-editor * {
      color: #475569;
    }

    .ql-editor img {
      border-radius: 8px;
    }
  </style>

  <!-- Meta Pixel Code -->
  <script>
    ! function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1098274404490481');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1098274404490481&ev=PageView&noscript=1" />
  </noscript>
  <!-- End Meta Pixel Code -->
</head>

<body>
  @inertia

  <script src="/lte/assets/js/vendor.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
  <script src="/lte/assets/libs/moment/min/moment.min.js"></script>
  <script src="/lte/assets/libs/moment/moment-timezone.js"></script>
  <script src="/lte/assets/libs/moment/locale/es.js"></script>
  <script src="/lte/assets/libs/quill/quill.min.js"></script>

  @if ($component == 'MyAccount.jsx')
    <script src="/lte/assets/libs/dxdatagrid/js/dx.all.js"></script>
    <script src="/lte/assets/libs/dxdatagrid/js/localization/dx.messages.es.js"></script>
    <script src="/lte/assets/libs/dxdatagrid/js/localization/dx.messages.en.js"></script>
  @endif

  <script src="/lte/assets/libs/tippy.js/tippy.all.min.js"></script>

  <script>
    document.addEventListener('click', function(event) {
      const target = event.target;

      if (target.tagName === 'BUTTON' && target.hasAttribute('href')) {
        const href = target.getAttribute('href');

        if (target.getAttribute('target') === '_blank') {
          window.open(href, '_blank');
        } else {
          window.location.href = href;
        }
      }
    });
  </script>
</body>

</html>
