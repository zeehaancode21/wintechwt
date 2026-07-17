import{K as e,Z as t,i as n,n as r,r as i,t as a,u as o}from"./motion-LzQeDcBV.js";import{i as s,n as c,r as l,t as u}from"./users-ByPcFka-.js";import{_ as d,a as f,o as p,r as m,t as h}from"./index-DqJ8alx_.js";var g=d(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),_={some:0,all:1};function v(e,t,{root:n,margin:r,amount:i=`some`}={}){let a=f(e),o=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=o.get(e.target);if(e.isIntersecting!==!!n)if(e.isIntersecting){let n=t(e.target,e);typeof n==`function`?o.set(e.target,n):s.unobserve(e.target)}else typeof n==`function`&&(n(e),o.delete(e.target))})},{root:n,rootMargin:r,threshold:typeof i==`number`?i:_[i]});return a.forEach(e=>s.observe(e)),()=>s.disconnect()}var y=t(e(),1);function b(e,{root:t,margin:n,amount:r,once:i=!1,initial:a=!1}={}){let[o,s]=(0,y.useState)(a);return(0,y.useEffect)(()=>{if(!e.current||i&&o)return;let a=()=>(s(!0),i?void 0:()=>s(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return v(e.current,a,c)},[t,e,n,i,r]),o}var x=o(),S=(0,y.memo)(function(){return(0,x.jsx)(`style`,{children:`
      @keyframes wt-float {
        0%, 100% { transform: translate(0, 0); opacity: .2; }
        50% { transform: translate(var(--fx, 20px), var(--fy, -30px)); opacity: .6; }
      }
      @keyframes wt-bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      @keyframes wt-spin-slow {
        to { transform: rotate(360deg); }
      }
      @keyframes wt-star-drift {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: .3; }
        50% { transform: translateY(-10px) rotate(180deg); opacity: .6; }
      }
      @keyframes wt-ring-pulse {
        0% { transform: scale(0); opacity: .5; }
        60% { opacity: .15; }
        100% { transform: scale(1.5); opacity: 0; }
      }
      @keyframes wt-shine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes wt-glow-soft {
        0%, 100% { box-shadow: 0 0 10px rgba(255,107,53,.3); }
        50% { box-shadow: 0 0 20px rgba(255,107,53,.5); }
      }
      @keyframes wt-glow-strong {
        0%, 100% { box-shadow: 0 0 20px rgba(255,107,53,.5); }
        50% { box-shadow: 0 0 40px rgba(255,107,53,.8); }
      }
      @keyframes wt-gradient-pan {
        0% { background-position: 0% 0%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 0%; }
      }
      @keyframes wt-card-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,107,53,0.2); }
        50% { box-shadow: 0 0 40px rgba(255,107,53,0.4); }
      }
      .wt-particle { animation: wt-float var(--dur, 15s) ease-in-out var(--delay, 0s) infinite; }
      .wt-bob { animation: wt-bob 2s ease-in-out infinite; }
      .wt-spin-slow { animation: wt-spin-slow 3s linear infinite; }
      .wt-star { animation: wt-star-drift var(--dur, 3s) ease-in-out var(--delay, 0s) infinite; }
      .wt-pulse-ring { animation: wt-ring-pulse 2s ease-out var(--delay, 0s) infinite; }
      .wt-glow-idle { animation: wt-glow-soft 2s ease-in-out infinite; }
      .wt-glow-hover { animation: wt-glow-strong 2s ease-in-out infinite; }
      .wt-shine-sweep { animation: wt-shine 1.5s ease-in-out infinite; }
      .wt-bg-pan { background-size: 300% 300%; animation: wt-gradient-pan 3s linear infinite; }
      .wt-card-glow { animation: wt-card-glow 3s ease-in-out infinite; }
    `})}),C=(0,y.memo)(function({count:e=14}){return(0,x.jsx)(`div`,{className:`absolute inset-0 overflow-hidden pointer-events-none`,children:(0,y.useMemo)(()=>Array.from({length:e},(e,t)=>({id:t,x:Math.random()*100,y:Math.random()*100,size:Math.random()*6+2,duration:Math.random()*20+10,delay:Math.random()*10,fx:`${(Math.random()-.5)*40}px`,fy:`${-20-Math.random()*20}px`})),[e]).map(e=>(0,x.jsx)(`div`,{className:`wt-particle absolute rounded-full bg-accent/20`,style:{width:e.size,height:e.size,left:`${e.x}%`,top:`${e.y}%`,"--dur":`${e.duration}s`,"--delay":`${e.delay}s`,"--fx":e.fx,"--fy":e.fy}},e.id))})}),w=[{icon:c,title:`Reliability`,desc:`Same-day response, honest diagnosis and long-term accountability.`},{icon:l,title:`Genuine Products`,desc:`Only authorized brands, sealed packaging and real warranties.`},{icon:u,title:`Client-First`,desc:`Transparent pricing and jargon-free explanations for every decision.`},{icon:p,title:`Speed`,desc:`Fast installs and rapid fixes — because downtime costs you money.`}],T=[`Hikvision Certified`,`CP Plus Partner`,`Dell Authorized Reseller`,`HP Service Partner`,`Licensed Electrical Contractor`],E={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2}}},D={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:`spring`,damping:15,stiffness:100}}},O=({children:e,className:t=``})=>(0,x.jsx)(m.div,{className:`${t} transition-all duration-300`,whileHover:{rotateX:3,rotateY:3,scale:1.02,boxShadow:`0 20px 40px -12px rgba(255,107,53,0.3)`},transition:{type:`spring`,damping:20,stiffness:300},style:{perspective:`800px`},children:e});function k(){let e=(0,y.useRef)(null),t=b(e,{once:!0,amount:.3});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S,{}),(0,x.jsxs)(`div`,{className:`relative -mt-16 overflow-hidden`,children:[(0,x.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.08),transparent_50%)]`}),(0,x.jsx)(C,{count:12}),(0,x.jsx)(h,{eyebrow:`About Wintech`,title:`The last vendor call you'll ever need to make.`,sub:(0,x.jsxs)(`div`,{className:`hero-content-wrapper`,children:[(0,x.jsxs)(m.div,{className:`hero-tagline`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:[(0,x.jsxs)(`span`,{className:`pill`,children:[(0,x.jsx)(`span`,{className:`icon`,children:`🛡️`}),` Secure`]}),(0,x.jsx)(`span`,{className:`dot`,children:`·`}),(0,x.jsxs)(`span`,{className:`pill`,children:[(0,x.jsx)(`span`,{className:`icon`,children:`⚡`}),` Server-ready`]}),(0,x.jsx)(`span`,{className:`dot`,children:`·`}),(0,x.jsxs)(`span`,{className:`pill`,children:[(0,x.jsx)(`span`,{className:`icon`,children:`🔌`}),` Wired`]}),(0,x.jsx)(`span`,{className:`dot`,children:`·`}),(0,x.jsxs)(`span`,{className:`pill`,children:[(0,x.jsx)(`span`,{className:`icon`,children:`📶`}),` Wireless`]}),(0,x.jsx)(`span`,{className:`dot`,children:`—`}),(0,x.jsxs)(`span`,{className:`accent-badge`,children:[(0,x.jsx)(`span`,{className:`icon`,children:`✨`}),` total coverage`]})]}),(0,x.jsx)(m.div,{className:`hero-description`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:`Whether it's protecting your business with CCTV, setting up office IT infrastructure, deploying servers & networks, repairing desktops and laptops, installing printers, implementing biometric attendance, providing GST billing software's, or handling electrical works, we deliver complete technology solutions that simply work.`})]})})]}),(0,x.jsx)(`section`,{className:`section-pad overflow-hidden`,children:(0,x.jsxs)(`div`,{className:`container-x grid gap-12 lg:grid-cols-2 lg:items-center`,children:[(0,x.jsxs)(m.div,{ref:e,className:`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark shadow-2xl wt-card-glow`,initial:{opacity:0,scale:.95},animate:t?{opacity:1,scale:1}:{opacity:0,scale:.95},transition:{duration:.8,type:`spring`,damping:20},children:[(0,x.jsx)(m.div,{className:`absolute -top-10 -right-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl`,animate:{y:[0,-20,0],x:[0,10,0]},transition:{duration:6,repeat:1/0,ease:`easeInOut`}}),(0,x.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.35),transparent_60%)]`}),(0,x.jsx)(m.div,{className:`absolute inset-0 grid place-items-center text-white wt-bob`,animate:{y:[0,-6,0]},transition:{duration:3,repeat:1/0,ease:`easeInOut`},children:(0,x.jsxs)(`div`,{className:`text-center px-6 relative z-10`,children:[(0,x.jsx)(`div`,{className:`font-display text-6xl sm:text-7xl font-extrabold`,children:(0,x.jsx)(a,{to:12,suffix:`+`})}),(0,x.jsx)(`div`,{className:`mt-3 text-lg text-white/85`,children:`Years serving Mysore`}),(0,x.jsxs)(`div`,{className:`mt-8 grid grid-cols-2 gap-6 max-w-xs mx-auto`,children:[(0,x.jsx)(A,{n:600,suf:`+`,label:`Projects`}),(0,x.jsx)(A,{n:800,suf:`+`,label:`Clients`})]})]})}),(0,x.jsx)(`div`,{className:`absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 wt-spin-slow pointer-events-none`}),(0,x.jsx)(`div`,{className:`absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-white/5 wt-spin-slow pointer-events-none`,style:{animationDirection:`reverse`}})]}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`span`,{className:`text-sm font-semibold uppercase tracking-wider text-accent`,children:`Our Story`}),(0,x.jsx)(`h2`,{className:`mt-3 font-display text-3xl sm:text-4xl font-bold text-primary`,children:`Built on trust. Grown by referrals.`}),(0,x.jsxs)(m.div,{className:`mt-5 space-y-4 text-muted-foreground leading-relaxed`,variants:E,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},children:[(0,x.jsxs)(m.p,{variants:D,children:[i.name,` started as a small CCTV and computer service shop in Mysore. Over the last decade we've grown into a full-service partner for businesses across the city — installing, maintaining and upgrading everything from security cameras and servers to biometric access control and industrial electrical panels.`]}),(0,x.jsx)(m.p,{variants:D,children:`What hasn't changed is how we work: pick up the phone, show up on time, explain the problem clearly, and stand behind every job.`})]}),(0,x.jsxs)(`div`,{className:`mt-8 grid gap-3 sm:grid-cols-2`,children:[(0,x.jsx)(O,{children:(0,x.jsx)(j,{icon:g,title:`Our Mission`,desc:`Deliver honest, reliable technology and electrical services that let our clients focus on their business.`})}),(0,x.jsx)(O,{children:(0,x.jsx)(j,{icon:s,title:`Our Promise`,desc:`Genuine products, certified engineers and after-sales support that actually shows up.`})})]})]})]})}),(0,x.jsxs)(`section`,{className:`section-pad bg-surface relative overflow-hidden`,children:[(0,x.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_60%)]`}),(0,x.jsxs)(`div`,{className:`container-x relative`,children:[(0,x.jsxs)(m.div,{className:`max-w-2xl`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,x.jsx)(`span`,{className:`text-sm font-semibold uppercase tracking-wider text-accent`,children:`What We Stand For`}),(0,x.jsx)(`h2`,{className:`mt-3 font-display text-3xl sm:text-4xl font-bold text-primary`,children:`Our core values`})]}),(0,x.jsx)(m.div,{className:`mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.1},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},children:w.map(e=>{let t=e.icon;return(0,x.jsxs)(m.div,{variants:{hidden:{opacity:0,y:40,scale:.9,rotateX:15},visible:{opacity:1,y:0,scale:1,rotateX:0}},transition:{type:`spring`,damping:20,stiffness:200},whileHover:{rotateX:4,rotateY:4,scale:1.03,boxShadow:`0 20px 40px -12px rgba(255,107,53,0.25)`,borderColor:`#FF6B35`},style:{perspective:`600px`},className:`group h-full rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-accent`,children:[(0,x.jsx)(`div`,{className:`grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110`,children:(0,x.jsx)(t,{className:`h-5 w-5`})}),(0,x.jsx)(`h3`,{className:`mt-4 font-semibold group-hover:text-accent transition-colors`,children:e.title}),(0,x.jsx)(`p`,{className:`mt-2 text-sm text-muted-foreground`,children:e.desc}),(0,x.jsx)(`div`,{className:`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full`})]},e.title)})})]})]}),(0,x.jsxs)(`section`,{className:`section-pad relative overflow-hidden`,children:[(0,x.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.05),transparent_50%)]`}),(0,x.jsxs)(`div`,{className:`container-x text-center relative`,children:[(0,x.jsxs)(r,{children:[(0,x.jsx)(m.span,{className:`text-sm font-semibold uppercase tracking-wider text-accent`,whileHover:{letterSpacing:`0.1em`},children:`Certifications & Partnerships`}),(0,x.jsx)(`h2`,{className:`mt-3 font-display text-3xl sm:text-4xl font-bold text-primary`,children:`Authorized. Trained. Trusted.`})]}),(0,x.jsx)(m.div,{className:`mt-8 flex-wrap justify-center gap-3 flex`,initial:`hidden`,animate:`visible`,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},children:T.map(e=>(0,x.jsxs)(m.span,{variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},whileHover:{scale:1.1,boxShadow:`0 8px 20px -8px rgba(255,107,53,0.3)`},className:`inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-accent hover:shadow-lg`,children:[(0,x.jsx)(l,{className:`h-4 w-4 text-accent`}),e]},e))}),(0,x.jsx)(`div`,{className:`mt-10`,children:(0,x.jsxs)(n,{to:`/contact`,className:`btn-primary relative overflow-hidden group`,children:[(0,x.jsx)(`span`,{className:`relative z-10`,children:`Work with us`}),(0,x.jsx)(`span`,{className:`absolute inset-0 bg-accent -translate-x-full transition-transform duration-300 group-hover:translate-x-0`})]})})]})]}),(0,x.jsx)(`style`,{children:`
        .hero-content-wrapper {
          width: 100%;
          max-width: 100%;
          overflow: visible;
          margin-top: -0.5rem;
        }

        .page-hero {
          padding-top: 0 !important;
          padding-bottom: 0.5rem !important;
        }

        .hero-tagline {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.2rem 0.3rem;
          font-size: 1rem;
          font-weight: 500;
          color: #1a3b54;
          padding: 0.4rem 1.2rem;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 60px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          width: fit-content;
          max-width: 100%;
          animation: taglinePulse 3s ease-in-out infinite alternate, floatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          flex-wrap: nowrap;
          overflow: visible;
          white-space: nowrap;
        }

        .hero-tagline:hover {
          box-shadow: 0 8px 30px rgba(26, 76, 122, 0.08);
        }

        .hero-tagline .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.15rem;
          padding: 0.1rem 0.6rem;
          background: rgba(26, 76, 122, 0.06);
          border-radius: 40px;
          font-weight: 600;
          color: #0b2a44;
          border: 1px solid rgba(26, 76, 122, 0.08);
          transition: all 0.25s ease;
          cursor: default;
          white-space: nowrap;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .hero-tagline .pill:hover {
          background: rgba(26, 76, 122, 0.12);
          transform: translateY(-2px) scale(1.02);
        }

        .hero-tagline .pill .icon {
          font-size: 0.8rem;
          line-height: 1;
        }

        .hero-tagline .dot {
          color: #8aaec9;
          font-weight: 300;
          margin: 0 0.05rem;
          flex-shrink: 0;
          font-size: 0.85rem;
        }

        .hero-tagline .accent-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.15rem;
          padding: 0.1rem 0.9rem;
          background: linear-gradient(135deg, #1a4c7a, #2b7aaa);
          color: white;
          border-radius: 40px;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(26, 76, 122, 0.25);
          transition: all 0.3s ease;
          cursor: default;
          white-space: nowrap;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .hero-tagline .accent-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(26, 76, 122, 0.35);
        }

        .hero-tagline .accent-badge .icon {
          font-size: 0.8rem;
        }

        .hero-description {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #1f3b4f;
          padding: 0.8rem 1.2rem;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.4);
          width: 100%;
          max-width: 100%;
          overflow: visible;
          animation: floatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }

        @keyframes taglinePulse {
          0% { box-shadow: 0 2px 12px rgba(26, 76, 122, 0.02); border-color: rgba(255, 255, 255, 0.4); }
          100% { box-shadow: 0 8px 32px rgba(26, 76, 122, 0.08); border-color: rgba(26, 76, 122, 0.15); }
        }

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .hero-tagline {
            font-size: 0.75rem;
            padding: 0.3rem 0.8rem;
            width: auto;
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            white-space: nowrap;
            gap: 0.15rem 0.2rem;
          }
          .hero-tagline .pill {
            padding: 0.08rem 0.4rem;
            font-size: 0.7rem;
          }
          .hero-tagline .accent-badge {
            padding: 0.08rem 0.6rem;
            font-size: 0.7rem;
          }
          .hero-tagline .pill .icon {
            font-size: 0.65rem;
          }
          .hero-tagline .accent-badge .icon {
            font-size: 0.65rem;
          }
          .hero-tagline .dot {
            font-size: 0.7rem;
          }
          .hero-description {
            font-size: 0.9rem;
            padding: 0.6rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-tagline {
            font-size: 0.6rem;
            padding: 0.2rem 0.6rem;
            gap: 0.1rem 0.15rem;
          }
          .hero-tagline .pill {
            padding: 0.05rem 0.3rem;
            font-size: 0.6rem;
          }
          .hero-tagline .accent-badge {
            padding: 0.05rem 0.4rem;
            font-size: 0.6rem;
          }
          .hero-tagline .pill .icon {
            font-size: 0.55rem;
          }
          .hero-tagline .accent-badge .icon {
            font-size: 0.55rem;
          }
          .hero-tagline .dot {
            font-size: 0.6rem;
          }
          .hero-description {
            font-size: 0.8rem;
            padding: 0.4rem 0.7rem;
          }
        }

        .hero-tagline {
          display: flex !important;
          flex-wrap: nowrap !important;
          white-space: nowrap !important;
          overflow: visible !important;
        }
      `})]})}function A({n:e,suf:t,label:n}){return(0,x.jsxs)(m.div,{whileHover:{scale:1.1},transition:{type:`spring`,stiffness:400},children:[(0,x.jsx)(`div`,{className:`font-display text-3xl font-bold`,children:(0,x.jsx)(a,{to:e,suffix:t})}),(0,x.jsx)(`div`,{className:`text-xs text-white/70 mt-1`,children:n})]})}function j({icon:e,title:t,desc:n}){return(0,x.jsxs)(`div`,{className:`rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(`div`,{className:`grid h-9 w-9 place-items-center rounded-md bg-primary/5 text-primary transition-transform duration-300 group-hover:rotate-[360deg]`,children:(0,x.jsx)(e,{className:`h-4 w-4`})}),(0,x.jsx)(`h3`,{className:`font-semibold text-sm group-hover:text-accent transition-colors`,children:t})]}),(0,x.jsx)(`p`,{className:`mt-2 text-sm text-muted-foreground`,children:n})]})}export{k as component};