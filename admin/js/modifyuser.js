document.addEventListener('DOMContentLoaded', () => {
    const data = sessionStorage.getItem('modifyUserData');
    if (!data) return;

    const userData = JSON.parse(data);

    const nicknameInput = document.querySelector('.nickname1-bg input');
    const emailInput = document.querySelector('.mailinfo input');
    const userTypeSelect = document.querySelector('.usertype select[name="user"]');
    const joinDateInput = document.querySelector('.joindate input[type="date"]');

    if (nicknameInput) nicknameInput.value = userData.nickname || '';
    if (emailInput) emailInput.value = userData.email || '';
    if (joinDateInput) joinDateInput.value = userData.joinDate || '';

    if (userTypeSelect) {
        [...userTypeSelect.options].forEach(option => {
            option.selected = option.value === userData.userType;
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {

document.querySelector('.s-btn').addEventListener('click', () => {
    if (!confirm('저장하시겠습니까?')) return;

    const data = {
        nickname: document.querySelector('[name="nickname"]').value,
        email: document.querySelector('[name="email"]').value,
        userType: document.querySelector('[name="userType"]').value,
        joinDate: document.querySelector('[name="joinDate"]').value
    };

    // fetch('/api/users/update', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(result => {
    //     if (result.success) {
    //         alert('저장되었습니다.');
    //         window.location.href = 'adminuser.html';
    //     } else {
    //         alert('저장에 실패했습니다.');
    //     }
    // })
    // .catch(err => {
    //     console.error(err);
    //     alert('서버 오류가 발생했습니다.');
    // });
});

document.querySelector('.c-btn').addEventListener('click', () => {
    if (!confirm('취소하시겠습니까?')) return;
    window.location.href = 'adminuser.html';
});

});