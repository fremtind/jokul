import{T as t}from"./TextInput-ziLWZWeG.js";/* empty css               */import"./clsx-B-dksMZM.js";import"./index-siqcju79.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./InputGroup-BJwbXp8L.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseTextInput-BcWqlF22.js";import"./IconButton-BsqD9nTf.js";const g={title:"Komponenter/TextInput/TextInput",component:t,parameters:{controls:{expanded:!0,sort:"alpha"}},tags:["autodocs"],argTypes:{density:{table:{disable:!0}}}},n={argTypes:{label:{type:{name:"string",required:!0},table:{defaultValue:{summary:void 0}}},value:{control:"text",description:"Verdien i feltet",table:{defaultValue:{summary:void 0}}},unit:{control:"text",table:{defaultValue:{summary:void 0}}},width:{control:"text",description:"Absolutt verdi for bredden til input-feltet",table:{defaultValue:{summary:void 0}}},maxLength:{control:"number",table:{defaultValue:{summary:void 0}}},action:{type:"function",table:{defaultValue:{summary:void 0}}},actionButton:{type:"function",table:{defaultValue:{summary:void 0}}},inline:{control:"boolean",description:"Lar feltet stå som en del av tekstlig innhold",table:{defaultValue:{summary:void 0}}},name:{table:{disable:!0}},inputClassName:{description:"Klasse for input-feltet",table:{defaultValue:{summary:void 0}}},density:{table:{disable:!0}},align:{table:{defaultValue:{summary:"left"}}},placeholder:{table:{defaultValue:{summary:void 0}}},defaultValue:{table:{defaultValue:{summary:void 0}}},"data-testautoid":{table:{defaultValue:{summary:void 0}}}},args:{name:"text-input",label:"Label",align:"left",inline:!1,placeholder:"Ditt innhold",maxLength:35,disabled:!1,readOnly:!1,defaultValue:"Ditt innhold",inputClassName:"input-klasse","data-testautoid":"test-id"}},e={name:"Unit + Align",args:{label:"Boareal",align:"right",maxLength:20,placeholder:"50",unit:"kvadratmeter"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  argTypes: {
    label: {
      type: {
        name: "string",
        required: true
      },
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    value: {
      control: "text",
      description: "Verdien i feltet",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    unit: {
      control: "text",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    width: {
      control: "text",
      description: "Absolutt verdi for bredden til input-feltet",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    maxLength: {
      control: "number",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    action: {
      type: "function",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    actionButton: {
      type: "function",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    inline: {
      control: "boolean",
      description: "Lar feltet stå som en del av tekstlig innhold",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    inputClassName: {
      description: "Klasse for input-feltet",
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    density: {
      table: {
        disable: true
      }
    },
    align: {
      table: {
        defaultValue: {
          summary: "left"
        }
      }
    },
    placeholder: {
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    defaultValue: {
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    },
    "data-testautoid": {
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    }
  },
  args: {
    name: "text-input",
    label: "Label",
    align: "left",
    inline: false,
    placeholder: "Ditt innhold",
    maxLength: 35,
    disabled: false,
    readOnly: false,
    defaultValue: "Ditt innhold",
    inputClassName: "input-klasse",
    "data-testautoid": "test-id"
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    maxLength: 20,
    placeholder: "50",
    unit: "kvadratmeter"
  }
}`,...e.parameters?.docs?.source},description:{story:`Ved å bruke unit og align sammen vil du få et godt utgangspunkt for
nummer-baserte svar.`,...e.parameters?.docs?.description}}};const V=["TextInput","UnitAlign"];export{n as TextInput,e as UnitAlign,V as __namedExportsOrder,g as default};
