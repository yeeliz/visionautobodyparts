(function ($) {
    'use script';
    $(window).on('load', function (event) {
        hidePreloader();
    });

    function hidePreloader() {
        $('#preloader').delay(500).fadeOut(500);
    }
    // WOW JS
    new WOW().init();

    // Nice Select
    $('select').niceSelect();


    // Scroll Area
    $(document).ready(function () {
        $('.scroll-area').click(function () {
            $('html').animate({
                'scrollTop': 0,
            }, 700);
            return false;
        });
        $(window).on('scroll', function () {
            var a = $(window).scrollTop();
            if (a > 400) {
                $('.scroll-area').slideDown(300);
            } else {
                $('.scroll-area').slideUp(200);
            }
        });
    });

    // Mini Cart
    $('#minicart_open').click(function () {
        $('.minicart-sidebar, .off_canvars_overlay').addClass('active');
    });
    $('.mini-cart-off, .off_canvars_overlay').click(function () {
        $('.minicart-sidebar, .off_canvars_overlay').removeClass('active');
    });

    // /*---slider activation---*/
    var $HeroSlider = $('.hero-slider-full');
    if ($HeroSlider.length > 0) {
        $HeroSlider.owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 20000,
            items: 1,
            nav: true,
            smartSpeed: 1500,
            navText: ['<span class="hero-slider-nav"><i class="bi bi-arrow-left"></i></span>', '<span class="hero-slider-nav"><i class="bi bi-arrow-right"></i></span>'],
            responsive: {
                0: {
                    dots: true,
                },
                577: {
                    dots: false,
                },
            }
        });
    }
    // /*---slider activation---*/
    var $HeroSlider2 = $('.hero-slider-style-2');
    if ($HeroSlider2.length > 0) {
        $HeroSlider2.owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 20000,
            items: 1,
            animateOut: 'fadeOut',
            nav: true,
            smartSpeed: 500,
            navText: ['<span class="hero-slider-nav"><i class="bi bi-arrow-left"></i></span>', '<span class="hero-slider-nav"><i class="bi bi-arrow-right"></i></span>'],
            responsive: {
                0: {
                    dots: true,
                },
                577: {
                    dots: false,
                },
            }
        });
    }
    // /*---slider activation---*/
    var $HeroSlider3 = $('.hero-slider-style-3');
    if ($HeroSlider3.length > 0) {
        $HeroSlider3.owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 20000,
            items: 1,
            animateOut: 'fadeOut',
            nav: true,
            smartSpeed: 500,
            navText: ['<span class="hero-slider-nav"><i class="bi bi-arrow-left"></i></span>', '<span class="hero-slider-nav"><i class="bi bi-arrow-right"></i></span>'],
            responsive: {
                0: {
                    dots: true,
                },
                577: {
                    dots: false,
                },
            }
        });
    }

    /*---product navactive activation---*/
    var $productNavactive = $('.product_navactive');
    if ($productNavactive.length > 0) {
        $('.product_navactive').owlCarousel({
            autoplay: true,
            loop: false,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                250: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                768: {
                    items: 4,
                },

            }
        });
    }
    $('.modal').on('shown.bs.modal', function (e) {
        $('.product_navactive').resize();
    })

    $('.product_navactive a').on('click', function (e) {
        e.preventDefault();

        var $href = $(this).attr('href');

        $('.product_navactive a').removeClass('active');
        $(this).addClass('active');

        $('.product-details-large .tab-pane').removeClass('active show');
        $('.product-details-large ' + $href).addClass('active show');

    })

    /*---Featured Products---*/
    var $FeaturedProductSlider = $('.feature-product-slider');
    if ($FeaturedProductSlider.length > 0) {
        $('.feature-product-slider').owlCarousel({
            autoplay: true,
            loop: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin: 30,
            dots: false,
            navText: ['<span class="feature-slider-nav"><i class="bi bi-arrow-left"></i></span>', '<span class="feature-slider-nav"><i class="bi bi-arrow-right"></i></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                },
                400: {
                    items: 2,
                },
                876: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
            }
        });
    }
    /*---Related Products---*/
    var $RelatedProductSlider = $('.related-product-slider');
    if ($RelatedProductSlider.length > 0) {
        $('.related-product-slider').owlCarousel({
            autoplay: true,
            loop: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin: 30,
            dots: false,
            navText: ['<span class="feature-slider-nav"><i class="bi bi-arrow-left"></i></span>', '<span class="feature-slider-nav"><i class="bi bi-arrow-right"></i></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                },
                400: {
                    items: 2,
                },
                876: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
            }
        });
    }
    /*---Products Category---*/
    var $ShopCateSlider = $('.shop-category-full');
    if ($ShopCateSlider.length > 0) {
        $('.shop-category-full').owlCarousel({
            autoplay: true,
            loop: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin: 30,
            dots: false,
            navText: ['<span class="shopcate-slider-nav"><i class="bi bi-arrow-left"></i></span>', '<span class="shopcate-slider-nav"><i class="bi bi-arrow-right"></i></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    stagePadding: 0,
                    margin: 0,
                },
                400: {
                    items: 2,
                },
                876: {
                    items: 3,
                },
                991: {
                    items: 5,
                },
            }
        });
    }
    /*---Client Testimonial---*/
    var $TestimonialSlider = $('.client-testimonial-full');
    if ($TestimonialSlider.length > 0) {
        $('.client-testimonial-full').owlCarousel({
            autoplay: true,
            loop: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 2,
            margin: 30,
            dots: false,
            navText: ['<span class="testimonial-slider-nav"><i class="bi bi-arrow-left"></i></span>', '<span class="testimonial-slider-nav"><i class="bi bi-arrow-right"></i></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,
                    margin: 0,
                },
                600: {
                    items: 1,
                },
                876: {
                    items: 1,
                },
                992: {
                    items: 2,
                },
            }
        });
    }


    // Quantity
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    /**
* Countdown timer
*/
    var FuristCountdown = $('#FuristCountdown');
    if (FuristCountdown.length > 0) {

        let FuristCountdown = document.getElementById('FuristCountdown');
        const output = FuristCountdown.innerHTML;

        const countDownDate = function () {
            let timeleft = new Date(FuristCountdown.getAttribute('data-countdown-codepopular')).getTime() - new Date().getTime();

            let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            FuristCountdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
        }
        countDownDate();
        setInterval(countDownDate, 1000);
    }


    $('.video-btn a').magnificPopup({
        type: 'iframe'
    });

    $(document).ready(function () {
        var serverUrl = 'https://yeeliztechnology.net/vision_api/api/';
        //const serverUrl = 'http://127.0.0.1:5000/api/';
        var url = window.location.href; // Obtén la URL completa
        var pageNameWithExtension = url.split('/').pop(); // Extrae el último segmento después del último '/'
        var pageName = pageNameWithExtension.split('.').shift(); // Separa por '.' y toma el primer elemento
        var routeYearUrl = '';

        var old_new = 'old';

        var selectBoxYear = '';
        var selectBoxMake = '';
        
        if (pageName == 'bodyparts') {
            routeYearUrl = serverUrl + 'new_years_parts';
            selectBoxYear = $('#carYears');
            selectBoxMake = $('#carMakes');
            selectBoxModel = $('#carModels');

        } else if (pageName == 'saleparts') {
            routeYearUrl = serverUrl + 'car_years';
            selectBoxYear = $('#sale_carYears');
            selectBoxMake = $('#sale_carMakes');
            selectBoxModel = $('#sale_carModels');
        }
        //alert("URL: " + serverUrl);

        $.ajax({
            url: routeYearUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
        
                selectBoxYear.empty(); // Limpia el combobox antes de añadir nuevas opciones
                selectBoxYear.append('<option value="0" selected="selected">Select Year</option>'); // Añade una opción por defecto
                data.forEach(function (year) {
                    //var optionText = year.year_car.toString(); // Convertir el año a texto
                    var optionText = year.car_year_from.toString(); // Convertir el año a texto
                    //var optionValue = year.id.toString(); // Convertir el ID a texto
                    //console.log("Año: ", optionText, " ID: ", optionValue);
                    var option = $('<option>').val(optionText).text(optionText);
                    selectBoxYear.append(option);
                });
                selectBoxYear.niceSelect('update'); // Actualiza niceSelect para reflejar los nuevos elementos
            },

            error: function (request, status, error) {
                console.log("Error al recuperar los datos: ", error);
            }
        });


        $(selectBoxYear).on('change', function () {
            var selectedYear = '';
            var routeUrl = '';
            

            if(pageName == 'saleparts'){
                selectedYear = $('#sale_carYears').find(':selected').text();
                routeUrl = serverUrl + 'car_makes/' + selectedYear;
                
            }else if(pageName == 'bodyparts'){
                selectedYear = $('#carYears').find(':selected').text();
                routeUrl = serverUrl + 'new_car_makes/' + selectedYear;
               
            }
            

            // Llamar a la API pasando el año como parámetro
            $.ajax({
                url: routeUrl,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
    
                    selectBoxMake.empty(); // Limpia el select antes de añadir nuevas opciones
                    // Itera sobre la respuesta y añade cada opción al select
                    selectBoxMake.append('<option value="0" selected="selected">Select Make</option>'); // Añade una opción por defecto
                    data.forEach(function (make) {
                        selectBoxMake.append($('<option>', {
                            value: make.car_make,
                            text: make.car_make
                            //text: make.make_car
                        }));
                    });
                    // Actualiza el select estilizado si estás utilizando niceSelect o un plugin similar
                    selectBoxMake.niceSelect('update');
                },
                error: function (request, status, error) {
                    console.log("Error al recuperar los datos: ", error);
                }
            });
        });

        // Nuevo evento para cuando cambia la marca
        $(selectBoxMake).on('change', function () {

            var routeUrl = '';

            var selectedYear = $(selectBoxYear).find(':selected').text().trim();
            var selectedMake = $(this).find(':selected').text().trim();
          

            if(pageName == 'saleparts'){
                selectedYear = $('#sale_carYears').find(':selected').text();
                routeUrl = serverUrl + 'car_models/' + selectedYear + '/' + selectedMake;
                selectBoxMake = $('#sale_carMakes');
            }else if(pageName == 'bodyparts'){
                selectedYear = $('#carYears').find(':selected').text();
                routeUrl = serverUrl + 'new_car_models/' + selectedYear + '/' + selectedMake;
                selectBoxMake = $('#carMakes');
            }
            

            // Realizar la solicitud AJAX con selectedYear y selectedMake como parte de la URL...
            $.ajax({
                //url: `${serverUrl}car_models/${selectedYear}/${selectedMake}`, 
                url: routeUrl,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    selectBoxModel.empty(); // Limpia el select antes de añadir nuevas opciones
                    // Itera sobre la respuesta y añade cada opción al select
                    selectBoxModel.append('<option value="0" selected="selected">Select Model</option>'); // Añade una opción por defecto
                    data.forEach(function (model) {
                        selectBoxModel.append($('<option>', {
                            value: model.car_model,
                            text: model.car_model
                        }));
                    });
                    // Actualiza el select estilizado si estás utilizando niceSelect o un plugin similar
                    selectBoxModel.niceSelect('update');
                },
                error: function (request, status, error) {
                    console.log("Error al recuperar los datos: ", error);
                }
            });
        });

        $('#sale_btn_find').click(function () {
            // Recoge los valores seleccionados de los dropdowns
            var selectedYear = $('#sale_carYears option:selected').text();
            var selectedMake = $('#sale_carMakes option:selected').text();
            var selectedModel = $('#sale_carModels option:selected').text();

            // Verifica que todos los campos estén seleccionados
            if (selectedYear && selectedMake && selectedModel) {
                $('#preloader').show();
                $("#sale-parts-list").empty();

                // Realiza la solicitud AJAX al endpoint con los parámetros seleccionados
                $.ajax({
                    url: `${serverUrl}car_parts/${selectedYear}/${selectedMake}/${selectedModel}`,
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        hidePreloader();
                        data.forEach(function (product) {
                            var originalPrice = parseFloat(product.price).toFixed(2);
                            var discountedPrice = (originalPrice - originalPrice * 0.2).toFixed(2); // Calcula el precio con descuento del 20%

                            var cardHtml = `
    <div class="product-card">
        <div class="col-lg-3 product-image">
        <img src="myassets/img/bodyparts/${product.image}" alt="No Product Image">
        </div>
        <div class="col-lg-9 product-info">
            <h6>${product.name}</h6>
            <p class="part-link">Part Link: ${product.partlink} &nbsp;&nbsp;&nbsp; OEM: ${product.oem}</p>
    
            <p class="product-price">Price List: <del>$${originalPrice}</del></p>
            <p class="product-price">Sale Price: $${discountedPrice}</p>

            <button id="add-to-cart" class="btn btn-secondary disabled">Add to Cart</button>
            <button id="please-call" class="btn btn-info">Please Call</button>
        </div>
    </div>`;
                            $('#sale-parts-list').append(cardHtml);
                        });

                    },
                    error: function (request, status, error) {
                        hidePreloader();
                        console.log("Error: " + error); // Maneja errores en la petición
                    }
                });
            } else {
                // Manejar el caso en que no todos los campos estén seleccionados
                alert("Please select year, make, and model of the car.");
            }
        });

        $('#btn_find').click(function () {
            // Recoge los valores seleccionados de los dropdowns
            var selectedYear = $('#carYears option:selected').text();
            var selectedMake = $('#carMakes option:selected').text();
            var selectedModel = $('#carModels option:selected').text();

            // Verifica que todos los campos estén seleccionados
            if (selectedYear && selectedMake && selectedModel) {
                $('#preloader').show();
                $("#parts-list").empty();

                // Realiza la solicitud AJAX al endpoint con los parámetros seleccionados
                $.ajax({
                    url: `${serverUrl}new_car_parts/${selectedYear}/${selectedMake}/${selectedModel}`,
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        hidePreloader();
                        data.forEach(function (product) {
                            var originalPrice = parseFloat(product.price).toFixed(2);
                            var discountedPrice = (originalPrice - originalPrice * 0.2).toFixed(2); // Calcula el precio con descuento del 20%

                            var cardHtml = `
    <div class="product-card">
        <div class="col-lg-3 product-image">
            <img src="myassets/img/bodyparts/${product.image}" alt="No Product Image">
        </div>
        <div class="col-lg-9 product-info">
            <h6>${product.name}</h6>
            <p class="part-link">Part Link: ${product.partlink} &nbsp;&nbsp;&nbsp; OEM: ${product.oem}</p>


            <button id="add-to-cart" class="btn btn-secondary disabled">Add to Cart</button>
            <button id="please-call" class="btn btn-info">Please Call</button>
        </div>
    </div>`;
                            $('#parts-list').append(cardHtml);
                        });

                    },
                    error: function (request, status, error) {
                        hidePreloader();
                        console.log("Error: " + error); // Maneja errores en la petición
                    }
                });
            } else {
                // Manejar el caso en que no todos los campos estén seleccionados
                alert("Please select year, make, and model of the car.");
            }
        });

        $('#btn_find_paint').click(function () {

            // Recoge los valores seleccionados de los dropdowns
            var selectedYear = $('#carYearsPaint option:selected').text();
            var selectedMake = $('#carMakesPaint option:selected').text();

            // Verifica que todos los campos estén seleccionados
            if (selectedYear && selectedMake) {
                // Realiza la solicitud AJAX al endpoint con los parámetros seleccionados
                $('#preloader').show();
                $('#paint-cards-container').empty();
                $.ajax({
                    url: `${serverUrl}get_paint_codes/${selectedYear}/${selectedMake}`,
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        hidePreloader();
                        data.forEach(function (paint) {
                            var cardHtml = `
                                <div class="paint-card">
                                    <img src="${paint.image_url}" alt="${paint.description}">
                                    <div class="text-content">
                                        <div class="color-code">${paint.color_code}</div>
                                        <div>${paint.description}</div>
                                    </div>
                                </div>
                            `;
                            $('#paint-cards-container').append(cardHtml);
                        });
                    },
                    error: function () {
                        hidePreloader();
                        console.log("No se pudo obtener los datos");
                    }
                });
            } else {
                // Manejar el caso en que no todos los campos estén seleccionados
                alert("Please select year, make, and model of the car.");
            }
        });

        // Función para llenar los datos de los productos
        function fillProductData(products) {
            alert("Hiciste clic en el botón de buscar" + products.length);
            var productsHTML = '';
            products.forEach(function (product) {
                var originalPrice = parseFloat(product.price).toFixed(2);
                var discountedPrice = (originalPrice - originalPrice * 0.2).toFixed(2); // Calcula el precio con descuento del 20%

                productsHTML += `
            <div class="product-card">
                <div class="col-md-3 product-image">
                    <img src="myassets/img/bodypars/${product.image}" alt="Product Image">
                </div>
                <div class="col-md-9 product-info">
                    <h6>${product.name}</h6>
                    <p>Part Number: ${product.partlink}</p>
                    <p class="product-price">
                        <del>$${originalPrice}</del> $${discountedPrice}
                    </p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>`;
            });

            // Suponiendo que tienes un contenedor para tus productos
            //document.getElementById('product-list').innerHTML = productsHTML;
            $('#parts-list').append(cardHtml);
        }

        const imagePaths = ['myassets/img/brands_logos/logo-acura.png',
            'myassets/img/brands_logos/logo-audi.png',
            'myassets/img/brands_logos/logo-bmw.png',
            'myassets/img/brands_logos/logo-buick.png',
            'myassets/img/brands_logos/logo-cadillac.png',
            'myassets/img/brands_logos/logo-chevrolet.png',
            'myassets/img/brands_logos/logo-chrysler.png',
            'myassets/img/brands_logos/logo-dodge.png',
            'myassets/img/brands_logos/logo-fiat.png',
            'myassets/img/brands_logos/logo-ford.png',
            'myassets/img/brands_logos/logo-gm.png',
            'myassets/img/brands_logos/logo-honda.png',
            'myassets/img/brands_logos/logo-hyundai.png',
            'myassets/img/brands_logos/logo-infiniti.png',
            'myassets/img/brands_logos/logo-jeep.png',
            'myassets/img/brands_logos/logo-kia.png',
            'myassets/img/brands_logos/logo-land-rover.png',
            'myassets/img/brands_logos/logo-lexus.png',
            'myassets/img/brands_logos/logo-mazda.png',
            'myassets/img/brands_logos/logo-mercedes.png',
            'myassets/img/brands_logos/logo-mini.png',
            'myassets/img/brands_logos/logo-mitsubishi.png',
            'myassets/img/brands_logos/logo-nissan.png',
            'myassets/img/brands_logos/logo-pontiac.png',
            'myassets/img/brands_logos/logo-porsche.png',
            'myassets/img/brands_logos/logo-saab.png',
            'myassets/img/brands_logos/logo-saturn.png',
            'myassets/img/brands_logos/logo-scion.png',
            'myassets/img/brands_logos/logo-subaru.png',
            'myassets/img/brands_logos/logo-toyota.png',
            'myassets/img/brands_logos/logo-volkswagen.png',
            'myassets/img/brands_logos/logo-volvo.png'
        ];

        const originalUrls = [
            'myassets/img/paint_locator/acura_paint_code_locator.jpg',
            'myassets/img/paint_locator/audi_paint_code_locator.jpg',
            'myassets/img/paint_locator/bmw_paint_code_locator.jpg',
            'myassets/img/paint_locator/buick_paint_code_locator.jpg',
            'myassets/img/paint_locator/cadillac_paint_code_locator.jpg',
            'myassets/img/paint_locator/chevrolet_paint_code_locator.jpg',
            'myassets/img/paint_locator/chrysler_paint_code_locator.jpg',
            'myassets/img/paint_locator/dodge_paint_code_locator.jpg',
            'myassets/img/paint_locator/fiat_paint_code_locator.jpg',
            'myassets/img/paint_locator/ford_paint_code_locator.jpg',
            'myassets/img/paint_locator/gmc_paint_code_locator.jpg',
            'myassets/img/paint_locator/honda_paint_code_locator.jpg',
            'myassets/img/paint_locator/hyundai_paint_code_locator.jpg',
            'myassets/img/paint_locator/infiniti_paint_code_locator.jpg',
            'myassets/img/paint_locator/jeep_paint_code_locator.jpg',
            'myassets/img/paint_locator/kia_paint_code_locator.jpg',
            'myassets/img/paint_locator/land_rover_paint_code_locator.jpg',
            'myassets/img/paint_locator/lexus_paint_code_locator.jpg',
            'myassets/img/paint_locator/mazda_paint_code_locator.jpg',
            'myassets/img/paint_locator/mercedes_paint_code_locator.jpg',
            'myassets/img/paint_locator/mini_paint_code_locator.jpg',
            'myassets/img/paint_locator/mitsubishi_paint_code_locator.jpg',
            'myassets/img/paint_locator/nissan_paint_code_locator.jpg',
            'myassets/img/paint_locator/pontiac_paint_code_locator.jpg',
            'myassets/img/paint_locator/porsche_paint_code_locator.jpg',
            'myassets/img/paint_locator/saab_paint_code_locator.jpg',
            'myassets/img/paint_locator/saturn_paint_code_locator.jpg',
            'myassets/img/paint_locator/scion_paint_code_locator.jpg',
            'myassets/img/paint_locator/subaru_paint_code_locator.jpg',
            'myassets/img/paint_locator/toyota_paint_code_locator.jpg',
            'myassets/img/paint_locator/volkswagen_paint_code_locator.jpg',
            'myassets/img/paint_locator/volvo_paint_code_locator.jpg'
        ];

        imagePaths.forEach(function (path) {
            const imgElement = $('<img>').attr('src', path)
                .css('border', '2px solid #000') // Añade el borde directamente si prefieres
                .click(function () {
                    //alert("Hiciste clic en la imagen: " + path);
                    let url_paint_locator = getPaintCodeLocatorImageName(path);
                    //alert("Hiciste clic en la imagen: " + newFileName);
                    window.location.href = 'paintlocator.html?param1=' + encodeURIComponent(url_paint_locator);

                });

            $('#image-grid').append(imgElement);
        });

        function getPaintCodeLocatorImageName(originalUrl) {
            // Paso 1: Extraer la marca del vehículo
            // Esto asume que el formato es siempre similar a "myassets/img/brands_logos/logo-marca.png"
            const parts = originalUrl.split('/'); // Divide la URL en partes
            const logoFileName = parts.pop(); // Obtiene el último elemento, ej. "logo-acura.png"
            const brandName = logoFileName.replace('logo-', '').replace('.png', ''); // Elimina "logo-" y ".png"

            // Paso 2: Construir el nuevo nombre de archivo
            //const newFileName = `myassets/img/paint_locator/${brandName}_paint_code_locator.jpg`;
            //const newFileName = `${brandName}`;
            //return newFileName;
            return `${brandName}`;
        }

        $('#please-call').click(function () {
            window.location.href = 'tel:+19786888280'; // Reemplaza +1234567890 con tu número de teléfono
        });

        const photos = [
            'myassets/img/gallery/DSC01919.JPG',
            'myassets/img/gallery/DSC01924.JPG',
            'myassets/img/gallery/DSC01913.JPG',
            'myassets/img/gallery/DSC01914.jpg',
            'myassets/img/gallery/DSC01908.jpg',
            'myassets/img/gallery/DSC01872.jpg',
            'myassets/img/gallery/DSC01821.jpg',
            'myassets/img/gallery/DSC01826.jpg',
            'myassets/img/gallery/DSC01831.jpg',
            'myassets/img/gallery/DSC01846.jpg',

            // Añade más rutas de fotos aquí
        ];
    
        const videos = [
            { src: 'myassets/img/gallery/SCROLLING BACKGROUND COMPRESSED.mp4', type: 'video/mp4' },
            { src: 'myassets/img/gallery/SCROLLING BACKGROUND COMPRESSED.mp4', type: 'video/mp4' },
            // Añade más objetos de videos aquí
        ];


        $('.thumbnail').on('click', function() {
            var src = $(this).attr('src');
            $('#mainImage').html(`<img src="${src}" style="width: 100%;">`);
        });

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 150) {
                $('.header-bottom').removeClass('sticky');
            } else {
                $('.header-bottom').addClass('sticky');
            }
        });
    });

}(jQuery));

