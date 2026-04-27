import{r as T,R as c,j as e}from"./iframe-DDLJpcLL.js";import{c as N}from"./clsx-B-dksMZM.js";import{u as E}from"./useId-CUQVZ8Po.js";import{u as R}from"./useSwipeGesture-CZIBCEgo.js";import{C as S}from"./CheckIcon-1o5r4VKc.js";/* empty css               *//* empty css               *//* empty css               */import{C as F}from"./Card-CVb8KgNi.js";import{F as a}from"./Flex-BpfzIfhT.js";import{M as _}from"./Message-Cs2TcpNY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CQwKXeG_.js";import"./SlotComponent-uzXrXuB3.js";import"./mergeRefs-CXw-yqoX.js";import"./WarningIcon-C2W3ltWv.js";import"./InfoIcon-Y5AOjjFN.js";import"./DismissButton-wGkAjF2_.js";import"./CloseIcon-nSJv1-T8.js";const i=T.forwardRef(({"aria-pressed":n=!1,children:l,className:p,id:t,onChange:g,...k},h)=>{const f=E(t||"jkl-toggle-switch",{generateSuffix:!t}),[s,d]=c.useState(n);c.useEffect(()=>{d(n)},[n]);const{onClick:j,onPointerCancel:v,onPointerDown:x,onPointerMove:w,onPointerUp:M,...u}=k,b=r=>{d(!s),g?.(r,!s),j?.(r)},y=(r,m)=>{m!==s&&(d(m),g?.(r,m))},{gestureHandlers:C}=R({onClick:b,onChange:y,onPointerCancel:v,onPointerDown:x,onPointerMove:w,onPointerUp:M});return e.jsxs("button",{className:N("jkl-toggle-switch",p),id:f,ref:h,"aria-pressed":s,...u,...u.disabled?{}:C,children:[l,e.jsx("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget",children:e.jsxs("div",{className:"jkl-toggle-switch-widget__slider",children:[e.jsx("div",{className:"jkl-toggle-switch-widget__knob"}),e.jsx(S,{bold:!0,className:"jkl-toggle-switch-widget__indicator"})]})})]})});i.displayName="ToggleSwitch";i.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    event: React.MouseEvent<T> | React.PointerEvent<T>,
    pressed: boolean,
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<T> | React.PointerEvent<T>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<T>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactPointerEvent",raw:"React.PointerEvent<T>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"},{type:{name:"boolean"},name:"pressed"}],return:{name:"void"}}},description:'Handler for å håndtere toggling av knappen. Tar inn en boolean som indikerer om knappen er er togglet på\neller ikke, samt en MouseEvent eller en PointerEvent avhengig av om togglingen skjedde via klikk eller swipe.\n@example\n```js\nfunction handleChange(event, pressed) {\n   console.log(`ToggleSwitch er ${pressed ? "på" : "av"}`);\n}\n```'},"aria-pressed":{defaultValue:{value:"false",computed:!1},required:!1}}};const Y={title:"Komponenter/ToggleSwitch",component:i},o={render:()=>{const[n,l]=c.useState(!1);return e.jsx(F,{padding:"l","data-theme":n?"dark":"light",children:e.jsxs(a,{direction:"column",gap:"l",children:[e.jsxs(a,{justifyContent:"space-between",alignItems:"center",gap:"m",wrap:"wrap",children:[e.jsxs(a,{direction:"column",gap:"2xs",children:[e.jsx("h2",{className:"jkl-heading-3",children:"Tema for innholdet"}),e.jsx("p",{className:"jkl-body",children:"Denne bryteren oppdaterer temaet med en gang for innholdet i eksempelet under."})]}),e.jsx(i,{"aria-pressed":n,onChange:(p,t)=>l(t),children:"Mørkt modus"})]}),n?"Mørkt tema aktivt":"Lyst tema aktivt",e.jsxs(a,{direction:"column",gap:"s",children:[e.jsxs("div",{children:[e.jsx("p",{className:"jkl-heading-5",children:"Forsikringsoversikt"}),e.jsx("p",{className:"jkl-body",children:"Reiseforsikringen din er aktiv, og du er dekket for avbestilling, forsinket bagasje og medisinsk hjelp på reise."})]}),e.jsx(_,{variant:"info",title:"Status",children:"Neste fornyelse er 14. august, og det er ingen utestående endringer på avtalen."})]})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
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
                        <ToggleSwitchComponent aria-pressed={darkMode} onChange={(_, pressed) => setDarkMode(pressed)}>
                            Mørkt modus
                        </ToggleSwitchComponent>
                    </Flex>

                    {darkMode ? "Mørkt tema aktivt" : "Lyst tema aktivt"}

                    <Flex direction="column" gap="s">
                        <div>
                            <p className="jkl-heading-5">Forsikringsoversikt</p>
                            <p className="jkl-body">
                                Reiseforsikringen din er aktiv, og du er dekket
                                for avbestilling, forsinket bagasje og medisinsk
                                hjelp på reise.
                            </p>
                        </div>
                        <Message variant="info" title="Status">
                            Neste fornyelse er 14. august, og det er ingen
                            utestående endringer på avtalen.
                        </Message>
                    </Flex>
                </Flex>
            </Card>;
  }
}`,...o.parameters?.docs?.source}}};const Z=["ByttTemaForInnhold"];export{o as ByttTemaForInnhold,Z as __namedExportsOrder,Y as default};
