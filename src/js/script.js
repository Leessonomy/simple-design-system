/** Accordion
 */

document.querySelectorAll('.history__details').forEach(function (parent) {
    parent.querySelectorAll('.history__show').forEach(function (el) {
        el.addEventListener('click', function () {
            const hideBlock = parent.querySelector('.history__hide');
            hideBlock.classList.toggle("e-accordion__more");
        });
    });
});
