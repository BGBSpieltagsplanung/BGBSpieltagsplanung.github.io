"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[174],{2417:(e,a,t)=>{t.d(a,{FP:()=>m,I_:()=>n,LE:()=>o,Pi:()=>w,R7:()=>h,RR:()=>f,TT:()=>g,Zg:()=>r,bl:()=>y,d8:()=>b,ej:()=>d,gZ:()=>i,gn:()=>u,hc:()=>M,kY:()=>p,mb:()=>c,ov:()=>v,wX:()=>_});const l=!1,s="NGdoLbyd_330",i="service_1z8boq8",n="template_uc9j4dn",r="z6CsuBOLcuYCsxNiZ",o="Auf geht's SCF",m="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",c="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",u="https://planthegame.ch",g="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",d=function(e){const a=e+"=",t=decodeURIComponent(document.cookie),i=t.split(";");for(let l=0;l<i.length;l++){let e=i[l];while(" "===e.charAt(0))e=e.substring(1);if(0===e.indexOf(a))return e.substring(a.length,e.length)}return"isAdministrator"===e?l:"applicationCode"===e?s:void 0},b=function(e,a){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+e+";"+l+'";path=/',document.cookie="applicationCode="+a+";"+l+'";path=/'},p=function(e){let a="";if("HOME"===e)return"3Home2emoH9";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===e.length&&(a=e);return a},v=function(e){let a="";if(12===e.length){if(e.indexOf("_")>0){const t=e.split("_");8===t[0].length&&parseInt(t[1])>=329&&(a=e)}}else 11===e.length&&(a=e.substring(1,5)+e.substring(6,10)+"_"+e.substring(0,1)+e.substring(5,6)+e.substring(10,e.length));return a},h=function(e){return"statics/images/"+e+"/Logo.png"},_=function(e,a,t){return""===a?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+e+"/"+a+".png":"statics/avatars/collection/"+a+".png"},f=function(e){let a=this.teamImages.find((a=>a.value===e))?.image;return"undefined"===typeof a&&(a="statics/teams/QuestionMark.png"),a},w=function(e){return e.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},M=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Eintracht Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.svg"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.svg"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"VfL Osnabrück",value:"VfL_Osnabrück",image:"statics/teams/VfL_Osnabrück.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],y=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},9174:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ve});var l=t(9835),s=t(6970);const i={class:"q-pa-md",style:{"max-width":"500px"}},n={class:"q-pa-md q-gutter-y-md column items-start"},r={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},o=["src"],m={class:"q-pa-md q-gutter-sm"},c=(0,l._)("div",{class:"text-h6"},"Mitglied erfassen",-1),u=["src"],g=(0,l._)("div",{class:"text-h6"},"Mitglied ändern",-1),d=["src"],b={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},p=["src"],v=["src"],h=["src"],_={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},f=["src"],w=["src"],M=["src"],y={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},k=["src"],T=["src"],x=["src"],S=(0,l._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function W(e,a,t,W,C,H){const q=(0,l.up)("q-toolbar-title"),B=(0,l.up)("q-btn"),O=(0,l.up)("q-toolbar"),A=(0,l.up)("q-btn-group"),P=(0,l.up)("q-badge"),I=(0,l.up)("q-avatar"),D=(0,l.up)("q-item-section"),j=(0,l.up)("q-item-label"),L=(0,l.up)("q-item"),z=(0,l.up)("q-list"),U=(0,l.up)("q-card-section"),V=(0,l.up)("q-input"),F=(0,l.up)("q-select"),$=(0,l.up)("q-separator"),E=(0,l.up)("q-card-actions"),Z=(0,l.up)("q-card"),K=(0,l.up)("q-dialog"),N=(0,l.up)("q-img"),Q=(0,l.up)("q-page"),J=(0,l.Q2)("ripple"),R=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(Q,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(O,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:"text-overline"},{default:(0,l.w5)((()=>[(0,l.Uk)("Mitglieder ("+(0,s.zw)(C.memberObject.length)+")",1)])),_:1}),"true"===C.getCookie("isAdministrator")?((0,l.wg)(),(0,l.j4)(B,{key:0,class:"bg-white text-primary",icon:"add",label:"Neu",onClick:a[0]||(a[0]=e=>W.addMember=!0)})):(0,l.kq)("",!0)])),_:1})]),(0,l._)("div",n,[(0,l.Wm)(A,{push:""},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{color:"primary",glossy:"","text-color":"white",push:"",label:"2023-24",onClick:a[1]||(a[1]=e=>H.getTableMember("2023-24"))}),(0,l.Wm)(B,{color:"deep-orange",glossy:"","text-color":"white",push:"",label:"2022-23",onClick:a[2]||(a[2]=e=>H.getTableMember("2022-23"))})])),_:1})]),(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(C.memberObject,((e,a)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(z,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:a},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(L,{clickable:"",onClick:a=>H.onMemberClick(e.memberId,e.member,e.avatar,e.customized)},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{avatar:""},{default:(0,l.w5)((()=>[""===e.avatar?((0,l.wg)(),(0,l.j4)(I,{key:0,size:"50px",color:"pink-10","text-color":"white"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.member.substring(0,1))+" ",1),(0,l.Wm)(P,{floating:"",color:"teal"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.numberOfParticipations),1)])),_:2},1024)])),_:2},1024)):(0,l.kq)("",!0),""!==e.avatar?((0,l.wg)(),(0,l.j4)(I,{key:1,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:C.getAvatar(W.varAdminCode,e.avatar,e.customized)},null,8,o),(0,l.Wm)(P,{floating:"",color:"teal"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.numberOfParticipations),1)])),_:2},1024)])),_:2},1024)):(0,l.kq)("",!0)])),_:2},1024),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(j,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.member),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[J]])])),_:2},1024)),[[J]]))),128))]),(0,l._)("div",m,[(0,l.Wm)(K,{modelValue:W.addMember,"onUpdate:modelValue":a[6]||(a[6]=e=>W.addMember=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(U,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{filled:"",dense:"",modelValue:W.txtMemberNew,"onUpdate:modelValue":a[3]||(a[3]=e=>W.txtMemberNew=e),autofocus:"",label:"Mitglied *"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(U,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{filled:"",dense:"",modelValue:W.txtAvatarNew,"onUpdate:modelValue":a[4]||(a[4]=e=>W.txtAvatarNew=e),options:C.avatarImages,label:"Avatar","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((e=>[(0,l.Wm)(L,(0,s.vs)((0,l.F4)(e.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(D,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.opt.avatar},null,8,u)])),_:2},1024)])),_:2},1024),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(j,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])])),_:1}),(0,l.Wm)($),(0,l.Wm)(E,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(B,{flat:"",label:"Abbrechen"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(B,{icon:"save",label:"Speichern",onClick:a[5]||(a[5]=e=>H.addMemberSave(W.txtMemberNew,W.txtAvatarNew.value)),disable:""===W.txtMemberNew},null,8,["disable"]),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(K,{modelValue:W.editMember,"onUpdate:modelValue":a[11]||(a[11]=e=>W.editMember=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(U,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{filled:"",dense:"",modelValue:W.txtMember,"onUpdate:modelValue":a[7]||(a[7]=e=>W.txtMember=e),label:"Mitglied *"},null,8,["modelValue"]),(0,l.Wm)(F,{filled:"",dense:"",modelValue:W.txtAvatar,"onUpdate:modelValue":a[8]||(a[8]=e=>W.txtAvatar=e),options:C.avatarImages,label:"Avatar","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((e=>[(0,l.Wm)(L,(0,s.vs)((0,l.F4)(e.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(D,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.opt.avatar},null,8,d)])),_:2},1024)])),_:2},1024),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(j,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])])),_:1}),(0,l._)("div",b,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(C.inactiveMatchObject,((e,a)=>((0,l.wg)(),(0,l.j4)(I,{key:a,size:"40px",class:"overlapping",style:(0,s.j5)(`left: ${32*a}px`)},{default:(0,l.w5)((()=>[a<=9&&""!==e.awayTeam&&e.awayTeam!==W.homeTeamFromTenant?((0,l.wg)(),(0,l.iD)("img",{key:0,src:C.getTeamImage(e.awayTeam)},null,8,p)):(0,l.kq)("",!0),a<=9&&""!==e.homeTeam&&e.homeTeam!==W.homeTeamFromTenant?((0,l.wg)(),(0,l.iD)("img",{key:1,src:C.getTeamImage(e.homeTeam)},null,8,v)):(0,l.kq)("",!0),a<=9&&""===e.homeTeam&&""===e.awayTeam?((0,l.wg)(),(0,l.iD)("img",{key:2,src:C.getEventImage(e.matchName)},null,8,h)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l._)("div",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(C.inactiveMatchObject,((e,a)=>((0,l.wg)(),(0,l.j4)(I,{key:a,size:"40px",class:"overlapping",style:(0,s.j5)(`left: ${32*(a-10)}px`)},{default:(0,l.w5)((()=>[a>9&&a<=19&&""!==e.awayTeam&&e.awayTeam!==W.homeTeamFromTenant?((0,l.wg)(),(0,l.iD)("img",{key:0,src:C.getTeamImage(e.awayTeam)},null,8,f)):(0,l.kq)("",!0),a>9&&a<=19&&""!==e.homeTeam&&e.homeTeam!==W.homeTeamFromTenant?((0,l.wg)(),(0,l.iD)("img",{key:1,src:C.getTeamImage(e.awayTeam)},null,8,w)):(0,l.kq)("",!0),a>9&&a<=19&&""===e.homeTeam&&""===e.awayTeam?((0,l.wg)(),(0,l.iD)("img",{key:2,src:C.getEventImage(e.matchName)},null,8,M)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l._)("div",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(C.inactiveMatchObject,((e,a)=>((0,l.wg)(),(0,l.j4)(I,{key:a,size:"40px",class:"overlapping",style:(0,s.j5)(`left: ${32*(a-20)}px`)},{default:(0,l.w5)((()=>[a>19&&a<=29&&""!==e.awayTeam&&e.awayTeam!==W.homeTeamFromTenant?((0,l.wg)(),(0,l.iD)("img",{key:0,src:C.getTeamImage(e.awayTeam)},null,8,k)):(0,l.kq)("",!0),a>19&&a<=29&&""!==e.homeTeam&&e.homeTeam!==W.homeTeamFromTenant?((0,l.wg)(),(0,l.iD)("img",{key:1,src:C.getTeamImage(e.awayTeam)},null,8,T)):(0,l.kq)("",!0),a>19&&a<=29&&""===e.homeTeam&&""===e.awayTeam?((0,l.wg)(),(0,l.iD)("img",{key:2,src:C.getEventImage(e.matchName)},null,8,x)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l.Wm)($),(0,l.Wm)(E,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[C.getCookie("isAdministrator")?((0,l.wg)(),(0,l.j4)(B,{key:0,icon:"delete",color:"primary",onClick:a[9]||(a[9]=e=>W.delMember=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(B,{flat:"",label:"Abbrechen"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(B,{icon:"save",label:"Speichern",onClick:a[10]||(a[10]=e=>H.editMemberSave(W.txtMemberId,W.txtMember,W.txtMemberOld,W.txtAvatar.value)),disable:""===W.txtMember||W.boolIsCustomized},null,8,["disable"]),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(K,{modelValue:W.delMember,"onUpdate:modelValue":a[13]||(a[13]=e=>W.delMember=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{icon:"delete",color:"primary","text-color":"white"}),S])),_:1}),(0,l.Wm)(E,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(B,{flat:"",label:"Nein",color:"primary"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(B,{flat:"",label:"Ja",color:"primary",onClick:a[12]||(a[12]=e=>H.deleteMember(W.txtMemberId))},null,512),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(N,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(6822),t(9665),t(6727);var C=t(9302),H=t(2417),q=t(499),B=t(4308);const O=(0,q.iH)(""),A=(0,q.iH)(""),P=(0,q.iH)(""),I=(0,q.iH)(""),D=(0,q.iH)(!1),j=(0,q.iH)(""),L=(0,q.iH)("");let z,U,V,F,$;const E={name:"ListMember",setup(){const e=(0,C.Z)();return{varAdminCode:(0,q.iH)(j),txtMemberId:(0,q.iH)(O),txtMember:(0,q.iH)(A),txtMemberOld:(0,q.iH)(P),txtAvatar:(0,q.iH)(I),boolIsCustomized:(0,q.iH)(D),txtMemberNew:(0,q.iH)(""),txtAvatarNew:(0,q.iH)(""),homeTeamFromTenant:(0,q.iH)(L),onMemberCreated(){e.notify({type:"positive",message:"Mitglieder wurde erfolgreich erfasst!"})},onMemberUpdated(){e.notify({type:"positive",message:"Mitglieder wurde erfolgreich aktualisiert!"})},onMemberDeleted(){e.notify({message:"Mitglieder wurde erfolgreich gelöscht!",color:"orange"})},onMemberAlreadyExists(){e.notify({type:"negative",message:"Dieses Mitglied besteht bereits!"})},addMember:(0,q.iH)(!1),editMember:(0,q.iH)(!1),delMember:(0,q.iH)(!1)}},data(){return{getCookie:H.ej,getAdminCode:H.kY,getAvatar:H.wX,getTeamImage:H.RR,getEventImage:H.Pi,teamImages:H.hc,avatarImages:H.bl,URLMatchManagementAPI:H.gn,memberObject:[{memberId:"",member:"",avatar:"",customized:"",numberOfParticipations:""}],inactiveMatchObject:[{homeTeam:"",awayTeam:"",matchName:"",date:""}]}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenantId().then((()=>{this.getTableMember()}))}))},methods:{setVariables(){return j.value=(0,H.kY)((0,H.ej)("applicationCode")),V=H.gn+"/Tenant",F=H.gn+"/Member",$=H.gn+"/Participant",this.memberObject=[],Promise.resolve()},getTenantId(){return new Promise(((e,a)=>{this.$axios.get(`${V}/code/${j.value}`).then((t=>{200===t.status?(z=t.data.id,U=t.data.season,L.value=t.data.homeTeam,e()):(console.log("Unexpected status code:",t.status),a(new Error("Unexpected status code")))})).catch((e=>{console.log(e),a(e)}))}))},getTableMember(e){this.memberObject=[],"undefined"!==typeof e&&(U=e),this.$axios.get(`${F}/${z}`).then((e=>{if(200===e.status)for(let a=0;a<e.data.length;a++){let t=0;this.$axios.get(`${$}/${z}/${U}/name/${e.data[a].name.trim()}`).then((l=>{200===l.status?(t=l.data.length,this.setMemberObject(e.data[a].id,e.data[a].name,e.data[a].avatar,e.data[a].isCustomized,t)):console.log("Unexpected status code:",l.status)})).catch((e=>console.log(e)))}else console.log("Unexpected status code:",e.status)})).catch((e=>console.log(e)))},setMemberObject(e,a,t,l,s){this.memberObject.push({memberId:e,member:a,avatar:t,customized:l,numberOfParticipations:s}),this.memberObject.sort((function(e,a){const t=e.numberOfParticipations,l=a.numberOfParticipations;return t>l?-1:t<l?1:0}))},onMemberClick(e,a,t,l){O.value=e,A.value=a,P.value=a,I.value=t,D.value=l,this.inactiveMatchObject=[],this.$axios.get(`${$}/${z}/${U}/name/${a.trim()}`).then((e=>{if(200===e.status)for(let a=0;a<e.data.length;a++)this.setInactiveMatchObject(e.data[a].homeTeam,e.data[a].awayTeam,e.data[a].matchName,e.data[a].date);else console.log("Unexpected status code:",e.status)})).catch((e=>console.log(e))),this.editMember=!0},setInactiveMatchObject(e,a,t,l){this.inactiveMatchObject.push({homeTeam:e,awayTeam:a,matchName:t,date:l}),this.inactiveMatchObject.sort((function(e,a){let t=e.date;t=t.substring(6,10)+t.substring(3,5)+t.substring(0,2);let l=a.date;return l=l.substring(6,10)+l.substring(3,5)+l.substring(0,2),t>l?1:t<l?-1:0}))},addMemberSave(e,a){const t=this.memberObject.map((e=>e.member)),l=t.includes(e);if(l)this.onMemberAlreadyExists();else{const t=(0,B.Z)(),l=new Date,s={id:t,creationTime:l,lastModificationTime:null,tenantId:z,name:e,avatar:a,isCustomized:!1};this.$axios.post(`${F}/${z}`,s).then((e=>{201===e.status?(this.onMemberCreated(),this.getTableMember()):console.log("Unexpected status code:",e.status)})).catch((e=>console.log(e)))}},editMemberSave(e,a,t,l){"undefined"===typeof l&&(l=I.value);const s=this.memberObject.map((e=>e.member)),i=s.includes(a)&&a!==t;if(i)this.onMemberAlreadyExists();else{const t={id:e,creationTime:null,lastModificationTime:null,tenantId:z,name:a,avatar:l,isCustomized:!1};this.$axios.put(`${F}/${z}/${e}`,t).then((e=>{200===e.status?(this.onMemberUpdated(),this.getTableMember()):console.log("Unexpected status code:",e.status)})).catch((e=>console.log(e)))}},deleteMember(e){this.$axios.delete(`${F}/${z}/${e}`).then((e=>{200===e.status?(this.onMemberDeleted(),this.getTableMember(),this.editMember=!1):console.log("Unexpected status code:",e.status)})).catch((e=>console.log(e)))}}};var Z=t(1639),K=t(9885),N=t(1663),Q=t(1973),J=t(8879),R=t(7236),G=t(3246),Y=t(490),X=t(1233),ee=t(1357),ae=t(990),te=t(3115),le=t(2074),se=t(4458),ie=t(3190),ne=t(6611),re=t(4363),oe=t(926),me=t(1821),ce=t(1487),ue=t(1136),ge=t(2146),de=t(9984),be=t.n(de);const pe=(0,Z.Z)(E,[["render",W]]),ve=pe;be()(E,"components",{QPage:K.Z,QToolbar:N.Z,QToolbarTitle:Q.Z,QBtn:J.Z,QBtnGroup:R.Z,QList:G.Z,QItem:Y.Z,QItemSection:X.Z,QAvatar:ee.Z,QBadge:ae.Z,QItemLabel:te.Z,QDialog:le.Z,QCard:se.Z,QCardSection:ie.Z,QInput:ne.Z,QSelect:re.Z,QSeparator:oe.Z,QCardActions:me.Z,QImg:ce.Z}),be()(E,"directives",{Ripple:ue.Z,ClosePopup:ge.Z})}}]);