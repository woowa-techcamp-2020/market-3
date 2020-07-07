const idFormInput = document.querySelector('.id-form__input');

idFormInput.addEventListener('blur', function(e) {
    const idForm = document.querySelector('.id-form');
    const warning = document.createElement('p');
    const regTypeCap = /[A-Z]/;
    const regTypeSpecialChar = /[\{\}\[\]\/?.,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/;
    const regTypeKor = /[ㄱ-힣]/

    if(regTypeCap.test(idFormInput.value)) {
        warning.innerHTML = `영문 대문자는 아이디로 사용이 불가합니다`
        idFormInput.classList.add('warning');
    } else if(regTypeSpecialChar.test(idFormInput.value)) {
        warning.innerHTML = `특수기호는 (-),(_)만 사용 가능합니다`
        idFormInput.classList.add('warning');
    } else if (regTypeKor.test(idFormInput.value)) {
        warning.innerHTML = `한글은 아이디로 사용이 불가합니다`
        idFormInput.classList.add('warning');
    } else if (idFormInput.value.length < 4 || idFormInput.value.length > 20) {
        warning.innerHTML = `아이디는 4~20자로 제한됩니다.`
        idFormInput.classList.add('warning');
    } else {
        warning.innerHTML = `사용 가능한 아이디입니다`
        idFormInput.classList.remove('warning');
    }

    if(idForm.lastElementChild.tagName === 'P') {
        idForm.replaceChild(warning, idForm.lastElementChild);
    } else {
        idForm.appendChild(warning);
    }
    
    // TODO: (선택) 중복체크 기능

})