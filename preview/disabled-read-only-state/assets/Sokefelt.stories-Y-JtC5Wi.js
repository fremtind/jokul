import{j as r}from"./iframe-CP-IjQrv.js";import{R as t,G as m}from"./stateGrid-5XExgb3L.js";import{S as a}from"./Search-Du8lYQb4.js";import{P as d}from"./PopupTip-3yOC_8tS.js";import{T as u}from"./Title-ChMZNWaC.js";import"./preload-helper-PPVm8Dsz.js";import"./Text-10_-iEqg.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-BvY58Wlt.js";import"./InputGroup-B-1U3AYL.js";import"./useId-Cn0qH6J3.js";import"./Label-Dt7baxze.js";import"./SupportLabel-CaoOG4nj.js";import"./SuccessIcon-CIubNwDC.js";import"./Icon-D_iovIj6.js";import"./WarningIcon-DjqjKvB_.js";import"./QuestionIcon-VhCQwvlc.js";import"./TooltipTrigger-Cv2-Hqa2.js";import"./floating-ui.react-FtH66czQ.js";import"./index-DkZ27y6N.js";import"./index-BXxq2AnA.js";import"./TooltipContent-D11J0PpG.js";import"./useBrowserPreferences-Dn5XXmsT.js";import"./getThemeAndSize-CZAj3IXt.js";const G={title:"Mønstre/Søkefelt",parameters:{layout:"padded",docs:{description:{component:"Søkefeltet bruker de samme stilene som de andre skjemafeltene, og oppfører seg derfor likt i normal-, disabled- og readOnly-tilstand. Labelen er skjult som standard, så støttetekst og tooltip krever at du slår på `labelProps={{ srOnly: false }}`."}}},tags:["forms"]},s=[{heading:"Normal",suffix:"normal",props:{}},{heading:"Disabled",suffix:"disabled",props:{disabled:!0}},{heading:"ReadOnly",suffix:"readonly",props:{readOnly:!0}}],k=s.map(e=>e.heading),f=({title:e,children:n})=>r.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[r.jsx(u,{size:"m",as:"h2",children:e}),r.jsx(m,{columns:k,children:n})]}),o={name:"Label og støttetekst",render:()=>r.jsxs(f,{title:"Label, beskrivelse og støttetekst",children:[r.jsx(t,{name:"Skjult label (standard)",children:s.map(e=>r.jsx(a,{name:`skjult-label-${e.suffix}`,defaultValue:"reise",...e.props},e.suffix))}),r.jsx(t,{name:"Synlig label",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},name:`synlig-label-${e.suffix}`,defaultValue:"reise",...e.props},e.suffix))}),r.jsx(t,{name:"Label med tooltip",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},tooltip:r.jsx(d,{content:"Du kan søke på navnet til forsikringen eller på avtalenummeret."}),name:`tooltip-${e.suffix}`,defaultValue:"reise",...e.props},e.suffix))}),r.jsx(t,{name:"Med beskrivelse",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},description:"Treffer både aktive og avsluttede avtaler",name:`beskrivelse-${e.suffix}`,defaultValue:"reise",...e.props},e.suffix))}),r.jsx(t,{name:"Med støttetekst",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},helpLabel:"Minst tre tegn",name:`stottetekst-${e.suffix}`,defaultValue:"reise",...e.props},e.suffix))})]})},l={name:"Feilmeldinger",render:()=>r.jsxs(f,{title:"Feilmelding kombinert med låst felt",children:[r.jsx(t,{name:"Med errorLabel",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},errorLabel:"Søket må være minst tre tegn",name:`feil-${e.suffix}`,defaultValue:"re",...e.props},e.suffix))}),r.jsx(t,{name:"errorLabel og tooltip",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},tooltip:r.jsx(d,{content:"Du kan søke på navnet til forsikringen eller på avtalenummeret."}),errorLabel:"Søket må være minst tre tegn",name:`feil-tooltip-${e.suffix}`,defaultValue:"re",...e.props},e.suffix))}),r.jsx(t,{name:"errorLabel og beskrivelse",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},description:"Treffer både aktive og avsluttede avtaler",errorLabel:"Søket må være minst tre tegn",name:`feil-beskrivelse-${e.suffix}`,defaultValue:"re",...e.props},e.suffix))})]})},i={name:"Submit-knapp",render:()=>r.jsxs(f,{title:"Søkefelt med submit-knapp",children:[r.jsx(t,{name:"Knapp",children:s.map(e=>r.jsx(a,{name:`knapp-${e.suffix}`,defaultValue:"reise",...e.props,children:r.jsx(a.Button,{disabled:e.props.disabled||e.props.readOnly})},e.suffix))}),r.jsx(t,{name:"Knapp og synlig label",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},name:`knapp-label-${e.suffix}`,defaultValue:"reise",...e.props,children:r.jsx(a.Button,{disabled:e.props.disabled||e.props.readOnly})},e.suffix))}),r.jsx(t,{name:"Knapp og errorLabel",children:s.map(e=>r.jsx(a,{label:"Søk i forsikringer",labelProps:{srOnly:!1},errorLabel:"Søket må være minst tre tegn",name:`knapp-feil-${e.suffix}`,defaultValue:"re",...e.props,children:r.jsx(a.Button,{disabled:e.props.disabled||e.props.readOnly})},e.suffix))}),r.jsx(t,{name:"Knapp uten egen disabled",children:s.map(e=>r.jsx(a,{name:`knapp-uten-disabled-${e.suffix}`,defaultValue:"reise",...e.props,children:r.jsx(a.Button,{})},e.suffix))})]})},b="reiseforsikring med avbestillingsdekning for hele familien i Europa",p={name:"Ikoner og verdier",render:()=>r.jsxs(f,{title:"Ikonvarianter, tomme og lange verdier",children:[["search","filter_list","filter_alt"].map(e=>r.jsx(t,{name:e,children:s.map(n=>r.jsx(a,{icon:e,name:`${e}-${n.suffix}`,defaultValue:"reise",...n.props},n.suffix))},e)),r.jsx(t,{name:"Tom med placeholder",children:s.map(e=>r.jsx(a,{placeholder:"Søk etter forsikring",name:`tom-${e.suffix}`,...e.props},e.suffix))}),r.jsx(t,{name:"Verdi og tilbakestill",children:s.map(e=>r.jsx(a,{name:`verdi-${e.suffix}`,defaultValue:"reiseforsikring",...e.props},e.suffix))}),r.jsx(t,{name:"Lang verdi",children:s.map(e=>r.jsx(a,{name:`lang-verdi-${e.suffix}`,defaultValue:b,...e.props},e.suffix))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Label og støttetekst",
  render: () => <StoryLayout title="Label, beskrivelse og støttetekst">
            <Row name="Skjult label (standard)">
                {states.map(state => <Search key={state.suffix} name={\`skjult-label-\${state.suffix}\`} defaultValue="reise" {...state.props} />)}
            </Row>
            <Row name="Synlig label">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} name={\`synlig-label-\${state.suffix}\`} defaultValue="reise" {...state.props} />)}
            </Row>
            <Row name="Label med tooltip">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} tooltip={<PopupTip content="Du kan søke på navnet til forsikringen eller på avtalenummeret." />} name={\`tooltip-\${state.suffix}\`} defaultValue="reise" {...state.props} />)}
            </Row>
            <Row name="Med beskrivelse">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} description="Treffer både aktive og avsluttede avtaler" name={\`beskrivelse-\${state.suffix}\`} defaultValue="reise" {...state.props} />)}
            </Row>
            <Row name="Med støttetekst">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} helpLabel="Minst tre tegn" name={\`stottetekst-\${state.suffix}\`} defaultValue="reise" {...state.props} />)}
            </Row>
        </StoryLayout>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Feilmeldinger",
  render: () => <StoryLayout title="Feilmelding kombinert med låst felt">
            <Row name="Med errorLabel">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} errorLabel="Søket må være minst tre tegn" name={\`feil-\${state.suffix}\`} defaultValue="re" {...state.props} />)}
            </Row>
            <Row name="errorLabel og tooltip">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} tooltip={<PopupTip content="Du kan søke på navnet til forsikringen eller på avtalenummeret." />} errorLabel="Søket må være minst tre tegn" name={\`feil-tooltip-\${state.suffix}\`} defaultValue="re" {...state.props} />)}
            </Row>
            <Row name="errorLabel og beskrivelse">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} description="Treffer både aktive og avsluttede avtaler" errorLabel="Søket må være minst tre tegn" name={\`feil-beskrivelse-\${state.suffix}\`} defaultValue="re" {...state.props} />)}
            </Row>
        </StoryLayout>
}`,...l.parameters?.docs?.source},description:{story:"`aria-invalid` utledes av `errorLabel`, og wrapperen plukker den opp gjennom\n`data-invalid`. Den røde rammen skal vinne over den dempede read-only-rammen, fordi\ninvalid-regelen har høyere spesifisitet enn read-only-hooken. På et disabled felt\nbeholdes den røde rammen, men dempet til 50 %.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Submit-knapp",
  render: () => <StoryLayout title="Søkefelt med submit-knapp">
            <Row name="Knapp">
                {states.map(state => <Search key={state.suffix} name={\`knapp-\${state.suffix}\`} defaultValue="reise" {...state.props}>
                        <Search.Button disabled={state.props.disabled || state.props.readOnly} />
                    </Search>)}
            </Row>
            <Row name="Knapp og synlig label">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} name={\`knapp-label-\${state.suffix}\`} defaultValue="reise" {...state.props}>
                        <Search.Button disabled={state.props.disabled || state.props.readOnly} />
                    </Search>)}
            </Row>
            <Row name="Knapp og errorLabel">
                {states.map(state => <Search key={state.suffix} label="Søk i forsikringer" labelProps={{
        srOnly: false
      }} errorLabel="Søket må være minst tre tegn" name={\`knapp-feil-\${state.suffix}\`} defaultValue="re" {...state.props}>
                        <Search.Button disabled={state.props.disabled || state.props.readOnly} />
                    </Search>)}
            </Row>
            <Row name="Knapp uten egen disabled">
                {states.map(state => <Search key={state.suffix} name={\`knapp-uten-disabled-\${state.suffix}\`} defaultValue="reise" {...state.props}>
                        <Search.Button />
                    </Search>)}
            </Row>
        </StoryLayout>
}`,...i.parameters?.docs?.source},description:{story:"`Search.Button` er et element konsumenten eier, så den arver ikke feltets tilstand\n– den må sendes `disabled` selv. Knappen ligger inne i feltets wrapper, så den\ndempes visuelt sammen med resten av feltet, men uten egen `disabled` er den\nfortsatt klikkbar. Se den siste raden.",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Ikoner og verdier",
  render: () => <StoryLayout title="Ikonvarianter, tomme og lange verdier">
            {(["search", "filter_list", "filter_alt"] as const).map(icon => <Row key={icon} name={icon}>
                    {states.map(state => <Search key={state.suffix} icon={icon} name={\`\${icon}-\${state.suffix}\`} defaultValue="reise" {...state.props} />)}
                </Row>)}
            <Row name="Tom med placeholder">
                {states.map(state => <Search key={state.suffix} placeholder="Søk etter forsikring" name={\`tom-\${state.suffix}\`} {...state.props} />)}
            </Row>
            <Row name="Verdi og tilbakestill">
                {states.map(state => <Search key={state.suffix} name={\`verdi-\${state.suffix}\`} defaultValue="reiseforsikring" {...state.props} />)}
            </Row>
            <Row name="Lang verdi">
                {states.map(state => <Search key={state.suffix} name={\`lang-verdi-\${state.suffix}\`} defaultValue={langVerdi} {...state.props} />)}
            </Row>
        </StoryLayout>
}`,...p.parameters?.docs?.source}}};const z=["LabelOgStottetekst","Feilmeldinger","SubmitKnapp","IkonerOgVerdier"];export{l as Feilmeldinger,p as IkonerOgVerdier,o as LabelOgStottetekst,i as SubmitKnapp,z as __namedExportsOrder,G as default};
