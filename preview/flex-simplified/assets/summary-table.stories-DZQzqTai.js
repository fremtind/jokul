import{j as e}from"./iframe-CG_7dJ_z.js";import{c as p}from"./clsx-B-dksMZM.js";import{S as a}from"./_index-jdpP4vA-.js";import"./preload-helper-PPVm8Dsz.js";const t=({className:s,caption:o,header:m,body:l,footer:d,...c})=>e.jsxs("table",{...c,className:p("jkl-summary-table",s),children:[o&&e.jsx("caption",{className:"jkl-sr-only",children:o}),e.jsx("thead",{className:"jkl-sr-only",children:e.jsx("tr",{children:m.map((i,u)=>e.jsx("th",{scope:"col",children:i},u))})}),e.jsx("tbody",{children:l}),e.jsx("tfoot",{children:d})]});try{t.displayName="SummaryTable",t.__docgenInfo={description:"",displayName:"SummaryTable",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"[string, string]"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}const f={title:"Komponenter/SummaryTable",component:t},r="­",n={args:{caption:"Example",header:["Product","Price"],body:e.jsxs(e.Fragment,{children:[e.jsx(a,{header:`Uføre${r}pensjon`,content:"340,00 kr/mnd"}),e.jsx(a,{className:"summary-table-example__custom-row",header:`Livs${r}forsikring`,content:"Tatt ut av tilbudet"}),e.jsx(a,{header:`Innbo${r}forsikring`,content:"122,00 kr/mnd"}),e.jsx(a,{header:`Reise${r}forsikring`,content:"249,00 kr/mnd"}),e.jsx(a,{className:"summary-table-example__custom-row",header:"Rabatt",content:"- 17,50 kr/mnd"})]}),footer:e.jsxs(e.Fragment,{children:[e.jsx(a,{header:"Total sum",content:"693,50 kr/mnd"}),e.jsx(a,{header:e.jsx("span",{className:"jkl-sr-only",children:"Total sum per år"}),content:"8322,50 kr/mnd"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const j=["SummaryTable"];export{n as SummaryTable,j as __namedExportsOrder,f as default};
