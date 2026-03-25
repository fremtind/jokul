import{r as N,R as u,j as e}from"./iframe-DP92GG-Y.js";import{c as E}from"./clsx-B-dksMZM.js";import{u as R}from"./useId-DzLAgHnO.js";import{u as S}from"./useSwipeGesture-Cgv4V2_t.js";import{C as F}from"./CheckIcon-JYRtx323.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import{C as _}from"./Card-D9ROXb87.js";import{F as o}from"./Flex-BLDg9gH7.js";import{M as P}from"./Message-CY46WFt3.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-3FTGEmVE.js";import"./SlotComponent-hciTDkbP.js";import"./mergeRefs-WbUf0d8k.js";import"./WarningIcon-BbG7GN-Q.js";import"./InfoIcon-5ZO2FKds.js";import"./DismissButton-CbGfSoix.js";import"./CloseIcon-NoKlkRAk.js";const d=N.forwardRef(({"aria-pressed":n=!1,children:t,className:c,id:m,onChange:a,...h},f)=>{const j=R(m||"jkl-toggle-switch",{generateSuffix:!m}),[r,p]=u.useState(n);u.useEffect(()=>{p(n)},[n]);const{onClick:v,onPointerCancel:x,onPointerDown:w,onPointerMove:M,onPointerUp:b,...k}=h,y=s=>{p(!r),a?.(s,!r),v?.(s)},C=(s,g)=>{g!==r&&(p(g),a?.(s,g))},{gestureHandlers:T}=S({onClick:y,onChange:C,onPointerCancel:x,onPointerDown:w,onPointerMove:M,onPointerUp:b});return e.jsxs("button",{className:E("jkl-toggle-switch",c),id:j,ref:f,"aria-pressed":r,...k,...k.disabled?{}:T,children:[t,e.jsx("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget",children:e.jsxs("div",{className:"jkl-toggle-switch-widget__slider",children:[e.jsx("div",{className:"jkl-toggle-switch-widget__knob"}),e.jsx(F,{bold:!0,className:"jkl-toggle-switch-widget__indicator"})]})})]})});d.displayName="ToggleSwitch";d.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    event: React.MouseEvent<T> | React.PointerEvent<T>,
    pressed: boolean,
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<T> | React.PointerEvent<T>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<T>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactPointerEvent",raw:"React.PointerEvent<T>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"},{type:{name:"boolean"},name:"pressed"}],return:{name:"void"}}},description:'Handler for å håndtere toggling av knappen. Tar inn en boolean som indikerer om knappen er er togglet på\neller ikke, samt en MouseEvent eller en PointerEvent avhengig av om togglingen skjedde via klikk eller swipe.\n@example\n```js\nfunction handleChange(event, pressed) {\n   console.log(`ToggleSwitch er ${pressed ? "på" : "av"}`);\n}\n```'},"aria-pressed":{defaultValue:{value:"false",computed:!1},required:!1}}};const ee={title:"Komponenter/ToggleSwitch",component:d,args:{"aria-pressed":!0,children:"Mørkt modus"}},i={},l={render:n=>{const[t,c]=u.useState(!1);return e.jsx(_,{padding:"l","data-theme":t?"dark":"light",children:e.jsxs(o,{direction:"column",gap:"l",children:[e.jsxs(o,{justifyContent:"space-between",alignItems:"center",gap:"m",wrap:"wrap",children:[e.jsxs(o,{direction:"column",gap:"2xs",children:[e.jsx("h2",{className:"jkl-heading-3",children:"Tema for innholdet"}),e.jsx("p",{className:"jkl-body",children:"Denne bryteren oppdaterer temaet med en gang for innholdet i eksempelet under."})]}),e.jsx(d,{"aria-pressed":t,onChange:(m,a)=>c(a),...n})]}),t?"Mørkt tema aktivt":"Lyst tema aktivt",e.jsxs(o,{direction:"column",gap:"s",children:[e.jsxs("div",{children:[e.jsx("p",{className:"jkl-heading-5",children:"Forsikringsoversikt"}),e.jsx("p",{className:"jkl-body",children:"Reiseforsikringen din er aktiv, og du er dekket for avbestilling, forsinket bagasje og medisinsk hjelp pa reise."})]}),e.jsx(P,{variant:"info",title:"Status",children:"Neste fornyelse er 14. august, og det er ingen utestaende endringer pa avtalen."})]})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [darkMode, setDarkMode] = React.useState(false);
    return <Card padding="l" data-theme={darkMode ? "dark" : "light"}>
                <Flex direction="column" gap="l">
                    <Flex justifyContent="space-between" alignItems="center" gap="m" wrap="wrap">
                        <Flex direction="column" gap="2xs">
                            <h2 className="jkl-heading-3">
                                Tema for innholdet
                            </h2>
                            <p className="jkl-body">
                                Denne bryteren oppdaterer temaet med en gang for
                                innholdet i eksempelet under.
                            </p>
                        </Flex>
                        <ToggleSwitchComponent aria-pressed={darkMode} onChange={(_, pressed) => setDarkMode(pressed)} {...args} />
                    </Flex>

                    {darkMode ? "Mørkt tema aktivt" : "Lyst tema aktivt"}

                    <Flex direction="column" gap="s">
                        <div>
                            <p className="jkl-heading-5">Forsikringsoversikt</p>
                            <p className="jkl-body">
                                Reiseforsikringen din er aktiv, og du er dekket
                                for avbestilling, forsinket bagasje og medisinsk
                                hjelp pa reise.
                            </p>
                        </div>
                        <Message variant="info" title="Status">
                            Neste fornyelse er 14. august, og det er ingen
                            utestaende endringer pa avtalen.
                        </Message>
                    </Flex>
                </Flex>
            </Card>;
  }
}`,...l.parameters?.docs?.source}}};const ne=["Default","ByttTemaForInnhold"];export{l as ByttTemaForInnhold,i as Default,ne as __namedExportsOrder,ee as default};
