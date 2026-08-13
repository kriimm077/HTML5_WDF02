// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });
}

// ===== Form Elements =====
const form = document.getElementById('registerForm');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const course = document.getElementById('course');
const year = document.getElementById('year');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const terms = document.getElementById('terms');
const strengthMeter = document.getElementById('strengthMeter');
const strengthText = document.getElementById('strengthText');

// ===== Regular Expressions =====
const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;           // Letters and single spaces only
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const mobileRegex = /^[6-9]\d{9}$/;                        // Indian 10-digit mobile starting 6-9
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// At least 8 chars, 1 upper, 1 lower, 1 digit, 1 special

// ===== Helper: Show / Hide Error =====
function showError(input, message) {
    const errorEl = document.getElementById(input.id + '-error') ||
                    document.getElementById(input.name + '-error');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
    }
    if (input.tagName !== 'FIELDSET' && input.type !== 'checkbox' && input.type !== 'radio') {
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.setAttribute('aria-invalid', 'true');
    }
}

function clearError(input) {
    const errorEl = document.getElementById(input.id + '-error') ||
                    document.getElementById(input.name + '-error');
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('show');
    }
    if (input.tagName !== 'FIELDSET' && input.type !== 'checkbox' && input.type !== 'radio') {
        input.classList.remove('invalid');
        input.setAttribute('aria-invalid', 'false');
    }
}

function setValid(input) {
    clearError(input);
    if (input.tagName !== 'FIELDSET' && input.type !== 'checkbox' && input.type !== 'radio') {
        input.classList.add('valid');
    }
}

// ===== Individual Validators =====
function validateName() {
    const value = fullname.value.trim();
    if (!value) {
        showError(fullname, 'Full name is required.');
        return false;
    }
    if (value.length < 2) {
        showError(fullname, 'Name must be at least 2 characters.');
        return false;
    }
    if (!nameRegex.test(value)) {
        showError(fullname, 'Name can only contain letters and spaces.');
        return false;
    }
    setValid(fullname);
    return true;
}

function validateEmail() {
    const value = email.value.trim();
    if (!value) {
        showError(email, 'Email is required.');
        return false;
    }
    if (!emailRegex.test(value)) {
        showError(email, 'Please enter a valid email address (e.g. name@university.edu).');
        return false;
    }
    setValid(email);
    return true;
}

function validateMobile() {
    const value = mobile.value.trim();
    if (!value) {
        showError(mobile, 'Mobile number is required.');
        return false;
    }
    if (!mobileRegex.test(value)) {
        showError(mobile, 'Enter a valid 10-digit Indian mobile number (starts with 6-9).');
        return false;
    }
    setValid(mobile);
    return true;
}

function validateCourse() {
    if (!course.value) {
        showError(course, 'Please select a course.');
        return false;
    }
    setValid(course);
    return true;
}

function validateYear() {
    if (!year.value) {
        showError(year, 'Please select your year.');
        return false;
    }
    setValid(year);
    return true;
}

function validateGender() {
    const selected = form.querySelector('input[name="gender"]:checked');
    const errorEl = document.getElementById('gender-error');
    if (!selected) {
        errorEl.textContent = 'Please select your gender.';
        errorEl.classList.add('show');
        return false;
    }
    errorEl.textContent = '';
    errorEl.classList.remove('show');
    return true;
}

function validatePassword() {
    const value = password.value;
    if (!value) {
        showError(password, 'Password is required.');
        updateStrengthMeter('');
        return false;
    }
    if (value.length < 8) {
        showError(password, 'Password must be at least 8 characters.');
        updateStrengthMeter(value);
        return false;
    }
    if (!passwordRegex.test(value)) {
        showError(password, 'Password must contain uppercase, lowercase, number and special character (@$!%*?&).');
        updateStrengthMeter(value);
        return false;
    }
    setValid(password);
    updateStrengthMeter(value);
    return true;
}

