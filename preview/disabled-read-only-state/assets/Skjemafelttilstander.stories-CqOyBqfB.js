import{j as e,R as L}from"./iframe-DdycUQEW.js";import{T as h}from"./Title-CBawnwBw.js";import{T as i}from"./Text-Dbo5sqn4.js";import{D as y,t as S}from"./DateInput-u4zluuuh.js";import{T as l}from"./TextInput-qrTLrwf_.js";import{T as D}from"./TextArea-CTqW6Jw1.js";import{S as O}from"./Select-B_evNnmW.js";import{N as p}from"./NumberInput-DlpL2kMd.js";import{S as P}from"./Search-Bonwih1y.js";import{C as N}from"./Combobox-oy2qem9G.js";import{C as V}from"./CheckboxPanel-CVC1So9Q.js";import{R as A}from"./RadioPanel-BGa0blh2.js";import{P as I}from"./PopupTip-i8YJC0Im.js";import{F as z}from"./FieldGroup-5B0t5B9Q.js";import{C as d}from"./Checkbox-ByhgU5UN.js";import{S as B,a as T}from"./SegmentedControlButton-CWOAU4RX.js";import{I as G}from"./IconButton-Cr4Y1kaj.js";import{C as $}from"./CopyIcon-R9F4EEok.js";import{F as E}from"./FileInput-BlR5JSCy.js";import{R as w}from"./RadioButton-COSjj3rx.js";import{T as C}from"./ToggleSwitch-CuLQJ-6g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Flex-BHPjVPiP.js";import"./SlotComponent-B7fL7Arh.js";import"./mergeRefs-xuJ_pz0X.js";import"./Button-C5wT-ByB.js";import"./usePreviousValue-Dj-1dFzG.js";import"./Loader-CjrQ5HtM.js";import"./useDelayedRender-DmIhXOYf.js";import"./ArrowRightIcon-B7UaST11.js";import"./Icon-X8VmP_1W.js";import"./TableCaption-Yz4iD22_.js";import"./tableContext-CEdbClM2.js";import"./InputGroup-BsawQSXU.js";import"./useId-CzcTekdj.js";import"./Label-Bgc9Mwk7.js";import"./SupportLabel-9_yhGTCA.js";import"./SuccessIcon-CNL63iIh.js";import"./WarningIcon-Y6DXZI_L.js";import"./CalendarIcon-DaD1LUXM.js";import"./BaseTextInput-jYelrnbF.js";import"./useListNavigation-D17hmE-H.js";import"./ArrowDownIcon-BfJGvEkv.js";import"./CloseIcon-BGmAW8nV.js";import"./PlusIcon-Cw18cWKQ.js";import"./MinusIcon-DLQ4C-Wq.js";import"./useAnimatedHeight-DgMeQkJM.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-edqLlbkR.js";import"./Chip-CZx3EAu_.js";import"./CheckIcon-BhVHwPVr.js";import"./ArrowVerticalAnimated-C1nURCLs.js";import"./TooltipTrigger-Xupdvu-N.js";import"./floating-ui.react-DwOq9aX5.js";import"./index-B5CEXCJB.js";import"./index-n79OLxq8.js";import"./TooltipContent-Bh1UD38c.js";import"./getThemeAndSize-CZAj3IXt.js";import"./InputPanel-CE4zwon0.js";import"./QuestionIcon-DvbGlLqC.js";import"./fileInputContext-CVqI13Wl.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./BaseRadioButton-BlabL8XM.js";import"./useSwipeGesture-0YyT7Spl.js";const an={title:"Mønstre/Tilstander på skjemafelter",parameters:{layout:"padded",docs:{description:{component:"Disabled dempes til 50 %, readOnly får en dempet ramme med full tekstkontrast. Begge legges på selve kontrollen — label, beskrivelse og støttetekst beholder full kontrast."}}},tags:["forms"]},u=S(new Date),m=[{value:"reise",label:"Reiseforsikring"},{value:"bil",label:"Bilforsikring"},{value:"hus",label:"Husforsikring"}],K=[{name:"TextInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(l,{label:"E-post",helpLabel:"Vi bruker adressen til å sende deg polisen.",defaultValue:"ola.nordmann@eksempel.no",disabled:n,readOnly:a})},{name:"TextArea",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(D,{label:"Beskriv skaden",helpLabel:"Ta med tid, sted og hva som skjedde.",defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",rows:3,disabled:n,readOnly:a})},{name:"Select",supportsReadOnly:!1,render:({disabled:n})=>e.jsx(O,{label:"Hvilken forsikring gjelder det?",helpLabel:"Velg den avtalen saken hører til.",items:m,defaultValue:"reise",disabled:n})},{name:"DateInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(y,{label:"Når skjedde skaden?",helpLabel:"Oppgi datoen så nøyaktig du kan.",labelProps:{srOnly:!1},defaultValue:u,disabled:n,readOnly:a})},{name:"NumberInput",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(p,{label:"Antall reisende",helpLabel:"Du kan legge til opptil 8 personer.",min:0,max:8,defaultValue:2,stepper:!0,disabled:n,readOnly:a})},{name:"Search",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(P,{label:"Søk",labelProps:{srOnly:!1},defaultValue:"Reiseforsikring",disabled:n,readOnly:a})},{name:"Combobox",supportsReadOnly:!0,render:({disabled:n,readOnly:a,idSuffix:o})=>e.jsx(N,{label:"Hvilke forsikringer gjelder det?",name:`combobox-${o}`,items:m,value:[m[0]],width:"20ch",onChange:()=>{},disabled:n,readOnly:a})},{name:"TextInput + actionButton",supportsReadOnly:!0,render:({disabled:n,readOnly:a})=>e.jsx(l,{label:"Kundenummer",defaultValue:"1234 5678",disabled:n,readOnly:a,actionButton:e.jsx(G,{title:"Kopier kundenummer",disabled:n,children:e.jsx($,{})})})},{name:"FileInput",supportsReadOnly:!1,render:({disabled:n})=>e.jsx(E,{legend:"Legg til dokumentasjon",labelProps:{variant:"small"},variant:"small",accept:"image/*,.pdf",value:[],onChange:()=>{},disabled:n})},{name:"FieldGroup",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(z,{legend:"Hva vil du varsles om?",labelProps:{variant:"small"},disabled:n,children:[e.jsx(d,{name:`varsel-${a}`,value:"sms",defaultChecked:!0,children:"SMS"}),e.jsx(d,{name:`varsel-epost-${a}`,value:"epost",children:"E-post"})]})},{name:"Checkbox",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(e.Fragment,{children:[e.jsx(d,{name:`samtykke-${a}`,value:"ja",defaultChecked:!0,disabled:n,children:"Avkrysset"}),e.jsx(d,{name:`samtykke-av-${a}`,value:"nei",disabled:n,children:"Ikke avkrysset"})]})},{name:"RadioButton",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(e.Fragment,{children:[e.jsx(w,{name:`kontakt-${a}`,value:"epost",defaultChecked:!0,disabled:n,children:"Valgt"}),e.jsx(w,{name:`kontakt-${a}`,value:"sms",disabled:n,children:"Ikke valgt"})]})},{name:"ToggleSwitch",supportsReadOnly:!1,render:({disabled:n})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{"aria-pressed":!0,disabled:n,children:"På"}),e.jsx(C,{"aria-pressed":!1,disabled:n,children:"Av"})]})},{name:"CheckboxPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsx(V,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${a}`,value:"livsforsikring",defaultChecked:!0,disabled:n})},{name:"RadioPanel",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsx(A,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${a}`,value:"uforeforsikring",defaultChecked:!0,disabled:n})},{name:"SegmentedControl",supportsReadOnly:!1,render:({disabled:n,idSuffix:a})=>e.jsxs(B,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(T,{name:`dekkes-${a}`,value:"dekkes",defaultChecked:!0,disabled:n,children:"Dekkes"}),e.jsx(T,{name:`dekkes-${a}`,value:"dekkes-ikke",disabled:n,children:"Dekkes ikke"})]})}],s=[{heading:"Normal",suffix:"normal",props:{}},{heading:"Disabled",suffix:"disabled",props:{disabled:!0}},{heading:"ReadOnly",suffix:"readonly",props:{readOnly:!0}}],j={name:"Alle tilstander",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(h,{size:"m",as:"h2",children:"Normal, disabled og readOnly"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(8rem, max-content) repeat(3, minmax(0, 1fr))",gap:"var(--jkl-spacing-24)",alignItems:"start"},children:[e.jsx("span",{}),s.map(n=>e.jsx(h,{size:"s",as:"h3",children:n.heading},n.heading)),K.map(n=>e.jsxs(L.Fragment,{children:[e.jsx(i,{size:"s",style:{paddingTop:"0.5lh"},children:n.name}),s.map(a=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-8)",alignContent:"start"},children:a.suffix==="readonly"&&!n.supportsReadOnly?e.jsx(i,{size:"s",style:{color:"var(--jkl-color-text-subdued)"},children:"Ikke relevant"}):n.render({...a.props,idSuffix:`${n.name}-${a.suffix}`})},a.heading))]},n.name))]})]})},R=({columns:n,children:a})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`minmax(8rem, max-content) repeat(${n.length}, minmax(0, 1fr))`,gap:"var(--jkl-spacing-24)",alignItems:"start"},children:[e.jsx("span",{}),n.map(o=>e.jsx(h,{size:"s",as:"h3",children:o},o)),a]}),r=({name:n,children:a})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{size:"s",style:{paddingTop:"0.5lh"},children:n}),L.Children.map(a,(o,F)=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-8)",alignContent:"start"},children:o},F))]}),t=[{suffix:"invalid",props:{}},{suffix:"invalid-disabled",props:{disabled:!0}},{suffix:"invalid-readonly",props:{readOnly:!0}}],f={name:"Disabled og invalid",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:[e.jsx(h,{size:"m",as:"h2",children:"Feilmelding kombinert med låst felt"}),e.jsxs(R,{columns:["Invalid","Invalid + disabled","Invalid + readOnly"],children:[e.jsx(r,{name:"TextInput",children:t.map(n=>e.jsx(l,{label:"E-post",errorLabel:"Adressen mangler @",defaultValue:"ola.nordmann",...n.props},n.suffix))}),e.jsx(r,{name:"TextArea",children:t.map(n=>e.jsx(D,{label:"Beskriv skaden",errorLabel:"Beskrivelsen er for kort",defaultValue:"Påkjørt",rows:2,...n.props},n.suffix))}),e.jsx(r,{name:"Select",children:t.map(n=>e.jsx(O,{label:"Hvilken forsikring?",errorLabel:"Du må velge en forsikring",items:m,...n.props},n.suffix))}),e.jsx(r,{name:"DateInput",children:t.map(n=>e.jsx(y,{label:"Når skjedde skaden?",labelProps:{srOnly:!1},errorLabel:"Datoen kan ikke være frem i tid",defaultValue:u,...n.props},n.suffix))}),e.jsx(r,{name:"NumberInput",children:t.map(n=>e.jsx(p,{label:"Antall reisende",errorLabel:"Maks 8 reisende",defaultValue:2,stepper:!0,...n.props},n.suffix))}),e.jsx(r,{name:"Search",children:t.map(n=>e.jsx(P,{label:"Søk",labelProps:{srOnly:!1},errorLabel:"Søket ga ingen treff",defaultValue:"Reiseforsikring",...n.props},n.suffix))}),e.jsx(r,{name:"Combobox",children:t.map(n=>e.jsx(N,{label:"Hvilke forsikringer?",name:`combobox-${n.suffix}`,items:m,value:[],width:"20ch",errorLabel:"Velg minst én forsikring",invalid:!0,onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"CheckboxPanel",children:t.map(n=>e.jsx(V,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:`dekning-${n.suffix}`,value:"livsforsikring","aria-invalid":!0,...n.props},n.suffix))}),e.jsx(r,{name:"RadioPanel",children:t.map(n=>e.jsx(A,{label:"Uføreforsikring",description:"Gir deg månedlig utbetaling hvis du blir ufør.",amount:"312 kr/mnd",name:`forsikring-${n.suffix}`,value:"uforeforsikring","aria-invalid":!0,...n.props},n.suffix))})]})]})},k={name:"NumberInput utenfor grensen",render:()=>e.jsxs(R,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"Uten errorLabel",children:s.map(n=>e.jsx(p,{label:"Antall reisende",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))}),e.jsx(r,{name:"Med errorLabel",children:s.map(n=>e.jsx(p,{label:"Antall reisende",errorLabel:"Du kan legge til opptil 8 personer",min:0,max:8,defaultValue:20,stepper:!0,...n.props},n.suffix))})]})},g={name:"Nøstet disabled",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(p,{label:"Antall reisende på minimum",description:"Decrement-knappen er selv disabled inne i et dempet felt.",min:0,max:8,defaultValue:0,stepper:!0,disabled:!0}),e.jsx(y,{label:"Dato, disabled",labelProps:{srOnly:!1},description:"Kalendertriggeren er en disabled knapp inne i et dempet felt.",defaultValue:u,disabled:!0}),e.jsx(y,{label:"Dato, readOnly",labelProps:{srOnly:!1},description:"Dempet trigger i et felt med full kontrast.",defaultValue:u,readOnly:!0}),e.jsxs(z,{legend:"Disabled gruppe",labelProps:{variant:"small"},description:"Checkboxene er disabled hver for seg i tillegg til gruppen.",disabled:!0,children:[e.jsx(d,{name:"nostet-varsel",value:"sms",defaultChecked:!0,disabled:!0,children:"SMS"}),e.jsx(d,{name:"nostet-varsel-epost",value:"epost",disabled:!0,children:"E-post"})]}),e.jsx(V,{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling.",amount:"229 kr/mnd",name:"nostet-dekning",value:"livsforsikring",defaultChecked:!0,disabled:!0}),e.jsxs(B,{legend:"Dekning",labelProps:{srOnly:!1,variant:"small"},children:[e.jsx(T,{name:"nostet-dekkes",value:"dekkes",defaultChecked:!0,disabled:!0,children:"Dekkes"}),e.jsx(T,{name:"nostet-dekkes",value:"dekkes-ikke",disabled:!0,children:"Dekkes ikke"})]})]})},c={name:"Tetthet og tilstand",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-16)"},children:[e.jsx(h,{size:"s",as:"h3",children:n}),e.jsxs(R,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"TextInput",children:s.map(a=>e.jsx(l,{"data-size":n,label:"E-post",defaultValue:"ola.nordmann@eksempel.no",...a.props},a.suffix))}),e.jsx(r,{name:"NumberInput",children:s.map(a=>e.jsx(p,{"data-size":n,label:"Antall reisende",min:0,max:8,defaultValue:2,stepper:!0,...a.props},a.suffix))}),e.jsx(r,{name:"Select",children:s.map(a=>e.jsx(O,{"data-size":n,label:"Hvilken forsikring?",items:m,defaultValue:"reise",...a.props},a.suffix))})]})]},n))})},b={name:"Label, tooltip og inline",render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)",maxWidth:"24rem"},children:[e.jsx(l,{label:"Fødselsnummer",tooltip:e.jsx(I,{content:"Vi bruker fødselsnummeret til å hente opplysninger fra Folkeregisteret."}),defaultValue:"01019012345",disabled:!0}),e.jsx(l,{label:"Kundenummer",tooltip:e.jsx(I,{content:"Kundenummeret finner du øverst på fakturaen."}),defaultValue:"1234 5678",readOnly:!0}),e.jsx(l,{label:"Skjult label, readOnly",labelProps:{srOnly:!0},defaultValue:"Verdien står alene uten synlig label",readOnly:!0}),e.jsxs("div",{children:[e.jsx(i,{size:"s",children:"inline + disabled"}),e.jsxs(i,{children:["Vi forsikrer"," ",e.jsx(l,{label:"Antall biler",inline:!0,width:"4ch",defaultValue:"2",disabled:!0})," ","biler for deg."]})]}),e.jsxs("div",{children:[e.jsx(i,{size:"s",children:"inline + errorLabel"}),e.jsxs(i,{children:["Vi forsikrer"," ",e.jsx(l,{label:"Antall biler",errorLabel:"Du må oppgi minst én bil",inline:!0,width:"4ch",defaultValue:""})," ","biler for deg."]})]})]})},x={name:"Tomme og lange verdier",render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--jkl-spacing-32)"},children:e.jsxs(R,{columns:["Normal","Disabled","ReadOnly"],children:[e.jsx(r,{name:"Tom med placeholder",children:s.map(n=>e.jsx(l,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Tom og invalid",children:s.map(n=>e.jsx(l,{label:"E-post",placeholder:"ola.nordmann@eksempel.no",errorLabel:"Du må oppgi en e-postadresse",value:"",onChange:()=>{},...n.props},n.suffix))}),e.jsx(r,{name:"Lang verdi",children:s.map(n=>e.jsx(l,{label:"Adresse",width:"16ch",defaultValue:"Nedre Storgate 42B, 3015 Drammen",...n.props},n.suffix))}),e.jsx(r,{name:"maxLength",children:s.map(n=>e.jsx(l,{label:"Kontonummer",maxLength:11,defaultValue:"12345678903",...n.props},n.suffix))}),e.jsx(r,{name:"Lang i TextArea",children:s.map(n=>e.jsx(D,{label:"Beskriv skaden",rows:2,defaultValue:"Bilen ble påkjørt bakfra i et veikryss, og både støtfanger og bakluke fikk synlige skader som må vurderes av verksted.",...n.props},n.suffix))})]})})},v={name:"Datoavgrensing demper ikke feltet",render:()=>e.jsx(y,{label:"Når skal du reise?",labelProps:{srOnly:!1},description:"Du kan bare velge datoer innenfor de neste 14 dagene.",defaultValue:u,min:u,max:S(new Date(new Date().setDate(new Date().getDate()+14)))})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Alle tilstander",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            <Title size="m" as="h2">
                Normal, disabled og readOnly
            </Title>
            <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(8rem, max-content) repeat(3, minmax(0, 1fr))",
      gap: "var(--jkl-spacing-24)",
      alignItems: "start"
    }}>
                <span />
                {columns.map(column => <Title key={column.heading} size="s" as="h3">
                        {column.heading}
                    </Title>)}

                {rows.map(row => <React.Fragment key={row.name}>
                        <Text size="s" style={{
          paddingTop: "0.5lh"
        }}>
                            {row.name}
                        </Text>
                        {columns.map(column => <div key={column.heading} style={{
          display: "grid",
          gap: "var(--jkl-spacing-8)",
          alignContent: "start"
        }}>
                                {column.suffix === "readonly" && !row.supportsReadOnly ? <Text size="s" style={{
            color: "var(--jkl-color-text-subdued)"
          }}>
                                        Ikke relevant
                                    </Text> : row.render({
            ...column.props,
            idSuffix: \`\${row.name}-\${column.suffix}\`
          })}
                            </div>)}
                    </React.Fragment>)}
            </div>
        </div>
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Disabled og invalid",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            <Title size="m" as="h2">
                Feilmelding kombinert med låst felt
            </Title>
            <Grid columns={["Invalid", "Invalid + disabled", "Invalid + readOnly"]}>
                <Row name="TextInput">
                    {invalidStates.map(state => <TextInput key={state.suffix} label="E-post" errorLabel="Adressen mangler @" defaultValue="ola.nordmann" {...state.props} />)}
                </Row>
                <Row name="TextArea">
                    {invalidStates.map(state => <TextArea key={state.suffix} label="Beskriv skaden" errorLabel="Beskrivelsen er for kort" defaultValue="Påkjørt" rows={2} {...state.props} />)}
                </Row>
                <Row name="Select">
                    {invalidStates.map(state => <Select key={state.suffix} label="Hvilken forsikring?" errorLabel="Du må velge en forsikring" items={forsikringer} {...state.props} />)}
                </Row>
                <Row name="DateInput">
                    {invalidStates.map(state => <DateInput key={state.suffix} label="Når skjedde skaden?" labelProps={{
          srOnly: false
        }} errorLabel="Datoen kan ikke være frem i tid" defaultValue={today} {...state.props} />)}
                </Row>
                <Row name="NumberInput">
                    {invalidStates.map(state => <NumberInput key={state.suffix} label="Antall reisende" errorLabel="Maks 8 reisende" defaultValue={2} stepper {...state.props} />)}
                </Row>
                <Row name="Search">
                    {invalidStates.map(state => <Search key={state.suffix} label="Søk" labelProps={{
          srOnly: false
        }} errorLabel="Søket ga ingen treff" defaultValue="Reiseforsikring" {...state.props} />)}
                </Row>
                <Row name="Combobox">
                    {invalidStates.map(state => <Combobox key={state.suffix} label="Hvilke forsikringer?" name={\`combobox-\${state.suffix}\`} items={forsikringer} value={[]} width="20ch" errorLabel="Velg minst én forsikring" invalid onChange={() => undefined} {...state.props} />)}
                </Row>
                <Row name="CheckboxPanel">
                    {invalidStates.map(state => <CheckboxPanel key={state.suffix} label="Livsforsikring" description="Gir dine etterlatte en engangsutbetaling." amount="229 kr/mnd" name={\`dekning-\${state.suffix}\`} value="livsforsikring" aria-invalid {...state.props} />)}
                </Row>
                <Row name="RadioPanel">
                    {invalidStates.map(state => <RadioPanel key={state.suffix} label="Uføreforsikring" description="Gir deg månedlig utbetaling hvis du blir ufør." amount="312 kr/mnd" name={\`forsikring-\${state.suffix}\`} value="uforeforsikring" aria-invalid {...state.props} />)}
                </Row>
            </Grid>
        </div>
}`,...f.parameters?.docs?.source},description:{story:"`aria-invalid` utledes av `errorLabel` — det finnes ingen `invalid`-prop på\nskjemafeltene. Unntakene er Combobox, som har en egen `invalid` ved siden av\n`errorLabel`, og panelene, som ikke har `errorLabel` i det hele tatt og derfor\nmå få `aria-invalid` direkte.\n\nDen røde rammen vinner over den dempede read-only-rammen, fordi invalid-regelen\nhar høyere spesifisitet enn read-only-hooken. På en disabled kontroll beholdes\nden røde rammen, men dempet til 50 %. InputPanel er unntaket: der nullstilles\nden røde rammen når panelet er disabled.",...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "NumberInput utenfor grensen",
  render: () => <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
            <Row name="Uten errorLabel">
                {columns.map(column => <NumberInput key={column.suffix} label="Antall reisende" min={0} max={8} defaultValue={20} stepper {...column.props} />)}
            </Row>
            <Row name="Med errorLabel">
                {columns.map(column => <NumberInput key={column.suffix} label="Antall reisende" errorLabel="Du kan legge til opptil 8 personer" min={0} max={8} defaultValue={20} stepper {...column.props} />)}
            </Row>
        </Grid>
}`,...k.parameters?.docs?.source},description:{story:"Verdien bryter `max`, så nettleseren matcher `:invalid` og gir feltet rød\nbakgrunn. Disabled og readOnly felter er unntatt native constraint validation,\nså `:invalid` slutter å matche og bakgrunnen forsvinner.\n\nKan feltet være låst, må feilmeldingen komme fra `errorLabel` — native\nvalidering alene er ikke nok.",...k.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Nøstet disabled",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)",
    maxWidth: "24rem"
  }}>
            <NumberInput label="Antall reisende på minimum" description="Decrement-knappen er selv disabled inne i et dempet felt." min={0} max={8} defaultValue={0} stepper disabled />
            <DateInput label="Dato, disabled" labelProps={{
      srOnly: false
    }} description="Kalendertriggeren er en disabled knapp inne i et dempet felt." defaultValue={today} disabled />
            <DateInput label="Dato, readOnly" labelProps={{
      srOnly: false
    }} description="Dempet trigger i et felt med full kontrast." defaultValue={today} readOnly />
            <FieldGroup legend="Disabled gruppe" labelProps={{
      variant: "small"
    }} description="Checkboxene er disabled hver for seg i tillegg til gruppen." disabled>
                <Checkbox name="nostet-varsel" value="sms" defaultChecked disabled>
                    SMS
                </Checkbox>
                <Checkbox name="nostet-varsel-epost" value="epost" disabled>
                    E-post
                </Checkbox>
            </FieldGroup>
            <CheckboxPanel label="Livsforsikring" description="Gir dine etterlatte en engangsutbetaling." amount="229 kr/mnd" name="nostet-dekning" value="livsforsikring" defaultChecked disabled />
            <SegmentedControl legend="Dekning" labelProps={{
      srOnly: false,
      variant: "small"
    }}>
                <SegmentedControlButton name="nostet-dekkes" value="dekkes" defaultChecked disabled>
                    Dekkes
                </SegmentedControlButton>
                <SegmentedControlButton name="nostet-dekkes" value="dekkes-ikke" disabled>
                    Dekkes ikke
                </SegmentedControlButton>
            </SegmentedControl>
        </div>
}`,...g.parameters?.docs?.source},description:{story:"`disabled-control` demper til 50 % og nullstiller `--jkl-nested-disabled-opacity`\npå etterkommerne, slik at en disabled kontroll inne i en disabled flate ikke\nblir dempet to ganger. Alt her skal lese 50 %, aldri 25 %.",...g.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Tetthet og tilstand",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            {(["small", "medium", "large"] as const).map(size => <div key={size} style={{
      display: "grid",
      gap: "var(--jkl-spacing-16)"
    }}>
                    <Title size="s" as="h3">
                        {size}
                    </Title>
                    <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
                        <Row name="TextInput">
                            {columns.map(column => <TextInput key={column.suffix} data-size={size} label="E-post" defaultValue="ola.nordmann@eksempel.no" {...column.props} />)}
                        </Row>
                        <Row name="NumberInput">
                            {columns.map(column => <NumberInput key={column.suffix} data-size={size} label="Antall reisende" min={0} max={8} defaultValue={2} stepper {...column.props} />)}
                        </Row>
                        <Row name="Select">
                            {columns.map(column => <Select key={column.suffix} data-size={size} label="Hvilken forsikring?" items={forsikringer} defaultValue="reise" {...column.props} />)}
                        </Row>
                    </Grid>
                </div>)}
        </div>
}`,...c.parameters?.docs?.source},description:{story:"Tilstandene skal se like ut i alle tettheter.",...c.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Label, tooltip og inline",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)",
    maxWidth: "24rem"
  }}>
            <TextInput label="Fødselsnummer" tooltip={<PopupTip content="Vi bruker fødselsnummeret til å hente opplysninger fra Folkeregisteret." />} defaultValue="01019012345" disabled />
            <TextInput label="Kundenummer" tooltip={<PopupTip content="Kundenummeret finner du øverst på fakturaen." />} defaultValue="1234 5678" readOnly />
            <TextInput label="Skjult label, readOnly" labelProps={{
      srOnly: true
    }} defaultValue="Verdien står alene uten synlig label" readOnly />
            <div>
                <Text size="s">inline + disabled</Text>
                <Text>
                    Vi forsikrer{" "}
                    <TextInput label="Antall biler" inline width="4ch" defaultValue="2" disabled />{" "}
                    biler for deg.
                </Text>
            </div>
            <div>
                <Text size="s">inline + errorLabel</Text>
                <Text>
                    Vi forsikrer{" "}
                    <TextInput label="Antall biler" errorLabel="Du må oppgi minst én bil" inline width="4ch" defaultValue="" />{" "}
                    biler for deg.
                </Text>
            </div>
        </div>
}`,...b.parameters?.docs?.source},description:{story:"Labelen og kontrollen behandles ulikt. Tooltipen hører til labelen, så den\nbeholder full kontrast og kan åpnes selv om kontrollen er låst.\n\n`inline` tvinger `srOnly` på både label og støttetekst. Med `inline` blir\naltså en `errorLabel` usynlig — den finnes bare for skjermlesere.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Tomme og lange verdier",
  render: () => <div style={{
    display: "grid",
    gap: "var(--jkl-spacing-32)"
  }}>
            <Grid columns={["Normal", "Disabled", "ReadOnly"]}>
                <Row name="Tom med placeholder">
                    {columns.map(column => <TextInput key={column.suffix} label="E-post" placeholder="ola.nordmann@eksempel.no" value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="Tom og invalid">
                    {columns.map(column => <TextInput key={column.suffix} label="E-post" placeholder="ola.nordmann@eksempel.no" errorLabel="Du må oppgi en e-postadresse" value="" onChange={() => undefined} {...column.props} />)}
                </Row>
                <Row name="Lang verdi">
                    {columns.map(column => <TextInput key={column.suffix} label="Adresse" width="16ch" defaultValue="Nedre Storgate 42B, 3015 Drammen" {...column.props} />)}
                </Row>
                <Row name="maxLength">
                    {columns.map(column => <TextInput key={column.suffix} label="Kontonummer" maxLength={11} defaultValue="12345678903" {...column.props} />)}
                </Row>
                <Row name="Lang i TextArea">
                    {columns.map(column => <TextArea key={column.suffix} label="Beskriv skaden" rows={2} defaultValue="Bilen ble påkjørt bakfra i et veikryss, og både støtfanger og bakluke fikk synlige skader som må vurderes av verksted." {...column.props} />)}
                </Row>
            </Grid>
        </div>
}`,...x.parameters?.docs?.source},description:{story:"Placeholderfargen styres av `--placeholder-color`, som invalid-regelen også\noverskriver. Lange verdier skal klippes av feltet, ikke flyte ut av det.",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Datoavgrensing demper ikke feltet",
  render: () => <DateInput label="Når skal du reise?" labelProps={{
    srOnly: false
  }} description="Du kan bare velge datoer innenfor de neste 14 dagene." defaultValue={today} min={today} max={toValidInputValue(new Date(new Date().setDate(new Date().getDate() + 14)))} />
}`,...v.parameters?.docs?.source},description:{story:"Kalenderen i DateInput inneholder disabled dag-inputs for datoer utenfor\n`min`/`max`. Feltet under er ikke disabled og skal derfor ha full kontrast —\nblir det dempet, treffer disabled-selectoren for bredt.",...v.parameters?.docs?.description}}};const rn=["AlleTilstander","DisabledOgInvalid","NumberInputUtenforGrense","NøstetDisabled","TetthetOgTilstand","LabelTooltipOgInline","TommeOgLangeVerdier","DatoavgrensingDemperIkkeFeltet"];export{j as AlleTilstander,v as DatoavgrensingDemperIkkeFeltet,f as DisabledOgInvalid,b as LabelTooltipOgInline,k as NumberInputUtenforGrense,g as NøstetDisabled,c as TetthetOgTilstand,x as TommeOgLangeVerdier,rn as __namedExportsOrder,an as default};
