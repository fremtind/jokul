import{j as e}from"./iframe-CxSACePp.js";import{c as u}from"./clsx-B-dksMZM.js";import{S as r}from"./_index-gU-L0Mly.js";import"./preload-helper-PPVm8Dsz.js";const t=({className:o,caption:s,header:m,body:l,footer:c,...d})=>e.jsxs("table",{...d,className:u("jkl-summary-table",o),children:[s&&e.jsx("caption",{className:"jkl-sr-only",children:s}),e.jsx("thead",{className:"jkl-sr-only",children:e.jsx("tr",{children:m.map((i,p)=>e.jsx("th",{scope:"col",children:i},p))})}),e.jsx("tbody",{children:l}),e.jsx("tfoot",{children:c})]});t.__docgenInfo={description:"",methods:[],displayName:"SummaryTable",props:{className:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},header:{required:!0,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:""},body:{required:!0,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""}}};const x={title:"Komponenter/SummaryTable",component:t},a="­",n={args:{caption:"Example",header:["Product","Price"],body:e.jsxs(e.Fragment,{children:[e.jsx(r,{header:`Uføre${a}pensjon`,content:"340,00 kr/mnd"}),e.jsx(r,{className:"summary-table-example__custom-row",header:`Livs${a}forsikring`,content:"Tatt ut av tilbudet"}),e.jsx(r,{header:`Innbo${a}forsikring`,content:"122,00 kr/mnd"}),e.jsx(r,{header:`Reise${a}forsikring`,content:"249,00 kr/mnd"}),e.jsx(r,{className:"summary-table-example__custom-row",header:"Rabatt",content:"- 17,50 kr/mnd"})]}),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{header:"Total sum",content:"693,50 kr/mnd"}),e.jsx(r,{header:e.jsx("span",{className:"jkl-sr-only",children:"Total sum per år"}),content:"8322,50 kr/mnd"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const j=["SummaryTable"];export{n as SummaryTable,j as __namedExportsOrder,x as default};
