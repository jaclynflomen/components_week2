(() => {
//components will go here
const liveuser = {
    props: ['first_name', 'last_name', 'role'], //defining template here
    template: "#activeuser",

    methods: {
        logChildMsg() {
            console.log("Hello from the child component");
        },

        runParentFunc() {
            this.$emit('passfunccallup', 'hello from child again');
        }

    }, 

    created: function() {
        console.log('child component is live');
    }
};

const vm = new Vue ({
    el: '#app',

    data: {
        message: "Sup from vue!"   
    },

    created: function(){
        console.log('parent is live');
    },

    methods: {
        logParent(message) {
            console.log("from the parent", message);
        },

        logMainMsg(message){
            console.log('called from inside a child, lives in the parent', message);
        }
    },

    components: { //register components here
        user: liveuser
    }
})

})();