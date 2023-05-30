<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('includes.head')
    </head>
    <body class="antialiased">
        @yield('content')
        @yield('scripts')
        @include('includes.scripts')
    </body>
</html>
