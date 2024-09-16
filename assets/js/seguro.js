let params = new URLSearchParams(window.location.search);
let valor_p = params.get("valor");

function checkboxes(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach((box, idx) => {

        if (boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

const contractScroll = document.querySelector('.contract-scroll');
const sections = document.querySelectorAll('.contract-section');
const acceptButton = document.getElementById('acceptButton');
const rejectButton = document.getElementById('rejectButton');

function checkSections() {
    const triggerBottom = contractScroll.clientHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - contractScroll.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });

    
    if (contractScroll.scrollHeight - contractScroll.scrollTop <= contractScroll.clientHeight + 1) {
        acceptButton.disabled = false;
        rejectButton.disabled = false;
    }
}

contractScroll.addEventListener('scroll', checkSections);
checkSections(); 

acceptButton.addEventListener('click', () => {
    window.location.href = `webpay.html?valor=${valor_p}`;
    alert('Has aceptado los términos y condiciones.');
});

rejectButton.addEventListener('click', () => {
    window.location.href = 'index.html';
    alert('Has rechazado los términos y condiciones.');
});