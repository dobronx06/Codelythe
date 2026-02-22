import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { content } from '../../data/content'

/* ═══════════════════════════════════════════════════════════════════
   WebGL Chrome Blob — ray-marched metallic sphere with reflections
   ═══════════════════════════════════════════════════════════════════ */

const VERT = `attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }`

const FRAG = `precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

// Organic blob SDF
float map(vec3 p){
  float d = length(p) - 1.0;
  d += 0.14*sin(p.x*2.0+u_time*0.4)*sin(p.y*2.5+u_time*0.3)*sin(p.z*2.0+u_time*0.35);
  d += 0.06*sin(p.x*4.0-u_time*0.5)*cos(p.y*3.5+u_time*0.4)*sin(p.z*4.0+u_time*0.45);
  d += 0.025*sin(p.x*7.0+u_time*0.7)*sin(p.y*6.0-u_time*0.6)*cos(p.z*5.0+u_time*0.5);

  // Mouse-driven bulge
  vec2 mDir = (u_mouse - 0.5) * 2.0;
  vec3 bulge = normalize(vec3(mDir.x, mDir.y, 0.8));
  float mDist = max(0.0, dot(normalize(p), bulge));
  d -= 0.08 * pow(mDist, 4.0);

  return d;
}

vec3 calcN(vec3 p){
  vec2 e = vec2(0.002, 0.0);
  return normalize(vec3(
    map(p+e.xyy)-map(p-e.xyy),
    map(p+e.yxy)-map(p-e.yxy),
    map(p+e.yyx)-map(p-e.yyx)
  ));
}

// Chrome environment map
vec3 envMap(vec3 r, float fres){
  float y = r.y*0.5+0.5;

  // Rich gradient: deep forest → emerald → cream
  vec3 c = mix(vec3(0.02,0.06,0.04), vec3(0.06,0.72,0.50), smoothstep(0.0,0.45,y));
  c = mix(c, vec3(0.96,0.94,0.91), smoothstep(0.45,0.85,y));

  // Strong emerald core
  c = mix(c, vec3(0.04,0.82,0.55),
    smoothstep(0.15,0.35,y)*smoothstep(0.65,0.45,y)*0.6);

  // Amber warm accent
  c = mix(c, vec3(0.96,0.62,0.04),
    smoothstep(0.6,0.72,y)*smoothstep(0.85,0.75,y)*0.35);

  // Bright specular highlight
  float hl = pow(max(0.0, dot(r, normalize(vec3(0.3,0.8,0.4)))), 22.0);
  c += vec3(1.0,0.99,0.95)*hl*0.7;

  // Cool secondary highlight
  float hl2 = pow(max(0.0, dot(r, normalize(vec3(-0.5,0.5,-0.4)))), 10.0);
  c += vec3(0.5,0.9,0.75)*hl2*0.35;

  // Iridescent tint based on fresnel
  c = mix(c, c * vec3(0.85,1.1,1.15), fres*0.3);

  // Slight front-face lighten for readability
  float front = smoothstep(-0.3,0.5, r.z);
  c = mix(c, vec3(0.94,0.92,0.89), front*0.15);

  return c;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - u_res*0.5) / min(u_res.x, u_res.y);

  vec3 bg = vec3(0.941,0.922,0.890);
  vec3 ro = vec3(0.0,0.0,4.8);
  vec3 rd = normalize(vec3(uv, -1.5));

  // Ray march
  float t = 0.0;
  bool hit = false;
  for(int i=0; i<64; i++){
    float d = map(ro + rd*t);
    if(d < 0.002){ hit = true; break; }
    if(t > 10.0) break;
    t += d;
  }

  vec3 col = bg;

  if(hit){
    vec3 p = ro + rd*t;
    vec3 n = calcN(p);

    // Mouse-driven reflection shift
    vec2 mOff = (u_mouse - 0.5)*0.45;
    vec3 ref = reflect(rd, n);
    ref.x += mOff.x;
    ref.y += mOff.y;
    ref = normalize(ref);

    float fresnel = pow(1.0 - max(0.0, dot(-rd, n)), 3.0);
    vec3 env = envMap(ref, fresnel);
    col = mix(env*0.9, vec3(0.97,0.96,0.93), fresnel*0.4);
    col *= 0.82 + 0.18*max(0.0, dot(n, -rd));
  }

  gl_FragColor = vec4(col, 1.0);
}`

function makeShader(gl, type, src) {
  const s = gl.createShader(type)
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

export default function Intro() {
  const { lang } = useLanguage()
  const t = content.intro[lang]
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false })
    if (!gl) return

    // Shaders & program
    const vs = makeShader(gl, gl.VERTEX_SHADER, VERT)
    const fs = makeShader(gl, gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    // Fullscreen quad
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const pos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    // Uniforms
    const uRes   = gl.getUniformLocation(prog, 'u_res')
    const uTime  = gl.getUniformLocation(prog, 'u_time')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')

    let w, h
    function resize() {
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w; canvas.height = h
      gl.viewport(0, 0, w, h)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove  = (e) => { mouse.current = { x: e.clientX / w, y: 1 - e.clientY / h } }
    const onTouch = (e) => { mouse.current = { x: e.touches[0].clientX / w, y: 1 - e.touches[0].clientY / h } }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch, { passive: true })

    let time = 0, raf
    function draw() {
      time += 0.016
      gl.uniform2f(uRes, w, h)
      gl.uniform1f(uTime, time)
      gl.uniform2f(uMouse, mouse.current.x, mouse.current.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f0ebe3]">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[12vw] font-bold leading-none tracking-tighter text-[#0a1a12] sm:text-[10vw] lg:text-[8vw]"
          style={{ textShadow: '0 0 30px rgba(240,235,227,0.9), 0 0 60px rgba(240,235,227,0.5)' }}
        >
          CODELYTHE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-lg tracking-wide text-[#7a8a74] sm:text-xl"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={() =>
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex flex-col items-center gap-2 text-[#7a8a74] transition-colors hover:text-emerald-600"
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              <path
                d="M8 4v12m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
