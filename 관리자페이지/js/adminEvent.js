document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modibtn')) {
        e.preventDefault();

        if (!confirm('수정하시겠습니까?')) return;

        const tr = e.target.closest('tr');

        const data = {
            id: tr.dataset.userid,
            title: tr.querySelector('.eventTit')?.innerText.trim(),
            period: tr.children[3]?.innerText.trim()
        };

        localStorage.setItem('modifyevent', JSON.stringify(data));
        window.location.href = 'modifyevent.html';
    }

    if (e.target.classList.contains('delebtn')) {
        e.preventDefault();

        if (!confirm('삭제하시겠습니까?')) return;

        const tr = e.target.closest('tr');

        /*
        fetch(`/api/events/${tr.dataset.userid}`, {
            method: 'DELETE'
        }).then(() => {
            tr.remove();
        });
        */

        //임시
        // tr.remove();
        // alert('삭제되었습니다.');
    }
});