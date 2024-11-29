function buildPage(dataObject){
    //define variable to be used later to hold html to be used
    let html = `<div class="line-wrapper"><div class="line-title">Presiding</div><div class="line-separator"></div><div class="line-input">{{dataObject.presiding}}</div></div>
    <div class="line-wrapper"><div class="line-title">Conducting</div><div class="line-separator"></div><div class="line-input">{{dataObject.conducting}}</div></div>
    <div class="line-wrapper"><div class="line-title">Pianist</div><div class="line-separator"></div><div class="line-input">{{dataObject.pianist}}</div></div>
    <div class="line-wrapper"><div class="line-title">Chorister</div><div class="line-separator"></div><div class="line-input">{{dataObject.chorister}}</div></div>
    <div class="line-wrapper"><div class="line-title">Opening Hymn</div><div class="line-separator"></div><div class="line-input">{{dataObject.openhymn}}</div></div>
    <div class="line-wrapper"><div class="line-title">Invocation</div><div class="line-separator"></div><div class="line-input">{{dataObject.invocation}}</div></div>
      <div class="announcments">
        <div class="line-wrapper" v-for="listItem in dataObject.announcments"><div class="line-title">{{listItem.title}}</div><div class="line-separator"></div><div class="line-input">{{listItem.content}}</div></div>
      </div>
    <div class="line-wrapper"><div class="line-title">New Members</div><div class="line-separator"></div><div class="line-input">{{dataObject.newmembers}}</div></div>
      <div class="wardbuisness" v-if="dataObject.wardbuisness">
        <div class="line-wrapper" v-for="listItem in dataObject.wardbuisness"><div class="line-title">{{listItem.title}}</div><div class="line-separator"></div><div class="line-input">{{listItem.content}}</div></div>
      </div>
    <div class="line-wrapper"><div class="line-title">Stake Business</div><div class="line-separator"></div><div class="line-input">{{dataObject.stakebuisness}}</div></div>
    <div class="line-wrapper"><div class="line-title">Sacrament Hymn</div><div class="line-separator"></div><div class="line-input">{{dataObject.sacramenthymn}}</div></div>
    <div class="line-wrapper"><div class="line-title">Theme</div><div class="line-separator"></div><div class="line-input">{{dataObject.theme}}</div></div>
    <div class="line-wrapper"><div class="line-title">First Speaker</div><div class="line-separator"></div><div class="line-input">{{dataObject.speaker1}}</div></div>
    <div class="line-wrapper"><div class="line-title">Second Speaker</div><div class="line-separator"></div><div class="line-input">{{dataObject.speaker2}}</div></div>
    <div class="line-wrapper"><div class="line-title">Intermediate Hymn</div><div class="line-separator"></div><div class="line-input">{{dataObject.intermediatehymn}}</div></div>
    <div class="line-wrapper"><div class="line-title">Third Speaker</div><div class="line-separator"></div><div class="line-input">{{dataObject.speaker3}}</div></div>
    <div class="line-wrapper"><div class="line-title">Closing Hymn</div><div class="line-separator"></div><div class="line-input">{{dataObject.closinghymn}}</div></div>
    <div class="line-wrapper"><div class="line-title">Benediction</div><div class="line-separator"></div><div class="line-input">{{dataObject.benediction}}</div></div>
    <div class="line-wrapper"><div class="line-title">{{dataObject.week1.date}}</div><div class="line-separator"></div><div class="line-input">{{dataObject.week1.content}}</div></div>
    <div class="line-wrapper"><div class="line-title">{{dataObject.week2.date}}</div><div class="line-separator"></div><div class="line-input">{{dataObject.week2.content}}</div></div>
    <div class="line-wrapper"><div class="line-title">{{dataObject.week3.date}}</div><div class="line-separator"></div><div class="line-input">{{dataObject.week3.content}}</div></div>`;
  
      const app = Vue.createApp({
          template: html,
          data() {
              return {dataObject};
          }
      });
      //now that app is built, accessing it and apply it to the html element on the page <nav-menu></nav-menu>
      app.mount('pagebuild');  
  }
  
  