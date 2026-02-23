// 게시글 작성 버튼 클릭
document.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.querySelector('.postBtnBg .postBtn');
    if (postBtn) {
        postBtn.addEventListener('click', function() {
            const isConfirm = confirm('게시글을 등록하시겠습니까?');
            if (isConfirm) {
                window.location.href = 'communitywrite.html';
            }
        });
    }

    // 목록보기 버튼 클릭
    const communityListBtn = document.querySelector('.mbtn');
    if (communityListBtn) {
        communityListBtn.addEventListener('click', function() {
            window.location.href = 'community.html';
        });
    }
});

// 하트, 북마크 버튼 활성화
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.querySelector('.like');
    const bookmarkBtn = document.querySelector('.bookmark');


    likeBtn.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    bookmarkBtn.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

//댓글작성창 post 버튼 누르면 댓글게시여부확인
document.addEventListener('DOMContentLoaded', () => {
    const commentPostBtn = document.querySelector('.comment .postBtn button');
    const commentList = document.querySelector('.commentList');
    const textarea = document.querySelector('#commentent');

    if (!commentPostBtn || !commentList || !textarea) return;

    if (commentPostBtn) {
        commentPostBtn.addEventListener('click', function() {
            const textComment = textarea.value.trim();
                if (textComment === ''){
                    alert('댓글을 입력하세요!');
                    return;
                }

            const isConfirm = confirm('댓글을 등록하시겠습니까?');
            if(!isConfirm) return;
            const newComment = document.createElement('ul');
            newComment.className = 'commentListBg1';

            newComment.innerHTML = `
            <li class="head">
                <ul class="headline">
                <li class="commentName">maiapa21</li>
                <li class="postDate">@방금전</li>
                </ul>
            </li>
            <li class="commentCont">
                ${textComment}
            </li>
            `;
            commentList.appendChild(newComment);

            textarea.value = '';
            alert('댓글이 등록되었습니다.');
        });
    }
});
