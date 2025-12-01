import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as d}from"./index-siqcju79.js";import{B as l}from"./Button-fpmiG8ZH.js";import{u as p}from"./useAnimatedHeight-BAxzwhOL.js";import{u}from"./useAnimatedHeightBetween-CT0m4_DH.js";import{u as h}from"./useAutoAnimateHeight-8n24dQsP.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-d2GYn7oW.js";import"./useBrowserPreferences-B9LcbCiO.js";const g=e.jsx(e.Fragment,{children:e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})}),y=e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."})]}),k=e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),e.jsx("p",{className:"jkl-body",children:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),f=e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),e.jsx("p",{className:"jkl-body",children:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{className:"jkl-body",children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."})]}),c=[g,y,k,f];function m(n){let t=c[Math.floor(Math.random()*c.length)];return t===n&&(t=m(n)),t}const M={title:"Hooks/Animasjon av høyde",component:()=>null,parameters:{layout:"padded"},tags:["autodocs"]},x=n=>{console.log(`transition started (${n?"opening":"closing"})`)},b=n=>{console.log(`transition ended (${n?"open":"closed"})`)},a={name:"useAnimatedHeight",render:()=>{const[n,t]=d.useState(!1),[s]=p(n,{onTransitionStart:x,onTransitionEnd:b});return e.jsxs("section",{children:[e.jsxs(l,{onClick:()=>t(i=>!i),children:["Animer ",n?"ut":"inn"]}),e.jsx("div",{ref:s,children:e.jsx("div",{className:"lorem-text",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam officiis optio soluta veniam voluptatibus!"})})]})}},o={name:"useAnimatedHeightBetween",render:()=>{const[n,t]=d.useState(!1),[s]=u(n,{timing:"expressive"});return e.jsxs("section",{ref:s,className:"animation-between-example",children:[e.jsx("p",{className:"jkl-heading-2",children:"Lorem Ipsum"}),e.jsx("p",{className:"jkl-body",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),e.jsx("p",{className:"jkl-body",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),e.jsx("p",{className:"jkl-body",children:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(l,{onClick:()=>t(i=>!i),children:`Vis ${n?"mindre":"mer"}`})]})}},r={name:"useAutoAnimatedHeight",render:()=>{const[n,t]=d.useState(m()),s=h(n),i=()=>{t(m(n))};return e.jsxs("section",{ref:s,className:"auto-animation-example",children:[e.jsx("p",{className:"jkl-heading-2",children:"Lorem Ipsum"}),n,e.jsx(l,{"data-density":"compact",onClick:i,children:"Endre innhold"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const q=["UseAnimatedHeight","UseAnimatedHeightBetween","UseAutoAnimatedHeight"];export{a as UseAnimatedHeight,o as UseAnimatedHeightBetween,r as UseAutoAnimatedHeight,q as __namedExportsOrder,M as default};
