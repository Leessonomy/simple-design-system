import articles from '../bemjson/articles.js';
import collect from '../bemjson/collect.js';
import commercial from '../bemjson/commercial.js';
import cover from '../bemjson/cover.js';
import event from '../bemjson/event.js';
import footer from '../bemjson/footer.js';
import header from '../bemjson/header.js';
import history from '../bemjson/history.js';
import offer from '../bemjson/offer.js';
import payment from '../bemjson/payment.js';
import product from '../bemjson/product.js';
import subscription from '../bemjson/subscription.js';
import warning from '../bemjson/warning.js';

let allTree = [
    header, 
    collect, 
    collect, 
    collect, 
    collect, 
    articles, 
    offer, 
    subscription, 
    footer 
];

const node = document.createElement('div');

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



function templateEngine(obj) {
	const node = document.createElement('div');
    render(node, obj);
    return node.innerHTML;
};


const rootTree = document.getElementById('root');

Object.keys(allTree).forEach(key => {
    rootTree.insertAdjacentHTML('beforeend', templateEngine(allTree[key]));
});