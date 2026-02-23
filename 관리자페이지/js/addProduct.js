document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.querySelector('.s-btn');
    const cancelBtn = document.querySelector('.c-btn');

    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('저장하시겠습니까?')) return;

        const data = {
            etfId: document.querySelector('.proID input').value,
            name: document.querySelector('.proName input').value,
            theme: document.querySelector('.proTheme select').value,
            dangerLevel: document.querySelector('.proDanger select').value,
            expenseLevel: document.querySelector('.proExp select').value,
            isin: document.querySelector('.proIsin input')?.value
        };

        // fetch('/api/products', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(res => {
        //     if (!res.ok) throw new Error('저장 실패');
        //     return res.json();
        // })
        // .then(() => {
        //     alert('저장되었습니다.');
        //     window.location.href = 'adminProduct.html';
        // })
        // .catch(() => {
        //     alert('저장 중 오류가 발생했습니다.');
        // });
    });

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('취소하시겠습니까?')) return;

        window.location.href = 'adminProduct.html';
    });
});