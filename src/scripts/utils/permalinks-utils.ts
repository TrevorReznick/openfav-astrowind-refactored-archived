import { SITE } from 'openfav:config' // Importa le configurazioni per il sito e il blog
import { trim } from '~/scripts/utils/utils'
import slugify from 'limax' // Importa la libreria 'slugify' per trasformare stringhe in slug leggibili

/**
 * Rimuove eventuali barre '/' all'inizio e alla fine di una stringa.
 * @param {string} s - La stringa da elaborare.
 * @returns {string} - La stringa senza barre iniziali e finali.
 */
export const trimSlash = (s: string) => trim(trim(s, '/'));

/**
 * Combina i segmenti di percorso in una singola stringa di percorso.
 * Rimuove barre iniziali e finali extra e aggiunge una barra finale se necessario.
 * @param {...string} params - Segmenti di percorso da combinare.
 * @returns {string} - Il percorso combinato.
 */
export const createPath = (...params: string[]) => {
  //console.log('create path');
  //console.log('params', params);

  // Pulisce e combina i segmenti di percorso
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

  // Restituisce il percorso combinato con una barra finale se necessario
  //console.log('/' + paths + (SITE.trailingSlash && paths ? '/' : ''));
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

/**
 * Pulisce e trasforma una stringa in uno slug valido.
 * Rimuove spazi e caratteri speciali, e separa i segmenti con '/'.
 * @param {string} text - La stringa da trasformare in slug.
 * @returns {string} - La stringa trasformata in uno slug.
 */
export const cleanSlug = (text = '') =>
    trimSlash(text)
      .split('/')
      .map((slug) => slugify(slug))
      .join('/');
  
  // Crea gli slug base per blog, categorie e tag

/**
 * Crea un URL canonico basato sul percorso fornito.
 * Aggiunge o rimuove una barra finale a seconda della configurazione del sito.
 * @param {string} [path=''] - Il percorso da convertire in URL canonico.
 * @returns {string | URL} - L'URL canonico.
 */
export const getCanonical = (path = ''): string | URL => {
    //console.log('get canonical');
    const url = String(new URL(path, SITE.site));
  
    // Aggiusta la barra finale dell'URL in base alla configurazione del sito
    if (SITE.trailingSlash == false && path && url.endsWith('/')) {
      return url.slice(0, -1);
    } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
      return url + '/';
    }
    return url
}