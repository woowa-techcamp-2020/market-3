function handleRedirectClick(e) {
    window.location.href = '/';
}

const redirectElement = document.querySelector('.redirect');
redirectElement.addEventListener('click', handleRedirectClick);
