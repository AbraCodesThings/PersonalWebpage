@extends('master')
@section('content')
    <div class="desktop" id="desktop">
        <!-- Here be windows -->
    </div>
    <div class="taskbar">
        <div class="start_button" id="start_button">
            <!--  -->
            <span>Start</span>
        </div>
        <div class="start_minimized">
            <!--  -->
        </div>
        <div class="start_tools">
            <div class="start_tools_icons">
                <!--  -->
            </div>
            <div class="start_tools_clock" id="start_tools_clock">
                <!-- TODO -->
                <!-- {{date('h:i:s')}} -->
                
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="scripts/windows_controller.js" type="module"></script>
    <!-- <script>
        import {create_window} from "scripts/window.js";
        const start_button = document.querySelector("#start_button");
        start_button.onclick = function () {
            alert("entra");
            create_window();
        }
    </script> -->
    <script type="text/javascript">
        function showTime() {
          var date = new Date(),
              utc = new Date(Date.UTC(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
              ));
          
          document.getElementById('start_tools_clock').innerHTML = utc.toLocaleTimeString();
        }
    
        setInterval(showTime, 1000);
    </script>
@endsection