import{R as n}from"./index-siqcju79.js";import{N as c}from"./unicode-UdOTta2g.js";import{b as p,D as u,a as d}from"./DescriptionList-BkNFVB_x.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";const r={mobil:/^([8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function m(t,e){const o=t.replace(/\W/g,""),s=e?.partial?r.mobilPartial:r.mobil,l=e?.partial?r.fastPartial:r.fast,i=o.match(s)||o.match(l);return i?[e?.countryCode?`+${e.countryCode}`:void 0,...i.slice(1)].filter(Boolean).join(c):t}const f=({input:t,options:e})=>{const o=m(t,e);return n.createElement("p",null,"id: ",o)},y={title:"Formatters/Telefonnummer",component:f,argTypes:{input:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},a={args:{input:"90124223",options:{countryCode:"47"}},render:({input:t,options:e})=>n.createElement(p,null,n.createElement(u,null,n.createElement("code",null,"formatTelefonnummer(input, options)")),n.createElement(d,null,"Resultat: ",n.createElement("output",null,m(t,e))))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    input: "90124223",
    options: {
      countryCode: "47"
    }
  },
  render: ({
    input,
    options
  }: Story) => <DescriptionList>
            <DescriptionTerm>
                <code>formatTelefonnummer(input, options)</code>
            </DescriptionTerm>
            <DescriptionDetail>
                Resultat: <output>{formatTelefonnummer(input, options)}</output>
            </DescriptionDetail>
        </DescriptionList>
}`,...a.parameters?.docs?.source}}};const b=["formatTelefonnumme"];export{b as __namedExportsOrder,y as default,a as formatTelefonnumme};
