document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('userTbody');
    if (!tbody) return;

    tbody.addEventListener('click', (e) => {
        e.preventDefault();

        const modiBtn = e.target.closest('.modibtn');
        const deleBtn = e.target.closest('.delebtn');
        const tr = e.target.closest('tr');
        if (!tr) return;

        const userid = tr.dataset.userid;

        const userTypeSelect = tr.querySelector('select[name="user"]');
        const userType = userTypeSelect?.value;

        if (modiBtn) {
            if (!confirm('수정하시겠습니까?')) return;

            const userData = {
                userid,
                number: tr.querySelector('.numbering1')?.innerText.trim(),
                nickname: tr.querySelector('.nickname1')?.innerText.trim(),
                email: tr.querySelector('.mailinfo1')?.innerText.trim(),
                userType,
                favorite: tr.querySelector('select[name="favorite"]')?.value,
                joinDate: tr.querySelector('.joindate')?.innerText.trim()
            };

            sessionStorage.setItem(
                'modifyUserData',
                JSON.stringify(userData)
            );

            window.location.href = 'modifyuser.html';
        }

        if (deleBtn) {
            if (userType === 'admin') {
                alert('관리자 계정은 삭제 불가합니다.');
                return;
            }

            if (!confirm('탈퇴하시겠습니까?')) return;

            /*
            fetch(`/api/users/${userid}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) tr.remove();
            });
            */

            //임시 삭제
            tr.remove();
            alert('탈퇴 처리되었습니다.');
        }
    });
});