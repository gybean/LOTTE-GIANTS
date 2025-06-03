$(function () {
    const textElements = gsap.utils.toArray('.section-02 .b_txt');
    textElements.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center 90%',
                end: 'center 30%',
                scrub: true,
            },
        });
    });
});