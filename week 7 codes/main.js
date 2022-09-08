
var component1 = {
    template: '<div> <global></global>This is componet 1 </div>'

}

var component2 = {
    template: '<div> Hello i am kanye west the best musican</div>'

}

var australia = {
    template: '<div> I am global</div>'
}


Vue.createApp({
    data() {
        return {
            text: 'Hello world',
        }
    },
    components: {
        component1,
        component2,

    }
}).component("my-component", australia).mount("#app");








