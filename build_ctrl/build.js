function buildPage(dataObject){
  //define variable to be used later to hold html to be used
    let html = `<div>Presiding: {{dataObject.presiding}}</div>
    <div>Conducting: {{dataObject.conducting}}</div>
    <div>Pianist: {{dataObject.pianist}}</div>
    <div>Chorister: {{dataObject.chorister}}</div>
    <div>Opening Hymn: {{dataObject.openhymn}}</div>
    <div>Invocation: {{dataObject.invocation}}</div>
    <div class="announcments">
        <div v-for="listItem in dataObject.announcments">{{listItem.title}}: {{listItem.content}}</div>
    </div>
    <div>New Members: {{dataObject.newmembers}}</div>
    <div class="wardbuisness" v-if="dataObject.wardbuisness">
        <div v-for="listItem in dataObject.wardbuisness">{{listItem.title}}: {{listItem.content}}</div>
    </div>
    <div>Stake Business: {{dataObject.stakebuisness}}</div>
    <div>Sacrament Hymn: {{dataObject.sacramenthymn}}</div>
    <div>Theme: {{dataObject.theme}}</div>
    <div>First Speaker: {{dataObject.speaker1}}</div>
    <div>Second Speaker: {{dataObject.speaker2}}</div>
    <div>Intermediate Hymn: {{dataObject.intermediatehymn}}</div>
    <div>Third Speaker: {{dataObject.speaker3}}</div>
    <div>Closing Hymn: {{dataObject.closinghymn}}</div>
    <div>Benediction: {{dataObject.benediction}}</div>
    <div>{{dataObject.week1.date}}: {{dataObject.week1.content}}</div>
    <div>{{dataObject.week2.date}}: {{dataObject.week2.content}}</div>
    <div>{{dataObject.week3.date}}: {{dataObject.week3.content}}</div>`;

    const app = Vue.createApp({
        template: html,
        data() {
            return {dataObject};
        }
    });
    //now that app is built, accessing it and apply it to the html element on the page <nav-menu></nav-menu>
    app.mount('pagebuild');  
}

