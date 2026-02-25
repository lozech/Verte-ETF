document.addEventListener('DOMContentLoaded', () => {

    const data = localStorage.getItem('modifyProduct');
    if (data) {
        const product = JSON.parse(data);

        document.querySelector('.proID input').value = product.etfId || '';
        document.querySelector('.proName input').value = product.name || '';
        document.querySelector('.proTheme select').value = product.theme || '';
        document.querySelector('.proDanger select').value = product.dangerLevel || '';
        document.querySelector('.proExp select').value = product.expenseLevel || '';
        document.querySelector('.proIsin input').value = product.isin || '';
    }

    document.querySelector('.s-btn').addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('저장하시겠습니까?')) return; 

        const saveData = {
            etfId: document.querySelector('.proID input').value,
            name: document.querySelector('.proName input').value,
            theme: document.querySelector('.proTheme select').value,
            dangerLevel: document.querySelector('.proDanger select').value,
            expenseLevel: document.querySelector('.proExp select').value,
            isin: document.querySelector('.proIsin input').value
        };

        /*
        fetch('/api/product/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(saveData)
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                alert('저장되었습니다.');
                localStorage.removeItem('modifyProduct');
                window.location.href = 'adminProduct.html';
            } else {
                alert('저장에 실패했습니다.');
            }
        })
        .catch(() => alert('서버 오류가 발생했습니다.'));
        */

        // 임시 저장
        // alert('저장되었습니다.');
        // localStorage.removeItem('modifyProduct');
        // window.location.href = 'adminProduct.html';
    });

    document.querySelector('.c-btn').addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('취소하시겠습니까?')) return;

        window.location.href = 'adminProduct.html';
    });
});