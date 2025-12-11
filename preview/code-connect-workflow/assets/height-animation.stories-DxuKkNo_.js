import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{r as s}from"./index-Bv6P490N.js";import{B as h}from"./Button-7xZWz2K4.js";import{u as L}from"./useAnimatedHeight-x0eECUB-.js";import{u as N}from"./useAnimatedHeightBetween-6sjsgbM6.js";import{t as j}from"./tokens-d2GYn7oW.js";import{u as H}from"./useBrowserPreferences-1XLPz9Eq.js";import{u as E}from"./usePreviousValue-CFxVqUaX.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./Loader-DU6KErPQ.js";import"./useDelayedRender-CuF3W8uc.js";const B="standard",C="expressive";function R(n,i){const a=E(n),[r,g]=s.useState(0),A=B,w=C,y=`${j.motion.timing[w]} height ${j.motion.easing[A]}`,{prefersReducedMotion:f}=H(),k=s.useRef(),x=s.useRef(),m=s.useRef(null),u=s.useCallback(t=>{const o=m.current;o&&t.target===o&&o.removeAttribute("style")},[i]),b=s.useCallback(()=>{const t=m.current;if(!t)return;t.removeAttribute("style");const o=t.scrollHeight;k.current=requestAnimationFrame(()=>{t.style.removeProperty("transition"),t.style.setProperty("height",`${r}px`),t.style.setProperty("overflow-y","hidden"),x.current=requestAnimationFrame(()=>{t.style.setProperty("transition",y),t.style.setProperty("height",`${o}px`)})}),g(o)},[y,r]),v=s.useCallback(()=>{const t=m.current;if(t){if(a===void 0){g(t.scrollHeight);return}n!==a&&(f||b())}},[b,n,a,i,f]);return s.useEffect(()=>{v()},[n,v]),s.useEffect(()=>{const t=m.current;return t&&t.addEventListener("transitionend",u),()=>{t&&t.removeEventListener("transitionend",u)}},[u]),s.useEffect(()=>{const t=k.current,o=x.current;return()=>{t&&cancelAnimationFrame(t),o&&cancelAnimationFrame(o)}},[]),m}const P=e.jsx(e.Fragment,{children:e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})}),S=e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."})]}),O=e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),e.jsx("p",{className:"jkl-body",children:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),q=e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),e.jsx("p",{className:"jkl-body",children:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{className:"jkl-body",children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."})]}),I=[P,S,O,q];function p(n){let i=I[Math.floor(Math.random()*I.length)];return i===n&&(i=p(n)),i}const Y={title:"Hooks/Animasjon av høyde",component:()=>null,parameters:{layout:"padded"},tags:["autodocs"]},F=n=>{console.log(`transition started (${n?"opening":"closing"})`)},M=n=>{console.log(`transition ended (${n?"open":"closed"})`)},c={name:"useAnimatedHeight",render:()=>{const[n,i]=s.useState(!1),[a]=L(n,{onTransitionStart:F,onTransitionEnd:M});return e.jsxs("section",{children:[e.jsxs(h,{onClick:()=>i(r=>!r),children:["Animer ",n?"ut":"inn"]}),e.jsx("div",{ref:a,children:e.jsx("div",{className:"lorem-text",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam officiis optio soluta veniam voluptatibus!"})})]})}},l={name:"useAnimatedHeightBetween",render:()=>{const[n,i]=s.useState(!1),[a]=N(n,{timing:"expressive"});return e.jsxs("section",{ref:a,className:"animation-between-example",children:[e.jsx("p",{className:"jkl-heading-2",children:"Lorem Ipsum"}),e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),e.jsx("p",{className:"jkl-body",children:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(h,{onClick:()=>i(r=>!r),children:`Vis ${n?"mindre":"mer"}`})]})}},d={name:"useAutoAnimatedHeight",render:()=>{const[n,i]=s.useState(p()),a=R(n),r=()=>{i(p(n))};return e.jsxs("section",{ref:a,className:"auto-animation-example",children:[e.jsx("p",{className:"jkl-heading-2",children:"Lorem Ipsum"}),n,e.jsx(h,{"data-density":"compact",onClick:r,children:"Endre innhold"})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "useAnimatedHeight",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationRef] = useAnimatedHeight<HTMLDivElement>(isOpen, {
      onTransitionStart,
      onTransitionEnd
    });
    return <section>
                <Button onClick={() => setIsOpen(isOpen => !isOpen)}>
                    Animer {isOpen ? "ut" : "inn"}
                </Button>
                <div ref={animationRef}>
                    <div className="lorem-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci amet, aperiam asperiores aut beatae
                        consequuntur cumque delectus dolore doloremque ea fugit
                        inventore ipsam libero magnam officiis optio soluta
                        veniam voluptatibus!
                    </div>
                </div>
            </section>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "useAnimatedHeightBetween",
  render: () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [animationRef] = useAnimatedHeightBetween(isExpanded, {
      timing: "expressive"
    });
    return <section ref={animationRef} className="animation-between-example">
                <p className="jkl-heading-2">Lorem Ipsum</p>
                <p className="jkl-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <p className="jkl-body">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                </p>
                <p className="jkl-body">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <Button onClick={() => setIsExpanded(prev => !prev)}>{\`Vis \${isExpanded ? "mindre" : "mer"}\`}</Button>
            </section>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "useAutoAnimatedHeight",
  render: () => {
    const [content, setContent] = useState(randomContentBlock());
    const animationRef = useAutoAnimatedHeight(content);
    const changeContent = () => {
      setContent(randomContentBlock(content));
    };
    return <section ref={animationRef} className="auto-animation-example">
                <p className="jkl-heading-2">Lorem Ipsum</p>
                {content}
                <Button data-density="compact" onClick={changeContent}>
                    Endre innhold
                </Button>
            </section>;
  }
}`,...d.parameters?.docs?.source}}};const Z=["UseAnimatedHeight","UseAnimatedHeightBetween","UseAutoAnimatedHeight"];export{c as UseAnimatedHeight,l as UseAnimatedHeightBetween,d as UseAutoAnimatedHeight,Z as __namedExportsOrder,Y as default};
