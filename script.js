let carouselList = document.querySelectorAll('.creature-list .swiper-slide');
let biologicalList = document.querySelectorAll('.biological-details');
let biologicalList_details = document.querySelectorAll('.biological-details li a');
let biologicalList_of_details = document.querySelectorAll('.details-of-interest');
let interactionBtn = document.querySelector('.ar-interaction .text a');

console.log(biologicalList);
carouselList.forEach((carousel, index) => {
    carousel.addEventListener('click', (event) => {
        let itemIndex = carousel.getAttribute('data-index');
        biologicalList[itemIndex-1].style.display = 'flex';
    });
});

biologicalList_details.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        biologicalList_of_details[index].style.display = 'flex';
    })
});

document.addEventListener('click', (event) => {
    // 检查点击的目标是否在 carouselList 或 biologicalList_details 的任何元素内
    let isInsideCarouselOrDetails = false;
    carouselList.forEach(carousel => {
        if (carousel.contains(event.target)) {
            isInsideCarouselOrDetails = true;
            return; // 如果在 carouselList 内，就结束循环
        }
    });

    // 检查点击的目标是否在 biologicalList_details 的任何元素内
    biologicalList_details.forEach(detail => {
        if (detail.contains(event.target)) {
            isInsideCarouselOrDetails = true;
            return; // 如果在 biologicalList_details 内，就结束循环
        }
    });

    if (interactionBtn.contains(event.target)) {
        isInsideCarouselOrDetails = true;
        return; // 如果在 biologicalList_details 内，就结束循环
    }

    // 如果不在 carouselList 或 biologicalList_details 内，隐藏所有的 biologicalList_of_details 元素
    if (!isInsideCarouselOrDetails) {
        biologicalList.forEach(bio => bio.style.display = 'none');
        biologicalList_of_details.forEach(bio => bio.style.display = 'none');
    }
});

interactionBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let activeItem = document.querySelector('.ar-interaction .swiper-slide-active');
    let itemIndex = activeItem.getAttribute('data-index');
    biologicalList_of_details[itemIndex].style.display = 'flex';
    console.log(biologicalList_of_details[itemIndex]);
})
