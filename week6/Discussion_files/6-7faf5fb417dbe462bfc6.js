(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0T9T":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("eqO1");t.useStyles=n.makeStyles(e=>n.createStyles({list:{listStyle:"none",margin:0},listItem:{paddingBottom:"12px",borderBottom:`1px solid ${e.palette.border.main}`,marginBottom:"12px"}}))},"9t3k":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("BwT+"),r=a("0T9T");t.SecondaryFeedback=e=>{const{analyticsId:t,configProps:a,secondaryGradersFeedback:o,showFeedbackVisibilityToggle:l}=e,s=r.useStyles(),{isPeerGrading:d,currentUserHasEnterFeedbackEntitlement:c,editorConfigProps:u}=a,b=o.map(e=>n.createElement("li",{className:s.listItem,key:e.id},n.createElement(i.GraderFeedback,Object.assign({analyticsId:t},e,{editorIsReadOnly:!0,ariaLabelledBy:"secondary-feedback-title",editorConfigProps:u,showFeedbackVisibilityToggle:l,isPeerGrading:d,currentUserHasEnterFeedbackEntitlement:c}))));return n.createElement("ul",{className:s.list},b)}},A97p:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("8unJ"),r=a("rtY2"),o=a("lCoF");t.GraderFeedbackEditorComponent=e=>{const{analyticsId:t,localize:{translate:a},onChange:i,peerReviewer:l,...s}=e,{rawTextFeedback:d,pluginsConfig:{onClickCancel:c,onClickSave:u}}=e,b=!e.isReadOnly&&e.isFeedbackEditable;let p;const m=n.useCallback(()=>{!l&&p&&p(d),c()},[c]),y=n.useCallback(()=>{u()},[u]),f=n.useCallback(e=>{p=e.setPristine,i(e)},[i]),g=`${t}.feedbackEditor`,k={defaultButton:l?`${g}.saveDraft`:`${g}.cancel`,primaryButton:l?`${g}.submit`:`${g}.save`},h="feedbackAuthoring.body.content.graderFeedback.feedbackEditor",v={defaultButton:a(l?`${h}.draftLabel`:`${h}.cancelLabel`),primaryButton:a(l?`${h}.submitLabel`:`${h}.saveLabel`)};return n.createElement(n.Fragment,null,n.createElement(r.default,Object.assign({analyticsId:g},s,{onChange:f})),b&&n.createElement(o.EditorActionGroup,null,n.createElement(o.EditorAction,{analyticsId:k.defaultButton,onClick:m},v.defaultButton),n.createElement(o.EditorAction,{analyticsId:k.primaryButton,onClick:y,primary:!0},v.primaryButton)))};const l=i.localizedComponentWrapper(t.GraderFeedbackEditorComponent);t.default=l},"BwT+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("8unJ"),r=a("MC1S"),o=a("+c/t"),l=a("/n7R"),s=a("n7/H"),d=a("A97p"),c=a("0x+l"),u=a("kUjf"),b=a("cQXJ"),p=a("O94r"),m=a("b60y"),y=a("AuQm");t.BaseGraderFeedback=e=>{var t;const{attemptId:a,analyticsId:i,grader:f,userBeingGraded:g,ariaLabelledBy:k,rawTextFeedback:h,editorIsReadOnly:v,editorPlaceholder:F,attemptLastGradedDate:E,late:S,isFeedbackEditable:P,editorConfigProps:x,onFeedbackChange:C,localize:N,isFeedbackFromCurrentStudent:w,showFeedbackVisibilityToggle:A,isFeedbackVisible:I,onClickChangeVisibility:T,onClickEdit:O,listIndex:B,isPeerGrading:j,showAnonymousWhenNoUserData:_,currentUserHasEnterFeedbackEntitlement:L}=e,R=u.useStyles(),{formatUsername:G,formatDatetime:M,translate:H}=N,z=h&&""!==h,$=E&&z,W=(f||g||_)&&z&&v,D=W&&!w&&(null==f?void 0:f.pronouns),U=W&&!w&&(null==f?void 0:f.pronunciation),J=P&&v&&x.peerReviewer,V=n.useMemo(()=>H(I?"feedbackAuthoring.body.content.graderFeedback.feedbackVisibleToStudent":"feedbackAuthoring.body.content.graderFeedback.feedbackHiddenFromStudent"),[I]),Y=n.useMemo(()=>{if(!f)return"";const e=G(f,s.ILocaleUsernameFormat.Short);return H("feedbackAuthoring.body.content.graderFeedback.hideFeedbackFromStudentWithName",{grader:e})},[f]),K=(e,t,i=!1)=>n.createElement(b.SubmissionDeepLink,{attemptId:a,isAnonymous:i,reviewee:t,reviewer:e});return n.createElement("div",{className:"js-grader-feedback"},n.createElement("div",{className:R.graderDetails},W&&n.createElement("div",{className:R.avatarWrapper},((e,t)=>{const a=w?t:e;return(null==a?void 0:a.avatarUrl)?n.createElement(o.AnalyticsAvatar,{size:"medium",src:a.avatarUrl,"aria-hidden":!0,className:"non-anonymous-avatar"}):n.createElement(o.AnalyticsAvatar,{size:"medium","aria-hidden":!0,className:"anonymous-avatar"})})(f,g)),(W||$)&&n.createElement("div",{className:w?p.default(R.nameAndDate,R.fromCurrentStudentNameAndDate):R.nameAndDate},W&&(()=>{if(j){if(w){const e=H("feedbackAuthoring.body.content.graderFeedback.droppedStudent"),t=L&&!f?e:G(f,s.ILocaleUsernameFormat.Short);if(L){const a=g?G(g,s.ILocaleUsernameFormat.Short):e;return K(t,a)}return K(t,B,!0)}if(!f)return L?n.createElement("div",{className:p.default(R.name,"js-grader-title","js-dropped-student-peer-number")},H("feedbackAuthoring.body.content.graderFeedback.droppedStudentWithNumber",{number:B})):n.createElement("div",{className:p.default(R.name,"js-grader-title","js-name-peer-number")},H("feedbackAuthoring.body.content.graderFeedback.peerReviewWithNumber",{number:B}))}return n.createElement("div",{className:p.default(R.name,"js-grader-title")},G(f,s.ILocaleUsernameFormat.Short))})(),n.createElement("div",{className:R.personalizationAndDate},n.createElement("div",{className:p.default(R.graderAttrs)},U&&n.createElement("span",{className:R.pronunciation},n.createElement("span",null,f.pronunciation),(null===(t=f.pronunciationAudio)||void 0===t?void 0:t.permanentUrl)&&n.createElement(y.LocalizedAudioPlayer,{className:R.pronunciationAudio,src:f.pronunciationAudio.permanentUrl,analyticsId:"graderFeedback.pronunciation"})),D&&n.createElement("span",null,f.pronouns)),$&&(()=>{let e=M(new Date(E),s.ILocaleDatetimeFormat.Short);return S&&(e=H("feedbackAuthoring.body.content.graderFeedback.lastGradedLate",{dateGraded:e})),n.createElement("div",{className:R.dateWrapper},n.createElement("div",{className:p.default(R.date,{[R.dateLate]:S})},e))})())),J&&n.createElement(m.EditFeedbackIcon,{editFeedbackCallback:O,analyticsId:i}),A&&n.createElement(l.AnalyticsTooltip,{title:V,className:"js-visibility-tooltip",analyticsId:`${i}.graderFeedback.visibilityTooltip`,placement:"top-end"},n.createElement(r.IconButton,{analyticsId:`${i}.graderFeedback.visibilityIcon`,"aria-pressed":!I,ariaLabel:Y,className:p.default(R.visibilityIcons,I?"visible-icon":"invisible-icon"),onClick:()=>null==T?void 0:T(),icon:I?n.createElement(c.Visible,null):n.createElement(c.Invisible,null)}))),n.createElement(d.default,{analyticsId:`${i}.graderFeedback`,rawTextFeedback:h,ariaLabelledBy:k,isReadOnly:v,placeholder:F,onChange:C,pluginsConfig:x,isFeedbackEditable:P,peerReviewer:x.peerReviewer,collapsible:!0}))},t.GraderFeedback=i.localizedComponentWrapper(t.BaseGraderFeedback)},Geir:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("O94r"),r=a("8unJ"),o=a("W3rM"),l=a("tN4z"),s=a("jYYR"),d=a("hC1i");var c;!function(e){e.General="GENERAL",e.Individual="INDIVIDUAL"}(c=t.FeedbackPivotKey||(t.FeedbackPivotKey={})),t.BaseFeedbackBody=e=>{const{analyticsId:t,localize:{translate:a},configProps:{initialSelectedTabKey:r,isFeedbackForGroupSubmission:u,...b},...p}=e,m=d.useStyles(),y=r||c.General,f=n.createElement(o.FeedbackContent,Object.assign({analyticsId:`${t}.feedbackBody`,configProps:{...b},feedbackContentType:r===c.General?"group":"individual"},p)),g=t=>{const{configProps:{onGroupTabChange:a}}=e;a&&a(t)};return n.createElement("div",{className:m.feedbackBody},u?n.createElement(n.Fragment,null,n.createElement(l.AnalyticsTabs,{value:y,className:i.default("js-feedback-tabs",m.feedbackTabs),analyticsId:`${t}.feedbackBody.tabs`},n.createElement(l.AnalyticsTab,{label:a("feedbackAuthoring.body.groupTab"),value:c.General,className:m.tabButton,analyticsId:`${t}.feedbackBody.group`,onClick:()=>g(c.General)}),n.createElement(l.AnalyticsTab,{label:a("feedbackAuthoring.body.individualTab"),value:c.Individual,className:m.tabButton,analyticsId:`${t}.feedbackBody.individual`,onClick:()=>g(c.Individual)})),n.createElement(s.TabPanel,{panelId:y,ariaLabelledby:y},f)):f)},t.FeedbackBody=r.localizedComponentWrapper(t.BaseFeedbackBody)},HFBr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("eqO1");t.useStyles=n.makeStyles(e=>n.createStyles({inlineNavigation:{height:"40px",marginTop:"28px",display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"15px",borderBottom:`1px solid ${e.palette.secondary.light}`,marginLeft:"-16px",marginRight:"-16px",[e.breakpoints.up("sm")]:{marginLeft:"-30px",marginRight:"-30px"}},inlineNavigationTitle:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontWeight:e.typography.fontWeightSemiBold,fontSize:e.typography.fontSizeMedium,marginLeft:"18px"},inlineNavigationArrows:{whiteSpace:"nowrap",marginRight:"18px"}}))},HNuY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(e=>n.createStyles({container:{"&:before":{content:"",display:"block",height:"5px",left:"-1px",position:"absolute",right:"-1px",top:"-1px"}}})),t.default=t.useStyles},KP83:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(e=>n.createStyles({container:{marginTop:"28px"},primaryContainer:{display:"flex",justifyContent:"space-between",marginBottom:"14px"},primaryTitle:{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightSemiBold,margin:0},secondaryContainer:{marginTop:"37px"},secondaryTitle:{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightSemiBold}})),t.default=t.useStyles},PFY9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("TkOk"),r=a("uGOY");t.FeedbackAuthoring=e=>{const{isInlineMode:t,configProps:a,...o}=e,{allowMultipleFeedbackNavigation:l,...s}=a,d={showNavigator:l,...s};return t&&(d.navigationTitle=o.panelTitle),n.createElement(n.Fragment,null,t?n.createElement(i.FeedbackAuthoringInline,Object.assign({},o,{inlineConfigProps:d})):n.createElement(r.FeedbackAuthoringPanel,Object.assign({},o,{panelConfigProps:d})))}},SZa9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(()=>n.createStyles({actions:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingTop:"5px"},action:{margin:"3px"}})),t.default=t.useStyles},Seus:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("MC1S"),r=a("8jBL"),o=a("8unJ");t.BaseFeedbackNavigator=e=>{const{analyticsId:t,onNavigateToNextFeedback:a,onNavigateToPreviousFeedback:o,localize:{translate:l}}=e;return n.createElement(n.Fragment,null,n.createElement(i.IconButton,{onClick:o,disabled:!o,icon:n.createElement(r.ArrowLeft,null),ariaLabel:l("feedbackAuthoring.header.previous"),analyticsId:`${t}.navigator.previous`}),n.createElement(i.IconButton,{onClick:a,disabled:!a,icon:n.createElement(r.ArrowRight,null),ariaLabel:l("feedbackAuthoring.header.next"),analyticsId:`${t}.navigator.next`}))},t.FeedbackNavigator=o.localizedComponentWrapper(t.BaseFeedbackNavigator)},TkOk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("Geir"),r=a("Seus"),o=a("HFBr");t.FeedbackAuthoringInline=e=>{const t=o.useStyles(),{analyticsId:a,inlineConfigProps:l,primaryGraderFeedback:s,secondaryGradersFeedback:d}=e,c=`${a}.feedbackAuthoring.components`;return n.createElement("div",null,l.showNavigator&&n.createElement("div",{className:t.inlineNavigation},n.createElement("div",{className:t.inlineNavigationTitle,id:"inline-feedback-navigation-title"},l.navigationTitle),n.createElement("div",{className:t.inlineNavigationArrows},n.createElement(r.FeedbackNavigator,{onNavigateToNextFeedback:l.onNavigateToNextFeedback,onNavigateToPreviousFeedback:l.onNavigateToPreviousFeedback,analyticsId:c}))),n.createElement(i.FeedbackBody,{analyticsId:c,configProps:l,primaryGraderFeedback:s,secondaryGradersFeedback:d}))}},TsQp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx"),i=a("U3BX");t.useStyles=n.makeStyles(e=>n.createStyles({feedbackHeader:t=>({"& .ms-Panel-header":{boxShadow:"none",[e.breakpoints.up("sm")]:{alignItems:"flex-end",minHeight:0,".header-actions":{margin:0,flex:0}},".ms-Panel-titles-container":{maxWidth:"100%",[e.breakpoints.up("sm")]:{position:"static"},".ms-Panel-subTitle":{...i.overflowEllipsisStyles().overflowEllipsis},".ms-Panel-headerText":{...i.overflowEllipsisStyles().overflowEllipsis,textAlign:"center",[e.breakpoints.up("sm")]:{textAlign:"start",fontSize:e.typography.fontSizeXXLarge,fontFamily:e.typography.fontFamilySerif,color:e.palette.primary.main}},".ms-Panel-content-right":{".is-disabled":{color:e.palette.secondary.light}}}},[e.breakpoints.up("sm")]:{"& .ms-Panel-commands":{backgroundColor:e.palette.background.default}}}),navigator:{"& .ms-Panel-header":{"& .ms-Panel-content-right":{"& .ms-Button":{color:e.palette.secondary.light,[e.breakpoints.up("sm")]:{color:"inherit"}},"& .is-disabled":{color:e.palette.text.disabled,[e.breakpoints.up("sm")]:{color:"inherit"}}},"& .ms-Panel-titles-container":{[e.breakpoints.only("xs")]:{position:"static",left:"90px",minWidth:"calc(100% - 180px)"},[e.breakpoints.up("sm")]:{maxWidth:"calc(100% - 76px)"}}}}})),t.default=t.useStyles},U3BX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.overflowEllipsisStyles=()=>n.createStyles({overflowEllipsis:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}})},Vl9h:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("A4Z1"),r=a("8unJ"),o=a("9t3k");t.BaseFeedbackList=e=>{const{analyticsId:t,configProps:a,secondaryGradersFeedback:r,localize:{translate:l}}=e,s={noReviewsForStudent:l("feedbackAuthoring.body.content.noReviewsForStudent")};return n.createElement(i.AnalyticsJssThemeProvider,{theme:"light"},r.length>0&&n.createElement(o.SecondaryFeedback,{configProps:a,secondaryGradersFeedback:r,analyticsId:`${t}.feedbackList.secondaryFeedback`}),0===r.length&&a.isPeerGrading&&n.createElement("div",{className:"js-feedback-list-no-reviews-for-student"},s.noReviewsForStudent))},t.FeedbackList=r.localizedComponentWrapper(t.BaseFeedbackList)},"Vu3+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.HEIGHT_THRESHOLD=136,t.useStyles=n.makeStyles(()=>n.createStyles({collapsed:{overflow:"hidden",height:`${t.HEIGHT_THRESHOLD}px`,whiteSpace:"nowrap"},link:{padding:"10px 0px",display:"inline-block"},lineHeight:{lineHeight:1.6}})),t.default=t.useStyles},W3rM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("O94r"),r=a("BwT+"),o=a("8unJ"),l=a("9t3k"),s=a("KP83"),d=a("b60y");t.BaseFeedbackContent=e=>{const{analyticsId:t,feedbackContentType:a,primaryGraderFeedback:o,secondaryGradersFeedback:c,localize:{translate:u},configProps:{isPeerGrading:b,currentUserHasEnterFeedbackEntitlement:p,primaryFeedbackConfigProps:m,isOrganization:y,editorConfigProps:f,showFeedbackVisibilityToggle:g}}=e,k=s.useStyles(),{editorPlaceholder:h,onClickEdit:v,editorIsReadOnly:F,showPeerReviewerSpecificText:E}=m,S=null==o?void 0:o.isFeedbackEditable,P=c&&c.length>0,x=y?"organization":"course",C=S?"feedbackEditable":"feedbackNotEditable",N=b?"feedbackAuthoring.body.content.peerGraders.secondaryGradersTitle":"feedbackAuthoring.body.content.secondaryGradersTitle",w="organization"===x?`${x}`:`${x}.${a}`,A=f.peerReviewer,I=P&&!A,T=!P&&b&&!A,O=S&&F&&!A,B=u("feedbackAuthoring.body.content.noReviewsByOthers"),j=u("feedbackAuthoring.body.content.primaryGraderTitle.course.peerReviewerSubtitle"),_=u(N);let L,R;o&&(L=u(E&&!A?"feedbackAuthoring.body.content.primaryGraderTitle.student":`feedbackAuthoring.body.content.primaryGraderTitle.${w}`),R=h||u(E&&A?"feedbackAuthoring.body.content.editorPlaceholder.reviewer":`feedbackAuthoring.body.content.editorPlaceholder.${C}.${x}`));const G={isOrganization:y,isPeerGrading:b,currentUserHasEnterFeedbackEntitlement:p,editorConfigProps:f,secondaryFeedbackConfigProps:{title:_}};return n.createElement("div",{className:i.default("js-feedback-content-container",k.container)},o&&n.createElement("div",{className:i.default("js-feedback-content-primary-container",k.primaryContainer)},n.createElement("h3",{id:"primary-feedback-title",className:k.primaryTitle},L),O&&n.createElement(d.EditFeedbackIcon,{editFeedbackCallback:v,analyticsId:t})),A&&n.createElement("p",{className:"js-peer-reviewer-subtitle"},j),o&&n.createElement(r.GraderFeedback,Object.assign({},o,m,{analyticsId:`${t}.content.primaryFeedback`,ariaLabelledBy:"primary-feedback-title",editorPlaceholder:R,editorConfigProps:f,isPeerGrading:b})),I&&n.createElement("div",{className:k.secondaryContainer},n.createElement("h3",{className:k.secondaryTitle},_),n.createElement(l.SecondaryFeedback,{analyticsId:`${t}.content.secondaryFeedback`,secondaryGradersFeedback:c,configProps:G,showFeedbackVisibilityToggle:g})),T&&n.createElement("div",{className:i.default("js-empty-secondary-feedback-section",k.secondaryContainer)},n.createElement("h3",{className:k.secondaryTitle},_),B))},t.FeedbackContent=o.localizedComponentWrapper(t.BaseFeedbackContent)},Yh7l:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(e=>n.createStyles({fromCurrentStudentName:{minWidth:"fit-content",[e.breakpoints.up("sm")]:{flex:1}}})),t.default=t.useStyles},ZO5O:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("kBJj"),r=a("O94r"),o=a("gI0g");t.BaseFeedbackEditor=n.forwardRef((e,t)=>{const{ariaLabelledBy:a,isReadOnly:l,placeholder:s,pluginsConfig:d,rawTextFeedback:c,onChange:u}=e,{getEmbedSrc:b,openCloudStorageIntegrationModal:p}=d,m=o.default(e),y=[i.link(),i.image(),i.video(),i.math({...d}),i.insertLocalFile({...d}),i.videoEverywhere({...d}),i.insertYoutubeVideo({getEmbedSrc:b,...d})];return p&&y.push(i.insertCloudStorageIntegrationFile({openCloudStorageIntegrationModal:p,...d})),n.createElement("div",{ref:t,className:r.default({[m.editor]:e.isReadOnly},e.className)},l&&!c?n.createElement("div",{className:m.placeholder,id:"feedback-placeholder"},s):n.createElement(i.BbEditor,{bbml:c,isReadOnly:l,placeholder:s,ariaLabelledBy:a,plugins:y,onChange:u}))}),t.default=t.BaseFeedbackEditor},b60y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("8unJ"),r=a("np6O"),o=a("0x+l"),l=a("tNaF"),s=a("O94r");t.BaseEditFeedbackIcon=({analyticsId:e,editFeedbackCallback:t,localize:{translate:a}})=>{const i=a("feedbackAuthoring.body.content.editAriaLabel"),d=l.useStyles();return n.createElement(r.AnalyticsIconButton,{analyticsId:`${e}.content.edit`,className:s.default("js-edit-feedback-icon",d.editIcon),onClick:t,"aria-label":i},n.createElement(o.Edit,null))},t.EditFeedbackIcon=i.localizedComponentWrapper(t.BaseEditFeedbackIcon)},cQXJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("O94r"),i=a("ERkP"),r=a("8unJ"),o=a("MC1S"),l=a("Yh7l"),s=a("dXsz");t.BaseSubmissionDeepLink=e=>{const{attemptId:t,isAnonymous:a,localize:{translate:r},reviewee:d,reviewer:c}=e,u=s.useSubmissionDeepLinkHref({deepLinkAttemptId:t,...a?{peerIndex:d}:null}),b=i.createElement(o.Link,{className:n.default("js-submission-deep-link",{"js-anonymous-deep-link":a}),href:u,analyticsId:"course.grades.submissions-deep-link"},r(a?"feedbackAuthoring.body.content.graderFeedback.anonymousRevieweesSubmission":"feedbackAuthoring.body.content.graderFeedback.revieweesSubmission",{reviewee:d})),p=l.useStyles();return i.createElement("span",{className:n.default(p.fromCurrentStudentName,"js-grader-title")},r("feedbackAuthoring.body.content.graderFeedback.reviewerReviewedRevieweeDeepLink",{reviewer:c,revieweesSubmission:b}))},t.SubmissionDeepLink=r.localizedComponentWrapper(t.BaseSubmissionDeepLink)},dXsz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("nmzr");t.useSubmissionDeepLinkHref=e=>{const[t,a]=n.useState("#");return n.useEffect(()=>{i.router.getPeekHref(i.viewSubmissionDeepLinkRequest(e)).then(e=>{a(e)})},[e]),t}},gI0g:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(()=>n.createStyles({editor:()=>({"& .bb-editor":{padding:0}}),actions:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingTop:"5px"},placeholder:{fontStyle:"italic"}})),t.default=t.useStyles},hC1i:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(e=>n.createStyles({feedbackBody:{paddingLeft:"16px",paddingRight:"16px",paddingBottom:"0 !important",paddingTop:0,[e.breakpoints.up("sm")]:{paddingLeft:0,paddingRight:0}},feedbackTabs:{margin:"0 -30px",display:"flex",backgroundColor:e.palette.background.b2,borderBottom:`1px solid ${e.palette.border.main}`,"& $tabButton":{flex:1,margin:0,padding:0,height:"45px",transition:"background-color 200ms ease-out","&:before":{borderBottom:"none"},"&:hover":{backgroundColor:e.palette.background.b3},'&[aria-selected="true"]':{backgroundColor:e.palette.background.default,"&:before":{left:0,right:0,borderBottom:`4px solid ${e.palette.brand.main}`}},"&:first-child":{borderRight:`1px solid ${e.palette.border.main}`},"&:only-child":{borderRight:"0"}}},tabButton:{}})),t.default=t.useStyles},iLxH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("O94r"),r=a("Zwiy"),o=a("8unJ"),l=a("Seus"),s=a("TsQp");t.BaseFeedbackHeader=e=>{const t=s.useStyles(e),{configProps:{onNavigateToNextFeedback:a,onNavigateToPreviousFeedback:o,showNavigator:d},localize:{translate:c},analyticsId:u,headerSubtitle:b,headerTitle:p}=e,m=`${u}.feedbackHeader`,y={title:p,smallHeaderTitle:b||c("feedbackAuthoring.header.smallTitle"),type:r.BbPanelType.full,analyticsId:m};return d&&(y.panelContentRight=n.createElement(l.FeedbackNavigator,{onNavigateToNextFeedback:a,onNavigateToPreviousFeedback:o,analyticsId:m})),n.createElement("header",{className:i.default("panel-header","simple-header",t.feedbackHeader,{[t.navigator]:d})},n.createElement(r.BbPanelHeader,Object.assign({},y)))},t.FeedbackHeader=o.localizedComponentWrapper(t.BaseFeedbackHeader)},kUjf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(e=>n.createStyles({graderDetails:{display:"flex",flexDirection:"row",marginBottom:"20px"},avatarWrapper:{marginRight:"10px"},nameAndDate:{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",overflow:"hidden"},graderAttrs:{display:"flex",flexDirection:"column"},personalizationAndDate:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between"},pronunciation:{display:"inline-flex",alignItems:"center",margin:"0 -5px","& > span":{padding:"0 5px",fontWeight:e.typography.fontWeightRegular},"& $pronunciationAudio":{"& > button":{minWidth:0,minHeight:0,padding:"2px 5px 0"}}},pronunciationAudio:{},name:{color:e.palette.text.primary,fontWeight:e.typography.fontWeightSemiBold},date:{color:e.palette.text.hint,"&$dateLate":{color:e.palette.error.main}},dateLate:{},dateWrapper:{display:"flex",justifyContent:"flex-end"},fromCurrentStudentNameAndDate:{[e.breakpoints.up("sm")]:{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},visibilityIcons:{height:"16px",width:"16px"}})),t.default=t.useStyles},kwLz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Geir");t.FeedbackPivotKey=n.FeedbackPivotKey;var i=a("Vl9h");t.FeedbackList=i.FeedbackList;var r=a("PFY9");t.FeedbackAuthoring=r.FeedbackAuthoring;var o=a("b60y");t.EditFeedbackIcon=o.EditFeedbackIcon},lCoF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("O94r"),r=a("SZa9"),o=a("tN4z");t.EditorAction=e=>{const t=r.default(),{primary:a,className:l,...s}=e;return a?n.createElement(o.AnalyticsPrimaryButton,Object.assign({className:i.default("primary-action-button",t.action,l)},s)):n.createElement(o.AnalyticsDefaultButton,Object.assign({className:i.default("default-action-button",t.action,l)},s))},t.EditorActionGroup=e=>{const t=r.default();return e.children?n.createElement("div",{className:i.default("feedback-editor-action-buttons",t.actions,e.className)},e.children):null}},rtY2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("ZO5O"),r=a("vfbr");t.FeedbackEditor=e=>{const{collapsible:t,...a}=e;return t?n.createElement(r.default,Object.assign({},a)):n.createElement(i.default,Object.assign({},a))},t.default=t.FeedbackEditor},tNaF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("Agfx");t.useStyles=n.makeStyles(e=>n.createStyles({editIcon:{color:e.palette.text.secondary,minHeight:"16px",minWidth:"16px","&:hover":{color:e.palette.text.primary}}})),t.default=t.useStyles},uGOY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("O94r"),r=a("iLxH"),o=a("Geir"),l=a("HNuY");t.FeedbackAuthoringPanel=e=>{const t=l.default(),{analyticsId:a,panelConfigProps:s,primaryGraderFeedback:d,secondaryGradersFeedback:c,panelSubtitle:u,panelTitle:b}=e,p={showNavigator:s.showNavigator,onNavigateToNextFeedback:s.onNavigateToNextFeedback,onNavigateToPreviousFeedback:s.onNavigateToPreviousFeedback},m={isOrganization:s.isOrganization,initialSelectedTabKey:s.initialSelectedTabKey,isFeedbackForGroupSubmission:s.isFeedbackForGroupSubmission,primaryFeedbackConfigProps:s.primaryFeedbackConfigProps,onGroupTabChange:s.onGroupTabChange,editorConfigProps:s.editorConfigProps},y=`${a}.feedbackAuthoring.components`;return n.createElement("div",{className:i.default("panel-wrap","course-color","js-feedback-panel-container",t.container,s.courseColorClass)},n.createElement(r.FeedbackHeader,{analyticsId:y,configProps:p,headerTitle:b,headerSubtitle:u}),n.createElement(o.FeedbackBody,{analyticsId:y,configProps:m,primaryGraderFeedback:d,secondaryGradersFeedback:c}))}},vfbr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("ERkP"),i=a("tN4z"),r=a("8unJ"),o=a("ZO5O"),l=a("Vu3+"),s=a("O94r");t.FeedbackEditorWithCollapsibleLinkComponent=e=>{const[t,a]=n.useState(!0),[r,d]=n.useState(!1),c=n.createRef(),u=e.isFeedbackEditable&&!e.isReadOnly,b=l.default();n.useEffect(()=>{var e;d(!u&&(null===(e=null==c?void 0:c.current)||void 0===e?void 0:e.clientHeight)>l.HEIGHT_THRESHOLD)},[e.isFeedbackEditable,e.isReadOnly]);const p={showLessContentText:e.localize.translate("feedbackAuthoring.body.content.graderFeedback.showLessContent"),showMoreContentText:e.localize.translate("feedbackAuthoring.body.content.graderFeedback.showMoreContent")},m=n.useCallback(()=>a(!t),[t]),y=t?`${e.analyticsId}.showMoreContent`:`${e.analyticsId}.showLessContent`;return n.createElement(n.Fragment,null,n.createElement(o.BaseFeedbackEditor,Object.assign({className:s.default({[b.collapsed]:r&&t},b.lineHeight),ref:c},e)),r&&n.createElement(i.AnalyticsLink,{className:b.link,onClick:m,analyticsId:y},t?p.showMoreContentText:p.showLessContentText))};const d=r.localizedComponentWrapper(t.FeedbackEditorWithCollapsibleLinkComponent);t.default=d}}]);