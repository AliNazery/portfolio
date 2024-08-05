<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="preload" as="image" imageSrcSet="/_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=3840&amp;q=75 3840w" imageSizes="100vw" fetchPriority="high"/>
        <link rel="stylesheet" href="/_next/static/css/d3df112486f97f47.css" crossorigin="" data-precedence="next"/>
        <link rel="stylesheet" href="/_next/static/css/cc9e74a1207450e3.css" crossorigin="" data-precedence="next"/>
        <link rel="stylesheet" href="/_next/static/css/bef403e4b51110e5.css" crossorigin="" data-precedence="next"/>
        <link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/webpack-e83d2e45acbee9b2.js" crossorigin=""/>
        <script src="/_next/static/chunks/fd9d1056-b5144a6fe19364f3.js" async="" crossorigin=""></script>
        <script src="/_next/static/chunks/69-3c68098bb0599987.js" async="" crossorigin=""></script>
        <script src="/_next/static/chunks/main-app-f5c8d25c8479457f.js" async="" crossorigin=""></script>
        <script src="/_next/static/chunks/0e762574-1192116830576aeb.js" async=""></script>
        <script src="/_next/static/chunks/749-d1e91c901d9002c8.js" async=""></script>
        <script src="/_next/static/chunks/220-855f51d9e9f39f54.js" async=""></script>
        <script src="/_next/static/chunks/792-90506180ab9675cf.js" async=""></script>
        <script src="/_next/static/chunks/366-221b5e1ad327049f.js" async=""></script>
        <script src="/_next/static/chunks/826-bdb646b45edcf9c8.js" async=""></script>
        <script src="/_next/static/chunks/538-49cb50ea7fb619ba.js" async=""></script>
        <script src="/_next/static/chunks/59-f01b978d08b12fe8.js" async=""></script>
        <script src="/_next/static/chunks/app/page-b932b127aaaead97.js" async=""></script>
        <script src="/_next/static/chunks/app/layout-59eabde9ae46bf65.js" async=""></script>
        <title>Mariam - Personal Portfolio Nextjs Template</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256"/>
        <script src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js" crossorigin="" noModule=""></script>
    </head>
    <body>
        <script>
            !function() {
                try {
                    var d = document.documentElement
                      , c = d.classList;
                    c.remove('light', 'dark');
                    var e = localStorage.getItem('theme');
                    if ('system' === e || (!e && false)) {
                        var t = '(prefers-color-scheme: dark)'
                          , m = window.matchMedia(t);
                        if (m.media !== t || m.matches) {
                            d.style.colorScheme = 'dark';
                            c.add('dark')
                        } else {
                            d.style.colorScheme = 'light';
                            c.add('light')
                        }
                    } else if (e) {
                        c.add(e || '')
                    } else {
                        c.add('light')
                    }
                    if (e === 'light' || e === 'dark' || !e)
                        d.style.colorScheme = e || 'light'
                } catch (e) {}
            }()
        </script>
        <div class="loading text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <button class="button-toggle" id="buttonToggle">
            <span></span>
        </button>
        <header class="header header--left">
            <div class="header__container">
                <div class="header__logo">
                    <a href="/">
                        <img alt="logo" loading="lazy" width="45" height="50" decoding="async" data-nimg="1" class="header__logo-image" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Flogo.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Flogo.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Flogo.png&amp;w=96&amp;q=75"/>
                    </a>
                </div>
                <nav class="header__nav">
                    <div class="header__nav-cross">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
                        </svg>
                    </div>
                    <ul class="nav">
                        <li class="nav__item ">
                            <a class="nav__link  nav__link--active" href="#home">Home</a>
                        </li>
                        <li class="nav__item ">
                            <a class="nav__link  " href="#about">About</a>
                        </li>
                        <li class="nav__item ">
                            <a class="nav__link  " href="#services">Services</a>
                        </li>
                        <li class="nav__item ">
                            <a class="nav__link  " href="#projects">Projects</a>
                        </li>
                        <li class="nav__item ">
                            <a class="nav__link  " href="#clients">Clients</a>
                        </li>
                        <li class="nav__item ">
                            <a class="nav__link  " href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div class="header__switch-mode">
                    <div class="switch-mode">
                        <button class="switch-mode__btn">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="switch-mode__icon switch-mode__icon--dark" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                            </svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="switch-mode__icon switch-mode__icon--light " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main class="main">
            <section class="hero vh-100">
                <img alt="" fetchPriority="high" decoding="async" data-nimg="fill" class="hero__img" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2Fassets%2Fimages%2Fbg%2Fbg.jpg&amp;w=3840&amp;q=75"/>
                <div class="container" style="transform:translateX(0px) translateY(80px) translateZ(0)">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="hero__content vh-100 ">
                                <div class="hero__social-media">
                                    <ul class="social-media ">
                                        <li class="social-media__item">
                                            <a class="social-media__link" href="#">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="social-media__item">
                                            <a class="social-media__link" href="#">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="social-media__item">
                                            <a class="social-media__link" href="#">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="social-media__item">
                                            <a class="social-media__link" href="#">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="social-media__item">
                                            <a class="social-media__link" href="#">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="hero__banner">
                                    <div class="banner">
                                        <h6 class="banner__subtitle">👋 Hi There,</h6>
                                        <h1 class="banner__title ">
                                            I Am a <div class="Typewriter" data-testid="typewriter-wrapper"></div>
                                        </h1>
                                        <p class="banner__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla pretium lacus, eu luctus neque ultricies a.  </p>
                                        <a href="#about" class="btn-default">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                                            </svg>
                                            <span>
                                            
                                            More About Me</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="hero__info">
                                    <div class="info">
                                        <div class="info__item">
                                            <p class="info__label mb-0">Email:</p>
                                            <p class="info__value mb-0">contact@mariam.com</p>
                                        </div>
                                        <div class="info__item">
                                            <p class="info__label mb-0">Phone:</p>
                                            <p class="info__value mb-0">+113-804-9098</p>
                                        </div>
                                        <div class="info__item">
                                            <p class="info__label mb-0">Location:</p>
                                            <p class="info__value mb-0">California ,USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about section section--white" id="about">
                <div class="container">
                    <div class="row" style="transform:translateX(0px) translateY(80px) translateZ(0)">
                        <div class="col-12">
                            <div class="heading">
                                <div class="heading__shape"></div>
                                <div class="heading__content">
                                    <h2>About Me</h2>
                                    <p>Main Informations About Me And What I Love To Do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="opacity:0;transform:translateY(80px) translateZ(0)">
                        <div class="col-xl-5 mb-24 ">
                            <div class="profile card card--img ">
                                <img alt="" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" class="profile__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fme.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fme.jpg&amp;w=2048&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fme.jpg&amp;w=2048&amp;q=75"/>
                            </div>
                        </div>
                        <div class="col-xl-7 ">
                            <div class="details card card--light">
                                <h3 class="details__title">Hello, I &#x27;m Mariam Wallas, Based in Canada</h3>
                                <p class="details__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla pretium lacus, eu luctus neque ultricies a. Phasellus faucibus orci a purus mattis tincidunt ut non nulla. Donec ullamcorper sapien eget neque facilisis euismod.</p>
                                <ul class="details__list ">
                                    <li class="details__list-item">
                                        <span class="details__list-label">Phone :</span>
                                        
                                        + 113-804-9098
                                    </li>
                                    <li class="details__list-item">
                                        <span class="details__list-label">Nationality :</span>
                                        
                                        British
                                    </li>
                                    <li class="details__list-item">
                                        <span class="details__list-label">skype :</span>
                                        
                                        mariam.wallas
                                    </li>
                                    <li class="details__list-item">
                                        <span class="details__list-label">Email :</span>
                                        
                                        contact@mariam.com
                                    </li>
                                    <li class="details__list-item">
                                        <span class="details__list-label">Address :</span>
                                        
                                        1000 Proctor St USA
                                    </li>
                                    <li class="details__list-item">
                                        <span class="details__list-label">Freelancer :</span>
                                        
                                        Available
                                    </li>
                                </ul>
                                <div class="details__btn">
                                    <a href="/assets/images/cv.pdf" class="btn-default" download="">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                                        </svg>
                                        <span>
                                        
                                        Download My CV</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="opacity:0;transform:translateY(80px) translateZ(0)">
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="feature card card--light">
                                <h1 class="feature__number">+70</h1>
                                <p class="feature__text">Completed Projects</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="feature card card--light">
                                <h1 class="feature__number">+50</h1>
                                <p class="feature__text">Happy Customers</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="feature card card--light">
                                <h1 class="feature__number">+07</h1>
                                <p class="feature__text">Years of experience</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="feature card card--light">
                                <h1 class="feature__number">+15</h1>
                                <p class="feature__text">Awards won</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="opacity:0;transform:translateY(80px) translateZ(0)">
                        <div class="col-lg-6">
                            <div class="timeline card card--light ">
                                <div class="timeline__single">
                                    <h4 class="timeline__single__title">My Experience</h4>
                                    <div class="timeline__item ">
                                        <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="timeline__item__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75"/>
                                        <div class="timeline__item__content">
                                            <h6 class="timeline__item__title">Seinor UI/UX Desinger</h6>
                                            <div class="">
                                                <div class="timeline__item__info">
                                                    <span class="timeline__item__place">Spotify</span>
                                                    <span class="dot"></span>
                                                    <span class="timeline__item__year">
                                                    
                                                    2019 - Present</span>
                                                </div>
                                            </div>
                                            <p class="timeline__item__desc">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                                        </div>
                                    </div>
                                    <div class="timeline__item ">
                                        <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="timeline__item__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75"/>
                                        <div class="timeline__item__content">
                                            <h6 class="timeline__item__title">UI/UX Designer</h6>
                                            <div class="">
                                                <div class="timeline__item__info">
                                                    <span class="timeline__item__place">Spotify</span>
                                                    <span class="dot"></span>
                                                    <span class="timeline__item__year">
                                                    
                                                    2017 - 2018</span>
                                                </div>
                                            </div>
                                            <p class="timeline__item__desc">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                                        </div>
                                    </div>
                                    <div class="timeline__item ">
                                        <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="timeline__item__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fexp.png&amp;w=96&amp;q=75"/>
                                        <div class="timeline__item__content">
                                            <h6 class="timeline__item__title">Junior Visual Designer</h6>
                                            <div class="">
                                                <div class="timeline__item__info">
                                                    <span class="timeline__item__place">Spotify</span>
                                                    <span class="dot"></span>
                                                    <span class="timeline__item__year">
                                                    
                                                    2015 - 2016</span>
                                                </div>
                                            </div>
                                            <p class="timeline__item__desc">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="timeline card card--light ">
                                <div class="timeline__single">
                                    <h4 class="timeline__single__title">My Education</h4>
                                    <div class="timeline__item ">
                                        <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="timeline__item__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75"/>
                                        <div class="timeline__item__content">
                                            <h6 class="timeline__item__title">Engineering Degree</h6>
                                            <div class="">
                                                <div class="timeline__item__info">
                                                    <span class="timeline__item__place">Paris University </span>
                                                    <span class="dot"></span>
                                                    <span class="timeline__item__year">
                                                    
                                                    2015 - 2016</span>
                                                </div>
                                            </div>
                                            <p class="timeline__item__desc">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                                        </div>
                                    </div>
                                    <div class="timeline__item ">
                                        <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="timeline__item__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75"/>
                                        <div class="timeline__item__content">
                                            <h6 class="timeline__item__title">Engineering Degree</h6>
                                            <div class="">
                                                <div class="timeline__item__info">
                                                    <span class="timeline__item__place">Paris University </span>
                                                    <span class="dot"></span>
                                                    <span class="timeline__item__year">
                                                    
                                                    2015 - 2016</span>
                                                </div>
                                            </div>
                                            <p class="timeline__item__desc">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                                        </div>
                                    </div>
                                    <div class="timeline__item ">
                                        <img alt="" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="timeline__item__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fedu.png&amp;w=96&amp;q=75"/>
                                        <div class="timeline__item__content">
                                            <h6 class="timeline__item__title">Engineering Degree</h6>
                                            <div class="">
                                                <div class="timeline__item__info">
                                                    <span class="timeline__item__place">Paris University </span>
                                                    <span class="dot"></span>
                                                    <span class="timeline__item__year">
                                                    
                                                    2015 - 2016</span>
                                                </div>
                                            </div>
                                            <p class="timeline__item__desc">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services section section--light" id="services">
                <div class="container">
                    <div class="row" style="transform:translateX(0px) translateY(80px) translateZ(0)">
                        <div class="col-12">
                            <div class="heading">
                                <div class="heading__shape"></div>
                                <div class="heading__content">
                                    <h2>My Services</h2>
                                    <p>I Have Worked With A Number Of Clients..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="service card card--white">
                                <img alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" class="service__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fservices%2F1.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F1.png&amp;w=640&amp;q=75"/>
                                <div class="service__content">
                                    <h5 class="service__content__title">App Design &amp;Develop</h5>
                                    <p class="service__content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="service card card--white">
                                <img alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" class="service__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fservices%2F2.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F2.png&amp;w=640&amp;q=75"/>
                                <div class="service__content">
                                    <h5 class="service__content__title">Business Analysis</h5>
                                    <p class="service__content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="service card card--white">
                                <img alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" class="service__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fservices%2F3.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F3.png&amp;w=640&amp;q=75"/>
                                <div class="service__content">
                                    <h5 class="service__content__title">SEO Marketing</h5>
                                    <p class="service__content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="service card card--white">
                                <img alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" class="service__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fservices%2F4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F4.png&amp;w=640&amp;q=75"/>
                                <div class="service__content">
                                    <h5 class="service__content__title">Graphic Design</h5>
                                    <p class="service__content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="service card card--white">
                                <img alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" class="service__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fservices%2F5.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F5.png&amp;w=640&amp;q=75"/>
                                <div class="service__content">
                                    <h5 class="service__content__title">Web Development</h5>
                                    <p class="service__content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="service card card--white">
                                <img alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" class="service__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F6.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fservices%2F6.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fservices%2F6.png&amp;w=640&amp;q=75"/>
                                <div class="service__content">
                                    <h5 class="service__content__title">Branding</h5>
                                    <p class="service__content__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="project section section--white" id="projects">
                <div class="container">
                    <div class="row" style="transform:translateX(0px) translateY(80px) translateZ(0)">
                        <div class="col-12">
                            <div class="heading">
                                <div class="heading__shape"></div>
                                <div class="heading__content">
                                    <h2>My Projects</h2>
                                    <p>A Latest Creative Works In Design And Web .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row project__items">
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="project-item card card--light">
                                <div class="project-item__image">
                                    <img alt="project" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="project-item__image__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F1.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fprojects%2F1.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F1.jpg&amp;w=1080&amp;q=75"/>
                                    <div class="project-item__image__btn">
                                        <div class="btn-view">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-item__content">
                                    <div class="project-item__content__info">
                                        <h5 class="project-item__content__title">Cosmetic App</h5>
                                        <p class="project-item__content__subtitle">Cosmetic Design React Template</p>
                                    </div>
                                    <a class="btn-link" href="/projects/Cosmetic App">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="project-item__light"></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="project-item card card--light">
                                <div class="project-item__image">
                                    <img alt="project" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="project-item__image__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F2.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fprojects%2F2.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F2.jpg&amp;w=1080&amp;q=75"/>
                                    <div class="project-item__image__btn">
                                        <div class="btn-view">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-item__content">
                                    <div class="project-item__content__info">
                                        <h5 class="project-item__content__title">Landing Page</h5>
                                        <p class="project-item__content__subtitle">Architecture  Design Reactjs Template</p>
                                    </div>
                                    <a class="btn-link" href="/projects/Landing Page">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="project-item__light"></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="project-item card card--light">
                                <div class="project-item__image">
                                    <img alt="project" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="project-item__image__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F3.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fprojects%2F3.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F3.jpg&amp;w=1080&amp;q=75"/>
                                    <div class="project-item__image__btn">
                                        <div class="btn-view">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-item__content">
                                    <div class="project-item__content__info">
                                        <h5 class="project-item__content__title">Mobile App</h5>
                                        <p class="project-item__content__subtitle">Mobile App Reactjs Template</p>
                                    </div>
                                    <a class="btn-link" href="/projects/Mobile App">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="project-item__light"></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="project-item card card--light">
                                <div class="project-item__image">
                                    <img alt="project" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="project-item__image__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F4.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fprojects%2F4.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F4.jpg&amp;w=1080&amp;q=75"/>
                                    <div class="project-item__image__btn">
                                        <div class="btn-view">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-item__content">
                                    <div class="project-item__content__info">
                                        <h5 class="project-item__content__title">Architecture App</h5>
                                        <p class="project-item__content__subtitle">Architecture Design Reactjs Template</p>
                                    </div>
                                    <a class="btn-link" href="/projects/Architecture App">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="project-item__light"></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="project-item card card--light">
                                <div class="project-item__image">
                                    <img alt="project" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="project-item__image__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F5.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fprojects%2F5.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F5.jpg&amp;w=1080&amp;q=75"/>
                                    <div class="project-item__image__btn">
                                        <div class="btn-view">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-item__content">
                                    <div class="project-item__content__info">
                                        <h5 class="project-item__content__title">website App</h5>
                                        <p class="project-item__content__subtitle">Personal Portfolio React Template</p>
                                    </div>
                                    <a class="btn-link" href="/projects/website App">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="project-item__light"></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6" style="opacity:0;transform:translateY(80px) translateZ(0)">
                            <div class="project-item card card--light">
                                <div class="project-item__image">
                                    <img alt="project" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="project-item__image__img" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F6.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fprojects%2F6.jpg&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fprojects%2F6.jpg&amp;w=1080&amp;q=75"/>
                                    <div class="project-item__image__btn">
                                        <div class="btn-view">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="project-item__content">
                                    <div class="project-item__content__info">
                                        <h5 class="project-item__content__title">Agency App</h5>
                                        <p class="project-item__content__subtitle">Digital Agency Creative Template</p>
                                    </div>
                                    <a class="btn-link" href="/projects/Agency App">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="project-item__light"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="section__readmore">
                                For More Works Visit <a class="section__readmore-link" href="/projects">
                                
                                Our Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="testimonials section section--light" id="clients">
                <div class="container">
                    <div class="row" style="transform:translateX(0px) translateY(80px) translateZ(0)">
                        <div class="col-12">
                            <div class="heading">
                                <div class="heading__shape"></div>
                                <div class="heading__content">
                                    <h2>My Testimonials</h2>
                                    <p>What My Clients Say About Me .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="opacity:0;transform:translateY(80px) translateZ(0)">
                        <div class="col-lg-12">
                            <div class="swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testimonial card card--white">
                                            <div class="testimonial__image">
                                                <img alt="" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F1.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F1.jpg&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F1.jpg&amp;w=256&amp;q=75"/>
                                            </div>
                                            <p class="testimonial__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                            <div class="testimonial__info">
                                                <p class="testimonial__info__name">amar smith</p>
                                                <span class="dot"></span>
                                                <p class="testimonial__info__role">product manager</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial card card--white">
                                            <div class="testimonial__image">
                                                <img alt="" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F2.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F2.jpg&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F2.jpg&amp;w=256&amp;q=75"/>
                                            </div>
                                            <p class="testimonial__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                            <div class="testimonial__info">
                                                <p class="testimonial__info__name">Sara joe</p>
                                                <span class="dot"></span>
                                                <p class="testimonial__info__role">product manager</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial card card--white">
                                            <div class="testimonial__image">
                                                <img alt="" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F3.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F3.jpg&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F3.jpg&amp;w=256&amp;q=75"/>
                                            </div>
                                            <p class="testimonial__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                            <div class="testimonial__info">
                                                <p class="testimonial__info__name">Mariam saba</p>
                                                <span class="dot"></span>
                                                <p class="testimonial__info__role">product manager</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial card card--white">
                                            <div class="testimonial__image">
                                                <img alt="" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F1.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F1.jpg&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F1.jpg&amp;w=256&amp;q=75"/>
                                            </div>
                                            <p class="testimonial__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                            <div class="testimonial__info">
                                                <p class="testimonial__info__name">amar smith</p>
                                                <span class="dot"></span>
                                                <p class="testimonial__info__role">product manager</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonial card card--white">
                                            <div class="testimonial__image">
                                                <img alt="" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style="color:transparent" srcSet="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F2.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F2.jpg&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fimages%2Ftestimonials%2F2.jpg&amp;w=256&amp;q=75"/>
                                            </div>
                                            <p class="testimonial__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p>
                                            <div class="testimonial__info">
                                                <p class="testimonial__info__name">amar smith</p>
                                                <span class="dot"></span>
                                                <p class="testimonial__info__role">product manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact section section--white" id="contact">
                <div class="container">
                    <div class="row" style="transform:translateX(0px) translateY(80px) translateZ(0)">
                        <div class="col-12">
                            <div class="heading">
                                <div class="heading__shape"></div>
                                <div class="heading__content">
                                    <h2>Contact Me</h2>
                                    <p>Feel Free To Contact Me Any Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="opacity:0;transform:translateY(80px) translateZ(0)">
                        <div class="col-xl-7">
                            <form class="contact-form needs-validation card card--light" action="javascript:throw new Error(&#x27;A React form was unexpectedly submitted.&#x27;)">
                                <div class="row">
                                    <div class="col-md-6 mb-24">
                                        <input type="text" class="form-control contact-form__input" id="name" placeholder="Enter Your Name" required="" maxLength="500" name="senderName"/>
                                    </div>
                                    <div class="col-md-6 mb-24">
                                        <input type="email" class="form-control contact-form__input" id="email" placeholder="Enter Your Email" required="" maxLength="500" name="senderEmail"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 mb-24">
                                        <input type="text" class="form-control contact-form__input" id="subject" placeholder="Enter Your Subject" required="" maxLength="500" name="subject"/>
                                    </div>
                                    <div class="col-lg-12 mb-24">
                                        <textarea class="form-control contact-form__input contact-form__input--textarea" id="msg" name="message" placeholder="Enter Your Message" rows="5" required="" maxLength="5000"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn-default btn__submit">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                            </svg>
                                            <span>
                                            
                                            Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-xl-5">
                            <div class="contact__info card card--light">
                                <h4 class="contact__info-title">Let &#x27;s talk about everything!</h4>
                                <p class="contact__info-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                <div class="contact__info-items">
                                    <div class="contact__info-item">
                                        <span class="contact__info-item-icon">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path>
                                            </svg>
                                        </span>
                                        <span class="contact__info-item-value">+(684) 555-0102</span>
                                    </div>
                                    <div class="contact__info-item">
                                        <span class="contact__info-item-icon">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                                            </svg>
                                        </span>
                                        <span class="contact__info-item-value">mariamdemo@gmail.com</span>
                                    </div>
                                    <div class="contact__info-item">
                                        <span class="contact__info-item-icon">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                                            </svg>
                                        </span>
                                        <span class="contact__info-item-value">241 Royal Mesa, New Jersey</span>
                                    </div>
                                    <div class="contact__info-item ">
                                        <span class="contact__info-item-icon">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"></path>
                                            </svg>
                                        </span>
                                        <div class="contact__info-item-social-media">
                                            <ul class="social-media ">
                                                <li class="social-media__item">
                                                    <a class="social-media__link" href="#">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="social-media__item">
                                                    <a class="social-media__link" href="#">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="social-media__item">
                                                    <a class="social-media__link" href="#">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="social-media__item">
                                                    <a class="social-media__link" href="#">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="social-media__item">
                                                    <a class="social-media__link" href="#">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer ">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p class="footer__copyright">© 2024 Mariam Wallas , Are Right All Resereved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
        
        <div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"></div>
        <script>
            addEventListener("submit", function(a) {
                if (!a.defaultPrevented) {
                    var c = a.target
                      , d = a.submitter
                      , e = c.action
                      , b = d;
                    if (d) {
                        var f = d.getAttribute("formAction");
                        null != f && (e = f,
                        b = null)
                    }
                    "javascript:throw new Error('A React form was unexpectedly submitted.')" === e && (a.preventDefault(),
                    b ? (a = document.createElement("input"),
                    a.name = b.name,
                    a.value = b.value,
                    b.parentNode.insertBefore(a, b),
                    b = new FormData(c),
                    a.parentNode.removeChild(a)) : b = new FormData(c),
                    a = c.getRootNode(),
                    (a.$$reactFormReplay = a.$$reactFormReplay || []).push(c, d, b))
                }
            });
        </script>
        <script src="/_next/static/chunks/webpack-e83d2e45acbee9b2.js" crossorigin="" async=""></script>
        <script>
            (self.__next_f = self.__next_f || []).push([0]);
            self.__next_f.push([2, null])
        </script>
        <script>
            self.__next_f.push([1, "1:HL[\"/_next/static/css/d3df112486f97f47.css\",\"style\",{\"crossOrigin\":\"\"}]\n2:HL[\"/_next/static/css/cc9e74a1207450e3.css\",\"style\",{\"crossOrigin\":\"\"}]\n0:\"$L3\"\n"])
        </script>
        <script>
            self.__next_f.push([1, "4:HL[\"/_next/static/css/bef403e4b51110e5.css\",\"style\",{\"crossOrigin\":\"\"}]\n"])
        </script>
        <script>
            self.__next_f.push([1, "5:I[7690,[],\"\"]\n7:I[5803,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"220\",\"static/chunks/220-855f51d9e9f39f54.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"366\",\"static/chunks/366-221b5e1ad327049f.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"538\",\"static/chunks/538-49cb50ea7fb619ba.js\",\"59\",\"static/chunks/59-f01b978d08b12fe8.js\",\"931\",\"static/chunks/app/page-b932b127aaaead97.js\"],\"\"]\n8:I[6915,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"220\",\"static/chunks/220-855f51d9e9f39f54.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"366\",\"static/chunks/366-221b5e1ad327049f.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"538\",\"static/chunks/538-49cb50ea7fb619ba.js\",\"59\",\"static/chunks/59-f01b978d08b12fe8.js\",\"931\",\"static/chunks/app/page-b932b127aaaead97.js\"],\"\"]\n9:I[5907,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"220\",\"static/chunks/220-855f51d9e9f39f54.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"366\",\"static/chunks/366-221b5e1ad327049f.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"538\",\"static/chunks/538-49cb50ea7fb619ba.js\",\"59\",\"static/chunks/59-f01b978d08b12fe8.js\",\"931\",\"static/chunks/app/page-b932b127aaaead97.js\"],\"\"]\na:I[491,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"220\",\"static/chunks/220-855f51d9e9f39f54.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"366\",\"static/chunks/366-221b5e1ad327049f.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"538\",\"static/chunks/538-49cb50ea7fb619ba.js\",\"59\",\"static/chunks/59-f01b978d08b12fe8.js\",\"931\",\"static/chunks/app/page-b932b127aaaead97.js\"],\"\"]\nb:I[2922,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"220\",\"static/chunks/220-855f51d9e9f39f54.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"366\",\"static/chunks/366-221b5e1ad327049f.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c"])
        </script>
        <script>
            self.__next_f.push([1, "8.js\",\"538\",\"static/chunks/538-49cb50ea7fb619ba.js\",\"59\",\"static/chunks/59-f01b978d08b12fe8.js\",\"931\",\"static/chunks/app/page-b932b127aaaead97.js\"],\"\"]\nc:I[2823,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"220\",\"static/chunks/220-855f51d9e9f39f54.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"366\",\"static/chunks/366-221b5e1ad327049f.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"538\",\"static/chunks/538-49cb50ea7fb619ba.js\",\"59\",\"static/chunks/59-f01b978d08b12fe8.js\",\"931\",\"static/chunks/app/page-b932b127aaaead97.js\"],\"\"]\nd:I[377,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"ThemeProvider\"]\ne:I[9050,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"\"]\nf:I[6431,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"\"]\n10:I[7622,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"\"]\n11:I[5250,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"\"]\n12:I[1749,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\","])
        </script>
        <script>
            self.__next_f.push([1, "\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"Image\"]\n13:I[7242,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"\"]\n14:I[2933,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"\"]\n15:I[5613,[],\"\"]\n16:I[1778,[],\"\"]\n17:I[8009,[\"779\",\"static/chunks/0e762574-1192116830576aeb.js\",\"749\",\"static/chunks/749-d1e91c901d9002c8.js\",\"792\",\"static/chunks/792-90506180ab9675cf.js\",\"826\",\"static/chunks/826-bdb646b45edcf9c8.js\",\"185\",\"static/chunks/app/layout-59eabde9ae46bf65.js\"],\"Toaster\"]\n19:I[8955,[],\"\"]\n1a:[]\n"])
        </script>
        <script>
            self.__next_f.push([1, "3:[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/d3df112486f97f47.css\",\"precedence\":\"next\",\"crossOrigin\":\"\"}],[\"$\",\"link\",\"1\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/cc9e74a1207450e3.css\",\"precedence\":\"next\",\"crossOrigin\":\"\"}]],[\"$\",\"$L5\",null,{\"buildId\":\"iW_Qyg7u4EiKUIS1rJk1b\",\"assetPrefix\":\"\",\"initialCanonicalUrl\":\"/\",\"initialTree\":[\"\",{\"children\":[\"__PAGE__\",{}]},\"$undefined\",\"$undefined\",true],\"initialSeedData\":[\"\",{\"children\":[\"__PAGE__\",{},[\"$L6\",[\"$\",\"main\",null,{\"className\":\"main\",\"children\":[[\"$\",\"$L7\",null,{}],[\"$\",\"$L8\",null,{}],[\"$\",\"$L9\",null,{}],[\"$\",\"$La\",null,{}],[\"$\",\"$Lb\",null,{}],[\"$\",\"$Lc\",null,{}],[\"$\",\"footer\",null,{\"className\":\"footer \",\"children\":[\"$\",\"div\",null,{\"className\":\"container\",\"children\":[\"$\",\"div\",null,{\"className\":\"row\",\"children\":[\"$\",\"div\",null,{\"className\":\"col-12\",\"children\":[\"$\",\"p\",null,{\"className\":\"footer__copyright\",\"children\":\"© 2024 Mariam Wallas , Are Right All Resereved.\"}]}]}]}]}]]}],null]]},[null,[\"$\",\"html\",null,{\"lang\":\"en\",\"suppressHydrationWarning\":true,\"children\":[\"$\",\"body\",null,{\"children\":[\"$\",\"$Ld\",null,{\"attribute\":\"class\",\"defaultTheme\":\"light\",\"children\":[[\"$\",\"$Le\",null,{}],[\"$\",\"$Lf\",null,{}],[\"$\",\"$L10\",null,{\"children\":[[\"$\",\"header\",null,{\"className\":\"header header--left\",\"children\":[\"$\",\"div\",null,{\"className\":\"header__container\",\"children\":[[\"$\",\"div\",null,{\"className\":\"header__logo\",\"children\":[\"$\",\"$L11\",null,{\"href\":\"/\",\"children\":[\"$\",\"$L12\",null,{\"src\":\"/assets/images/logo.png\",\"alt\":\"logo\",\"width\":45,\"height\":50,\"className\":\"header__logo-image\"}]}]}],[\"$\",\"$L13\",null,{}],[\"$\",\"$L14\",null,{}]]}]}],[\"$\",\"$L15\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\"],\"loading\":[\"$\",\"$Le\",null,{}],\"loadingStyles\":[],\"loadingScripts\":[],\"hasLoading\":true,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$L16\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":[\"$\",\"main\",null,{\"className\":\"main\",\"children\":[[\"$\",\"section\",null,{\"className\":\"error-page section \",\"children\":[\"$\",\"div\",null,{\"className\":\"container\",\"children\":[\"$\",\"div\",null,{\"className\":\"row\",\"children\":[\"$\",\"div\",null,{\"className\":\"col-lg-6 offset-lg-3\",\"children\":[\"$\",\"div\",null,{\"className\":\"error-page__banner\",\"children\":[[\"$\",\"$L12\",null,{\"src\":\"/assets/images/page404.png\",\"alt\":\"Oops, looks like the page not found\",\"width\":1716,\"height\":1435,\"className\":\"error-page__banner-img\"}],[\"$\",\"h2\",null,{\"className\":\"error-page__banner-title\",\"children\":\"Oops, looks like the page not found\"}],[\"$\",\"p\",null,{\"className\":\"error-page__banner-desc\",\"children\":\"Its looks like nothing was found at this location \"}],[\"$\",\"a\",null,{\"href\":\"/\",\"className\":\"btn-default\",\"download\":false,\"children\":[[\"$\",\"svg\",null,{\"stroke\":\"currentColor\",\"fill\":\"currentColor\",\"strokeWidth\":\"0\",\"viewBox\":\"0 0 16 16\",\"children\":[\"$undefined\",[[\"$\",\"path\",\"0\",{\"d\":\"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z\",\"children\":[]}],[\"$\",\"path\",\"1\",{\"d\":\"m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z\",\"children\":[]}]]],\"className\":\"$undefined\",\"style\":{\"color\":\"$undefined\"},\"height\":\"1em\",\"width\":\"1em\",\"xmlns\":\"http://www.w3.org/2000/svg\"}],[\"$\",\"span\",null,{\"children\":[\" \",\"Go Back to Home\"]}]]}]]}]}]}]}]}],[\"$\",\"footer\",null,{\"className\":\"footer \",\"children\":[\"$\",\"div\",null,{\"className\":\"container\",\"children\":[\"$\",\"div\",null,{\"className\":\"row\",\"children\":[\"$\",\"div\",null,{\"className\":\"col-12\",\"children\":[\"$\",\"p\",null,{\"className\":\"footer__copyright\",\"children\":\"© 2024 Mariam Wallas , Are Right All Resereved.\"}]}]}]}]}]]}],\"notFoundStyles\":[],\"styles\":[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/bef403e4b51110e5.css\",\"precedence\":\"next\",\"crossOrigin\":\"\"}]]}],[\"$\",\"$L17\",null,{\"position\":\"bottom-center\"}]]}]]}]}]}],null]],\"initialHead\":[false,\"$L18\"],\"globalErrorComponent\":\"$19\",\"missingSlots\":\"$W1a\"}]]\n"])
        </script>
        <script>
            self.__next_f.push([1, "18:[[\"$\",\"meta\",\"0\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"$\",\"meta\",\"1\",{\"charSet\":\"utf-8\"}],[\"$\",\"title\",\"2\",{\"children\":\"Mariam - Personal Portfolio Nextjs Template\"}],[\"$\",\"link\",\"3\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\",\"type\":\"image/x-icon\",\"sizes\":\"256x256\"}]]\n6:null\n"])
        </script>
        <script>
            self.__next_f.push([1, ""])
        </script>
    </body>
</html>
