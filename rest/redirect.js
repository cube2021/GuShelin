if(!name || name === 'null' || name === 'Null' || name === 'undefined'){
    localStorage.setItem('errorcode', 'name 변수 오류');
    jion();
}

if(!firstimgurl || firstimgurl === 'null' || firstimgurl === 'Null' || firstimgurl === 'undefined'){
    localStorage.setItem('errorcode', '첫번째 메인 이미지 파일 연결 오류');
    jion();
}
if(!secondimgurl || secondimgurl === 'null' || secondimgurl === 'Null' || secondimgurl === 'undefined'){
    localStorage.setItem('errorcode', '두번째 메인 이미지 파일 연결 오류');
    jion();
}
if(!thirdimgurl || thirdimgurl === 'null' || thirdimgurl === 'Null' || thirdimgurl === 'undefined'){
    localStorage.setItem('errorcode', '세번째 메인 이미지 파일 연결 오류');
    jion();
}
if(!address || address === 'null' || address === 'Null' || address === 'undefined'){
    localStorage.setItem('errorcode', '주소 형식 오류');
    jion();
}
if(!rating || rating === 'null' || rating === 'Null' || rating === 'undefined'){
    localStorage.setItem('errorcode', '평점 형식 오류');
    jion();
}
if(!number || number === 'null' || number === 'Null' || number === 'undefined'){
    localStorage.setItem('errorcode', '전화 번호 형식 오류');
    jion();
}
if(!time || time === 'null' || time === 'Null' || time === 'undefined'){
    localStorage.setItem('errorcode', '운영시간 형식 오류');
    jion();
}

if(!map || map === 'null' || map === 'Null' || map === 'undefined'){
    localStorage.setItem('errorcode', '지도 연결 오류');
    jion();
}

if(!firstsubimg || firstsubimg === 'null' || firstsubimg === 'Null' || firstsubimg === 'undefined'){
    localStorage.setItem('errorcode', '첫번째 서브 이미지 오류');
    jion();
}

if(!secondsubimg || secondsubimg === 'null' || secondsubimg === 'Null' || secondsubimg === 'undefined'){
    localStorage.setItem('errorcode', '두번째 서브 이미지 오류');
    jion();
}

if(!thirdsubimg || thirdsubimg === 'null' || thirdsubimg === 'Null' || thirdsubimg === 'undefined'){
    localStorage.setItem('errorcode', '세번째 서브 이미지 오류');
    jion();
}

if(!baedal || baedal === 'null' || baedal === 'Null' || baedal === 'undefined'){
    localStorage.setItem('errorcode', '배달여부 형식 오류');
    jion();
}

if(!pyeong || pyeong === 'null' || pyeong === 'Null' || pyeong === 'undefined'){
    localStorage.setItem('errorcode', '평점 형식 오류');
    jion();
}


if(!fmm || fmm === 'null' || fmm === 'Null' || fmm === 'undefined'){
    localStorage.setItem('errorcode', '첫번째 서브 이미지 설명 형식 오류');
    jion();
}

if(!smm || smm === 'null' || smm === 'Null' || smm === 'undefined'){
    localStorage.setItem('errorcode', '두번째 서브 이미지 설명 형식 오류');
    jion();
}

if(!tmm || tmm === 'null' || tmm === 'Null' || tmm === 'undefined'){
    localStorage.setItem('errorcode', '세번째 서브 이미지 설명 형식 오류');
    jion();
}

if(!fmmd || fmmd === 'null' || fmmd === 'Null' || fmmd === 'undefined'){
    localStorage.setItem('errorcode', '첫번째 서브 이미지 가격 형식 오류');
    jion();
}


if(!tmmd || tmmd === 'null' || tmmd === 'Null' || tmmd === 'undefined'){
    localStorage.setItem('errorcode', '두번째 서브 이미지 가격 형식 오류');
    jion();
}

if(!smmd || smmd === 'null' || smmd === 'Null' || smmd === 'undefined'){
    localStorage.setItem('errorcode', '세번째 서브 이미지 가격 형식 오류');
    jion();
}
function jion(){
    window.location.href = 'error/error.html';
}