export default {
    props: {
        IsShown: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        }
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }
}