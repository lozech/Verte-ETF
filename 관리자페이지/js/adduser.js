document.addEventListener('click', async (e) => {

    if (e.target.classList.contains('s-btn')) {
        e.preventDefault();

        if (!confirm('저장하시겠습니까?')) return;

        const nickname = document.querySelector('.nickname1-bg input').value;
        const email = document.querySelector('.mailinfo input').value;
        const userType = document.querySelector('select[name="user"]').value;
        const riskType = document.querySelector('.dangertype input').value;
        const link = document.querySelector('.addlink input').value;

        const userData = {
            nickname,
            email,
            userType,
            riskType,
            link
        };

        // try {
        //     const res = await fetch('/api/users', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(userData)
        //     });

        //     if (!res.ok) throw new Error();

        //     alert('저장 완료');
        //     location.href = 'adminuser.html';

        // } catch (err) {
        //     console.error(err);
        //     alert('저장 실패');
        // }
    }

    if (e.target.classList.contains('c-btn')) {
        e.preventDefault();

        if (confirm('취소하시겠습니까?')) {
            location.href = 'adminuser.html';
        }
    }
});