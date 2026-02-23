document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.querySelector('.s-btn');
    const cancelBtn = document.querySelector('.c-btn');

    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('저장하시겠습니까?')) return;

        const data = {
            title: document.querySelector('.eventTit input').value,
            startDate: document.querySelector('.startDate input').value,
            endDate: document.querySelector('.endDate input').value,
            link: document.querySelector('.addlink input').value,
            thumbnail: document.querySelector('.thum input').files[0] || null
        };

        /*
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('startDate', data.startDate);
        formData.append('endDate', data.endDate);
        formData.append('link', data.link);
        if (data.thumbnail) {
            formData.append('thumbnail', data.thumbnail);
        }

        fetch('/api/events', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                alert('저장되었습니다.');
                window.location.href = 'adminEvent.html';
            } else {
                alert('저장에 실패했습니다.');
            }
        })
        .catch(err => {
            console.error(err);
            alert('서버 오류가 발생했습니다.');
        });
        */

        //임시저장
        // alert('저장되었습니다.');
        // window.location.href = 'adminEvent.html';
    });

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!confirm('취소하시겠습니까?')) return;

        window.location.href = 'adminEvent.html';
    });
});