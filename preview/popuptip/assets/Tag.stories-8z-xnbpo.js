import{R as e}from"./index-siqcju79.js";import{T as i,S as c,I as d,W as m,E as g}from"./Tag-5cfiG99-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";const k={title:"Komponenter/Tag",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Tag-komponenten brukes for å vise status, informasjon eller kategorisering. Velg riktig variant for å formidle ønsket betydning."}}},args:{children:"Hei"},argTypes:{children:{description:"Teksten som vises inni taggen.",control:"text"}}},n={name:"Standard",parameters:{docs:{description:{story:"Brukes for å vise nøytral informasjon eller kategorisering."}}},args:{children:"Under behandling"},render:r=>e.createElement(i,{...r})},s={name:"Suksess",parameters:{docs:{description:{story:"Brukes for å vise at noe har gått bra eller er fullført."}}},args:{children:"Godkjent"},render:r=>e.createElement(c,{...r})},a={name:"Informasjon",parameters:{docs:{description:{story:"Brukes for å vise generell informasjon."}}},args:{children:"Venter på svar"},render:r=>e.createElement(d,{...r})},o={name:"Advarsel",parameters:{docs:{description:{story:"Brukes for å vise advarsler eller ting som krever oppmerksomhet."}}},args:{children:"Manglende dokumentasjon"},render:r=>e.createElement(m,{...r})},t={name:"Feil",parameters:{docs:{description:{story:"Brukes for å vise feil eller kritiske problemer."}}},args:{children:"Avvist"},render:r=>e.createElement(g,{...r})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Standard",
  parameters: {
    docs: {
      description: {
        story: "Brukes for å vise nøytral informasjon eller kategorisering."
      }
    }
  },
  args: {
    children: "Under behandling"
  },
  render: args => <Tag {...args} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Suksess",
  parameters: {
    docs: {
      description: {
        story: "Brukes for å vise at noe har gått bra eller er fullført."
      }
    }
  },
  args: {
    children: "Godkjent"
  },
  render: args => <SuccessTag {...args} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Informasjon",
  parameters: {
    docs: {
      description: {
        story: "Brukes for å vise generell informasjon."
      }
    }
  },
  args: {
    children: "Venter på svar"
  },
  render: args => <InfoTag {...args} />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Advarsel",
  parameters: {
    docs: {
      description: {
        story: "Brukes for å vise advarsler eller ting som krever oppmerksomhet."
      }
    }
  },
  args: {
    children: "Manglende dokumentasjon"
  },
  render: args => <WarningTag {...args} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Feil",
  parameters: {
    docs: {
      description: {
        story: "Brukes for å vise feil eller kritiske problemer."
      }
    }
  },
  args: {
    children: "Avvist"
  },
  render: args => <ErrorTag {...args} />
}`,...t.parameters?.docs?.source}}};const v=["TagStory","SuccessTagStory","InfoTagStory","WarningTagStory","ErrorTagStory"];export{t as ErrorTagStory,a as InfoTagStory,s as SuccessTagStory,n as TagStory,o as WarningTagStory,v as __namedExportsOrder,k as default};
