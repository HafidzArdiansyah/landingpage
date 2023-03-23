$(document).ready(function() {
	// Image slide header

	// Menghitung jumlah slide yang ada
	var slideCount = $('.slide').length;
	// Mengambil lebar slide
	var slideWidth = $('.slide').width();
	// Menghitung lebar total container slide
	var slideContainerWidth = slideCount * slideWidth;
	// Mengatur lebar container slide sesuai dengan jumlah dan lebar slide
	$('.slide-container').css('width', slideContainerWidth + 'px');
	
	// Menyimpan nomor slide yang sedang ditampilkan
	var currentSlide = 0;
	
	// Fungsi untuk memindahkan slide
	function moveSlide() {
		// Menambahkan nilai currentSlide sebanyak 1
		currentSlide++;
		// Jika sudah mencapai slide terakhir, kembali ke slide pertama
		if (currentSlide === slideCount) {
			// Set nilai currentSlide kembali ke 0
			currentSlide = 0;
			// Mengatur posisi container slide ke awal
			$('.slide-container').css('left', '0px');
		} else {
			// Menghitung posisi slide baru
			var newLeft = -currentSlide * slideWidth;
			// Menggerakkan container slide ke posisi baru menggunakan animasi
			$('.slide-container').animate({left: newLeft + 'px'}, 500);
		}
	}
	
	// Menjalankan fungsi moveSlide setiap 3 detik menggunakan setInterval
	setInterval(moveSlide, 3000);
});
