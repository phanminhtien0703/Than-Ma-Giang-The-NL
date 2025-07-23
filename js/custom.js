(function ($) {
    "use strict";
    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (event) {
            $(".menu-left ul li a").removeClass('active');
            $(this).addClass('active');

            var target = $($(this).attr('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
            }
        });

        $("#frame1").hover(function () {
            $(".menu-left ul li a").removeClass('active');
            $("#left1").addClass('active');
        });
        $("#frame2").hover(function () {
            $(".menu-left ul li a").removeClass('active');
            $("#left2").addClass('active');
        });
        $("#frame3").hover(function () {
            $(".menu-left ul li a").removeClass('active');
            $("#left3").addClass('active');
        });
        $("#frame4").hover(function () {
            $(".menu-left ul li a").removeClass('active');
            $("#left4").addClass('active');
        });
        $("#frame5").hover(function () {
            $(".menu-left ul li a").removeClass('active');
            $("#left5").addClass('active');
        });
        $("#frame6").hover(function () {
            $(".menu-left ul li a").removeClass('active');
            $("#left6").addClass('active');
        });
        var windowSize = $(window).width();

        if (windowSize > 1100) {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= 50) {
                    $('#return-to-top').fadeIn(200);

                } else {
                    $('#return-to-top').fadeOut(200);
                }
            });
        }

        $('#return-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });

		$(document).on('click', '#registerGiftCodeButton', function () {
            const name = $('#name').val()
            const email = $('#email').val()
            const phone = $('#phone').val()
            const messageBox = $('#messageBox').last()

            if (name && name.length > 50) {
                messageBox.text('Độ dài tên tiếu đa 50 ký tự.')
                messageBox.removeClass('d-none')
                return;
            }

			if (!email && !phone) {
                messageBox.text('Email hoặc số điện thoại là bắt buộc.')
				messageBox.removeClass('d-none')
                return;
			}

            if (email && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                messageBox.text('Email không đúng định dạng.')
                messageBox.removeClass('d-none')
                return;
            }

            if (phone && !(/^(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}$/.test(phone))) {
                messageBox.text('Số điện thoại không đúng định dạng.')
                messageBox.removeClass('d-none')
                return;
            }

            $.ajax({
                url: 'https://crm.vtcmobile.vn/api/gift-code-register',
                method: 'POST',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: JSON.stringify({
                    service_id: 330499,
                    event_key: '330499-teaser-ob',
                    name,
                    email,
                    phone
                }),
                success: function(response) {
                    const giftCodeBox = $('#giftCodeBox')
                    if (response.data && response.data.gift_code) {
                        let message = '<p>Xin gửi tặng Thiếu gia/Tiểu thư gift code:</p>'
                        message += '<p>' + response.data.gift_code + '</p>'
                        giftCodeBox.html(message)
                    } else {
                        giftCodeBox.text('Chúc mừng Thiếu gia/Tiểu thư đã đặt gạch thành công. Quà sẽ được gửi đến vào ngày ra mắt.')
                    }
                    $('#popup-xacnhan').fadeIn();
                },
                error: function(error) {
                    if (error.responseText) {
                        let responseText = JSON.parse(error.responseText)
                        messageBox.text(responseText.message)
                        messageBox.removeClass('d-none')
                    }
                }

            });
		});
    });
})(jQuery);
	