function validateConfirmPassword() {
    const value = confirmPassword.value;
    if (!value) {
        showError(confirmPassword, 'Please confirm your password.');
        return false;
    }
    if (value !== password.value) {
        showError(confirmPassword, 'Passwords do not match.');
        return false;
    }
    setValid(confirmPassword);
    return true;
}

function validateTerms() {
    const errorEl = document.getElementById('terms-error');
    if (!terms.checked) {
        errorEl.textContent = 'You must accept the Terms of Service and Privacy Policy.';
        errorEl.classList.add('show');
        return false;
    }
    errorEl.textContent = '';
    errorEl.classList.remove('show');
    return true;
}

// ===== Password Strength Meter =====
function updateStrengthMeter(value) {
    strengthMeter.className = 'strength-meter';
    if (!value) {
        strengthText.textContent = 'Password strength';
        strengthText.style.color = '#666';
        return;
    }

    let score = 0;
    if (value.length >= 8) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[@$!%*?&]/.test(value)) score++;

    if (score <= 2) {
        strengthMeter.classList.add('strength-weak');
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#d93025';
    } else if (score <= 4) {
        strengthMeter.classList.add('strength-medium');
        strengthText.textContent = 'Medium';
        strengthText.style.color = '#f9ab00';
    } else {
        strengthMeter.classList.add('strength-strong');
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#188038';
    }
}

// ===== Real-time Validation (Intermediate Extension) =====
if (form) {
    fullname.addEventListener('input', validateName);
    fullname.addEventListener('blur', validateName);

    email.addEventListener('input', validateEmail);
    email.addEventListener('blur', validateEmail);

    mobile.addEventListener('input', () => {
        // Allow only digits
        mobile.value = mobile.value.replace(/\D/g, '').slice(0, 10);
        validateMobile();
    });
    mobile.addEventListener('blur', validateMobile);

    course.addEventListener('change', validateCourse);
    year.addEventListener('change', validateYear);

    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener('change', validateGender);
    });

    password.addEventListener('input', () => {
        validatePassword();
        if (confirmPassword.value) validateConfirmPassword();
    });
    password.addEventListener('blur', validatePassword);

    confirmPassword.addEventListener('input', validateConfirmPassword);
    confirmPassword.addEventListener('blur', validateConfirmPassword);

    terms.addEventListener('change', validateTerms);

    // ===== Form Submit =====
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMobileValid = validateMobile();
        const isCourseValid = validateCourse();
        const isYearValid = validateYear();
        const isGenderValid = validateGender();
        const isPasswordValid = validatePassword();
        const isConfirmValid = validateConfirmPassword();
        const isTermsValid = validateTerms();

        const allValid = isNameValid && isEmailValid && isMobileValid &&
                         isCourseValid && isYearValid && isGenderValid &&
                         isPasswordValid && isConfirmValid && isTermsValid;

        if (allValid) {
            // Show success modal
            const successModal = document.getElementById('successModal');
            successModal.classList.add('show');
            document.getElementById('modalOk').focus();
            // In a real app you would submit the form data here
        } else {
            // Focus the first invalid field for accessibility
            const firstInvalid = form.querySelector('.invalid, [aria-invalid="true"]') ||
                                 form.querySelector('input:invalid, select:invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });
}

// ===== Modal Handling =====
const successModal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');
const modalOk = document.getElementById('modalOk');

function closeModal() {
    if (successModal) {
        successModal.classList.remove('show');
    }
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}
if (modalOk) {
    modalOk.addEventListener('click', closeModal);
}

if (successModal) {
    successModal.addEventListener('click', (event) => {
        if (event.target === successModal) closeModal();
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && successModal && successModal.classList.contains('show')) {
        closeModal();
    }
});

// ===== Notification =====
function closeNotification() {
    const banner = document.getElementById('notificationBanner');
    if (banner) {
        banner.style.display = 'none';
    }
}
