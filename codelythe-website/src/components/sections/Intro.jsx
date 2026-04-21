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

float map(vec3 p){
  float d = length(p) - 1.0;
  d += 0.14*sin(p.x*2.0+u_time*0.4)*sin(p.y*2.5+u_time*0.3)*sin(p.z*2.0+u_time*0.35);
  d += 0.06*sin(p.x*4.0-u_time*0.5)*cos(p.y*3.5+u_time*0.4)*sin(p.z*4.0+u_time*0.45);
  d += 0.025*sin(p.x*7.0+u_time*0.7)*sin(p.y*6.0-u_time*0.6)*cos(p.z*5.0+u_time*0.5);
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

vec3 envMap(vec3 r, float fres){
  float y = r.y*0.5+0.5;
  vec3 c = mix(vec3(0.02,0.06,0.04), vec3(0.06,0.72,0.50), smoothstep(0.0,0.45,y));
  c = mix(c, vec3(0.96,0.94,0.91), smoothstep(0.45,0.85,y));
  c = mix(c, vec3(0.04,0.82,0.55), smoothstep(0.15,0.35,y)*smoothstep(0.65,0.45,y)*0.6);
  c = mix(c, vec3(0.96,0.62,0.04), smoothstep(0.6,0.72,y)*smoothstep(0.85,0.75,y)*0.35);
  float hl = pow(max(0.0, dot(r, normalize(vec3(0.3,0.8,0.4)))), 22.0);
  c += vec3(1.0,0.99,0.95)*hl*0.7;
  float hl2 = pow(max(0.0, dot(r, normalize(vec3(-0.5,0.5,-0.4)))), 10.0);
  c += vec3(0.5,0.9,0.75)*hl2*0.35;
  c = mix(c, c * vec3(0.85,1.1,1.15), fres*0.3);
  float front = smoothstep(-0.3,0.5, r.z);
  c = mix(c, vec3(0.94,0.92,0.89), front*0.15);
  return c;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - u_res*0.5) / min(u_res.x, u_res.y);
  vec3 bg = vec3(0.941,0.922,0.890);
  vec3 ro = vec3(0.0,0.0,4.8);
  vec3 rd = normalize(vec3(uv, -1.5));
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

export default function Intro({ onContact }) {
  const { lang } = useLanguage()
  const heroData = content.hero.variants.conservative[lang]
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false })
    if (!gl) return

    const vs = makeShader(gl, gl.VERTEX_SHADER, VERT)
    const fs = makeShader(gl, gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const pos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg-creme)]" style={{ padding: '140px 32px 80px' }}>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 text-center w-full mx-auto">
        {/* Kicker pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block rounded-full border border-[var(--border-warm)] bg-white/60 backdrop-blur-sm px-4 py-2 text-[13px] font-medium text-[var(--ink-dim)]">
            {heroData.kicker}
          </span>
        </motion.div>

        {/* H1 wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(36px,8vw,140px)] font-bold leading-[0.94] tracking-[-0.03em] text-[var(--ink-strong)] -mx-4 sm:mx-0"
          style={{ textShadow: '0 0 30px rgba(240,235,227,0.9), 0 0 60px rgba(240,235,227,0.5)', whiteSpace: 'pre-line' }}
        >
          {heroData.head}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 mx-auto max-w-[58ch] text-[18px] leading-[1.55] text-[var(--ink-strong)]"
          style={{ textShadow: '0 0 20px rgba(240,235,227,0.8)' }}
        >
          {heroData.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-11 flex items-center justify-center gap-3.5 flex-wrap"
        >
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            {heroData.workCta}
          </button>
          <a href={lang === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {heroData.cvCta}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-[var(--ink-strong)]"
        >
          {content.socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accent-deep)]"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
