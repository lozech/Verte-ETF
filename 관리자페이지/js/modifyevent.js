document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('modifyevent');
    if (!data) return;

    const event = JSON.parse(data);

    document.querySelector('.eventTit input').value = event.title || '';

    if (event.period && event.period.includes('~')) {
        const [start, end] = event.period.split('~').map(v => v.trim());
        document.querySelector('.startDate input').value = start || '';
        document.querySelector('.endDate input').value = end || '';
    }
});

document.querySelector('.s-btn').addEventListener('click', () => {
    if (!confirm('저장하시겠습니까?')) return;

    /*
    fetch('/api/events', {
        method: 'PUT',
        body: ...
    })
    */

    // 임시
    // alert('수정되었습니다.');
    // window.location.href = 'adminEvent.html';
});

document.querySelector('.c-btn').addEventListener('click', () => {
    if (!confirm('취소하시겠습니까?')) return;

    window.location.href = 'adminEvent.html';
});