import{j as a}from"./AboutHeader-CpM0iYLI.js";import"./index-B80Lgev0.js";const h=({modalRef:e,title:t="Modal",isStatic:l=!1,size:d="md",children:o,bodyClass:r="",bodyStyle:m,btnCancelText:n,btnSubmitText:i,hideFooter:c,hideButtonSubmit:b,onSubmit:x=s=>{s.preventDefault(),$(e.current).modal("hide")}})=>{const s=l?{"data-bs-backdrop":"static"}:{};return a.jsx("form",{className:"modal fade",ref:e,tabIndex:"-1","aria-hidden":"true",...s,onSubmit:x,autoComplete:"off",children:a.jsx("div",{className:`modal-dialog modal-dialog-centered modal-${d??"md"}`,children:a.jsxs("div",{className:"modal-content ",style:{boxShadow:"0 0 10px rgba(0,0,0,0.25)"},children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h4",{className:"modal-title",children:t}),a.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),a.jsx("div",{className:`modal-body ${r??""}`,style:m,children:o}),!c&&a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-sm btn-danger pull-left",type:"button","data-bs-dismiss":"modal",children:n??"Cerrar"}),!b&&a.jsx("button",{className:"btn btn-sm btn-success pull-right",type:"submit",children:i??"Aceptar"})]})]})})})};export{h as M};