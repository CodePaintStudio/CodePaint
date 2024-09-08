import {useEffect, useRef} from 'react';

const ParticleBackground = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        function n(n, e, t) {
            return n.getAttribute(e) || t;
        }

        function e(n) {
            return document.getElementsByTagName(n);
        }

        function t() {
            const t = e("script"), o = t.length, i = t[o - 1];
            return {
                l: o,
                z: n(i, "zIndex", -1),
                o: n(i, "opacity", .5),
                c: n(i, "color", "0,0,0"),
                n: n(i, "count", 99)
            };
        }

        function o() {
            const a = canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const c = canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }

        function i() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let n, e, t, o, m, l;
            s.forEach(function (i, x) {
                i.x += i.xa, i.y += i.ya, i.xa *= i.x > canvas.width || i.x < 0 ? -1 : 1, i.ya *= i.y > canvas.height || i.y < 0 ? -1 : 1, ctx.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1;
                for (; e < u.length; e++) {
                    n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, ctx.beginPath(), ctx.lineWidth = t / 2, ctx.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", ctx.moveTo(i.x, i.y), ctx.lineTo(n.x, n.y), ctx.stroke()));
                }
            }), requestAnimationFrame(i);
        }

        const d = t();
        let a, c, u, s = [], y = {x: null, y: null, max: 20000};

        o();
        window.onresize = o;
        window.onmousemove = function (n) {
            n = n || window.event, y.x = n.clientX, y.y = n.clientY;
        };
        window.onmouseout = function () {
            y.x = null, y.y = null;
        };

        for (let f = 0; d.n > f; f++) {
            const h = Math.random() * canvas.width, g = Math.random() * canvas.height, v = 2 * Math.random() - 1,
                p = 2 * Math.random() - 1;
            s.push({x: h, y: g, xa: v, ya: p, max: 6000});
        }

        u = s.concat([y]);
        requestAnimationFrame(i);

        return () => {
            window.onresize = null;
            window.onmousemove = null;
            window.onmouseout = null;
        };
    }, []);

    return (
        <div>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1
                }}
            />
            {props.children}
        </div>
    );
};

export default ParticleBackground;
