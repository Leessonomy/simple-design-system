/* импортировать интересующие блоки из папки bemjson */

/*---------------------------------------------------------------- все блоки ----------------------------------------------------------------*/

/*import articles from '../bemjson/articles.js';
import collect from '../bemjson/collect.js';
import cover from '../bemjson/cover.js';
import event from '../bemjson/event.js';
import offer from '../bemjson/offer.js';
import productBlock from '../bemjson/productBlock.js';
import productInverse from '../bemjson/product-inverse.js';
import subscription from '../bemjson/subscription.js';
import contentOneSection from '../bemjson/contentOneSection.js';
import contentTwoSection from '../bemjson/contentTwoSection.js';
import contentThreeSection from '../bemjson/contentThreeSection.js';
import productOneSection from '../bemjson/productOneSection.js';
import collectBlock from '../bemjson/collectBlock.js';
import eventBlock from '../bemjson/eventBlock.js';*/

import header from '../bemjson/header.js';
import payment from '../bemjson/payment.js';
import warning from '../bemjson/warning.js';
import product from '../bemjson/product.js';
import history from '../bemjson/history.js';
import commercial from '../bemjson/commercial.js';
import footer from '../bemjson/footer.js';

const node = document.createElement('div');
const rootTree = document.getElementById('root');

/* Стили для родительского блока */
rootTree.className = "theme_breakpoint grid_m-columns_10 grid_col-gap_full";


/* Массив, в котором хранятся инициализируемые бемжсоны. */
let allTree = [ 
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

/* Функция визуализации */

function render(node, obj) {
    if (!obj) return;
    const element = document.createElement('div');
    if (obj.elem) {
        element.classList.add(`${obj.block}__${obj.elem}`)
    } else {
        element.classList.add(obj.block);
    }

    if (obj.elem) {
        for (const mod in obj.mods) {
          element.classList.add(`${obj.block}__${obj.elem}_${mod}_${obj.mods[mod]}`);
        }
    }

    if (obj.mods) {
        const block = obj.block;
        for (const mod in obj.mods) {
          element.classList.add(`${block}_${mod}_${obj.mods[mod]}`);
        }
    }

    if (obj.mix) {
        obj.mix.reduce((mix, obj) => {
            if (obj.elem) {
                for (const mod in obj.mods) {
                  element.classList.add(`${obj.block}__${obj.elem}`);
                  element.classList.add(`${obj.block}__${obj.elem}_${mod}_${obj.mods[mod]}`);
                }
            } else {
                for (const mod in obj.mods) {
                  element.classList.add(`${obj.block}_${mod}_${obj.mods[mod]}`);
                }
            }
        }, '');
    }

    if (obj.content) {
        for (let i = 0; i < obj.content.length; i++) {
          const child = obj.content[i];
          render(element, child)
        }
    }
    node.appendChild(element);
}

/* Функция шаблонизатор */

function templateEngine(obj) {
	const node = document.createElement('div');
    render(node, obj);
    return node.innerHTML;
};

/* Точка входа */

Object.keys(allTree).forEach(key => {
    rootTree.insertAdjacentHTML('beforeend', templateEngine(allTree[key]));
});