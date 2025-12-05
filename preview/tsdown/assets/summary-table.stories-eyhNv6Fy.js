import{j as e}from"./iframe-Bgbk8A8w.js";import{c as u}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";const d=({className:s,caption:n,header:o,body:m,footer:c,...i})=>e.jsxs("table",{...i,className:u("jkl-summary-table",s),children:[n&&e.jsx("caption",{className:"jkl-sr-only",children:n}),e.jsx("thead",{className:"jkl-sr-only",children:e.jsx("tr",{children:o.map((l,p)=>e.jsx("th",{scope:"col",children:l},p))})}),e.jsx("tbody",{children:m}),e.jsx("tfoot",{children:c})]});d.__docgenInfo={description:"",methods:[],displayName:"SummaryTable",props:{className:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},header:{required:!0,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:""},body:{required:!0,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""}}};const r=({className:s,header:n,content:o,...m})=>e.jsxs("tr",{...m,className:s,children:[e.jsx("th",{scope:"row",children:n}),e.jsx("td",{children:o})]});r.__docgenInfo={description:"",methods:[],displayName:"SummaryTableRow",props:{className:{required:!1,tsType:{name:"string"},description:""},header:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""}}};const x={title:"Komponenter/SummaryTable",component:d},a="­",t={args:{caption:"Example",header:["Product","Price"],body:e.jsxs(e.Fragment,{children:[e.jsx(r,{header:`Uføre${a}pensjon`,content:"340,00 kr/mnd"}),e.jsx(r,{className:"summary-table-example__custom-row",header:`Livs${a}forsikring`,content:"Tatt ut av tilbudet"}),e.jsx(r,{header:`Innbo${a}forsikring`,content:"122,00 kr/mnd"}),e.jsx(r,{header:`Reise${a}forsikring`,content:"249,00 kr/mnd"}),e.jsx(r,{className:"summary-table-example__custom-row",header:"Rabatt",content:"- 17,50 kr/mnd"})]}),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{header:"Total sum",content:"693,50 kr/mnd"}),e.jsx(r,{header:e.jsx("span",{className:"jkl-sr-only",children:"Total sum per år"}),content:"8322,50 kr/mnd"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Example",
    header: ["Product", "Price"],
    body: <>
                <SummaryTableRow header={\`Uføre\${SOFT_HYPHEN}pensjon\`} content="340,00 kr/mnd" />
                <SummaryTableRow className="summary-table-example__custom-row" header={\`Livs\${SOFT_HYPHEN}forsikring\`} content="Tatt ut av tilbudet" />
                <SummaryTableRow header={\`Innbo\${SOFT_HYPHEN}forsikring\`} content="122,00 kr/mnd" />
                <SummaryTableRow header={\`Reise\${SOFT_HYPHEN}forsikring\`} content="249,00 kr/mnd" />
                <SummaryTableRow className="summary-table-example__custom-row" header="Rabatt" content="- 17,50 kr/mnd" />
            </>,
    footer: <>
                <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />
                <SummaryTableRow header={<span className="jkl-sr-only">Total sum per år</span>} content="8322,50 kr/mnd" />
            </>
  }
}`,...t.parameters?.docs?.source}}};const b=["SummaryTable"];export{t as SummaryTable,b as __namedExportsOrder,x as default};
