// 햄버거메뉴버튼 애니메이션
$(function(){
	$('.menu-trigger').click(function (){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.modal-content').removeClass('active');
			$('.modal_black_plate').removeClass('active');
		} else {
			$(this).addClass('active')
			$('.modal-content').addClass('active');
			$('.modal_black_plate').addClass('active');
		}

		$('.modal_black_plate.active').click(function (){
			$('.menu-trigger').removeClass('active');
			$('.modal-content').removeClass('active');
			$('.modal_black_plate').removeClass('active');
		})
	})
})








// document.addEventListener('DOMContentLoaded', function () {
// 	const openModalBtn = document.getElementById('openModalBtn');
// 	const modal = document.getElementById('myModal');
// 	const closeModalBtn = document.getElementById('closeModalBtn');
// 	const overlay = document.querySelector('.overlay');

// 	openModalBtn.addEventListener('click', function () {
// 		modal.style.display = 'block';
// 		overlay.style.display = 'block';
// 	});

// 	closeModalBtn.addEventListener('click', function () {
// 		modal.style.display = 'none';
// 		overlay.style.display = 'none';
// 	});

// 	overlay.addEventListener('click', function () {
// 		modal.style.display = 'none';
// 		overlay.style.display = 'none';
// 	});
// });