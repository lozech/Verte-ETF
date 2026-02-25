document.addEventListener('DOMContentLoaded', () => {
    const data = sessionStorage.getItem('modifyPriceData');
    if (!data) return;

    const priceData = JSON.parse(data);

    const dateInput = document.querySelector('.stand-date input');
    const codeInput = document.querySelector('.pro-code input');
    const priceInput = document.querySelector('.proTit input');
    const rateInput = document.querySelector('.fluctuation-rate input');

    if (dateInput) dateInput.value = priceData.date || '';
    if (codeInput) codeInput.value = priceData.code || '';
    if (priceInput) priceInput.value = priceData.title || '';
    if (rateInput) rateInput.value = priceData.rate || '';

    const saveBtn = document.querySelector('.s-btn');
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('저장하시겠습니까?')) return;

        const updatedData = {
            userid: priceData.userid,
            date: dateInput.value,
            code: codeInput.value,
            price: priceInput.value,
            rate: rateInput.value
        };

        /*
        fetch(`/api/price/${updatedData.userid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                sessionStorage.removeItem('modifyPriceData');
                window.location.href = 'adminPrice.html';
            }
        });
        */

        //임시저장
        // sessionStorage.removeItem('modifyPriceData');
        // alert('저장되었습니다.');
        // window.location.href = 'adminPrice.html';
    });

    const cancelBtn = document.querySelector('.c-btn');
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('수정을 취소하시겠습니까?')) return;

        sessionStorage.removeItem('modifyPriceData');
        window.location.href = 'adminPrice.html';
    });
});