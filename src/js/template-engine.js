/**
 * Visualization function
 * @param {HTMLElement} node. Html element
 * @param {Object} obj. Bemjson object
 */

function render(node, obj) {
    if (!obj) return;
    const { block, elem, mods, mix, content } = obj;

    const domElement = document.createElement('div');

    if (elem) {
        domElement.classList.add(`${block}__${elem}`)
    } else {
        domElement.classList.add(block);
    }

    if (mods) {
        Object.keys(mods).forEach(mod => {
            domElement.classList.add(`${block}_${mod}_${mods[mod]}`);
        })
    }

    if (elem && mods) {
        Object.keys(mods).forEach(mod => {
            domElement.classList.add(`${block}__${elem}_${mod}_${mods[mod]}`);
        })
    }

    if (mix) {
        mix.forEach((current) => {
            if (current.mods) {
                Object.keys(current.mods).forEach(mod => {
                    if (current.elem) {
                        domElement.classList.add(`${current.block}__${current.elem}`);
                        domElement.classList.add(`${current.block}__${current.elem}_${mod}_${current.mods[mod]}`);
                    } else {
                        domElement.classList.add(`${current.block}_${mod}_${current.mods[mod]}`);
                    }
                })
            }
        });
    }

    if (content) {
        content.forEach(child => render(domElement, child));
    }

    node.appendChild(domElement);
}

/**
 * Template engine function. Returns innerHTML of the node
 * @param {Object} obj. Bemjson object 
 * @returns {string} DOMString
 */

export default function templateEngine(obj) {
    const domElement = document.createElement('div');
    render(domElement, obj);
    return domElement.innerHTML;
};
