import{r as y,R as u,j as e}from"./iframe-C8fGAgFk.js";import{c as S}from"./clsx-B-dksMZM.js";import{u as E}from"./useId-ChU0Ic5q.js";import{u as N}from"./useSwipeGesture-CcLFWy0C.js";import{C as R}from"./CheckIcon-wCXp-DHL.js";/* empty css               *//* empty css               *//* empty css               */import{C as F}from"./Card-DcL-Rqcp.js";import{F as d}from"./Flex-CfoTI5Xn.js";import{M as P}from"./Message-BKgkYmGA.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Dlkj1RDq.js";import"./SlotComponent-B3CrpHC2.js";import"./mergeRefs-DHBeI3Mg.js";import"./WarningIcon-DwSsQhIK.js";import"./InfoIcon-B-seh7PZ.js";import"./DismissButton-D7ARwY2v.js";import"./CloseIcon-BI5osvud.js";const a=y.forwardRef(({"aria-pressed":n=!1,children:t,className:s,id:r,onChange:o,...k},f)=>{const j=E(r||"jkl-toggle-switch",{generateSuffix:!r}),[i,p]=u.useState(n);u.useEffect(()=>{p(n)},[n]);const{onClick:v,onPointerCancel:x,onPointerDown:w,onPointerMove:b,onPointerUp:C,...h}=k,T=l=>{p(!i),o?.(l,!i),v?.(l)},M=(l,g)=>{g!==i&&(p(g),o?.(l,g))},{gestureHandlers:_}=N({onClick:T,onChange:M,onPointerCancel:x,onPointerDown:w,onPointerMove:b,onPointerUp:C});return e.jsxs("button",{className:S("jkl-toggle-switch",s),id:j,ref:f,"aria-pressed":i,...h,...h.disabled?{}:_,children:[t,e.jsx("div",{"aria-hidden":!0,className:"jkl-toggle-switch-widget",children:e.jsxs("div",{className:"jkl-toggle-switch-widget__slider",children:[e.jsx("div",{className:"jkl-toggle-switch-widget__knob"}),e.jsx(R,{bold:!0,className:"jkl-toggle-switch-widget__indicator"})]})})]})});a.displayName="ToggleSwitch";a.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
    event: React.MouseEvent<T> | React.PointerEvent<T>,
    pressed: boolean,
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<T> | React.PointerEvent<T>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<T>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactPointerEvent",raw:"React.PointerEvent<T>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"},{type:{name:"boolean"},name:"pressed"}],return:{name:"void"}}},description:'Handler for å håndtere toggling av knappen. Tar inn en boolean som indikerer om knappen er er togglet på\neller ikke, samt en MouseEvent eller en PointerEvent avhengig av om togglingen skjedde via klikk eller swipe.\n@example\n```js\nfunction handleChange(event, pressed) {\n   console.log(`ToggleSwitch er ${pressed ? "på" : "av"}`);\n}\n```'},"aria-pressed":{defaultValue:{value:"false",computed:!1},required:!1}}};const{useGlobals:I}=__STORYBOOK_MODULE_PREVIEW_API__,ee={title:"Komponenter/ToggleSwitch",component:a},c={render:()=>{const[n,t]=u.useState(!1);return e.jsx(a,{"aria-pressed":n,onChange:(s,r)=>t(r)})}},m={render:()=>{const[{theme:n},t]=I(),s=n==="dark";return e.jsx(F,{padding:"l",children:e.jsxs(d,{direction:"column",gap:"l",children:[e.jsxs(d,{justifyContent:"space-between",alignItems:"center",gap:"m",wrap:"wrap",children:[e.jsxs(d,{direction:"column",gap:"2xs",children:[e.jsx("h2",{className:"jkl-heading-3",children:"Tema for innholdet"}),e.jsx("p",{className:"jkl-body",children:"Denne bryteren oppdaterer temaet med en gang for innholdet i eksempelet under."})]}),e.jsx(a,{"aria-pressed":s,onChange:(r,o)=>t({theme:o?"dark":"light"}),children:"Mørk modus"})]}),s?"Mørkt tema aktivt":"Lyst tema aktivt",e.jsxs(d,{direction:"column",gap:"s",children:[e.jsxs("div",{children:[e.jsx("p",{className:"jkl-heading-5",children:"Forsikringsoversikt"}),e.jsx("p",{className:"jkl-body",children:"Reiseforsikringen din er aktiv, og du er dekket for avbestilling, forsinket bagasje og medisinsk hjelp på reise."})]}),e.jsx(P,{variant:"info",title:"Status",children:"Neste fornyelse er 14. august, og det er ingen utestående endringer på avtalen."})]})]})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <ToggleSwitchComponent aria-pressed={checked} onChange={(_, pressed) => setChecked(pressed)} />;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [{
      theme
    }, updateGlobals] = useGlobals();
    const darkMode = theme === "dark";
    return <Card padding="l">
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
                        <ToggleSwitchComponent aria-pressed={darkMode} onChange={(_, pressed) => updateGlobals({
            theme: pressed ? "dark" : "light"
          })}>
                            Mørk modus
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
}`,...m.parameters?.docs?.source}}};const ne=["ToggleSwitch","ByttTemaForInnhold"];export{m as ByttTemaForInnhold,c as ToggleSwitch,ne as __namedExportsOrder,ee as default};
