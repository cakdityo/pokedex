var { getPokemons } = require('./actions');

// ============ Performing infinite scroll ================
// Add event listener for scrolling page
// App will fetch another 20 pokemons imediately when user scroll the bottom of the page

$(document).ready(() => {
    $(window).scroll(() => {
        // It only happens when touch the bottom of the page
        if($(window).scrollTop() + $(window).height() === $(document).height()) {
            window.store.dispatch(getPokemons());
        }
    });
});