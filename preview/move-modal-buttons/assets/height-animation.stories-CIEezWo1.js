import{R as e,r as l}from"./index-siqcju79.js";import{B as c}from"./Button-Dng0c-UK.js";import{u as d}from"./useAnimatedHeight-RiQMQofH.js";import{u}from"./useAnimatedHeightBetween-CQwfDT2-.js";import{u as h}from"./useAutoAnimateHeight-FS5bB_AL.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./tokens-CmXyXTIM.js";import"./useBrowserPreferences-B9LcbCiO.js";const g=e.createElement(e.Fragment,null,e.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")),y=e.createElement(e.Fragment,null,e.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),e.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.")),k=e.createElement(e.Fragment,null,e.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),e.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),e.createElement("p",{className:"jkl-body"},"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),f=e.createElement(e.Fragment,null,e.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),e.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),e.createElement("p",{className:"jkl-body"},"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),e.createElement("p",{className:"jkl-body"},"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.")),p=[g,y,k,f];function m(t){let n=p[Math.floor(Math.random()*p.length)];return n===t&&(n=m(t)),n}const O={title:"Hooks/Animasjon av høyde",component:()=>null,parameters:{layout:"padded"},tags:["autodocs"]},b=t=>{console.log(`transition started (${t?"opening":"closing"})`)},v=t=>{console.log(`transition ended (${t?"open":"closed"})`)},o={name:"useAnimatedHeight",render:()=>{const[t,n]=l.useState(!1),[s]=d(t,{onTransitionStart:b,onTransitionEnd:v});return e.createElement("section",null,e.createElement(c,{onClick:()=>n(a=>!a)},"Animer ",t?"ut":"inn"),e.createElement("div",{ref:s},e.createElement("div",{className:"lorem-text"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, aperiam asperiores aut beatae consequuntur cumque delectus dolore doloremque ea fugit inventore ipsam libero magnam officiis optio soluta veniam voluptatibus!")))}},i={name:"useAnimatedHeightBetween",render:()=>{const[t,n]=l.useState(!1),[s]=u(t,{timing:"expressive"});return e.createElement("section",{ref:s,className:"animation-between-example"},e.createElement("p",{className:"jkl-heading-2"},"Lorem Ipsum"),e.createElement("p",{className:"jkl-body"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),e.createElement("p",{className:"jkl-body"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),e.createElement("p",{className:"jkl-body"},"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),e.createElement(c,{onClick:()=>n(a=>!a)},`Vis ${t?"mindre":"mer"}`))}},r={name:"useAutoAnimatedHeight",render:()=>{const[t,n]=l.useState(m()),s=h(t),a=()=>{n(m(t))};return e.createElement("section",{ref:s,className:"auto-animation-example"},e.createElement("p",{className:"jkl-heading-2"},"Lorem Ipsum"),t,e.createElement(c,{"data-density":"compact",onClick:a},"Endre innhold"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const M=["UseAnimatedHeight","UseAnimatedHeightBetween","UseAutoAnimatedHeight"];export{o as UseAnimatedHeight,i as UseAnimatedHeightBetween,r as UseAutoAnimatedHeight,M as __namedExportsOrder,O as default};
