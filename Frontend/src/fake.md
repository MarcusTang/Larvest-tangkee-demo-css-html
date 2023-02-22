<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />

    <link rel="stylesheet" href="src/css/general.css" />
    <link rel="stylesheet" href="src/css/style.css" />

    <script defer src="src/js/index.js"></script>

    <title>Larvest Tangkee</title>

  </head>
  <body>
    <header class="header">
      <div class="logo-position">
        <a href="#">
          <img
            class="logo"
            alt="Larvest Tangkee Logo"
            src="src/image/logo/GuangFeng-logo.jpg"
          />
      </div>
      
     <nav class="main-nav">
      <ul class="main-nav-list">
        <li><a class="main-nav-link" href="#introduction">Introduction</a></li>
        <li><a class="main-nav-link" href="#product">Product</a></li>
        <li><a class="main-nav-link" href="#processing-facilities">Processing Facilities</a></li>
        <li><a class="main-nav-link" href="#procurement-sales">Procurment & Sales</a></li>
        <li><a class="main-nav-link" href="#mission-vision">Mission&Vision</a></li>
      </ul>
     </nav>

     <!-- <button class="btn-mobile-nav">
      <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
    </button> -->
    </header>

    <main>
      <section class="section-hero">
        <div class ="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              Processing nature's goodness for a healthier world
            </h1>
            <p class="hero-description">
              Our grain and bean processing company sources
              and distributes high-quality grains and beans worldwide,
               using state-of-the-art processing technology to ensure they
               meet the highest standards of purity and sustainability.
               With a focus on quality, service, and environmental responsibility,
                we are a trusted partner for customers looking for organic, non-GMO,
                or gluten-free options.
            </p>
            <a href="#introduction" class="btn btn--outline">Learn more about us &darr;</a>
          </div>
          <div class="hero-img-box">
              <img
                src="src/image/hero-picture.jpg"
                class="hero-img"
                alt="Five grains photo"
              />

          </div>

        </div>
      </section>



      <section class="section-introduction" id="introduction">
        <div class="container">
          <span class ='subheading'>Founded</span>
          <h2 class="'heading-secondary">Company Introduction</h2>


        </div>
        <div class="company-founded">
          <p class="company-description">
            Founded in 1993 in Guangzhou of China,
             Guangzhou Guang Feng Foods Co., Ltd.
             is a company specially concentrates on pulses,
             rice, and peanuts processing and distribution with customers all over China.
             The raw materials for various are from the origins of China, Southern/Eastern Africa,
              Canada, Myanmar, Thailand, Vietnam, Australia, South America,
              etc.. Guangfeng has three processing factories
               located in three different harbor cities,
               with the total area about 50,000 m².
               The facilities of these three factories include pre-cleaning,
                gravity selecting, destoner, magnetic separator, color sorter,
                dehulling machine, and retailing packing etc.. With over 20 years of developing,
                  product range of only pulses has been enlarged to over 10 varieties such as
                  dehulled/natural green mungbeans, peas, adzuki, black soya beans,
                   non-GMO soy beans, black eye beans, red bamboo beans, lentils and chickpeas.
                   The import volume has already been over 70,000 MT every year and
                   is expected to be increased by 25% every year in the future.
          </p>

        </div>
      </section>
      <section class="section-product" id="product">
        <div class="container center-text">
          <span class="subheading">Main Products</span>
          <h2 class="heading-secondary">
            From farm to table, a nutritious and sustainable choice.
          </h2>
        </div>

        <div class="container grid grid--3-cols margin-bottom-md">
          <div class="meal">
            <img
              src="src/image/products/five color brown rice/five color brown rice.webp"
              class="meal-img"
              alt="five color brown rice"
            />
            <div class="meal-content">
              <!-- <div class="meal-tags">
                <span class="tag tag--vegetarian">Vegetarian</span>
              </div> -->
              <p class="meal-title">Five Color Brown Rice</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span><strong>650</strong> calories</span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>NutriScore &reg; <strong>74</strong></span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span><strong>4.9</strong> rating (537)</span>
                </li>
              </ul>
            </div>
          </div>

      </section>
      <section class="section-processing-facilities" id="processing-facilities">
        <div class="container">
          <span class="subheading">Processing Facilities</span>
          <h2 class="heading-secondary">
            Advanced technology for superior quality and safety
          </h2>
        </div>
        <div class="container grid grid--2-cols grid--center-v">
          <!-- STEP 01 -->
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p class="step-description">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>

          <div class="step-img-box">
            <img
              src="#"
              class="step-img"
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          <!-- STEP 02 -->
          <div class="step-img-box">
            <img
              src="#"
              class="step-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
            <p class="step-description">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>

          <!-- STEP 03 -->
          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">Receive meals at convenient time</h3>
            <p class="step-description">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div class="step-img-box">
            <img
              src="#"
              class="step-img"
              alt="iPhone app
            delivery screen"
            />
          </div>
        </div>
      </section>
      <section class="section-procurment-sale" id="procurement-sales">
        <div class="container">
          <span class="subheading">Procurement & Sale</span>
          <h2 class="heading-secondary">
            Sourcing and delivering quality products to meet your needs
          </h2>
        </div>
        <div>
          <h3>Overseas Procurment</h3>
          <h3>Demestic Procurment</h3>

        </div>
      </section>
      <section class="section-mission-vision" id="mission-vision">
        <div class="container">
          <span class="subheading">Mission&Vision</span>
          <h2 class="heading-secondary">
            Partnering for a better future: Providing quality, sustainable products and empowering our community
          </h2>
        </div>
        <h3>Mission</h3>
        <h3>Vison</h3>
      </section>

    </main>

    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img class="logo" alt="Larvest Tangkee Logo" src="src/image/logo/GuangFeng-logo.jpg"

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-instagram"></ion-icon
              ></a>
            </li>
            <li>
              <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-facebook"></ion-icon
              ></a>
            </li>
            <li>
              <a class="footer-link" href="#"
                ><ion-icon class="social-icon" name="logo-twitter"></ion-icon
              ></a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; <span class="year">2023</span> by Guangzhou Guang Feng Foods Co., Ltd.
            All rights reserved.
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class="footer-link" href="tel:415-201-6370">415-201-6370</a
              ><br />
              <a class="footer-link" href="mailto:hello@omnifood.com"
                >hello@omnifood.com</a
              >
            </p>
          </address>
        </div>



        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">About Omnifood</a></li>
            <li><a class="footer-link" href="#">For Business</a></li>
            <li><a class="footer-link" href="#">Cooking partners</a></li>
            <li><a class="footer-link" href="#">Careers</a></li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li><a class="footer-link" href="#">Recipe directory </a></li>
            <li><a class="footer-link" href="#">Help center</a></li>
            <li><a class="footer-link" href="#">Privacy & terms</a></li>
          </ul>
        </nav>
      </div>
    </footer>

  </body>
</html>
