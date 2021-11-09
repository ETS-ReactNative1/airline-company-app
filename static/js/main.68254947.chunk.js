(this["webpackJsonpairline-company-app"]=this["webpackJsonpairline-company-app"]||[]).push([[0],{10:function(e,A,c){},13:function(e,A,c){},14:function(e,A,c){},15:function(e,A,c){"use strict";c.r(A);var t=c(1),s=c.n(t),l=c(5),a=c.n(l),i=(c(10),c(2)),r=c(0);var n=function(e){var A=e.homeState,c=e.signInState;return Object(r.jsx)("header",{children:Object(r.jsx)("nav",{className:"py-2 bg-light border-bottom",children:Object(r.jsx)("div",{className:"container d-flex flex-wrap",children:Object(r.jsxs)("ul",{className:"nav me-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),A()},className:"btn nav-link link-dark px-2",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),c()},className:"btn nav-link link-dark px-2",children:"Sign in"})})]})})})})};var d=function(){return Object(r.jsx)("footer",{className:"footer mt-auto py-3 bg-light",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("span",{className:"text-muted",children:"Not So Green Airline Company Interface, @AdrKacz, 2021"})})})},m=c(4),o=c.n(m);c(12),c(13);var j=function(e){var A=e.flightsState,c=Object(t.useState)({from:void 0,to:void 0}),s=Object(i.a)(c,2),l=s[0],a=s[1],n={weekday:"long",year:"numeric",month:"long",day:"numeric"},d=l.from,j=l.to,b={start:d,end:j};return Object(r.jsx)("main",{className:"flex-shrink-0",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"mt-5",children:"Not So Green"}),Object(r.jsx)("p",{className:"lead",children:"Book your flight and discover new worlds."}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"form-floating mb-3",children:[Object(r.jsxs)("select",{className:"form-select",id:"floatingSelect",children:[Object(r.jsx)("option",{selected:!0,value:"CDG",children:"Charles de Gaulle"}),Object(r.jsx)("option",{value:"MRS",children:"Marseille"})]}),Object(r.jsx)("label",{htmlFor:"floatingSelect",children:"From"})]}),Object(r.jsxs)("div",{className:"form-floating mb-3",children:[Object(r.jsxs)("select",{className:"form-select",id:"floatingSelect",children:[Object(r.jsx)("option",{selected:!0,value:"CDG",children:"Charles de Gaulle"}),Object(r.jsx)("option",{value:"MRS",children:"Marseille"})]}),Object(r.jsx)("label",{htmlFor:"floatingSelect",children:"To"})]}),Object(r.jsxs)("div",{className:"mb-3",children:[d&&j&&Object(r.jsxs)("p",{children:["Round Trip, From ",d.toLocaleDateString(void 0,n),", To ",j.toLocaleDateString(void 0,n)]}),d&&!j&&Object(r.jsxs)("p",{children:["One-Way, On ",d.toLocaleDateString(void 0,n)]}),!d&&Object(r.jsx)("p",{children:"..."}),Object(r.jsx)(o.a,{className:"Selectable",numberOfMonths:2,onDayClick:function(e,A){A.selected;var c=m.DateUtils.addDayToRange(e,l);a(c)},modifiers:b,selectedDays:[d,{from:d,to:j}]})]}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),A()},class:"btn btn-primary mb-5",type:"submit",children:"Confirm"})]})]})})};var b=function(e){var A=e.checkoutState;function c(e){console.log(e),A()}return Object(r.jsx)("main",{className:"flex-shrink-0",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"list-group mt-5",children:[Object(r.jsx)("button",{onClick:function(){return c(1)},type:"button",class:"list-group-item list-group-item-action",children:"Flight 1"}),Object(r.jsx)("button",{onClick:function(){return c(2)},type:"button",class:"list-group-item list-group-item-action",children:"Flight 2"})]})})})},h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAuUAAALlAF37bb0AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAEldJREFUGBntwQmclYPCBvDnnFlrWqcp7SVTvhIVuUIqNxXqJnJRn6VCklEUyXaNKKR7ExLdSxHJEqJQKSKJSoYkNUqL9r1pmu2c57s/3/W7lplz5j3n3ef5/wERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERQc2u1907Zc6KbQd/tmPV20/fO+i8WpAKoErnkS/nslQbX7m9S1WIj9Uf8n4hIwqteOi8VIgfZY5eHmZ5HFt0558SIL4SOP/dMA048OZNJ0L8Im3oOhq3bfpV9SHeV2XMQcZq7eMXVYd4WcLgnYxLyfIHz02BeNQFa2iC/AWjTgtCPKfFAppm3+tDMiFeknxvAc21+dn+x0E84py1tMI3E3tVhfxXSu3Mk5s3ql01Ca5SY2qYVin+9P5OSajI6p4z6P5J099YtHL9rgL+oiRv77YN36z4ZMHbr77wzKRH7r+lNpxzxU5aK++9kW0DqHDqnD1g7CtfHmF0e8fUgWOavEs77Hnl+uNRUdTumT1r1SGW0/obK8E55+2nbTZOvbw2fK5yxxGzNtKApX2CcNCwEtoq/NWEC9LgTwknX/vMV8U0IvRaB0SV3DYIq9xGBxR9/LezE+EvtS99dEkeDcp7ohmiqjbqJ+6bNbA+rNCukA45PPeWk+ET1XpNzAnTsB13pSOqBuMP8f/ljO8Is1X6jk7aOXNQE3hc6p/HflbCGKwZlIyoWk0r5K+sH10PphpCx22Ycmkt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mmsJxFMG0VyLIN6STVNNg3jMczTTfRCPSZxPEw2AeE3V1TTPuRDPqb+ZpmkG8Z5WB2iSwiSIB3UupDkWQTypX5imGAnxplE0RSuIR02mCX6EeFXwLcZvCsSzKi9n3HpCvKt2LuOUmwDxsMw9jM+NEE/rkM947K4E8bY+IcbhXojXZTF2eekQzxvPmD0M8b7ALMZofSWID6QsYUxCHSG+UHMtY/EYxCeabKdxuZUhftHuCI0q6QTxjx7FNCY8EOIng2jMbRB/yaYRD0P85jmW378gvpM4n+U1LQHiP1VXs1yKh0F8qd5mlsPuLhCfanWAUa1qDPGtzoWMrPjxVIiP9QszknktIf42imVb0x3ie5NZhm1DEiD+F5zG0nw3MBlSMYwo4e8tuygAqTB6HOCvheeeA6lQGo/dyl8cnN4aUuEEe8z4eHXuri8e6JgIERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERESm//wN/ZdWVsmQj7wAAAABJRU5ErkJggg==";var x=function(e){var A=e.completionState;return Object(r.jsx)("div",{className:"container pb-5",children:Object(r.jsxs)("main",{children:[Object(r.jsxs)("div",{className:"py-5 text-center",children:[Object(r.jsx)("img",{className:"d-block mx-auto mb-4",src:h,alt:"",width:"72",height:"72"}),Object(r.jsx)("h2",{children:"Checkout form"}),Object(r.jsx)("p",{className:"lead",children:"Below is an example form built entirely with Bootstrap\u2019s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."})]}),Object(r.jsxs)("div",{className:"row g-5",children:[Object(r.jsxs)("div",{className:"col-md-5 col-lg-4 order-md-last",children:[Object(r.jsxs)("h4",{className:"d-flex justify-content-between align-items-center mb-3",children:[Object(r.jsx)("span",{className:"text-primary",children:"Your cart"}),Object(r.jsx)("span",{className:"badge bg-primary rounded-pill",children:"3"})]}),Object(r.jsxs)("ul",{className:"list-group mb-3",children:[Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between lh-sm",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h6",{className:"my-0",children:"Product name"}),Object(r.jsx)("small",{className:"text-muted",children:"Brief description"})]}),Object(r.jsx)("span",{className:"text-muted",children:"$12"})]}),Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between lh-sm",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h6",{className:"my-0",children:"Second product"}),Object(r.jsx)("small",{className:"text-muted",children:"Brief description"})]}),Object(r.jsx)("span",{className:"text-muted",children:"$8"})]}),Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between lh-sm",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h6",{className:"my-0",children:"Third item"}),Object(r.jsx)("small",{className:"text-muted",children:"Brief description"})]}),Object(r.jsx)("span",{className:"text-muted",children:"$5"})]}),Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between bg-light",children:[Object(r.jsxs)("div",{className:"text-success",children:[Object(r.jsx)("h6",{className:"my-0",children:"Promo code"}),Object(r.jsx)("small",{children:"EXAMPLECODE"})]}),Object(r.jsx)("span",{className:"text-success",children:"\u2212$5"})]}),Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(r.jsx)("span",{children:"Total (USD)"}),Object(r.jsx)("strong",{children:"$20"})]})]}),Object(r.jsx)("form",{className:"card p-2",children:Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Promo code"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Redeem"})]})})]}),Object(r.jsxs)("div",{className:"col-md-7 col-lg-8",children:[Object(r.jsx)("h4",{className:"mb-3",children:"Billing address"}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"row g-3",children:[Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("label",{htmlFor:"firstName",className:"form-label",children:"First name"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"",defaultValue:"",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Valid first name is required."})]}),Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("label",{htmlFor:"lastName",className:"form-label",children:"Last name"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"",defaultValue:"",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Valid last name is required."})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(r.jsxs)("div",{className:"input-group has-validation",children:[Object(r.jsx)("span",{className:"input-group-text",children:"@"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Username",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Your username is required."})]})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsxs)("label",{htmlFor:"email",className:"form-label",children:["Email ",Object(r.jsx)("span",{className:"text-muted",children:"(Optional)"})]}),Object(r.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"you@example.com"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter a valid email address for shipping updates."})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("label",{htmlFor:"address",className:"form-label",children:"Address"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"address",placeholder:"1234 Main St",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your shipping address."})]}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsxs)("label",{htmlFor:"address2",className:"form-label",children:["Address 2 ",Object(r.jsx)("span",{className:"text-muted",children:"(Optional)"})]}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"address2",placeholder:"Apartment or suite"})]}),Object(r.jsxs)("div",{className:"col-md-5",children:[Object(r.jsx)("label",{htmlFor:"country",className:"form-label",children:"Country"}),Object(r.jsxs)("select",{className:"form-select",id:"country",required:"",children:[Object(r.jsx)("option",{defaultValue:"",children:"Choose..."}),Object(r.jsx)("option",{children:"United States"})]}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please select a valid country."})]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("label",{htmlFor:"state",className:"form-label",children:"State"}),Object(r.jsxs)("select",{className:"form-select",id:"state",required:"",children:[Object(r.jsx)("option",{defaultValue:"",children:"Choose..."}),Object(r.jsx)("option",{children:"California"})]}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid state."})]}),Object(r.jsxs)("div",{className:"col-md-3",children:[Object(r.jsx)("label",{htmlFor:"zip",className:"form-label",children:"Zip"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"zip",placeholder:"",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Zip code required."})]})]}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)("input",{type:"checkbox",className:"form-check-input",id:"same-address"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"same-address",children:"Shipping address is the same as my billing address"})]}),Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)("input",{type:"checkbox",className:"form-check-input",id:"save-info"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"save-info",children:"Save this information for next time"})]}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsx)("h4",{className:"mb-3",children:"Payment"}),Object(r.jsxs)("div",{className:"my-3",children:[Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)("input",{id:"credit",name:"paymentMethod",type:"radio",className:"form-check-input",defaultChecked:"",required:""}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"credit",children:"Credit card"})]}),Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)("input",{id:"debit",name:"paymentMethod",type:"radio",className:"form-check-input",required:""}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"debit",children:"Debit card"})]}),Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)("input",{id:"paypal",name:"paymentMethod",type:"radio",className:"form-check-input",required:""}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"paypal",children:"PayPal"})]})]}),Object(r.jsxs)("div",{className:"row gy-3",children:[Object(r.jsxs)("div",{className:"col-md-6",children:[Object(r.jsx)("label",{htmlFor:"cc-name",className:"form-label",children:"Name on card"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"cc-name",placeholder:"",required:""}),Object(r.jsx)("small",{className:"text-muted",children:"Full name as displayed on card"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Name on card is required"})]}),Object(r.jsxs)("div",{className:"col-md-6",children:[Object(r.jsx)("label",{htmlFor:"cc-number",className:"form-label",children:"Credit card number"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"cc-number",placeholder:"",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Credit card number is required"})]}),Object(r.jsxs)("div",{className:"col-md-3",children:[Object(r.jsx)("label",{htmlFor:"cc-expiration",className:"form-label",children:"Expiration"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"cc-expiration",placeholder:"",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Expiration date required"})]}),Object(r.jsxs)("div",{className:"col-md-3",children:[Object(r.jsx)("label",{htmlFor:"cc-cvv",className:"form-label",children:"CVV"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"cc-cvv",placeholder:"",required:""}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Security code required"})]})]}),Object(r.jsx)("hr",{className:"my-4"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),A()},className:"w-100 btn btn-primary btn-lg",type:"submit",children:"Continue to checkout"})]})]})]})]})})};var u=function(e){var A=e.homeState;return Object(r.jsxs)("div",{className:"text-center cover-container d-flex w-100 h-100 p-3 mx-auto flex-column",children:[Object(r.jsx)("div",{className:"mb-auto"}),Object(r.jsxs)("main",{className:"px-3",children:[Object(r.jsx)("h1",{children:"Well done."}),Object(r.jsx)("p",{className:"lead",children:"To balance the carbon footprint of your flight, you must stop eating for 153 days."}),Object(r.jsx)("button",{onClick:function(e){console.log(e),A()},class:"btn btn-primary",children:"Return to home"})]}),Object(r.jsx)("div",{className:"mt-auto"})]})};c(14);var O=function(){return Object(r.jsx)("main",{className:"form-signin text-center",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("img",{className:"mb-4",src:h,alt:"",width:"72",height:"72"}),Object(r.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(r.jsxs)("div",{className:"form-floating",children:[Object(r.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"name@example.com"}),Object(r.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),Object(r.jsxs)("div",{className:"form-floating",children:[Object(r.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",placeholder:"Password"}),Object(r.jsx)("label",{htmlFor:"floatingPassword",children:"Password"})]}),Object(r.jsx)("div",{className:"checkbox mb-3",children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(r.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})};var p=function(){var e=Object(t.useState)("home"),A=Object(i.a)(e,2),c=A[0],s=A[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(n,{homeState:function(){return s("home")},signInState:function(){return s("signin")}}),"home"===c&&Object(r.jsx)(j,{flightsState:function(){return s("flights")}}),"flights"===c&&Object(r.jsx)(b,{checkoutState:function(){return s("checkout")}}),"checkout"===c&&Object(r.jsx)(x,{completionState:function(){return s("completion")}}),"completion"===c&&Object(r.jsx)(u,{homeState:function(){return s("home")}}),"signin"===c&&Object(r.jsx)(O,{}),Object(r.jsx)(d,{})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(A){var c=A.getCLS,t=A.getFID,s=A.getFCP,l=A.getLCP,a=A.getTTFB;c(e),t(e),s(e),l(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),E()}},[[15,1,2]]]);
//# sourceMappingURL=main.68254947.chunk.js.map