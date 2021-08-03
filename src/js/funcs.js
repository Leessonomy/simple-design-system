
import templateEngine from './template-engine.js'

/**
 * Sets class for the DOM element
 * @param {HTMLElement} node
 * @param {string} cName
 */

export function setClasses(node, cName) {
    node.className = cName;
}

/**
 * Inserts innerHTML into Dom Tree
 * @param {Array} tree. Storing bemjson
 * @param {HTMLElement} root. Root element
 */

export function insertBemJson(tree, root) {
    tree.forEach(bemJson => root.insertAdjacentHTML('beforeend', templateEngine(bemJson)));
}
