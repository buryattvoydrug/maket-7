$(window).load(function() {
            $(".before-after").twentytwenty({
                before_label: 'БЕЗ СКИНАЛИ', // Set a custom before label
                after_label: 'С СКИНАЛИ', // Set a custom after label
            });
            $('.bef-aft-slider').slick({
                draggable: false,
                dots: true,
            });
            $('.menu-button').on('click', function(){
                $('.menu').toggleClass('menu_active');
            });
            $('.select_checked').on('click', function(){
                $('.dropdown').toggleClass('dropdown_open');
                $('.dropdown__button').toggleClass('dropdown__button_active');
            });
            $('.select__option').on('click',function(){
                var value = $(this).attr('data-value');
                $('#select-type').val(value);
                $('.select_checked').text(value);
                $('.dropdown').toggleClass('dropdown_open');
            });
            $('a[href^="#"]').on('click', function(){
                var _href=$(this).attr("href");
                $('html,body').animate({ scrollTop: $(_href).offset().top -200 + "px" });
            });
            $('[type="tel"]').mask("+7 (999) 999-99-99");
//            var reviews=$('.reviews');
//            var reviewsTop = reviews.offset().top;
//            $(window).bind('scroll', function(){
//                var windowTop = $(this).scrollTop();
//                if (windowTop > reviewsTop){
//                    $('map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A10a6b2abdb0e850ca157dac4aad792fa8d15792d7caa9db6ad1bc62981c262bc&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>');
//                    $(window).unbind('scroll');
//                }
//            });
        });
