import{j as e}from"./iframe-Bb6hSxAD.js";import{R as r}from"./RadioButton-AKD9jmkn.js";import{R as n}from"./RadioButtonGroup-lnG-sv9p.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-o42BfMX2.js";import"./SupportLabel-CSd4AkXd.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CXewzJnl.js";import"./Icon-BSvMylBh.js";import"./types-BlFGa32c.js";import"./WarningIcon-DQW0lgOD.js";import"./BaseRadioButton-QkU3tOQY.js";import"./FieldGroup-DeKz2z6j.js";import"./Label-CdtnS82U.js";const b={title:"Komponenter/Radio Button/Eksempler",component:n,args:{legend:"Hvordan vil du bli kontaktet?",name:"kontaktmetode"},parameters:{layout:"padded"},tags:["!autodocs"]},t={name:"Beskrivelse for gruppen",parameters:{docs:{description:{story:"Bruk `description` på `RadioButtonGroup` for en felles forklaring av spørsmålet."}}},args:{description:"Vi bruker kontaktmetoden du velger når vi har oppdateringer i saken din."},render:o=>e.jsxs(n,{...o,children:[e.jsx(r,{value:"epost",children:"E-post"}),e.jsx(r,{value:"sms",children:"SMS"}),e.jsx(r,{value:"telefon",children:"Telefon"})]})},a={name:"Hjelpetekst for hvert valg",parameters:{docs:{description:{story:"`RadioButton` har ingen `description`. Bruk `helpLabel` for å forklare et enkeltvalg."}}},render:o=>e.jsxs(n,{...o,children:[e.jsx(r,{value:"epost",helpLabel:"Du får svar innen to virkedager.",children:"E-post"}),e.jsx(r,{value:"sms",helpLabel:"Kun for korte beskjeder.",children:"SMS"}),e.jsx(r,{value:"telefon",helpLabel:"Vi ringer deg på hverdager mellom 08 og 16.",children:"Telefon"})]})},s={name:"Beskrivelse for gruppen og hvert valg",parameters:{docs:{description:{story:"Kombiner gruppebeskrivelse og hjelpetekst per valg når både spørsmål og alternativer trenger forklaring."}}},args:{description:"Vi bruker kontaktmetoden du velger når vi har oppdateringer i saken din."},render:o=>e.jsxs(n,{...o,children:[e.jsx(r,{value:"epost",helpLabel:"Du får svar innen to virkedager.",children:"E-post"}),e.jsx(r,{value:"telefon",helpLabel:"Vi ringer deg på hverdager.",children:"Telefon"})]})},i={name:"Beskrivelse og feilmelding",parameters:{docs:{description:{story:"`errorLabel` erstatter ikke `description`; begge vises, og alle valgene merkes som ugyldige."}}},args:{description:"Velg ett alternativ.",errorLabel:"Du må velge en kontaktmetode"},render:o=>e.jsxs(n,{...o,children:[e.jsx(r,{value:"epost",children:"E-post"}),e.jsx(r,{value:"sms",children:"SMS"})]})},E=["BeskrivelseForGruppen","BeskrivelseForHvertValg","BeskrivelseForGruppenOgValg","BeskrivelseMedFeil"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Beskrivelse for gruppen",
  parameters: {
    docs: {
      description: {
        story: "Bruk \`description\` på \`RadioButtonGroup\` for en felles forklaring av spørsmålet."
      }
    }
  },
  args: {
    description: "Vi bruker kontaktmetoden du velger når vi har oppdateringer i saken din."
  },
  render: args => <RadioButtonGroup {...args}>
            <RadioButton value="epost">E-post</RadioButton>
            <RadioButton value="sms">SMS</RadioButton>
            <RadioButton value="telefon">Telefon</RadioButton>
        </RadioButtonGroup>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Hjelpetekst for hvert valg",
  parameters: {
    docs: {
      description: {
        story: "\`RadioButton\` har ingen \`description\`. Bruk \`helpLabel\` for å forklare et enkeltvalg."
      }
    }
  },
  render: args => <RadioButtonGroup {...args}>
            <RadioButton value="epost" helpLabel="Du får svar innen to virkedager.">
                E-post
            </RadioButton>
            <RadioButton value="sms" helpLabel="Kun for korte beskjeder.">
                SMS
            </RadioButton>
            <RadioButton value="telefon" helpLabel="Vi ringer deg på hverdager mellom 08 og 16.">
                Telefon
            </RadioButton>
        </RadioButtonGroup>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Beskrivelse for gruppen og hvert valg",
  parameters: {
    docs: {
      description: {
        story: "Kombiner gruppebeskrivelse og hjelpetekst per valg når både spørsmål og alternativer trenger forklaring."
      }
    }
  },
  args: {
    description: "Vi bruker kontaktmetoden du velger når vi har oppdateringer i saken din."
  },
  render: args => <RadioButtonGroup {...args}>
            <RadioButton value="epost" helpLabel="Du får svar innen to virkedager.">
                E-post
            </RadioButton>
            <RadioButton value="telefon" helpLabel="Vi ringer deg på hverdager.">
                Telefon
            </RadioButton>
        </RadioButtonGroup>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Beskrivelse og feilmelding",
  parameters: {
    docs: {
      description: {
        story: "\`errorLabel\` erstatter ikke \`description\`; begge vises, og alle valgene merkes som ugyldige."
      }
    }
  },
  args: {
    description: "Velg ett alternativ.",
    errorLabel: "Du må velge en kontaktmetode"
  },
  render: args => <RadioButtonGroup {...args}>
            <RadioButton value="epost">E-post</RadioButton>
            <RadioButton value="sms">SMS</RadioButton>
        </RadioButtonGroup>
}`,...i.parameters?.docs?.source}}};export{t as BeskrivelseForGruppen,s as BeskrivelseForGruppenOgValg,a as BeskrivelseForHvertValg,i as BeskrivelseMedFeil,E as __namedExportsOrder,b as default};
