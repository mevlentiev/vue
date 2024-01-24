export default {
    name: 'Intersection',

    mounted (element, binding) {
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        },
        observer;
        let callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                binding.value();
            }
        };
        observer = new IntersectionObserver(callback, options);

        observer.observe(element)
    }
}