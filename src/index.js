import { setClasses, insertBemJson } from './js/funcs.js'
// import articles from './bemjson/articles.js';
// import collect from './bemjson/collect.js';
// import cover from './bemjson/cover.js';
// import event from './bemjson/event.js';
// import offer from './bemjson/offer.js';
// import productBlock from './bemjson/productBlock.js';
// import productInverse from './bemjson/product-inverse.js';
// import subscription from './bemjson/subscription.js';
// import contentOneSection from './bemjson/contentOneSection.js';
// import contentTwoSection from './bemjson/contentTwoSection.js';
// import contentThreeSection from './bemjson/contentThreeSection.js';
// import productOneSection from './bemjson/productOneSection.js';
// import collectBlock from './bemjson/collectBlock.js';
// import eventBlock from './bemjson/eventBlock.js';
import header from './bemjson/header.js';
import payment from './bemjson/payment.js';
import warning from './bemjson/warning.js';
import product from './bemjson/product.js';
import history from './bemjson/history.js';
import commercial from './bemjson/commercial.js';
import footer from './bemjson/footer.js';

function main() {
    const root = document.getElementById('root');
    const allTree = [
        header,
        payment,
        warning,
        product,
        product,
        product,
        product,
        product,
        history,
        commercial,
        footer
    ];

    setClasses(root, "theme_breakpoint grid_m-columns_10 grid_col-gap_full");
    insertBemJson(allTree, root);
}

main();
