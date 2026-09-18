// Pagina, no navegador, qualquer grade de itens marcada com data-paginate="N".
// Não remove nada do HTML: todos os links continuam presentes no DOM (bons
// para SEO/crawlers), apenas ficam ocultos (hidden) fora da página atual.
// Não depende de jQuery, funciona com Bootstrap só pelo CSS (.pagination).
(function () {
    function paginate(container, pageSize) {
        var items = Array.prototype.slice.call(container.children);
        var totalPages = Math.ceil(items.length / pageSize);
        if (totalPages <= 1) {
            return;
        }

        var nav = document.createElement('nav');
        nav.className = 'pagination-nav my-4';
        nav.setAttribute('aria-label', 'Navegação de páginas');

        var ul = document.createElement('ul');
        ul.className = 'pagination justify-content-center flex-wrap';
        nav.appendChild(ul);
        container.insertAdjacentElement('afterend', nav);

        var currentPage = 1;

        function showItems(page) {
            items.forEach(function (item, index) {
                item.hidden = Math.floor(index / pageSize) + 1 !== page;
            });
        }

        function pageItem(label, targetPage, opts) {
            opts = opts || {};
            var li = document.createElement('li');
            li.className = 'page-item' + (opts.active ? ' active' : '') + (opts.disabled ? ' disabled' : '');

            var a = document.createElement('a');
            a.className = 'page-link';
            a.href = '#';
            a.textContent = label;

            if (opts.disabled) {
                a.setAttribute('tabindex', '-1');
                a.setAttribute('aria-disabled', 'true');
            }
            if (opts.active) {
                a.setAttribute('aria-current', 'page');
            }

            a.addEventListener('click', function (event) {
                event.preventDefault();
                if (!opts.disabled && !opts.active) {
                    goTo(targetPage);
                }
            });

            li.appendChild(a);
            return li;
        }

        function renderControls() {
            ul.innerHTML = '';
            ul.appendChild(pageItem('«', currentPage - 1, { disabled: currentPage === 1 }));
            for (var p = 1; p <= totalPages; p++) {
                ul.appendChild(pageItem(String(p), p, { active: p === currentPage }));
            }
            ul.appendChild(pageItem('»', currentPage + 1, { disabled: currentPage === totalPages }));
        }

        function goTo(page) {
            if (page < 1 || page > totalPages) {
                return;
            }
            currentPage = page;
            showItems(currentPage);
            renderControls();
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        goTo(1);
    }

    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('[data-paginate]'), function (container) {
            var pageSize = parseInt(container.getAttribute('data-paginate'), 10) || 50;
            paginate(container, pageSize);
        });
    });
})();
