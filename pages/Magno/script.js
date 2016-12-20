function init() {
    var x,y,z;

    if (window.DeviceOrientationEvent) {
        if ('ondeviceorientationabsolute' in window) {
            alert("Zugriff auf den Magnetometer möglich")
            window.addEventListener('deviceorientationabsolute', function(event) {
                x = event.beta;
                y = event.gamma;
                z = event.alpha;
            });
        } else if ('ondeviceorientation' in window) {
            alert("Kein Zugriff auf den Magnetometer möglich")
            window.addEventListener('deviceorientation', function(event) {
                x = event.beta;
                y = event.gamma;
                z = event.alpha;
                if (event.absolute) {
                    alert("Oder doch??")
                }
            });
        }

    }

    window.setInterval(setData, 500);

    function setData() {
            $('#result1').html(x);
            $('#result2').html(y);
            $('#result3').html(z);
    }
}