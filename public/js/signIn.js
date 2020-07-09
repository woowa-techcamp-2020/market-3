function handleSignUpLinkClick(e) {
    window.location.href = '/signup';
}

const signUpLink = document.querySelector('.others__signup-link');
signUpLink.addEventListener('click', handleSignUpLinkClick);
