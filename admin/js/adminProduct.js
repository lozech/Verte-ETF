document.addEventListener('click', (e) => {

    if (e.target.classList.contains('modibtn')) {
        e.preventDefault();

        if (!confirm('수정하시겠습니까?')) return;

        const tr = e.target.closest('tr');

        const data = {
            etfId: tr.children[0].innerText.trim(),
            name: tr.querySelector('.proTit')?.innerText.trim(),
            theme: tr.querySelector('select[name="thema"]').value,
            dangerLevel: tr.querySelector('select[name="dangerlevel"]').value,
            expenseLevel: tr.querySelector('select[name="conlevel"]').value,
            isin: tr.querySelector('.isincode')?.innerText.trim()
        };

        localStorage.setItem('modifyProduct', JSON.stringify(data));
        window.location.href = 'modifyproduct.html';
    }

    if (e.target.classList.contains('delebtn')) {
        e.preventDefault();

        if (!confirm('삭제하시겠습니까?')) return;

        const tr = e.target.closest('tr');

        tr.remove();

        alert('삭제되었습니다.');

        /*
        fetch('/api/product/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ etfId: tr.children[0].innerText.trim() })
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                tr.remove();
                alert('삭제되었습니다.');
            }
        });
        */
    }
});