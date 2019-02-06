"use strict";
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

$(document).ready(function () {
    particlesJS.load('particles-js', 'assets/js/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    let whiteNoise = () => {
        let ctx = canvas.getContext('2d');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let p = ctx.getImageData(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(function draw() {
            for (var i = 0; i < p.data.length; i++) {
                p.data[i++] = p.data[i++] = p.data[i++] = Math.random() * 255;
            }
            ctx.putImageData(p, 0, 0);
            requestAnimationFrame(draw);
        });
        return canvas;
    }

    let stream = whiteNoise().captureStream();
    // video.srcObject = stream;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLyogcGFydGljbGVzSlMubG9hZChAZG9tLWlkLCBAcGF0aC1qc29uLCBAY2FsbGJhY2sgKG9wdGlvbmFsKSk7ICovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBwYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtanMnLCAnYXNzZXRzL2pzL3BhcnRpY2xlcy5qc29uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgd2hpdGVOb2lzZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHAgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwLmRhdGFbaSsrXSA9IHAuZGF0YVtpKytdID0gcC5kYXRhW2krK10gPSBNYXRoLnJhbmRvbSgpICogMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEocCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdHJlYW0gPSB3aGl0ZU5vaXNlKCkuY2FwdHVyZVN0cmVhbSgpO1xyXG4gICAgLy8gdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG59KTsiXX0=
