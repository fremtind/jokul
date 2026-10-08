import{j as e,R as p}from"./iframe-BUbBSyiw.js";import{T as i}from"./ToggleSwitch-DG6_7yd2.js";/* empty css               *//* empty css               *//* empty css               */import{C as m}from"./Card-DcO-Tj2K.js";import{F as n}from"./Flex-ZJ7ENCoC.js";import{M as c}from"./Message-BySEXKia.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DaXUHhtD.js";import"./useSwipeGesture-DrUBvs13.js";import"./CheckIcon-ygdcXT3R.js";import"./Icon-htbjGrII.js";import"./types-YjSsgwWY.js";import"./SlotComponent-wF8n1cD3.js";import"./mergeRefs-BRb42Tlc.js";import"./SuccessIcon-BcZ3HLj5.js";import"./InfoIcon-BWSp9s8_.js";import"./WarningIcon-COjD6mvs.js";import"./DismissButton-IIx9VCk6.js";import"./CloseIcon-Bo1AR9_0.js";const{useGlobals:g}=__STORYBOOK_MODULE_PREVIEW_API__,B={title:"Komponenter/ToggleSwitch",component:i},r={render:()=>{const[s,a]=p.useState(!1);return e.jsx(i,{"aria-pressed":s,onChange:(o,d)=>a(d)})}},t={render:()=>{const[{theme:s},a]=g(),o=s==="dark";return e.jsx(m,{padding:"l",children:e.jsxs(n,{direction:"column",gap:"l",children:[e.jsxs(n,{justifyContent:"space-between",alignItems:"center",gap:"m",wrap:"wrap",children:[e.jsxs(n,{direction:"column",gap:"2xs",children:[e.jsx("h2",{className:"jkl-heading-3",children:"Tema for innholdet"}),e.jsx("p",{className:"jkl-body",children:"Denne bryteren oppdaterer temaet med en gang for innholdet i eksempelet under."})]}),e.jsx(i,{"aria-pressed":o,onChange:(d,l)=>a({theme:l?"dark":"light"}),children:"Mørk modus"})]}),o?"Mørkt tema aktivt":"Lyst tema aktivt",e.jsxs(n,{direction:"column",gap:"s",children:[e.jsxs("div",{children:[e.jsx("p",{className:"jkl-heading-5",children:"Forsikringsoversikt"}),e.jsx("p",{className:"jkl-body",children:"Reiseforsikringen din er aktiv, og du er dekket for avbestilling, forsinket bagasje og medisinsk hjelp på reise."})]}),e.jsx(c,{variant:"info",title:"Status",children:"Neste fornyelse er 14. august, og det er ingen utestående endringer på avtalen."})]})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <ToggleSwitchComponent aria-pressed={checked} onChange={(_, pressed) => setChecked(pressed)} />;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["ToggleSwitch","ByttTemaForInnhold"];export{t as ByttTemaForInnhold,r as ToggleSwitch,D as __namedExportsOrder,B as default};
