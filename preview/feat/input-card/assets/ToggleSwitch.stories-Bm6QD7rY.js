import{j as e,R as m}from"./iframe-zPrpp1R5.js";import{T as r}from"./ToggleSwitch-BYc5log6.js";/* empty css               *//* empty css               *//* empty css               */import{C as c}from"./Card-DwCQ5_sH.js";import{F as n}from"./Flex-CdebVdLk.js";import{M as g}from"./Message-mLhmhwRX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dw8g-OdV.js";import"./useSwipeGesture-DtOTHtv6.js";import"./CheckIcon-CcEHLeWm.js";import"./Icon-CI8V8vfn.js";import"./types-BKcj73j9.js";import"./SlotComponent-B-Ea6QWv.js";import"./mergeRefs-_7lZvp9j.js";import"./SuccessIcon-B3ON2Sqp.js";import"./InfoIcon-EtVLSD3e.js";import"./WarningIcon-qWm2reEH.js";import"./DismissButton-CfixcCTx.js";import"./CloseIcon-B7GyGuuh.js";const{useGlobals:h}=__STORYBOOK_MODULE_PREVIEW_API__,P={title:"Komponenter/ToggleSwitch",component:r},t={render:()=>{const[o,i]=m.useState(!1);return e.jsx(r,{"aria-pressed":o,onChange:(d,l)=>i(l)})}},s={render:()=>e.jsxs(n,{direction:"column",gap:"m",alignItems:"start",children:[e.jsx(r,{disabled:!0,"aria-pressed":!1,children:"Av"}),e.jsx(r,{disabled:!0,"aria-pressed":!0,children:"På"})]})},a={render:()=>{const[{theme:o},i]=h(),d=o==="dark";return e.jsx(c,{padding:"l",children:e.jsxs(n,{direction:"column",gap:"l",children:[e.jsxs(n,{justifyContent:"space-between",alignItems:"center",gap:"m",wrap:"wrap",children:[e.jsxs(n,{direction:"column",gap:"2xs",children:[e.jsx("h2",{className:"jkl-heading-3",children:"Tema for innholdet"}),e.jsx("p",{className:"jkl-body",children:"Denne bryteren oppdaterer temaet med en gang for innholdet i eksempelet under."})]}),e.jsx(r,{"aria-pressed":d,onChange:(l,p)=>i({theme:p?"dark":"light"}),children:"Mørk modus"})]}),d?"Mørkt tema aktivt":"Lyst tema aktivt",e.jsxs(n,{direction:"column",gap:"s",children:[e.jsxs("div",{children:[e.jsx("p",{className:"jkl-heading-5",children:"Forsikringsoversikt"}),e.jsx("p",{className:"jkl-body",children:"Reiseforsikringen din er aktiv, og du er dekket for avbestilling, forsinket bagasje og medisinsk hjelp på reise."})]}),e.jsx(g,{variant:"info",title:"Status",children:"Neste fornyelse er 14. august, og det er ingen utestående endringer på avtalen."})]})]})})}},A=["ToggleSwitch","Disabled","ByttTemaForInnhold"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <ToggleSwitchComponent aria-pressed={checked} onChange={(_, pressed) => setChecked(pressed)} />;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="m" alignItems="start">
            <ToggleSwitchComponent disabled aria-pressed={false}>
                Av
            </ToggleSwitchComponent>
            <ToggleSwitchComponent disabled aria-pressed={true}>
                På
            </ToggleSwitchComponent>
        </Flex>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as ByttTemaForInnhold,s as Disabled,t as ToggleSwitch,A as __namedExportsOrder,P as default};
