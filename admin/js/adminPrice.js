document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('priceTbody');
    if (!tbody) return;

    tbody.addEventListener('click', (e) => {
        const modiBtn = e.target.closest('.modibtn');
        const deleBtn = e.target.closest('.delebtn');
        const tr = e.target.closest('tr');

        if (!tr) return;

        if (modiBtn) {
            if (!confirm('수정하시겠습니까?')) return;

            const priceData = {
                userid: tr.dataset.userid,
                date: tr.querySelector('.stand-date input')?.value || '',
                code: tr.querySelector('.pro-code')?.innerText.trim() || '',
                price: tr.querySelector('.pro-price')?.innerText.trim() || '',
                rate: tr.querySelector('.fluctuation-rate')?.innerText.trim() || ''
            };

            sessionStorage.setItem(
                'modifyPriceData',
                JSON.stringify(priceData)
            );

            window.location.href = 'modifyprice.html';
        }

        if (deleBtn) {
            if (!confirm('삭제하시겠습니까?')) return;

            const userid = tr.dataset.userid;

            /*
            fetch(`/api/price/${userid}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) tr.remove();
            });
            */

            //임시 삭제
            tr.remove();
            alert('삭제되었습니다.');
        }
    });
});