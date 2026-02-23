document.addEventListener('DOMContentLoaded', () => {
    const USE_API = false; // 연동 전 테스트

    const form = document.querySelector('.newsList');
    const input = document.querySelector('.searchbg .search');
    const tbody = document.getElementById('news-tbody');
    const emptyRow = document.getElementById('empty-row');
    const pager = document.getElementById('pagination');

    if (form) form.addEventListener('submit', e => e.preventDefault());
    if (!input || !tbody || !emptyRow || !pager) return;

    const SLOT_SIZE = 10;

    const slotRows = Array.from(tbody.querySelectorAll('tr'))
        .filter(tr => tr.id !== 'empty-row')
        .slice(0, SLOT_SIZE);

    const extractRowData = (tr) => {
        const no = tr.querySelector('.realno')?.textContent?.trim() || '';
        const titleHTML = tr.querySelector('.realtit')?.innerHTML || '';
        const date = tr.querySelector('.realdate')?.textContent?.trim() || '';
        const titleText = titleHTML.replace(/<[^>]*>/g, '').trim();
        return (no || titleText || date) ? { no, titleHTML, date } : null;
    };

    const domData = slotRows.map(extractRowData).filter(Boolean);

    const getPageSize = () => {
        return input.value.trim().length > 0 ? 5 : 10;
    };

    const updateEmptyState = (count) => {
    const isSearching = input.value.trim().length > 0;
    const showEmpty = isSearching && count === 0;

    emptyRow.style.display = showEmpty ? 'table-row' : 'none';

    slotRows.forEach(tr => {
        tr.style.display = showEmpty ? 'none' : '';
    });

    return showEmpty;
};

    const renderRows = (items) => {
        const showEmpty = updateEmptyState(items.length);
        if (showEmpty) return;

        slotRows.forEach(tr => {
        tr.style.display = '';
        tr.querySelector('.realno').textContent = '';
        tr.querySelector('.realtit').innerHTML = '';
        tr.querySelector('.realdate').textContent = '';
        });

        items.forEach((item, idx) => {
        if (!slotRows[idx]) return;
        slotRows[idx].querySelector('.realno').textContent = item.no ?? '';
        slotRows[idx].querySelector('.realtit').innerHTML =
            item.titleHTML ??
            (item.url
            ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title ?? ''}</a>`
            : (item.title ?? ''));
        slotRows[idx].querySelector('.realdate').textContent = item.date ?? '';
        });
    };

    const getNumBtns = () => Array.from(pager.querySelectorAll('.page-num'));

    const getActivePage = () => {
        const active = getNumBtns().find(a => a.getAttribute('aria-current') === 'page');
        return active ? Number(active.dataset.page) : 1;
    };

    const setActive = (page) => {
        getNumBtns().forEach(a => {
        const p = Number(a.dataset.page);
        if (p === page) {
            a.setAttribute('aria-current', 'page');
            a.classList.add('bg-[#055C4D]', 'text-white');
            a.classList.remove('text-[#055C4D]');
        } else {
            a.removeAttribute('aria-current');
            a.classList.remove('bg-[#055C4D]', 'text-white');
            a.classList.add('text-[#055C4D]');
        }
        });
    };

    const fetchNews = async (page, size) => {
        const keyword = input.value.trim();
        const params = new URLSearchParams({ page, size, keyword });
        const res = await fetch(`/api/news?${params}`);
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        return Array.isArray(data) ? data : (data.items || []);
    };

    const filterDomData = (page, size) => {
        const q = input.value.trim().toLowerCase();
        const filtered = domData.filter(item =>
        item.titleHTML.replace(/<[^>]*>/g, '').toLowerCase().includes(q)
        );
        const start = (page - 1) * size;
        return filtered.slice(start, start + size);
    };

    const onPageChange = async (page) => {
        setActive(page);
        const size = getPageSize();

        if (!USE_API) {
        const items = filterDomData(page, size);
        renderRows(items);
        return;
        }

        try {
        const items = await fetchNews(page, size);
        renderRows(items);
        } catch (e) {
        console.error(e);
        renderRows([]);
        }
    };

    onPageChange(getActivePage());

    input.addEventListener('input', () => onPageChange(1));

    pager.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (!a) return;
        e.preventDefault();

        const current = getActivePage();

        if (a.classList.contains('page-num')) {
        onPageChange(Number(a.dataset.page));
        } else if (a.classList.contains('page-prev')) {
        onPageChange(Math.max(1, current - 1));
        } else if (a.classList.contains('page-next')) {
        const last = Math.max(...getNumBtns().map(b => Number(b.dataset.page)));
        onPageChange(Math.min(last, current + 1));
        }
    });
});