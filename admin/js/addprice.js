document.addEventListener('click', async (e) => {

    if (e.target.classList.contains('s-btn')) {
        e.preventDefault();

        if (!confirm('저장하시겠습니까?')) return;

        const etfId = document.querySelector('.proID input').value;
        const etfName = document.querySelector('.proName input').value;
        const theme = document.querySelector('.proTheme input').value;
        const riskGrade = document.querySelector('.proDanger input').value;
        const feeGrade = document.querySelector('.proExp input').value;
        const isinCode = document.querySelector('.proIsin input').value;

        const productData = {
            etfId,
            etfName,
            theme,
            riskGrade,
            feeGrade,
            isinCode
        };

        // console.log('전송 데이터:', priceData);

        // 실제 서버 연동 시
        /*
        try {
            const res = await fetch('/api/price', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(priceData)
            });

            if (!res.ok) throw new Error();

            alert('저장 완료');
            location.href = 'adminPrice.html';

        } catch (err) {
            console.error(err);
            alert('저장 실패');
        }
        */

        //임시저장
        // alert('저장 완료');
        // location.href = 'adminPrice.html';
    }

    if (e.target.classList.contains('c-btn')) {
        e.preventDefault();

        if (confirm('취소하시겠습니까?')) {
            location.href = 'adminPrice.html';
        }
    }
});