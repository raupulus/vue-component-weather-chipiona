<template>
<div id="box-weather-chipiona">
  <div class="container">

    <div class="box-resume m-0 p-0">

      <div class="box-resume-center">
        <div class="resume-gradient"></div>

        <!-- Bloque con información general del tiempo -->
        <div>
          <div class="resume-container-date">
            <h2 class="resume-date-dayname">
              {{ this.info.dayName }}
            </h2>

            <span class="resume-date-day">
              {{ this.info.dateHumanFormat }}
            </span>

            <span class="icon icon-location"></span>

            <span class="resume-location">
              Chipiona, Es
            </span>
          </div>

          <div class="resume-weather-container">
            <!-- Muestra información general -->
            <div v-show="this.navigation.info">
              <span class="icon icon-sun"></span>

              <h1 class="resume-weather-temp">
                {{ this.info.temperature }} ºC
              </h1>
              
              <h3 class="resume-weather-desc">
                {{ this.info.time }}
                <br />
                {{ this.info.dayStatus }}
              </h3>
            </div>

            <!-- Muestra información del viento -->
            <div v-show="this.navigation.wind">
              <span class="icon icon-wind"></span>

              Aquí el viento
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              Último
            </div>

            <!-- Muestra información de calidad del aire -->
            <div v-show="this.navigation.tvoc">
              <span class="icon icon-wind"></span>

              Aquí Calidad del aire
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              Último
            </div>

            <!-- Muestra información de rayos UV -->
            <div v-show="this.navigation.uv">
              <span class="icon icon-wind"></span>

              Aquí UV
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              asdfasd
              <br />
              Último
            </div>


          </div>
        </div>
      </div>

    </div>

    <div class="box-selectors m-0 p-0">

      <div class="selectors-container">
        <ul class="selector-list">
          <li :class="{active: this.navigation.info}" @click="menuSelect('info')">
            <span class="icon icon-info"></span>

            <span class="selector-element">
              General
            </span>
          </li>

          <li :class="{active: this.navigation.wind}" @click="menuSelect('wind')">
            <i class="icon icon-wind"></i>

            <span class="selector-element">
              Viento
            </span>
          </li>

          <li :class="{active: this.navigation.tvoc}" @click="menuSelect('tvoc')">
            <i class="icon icon-tvoc"></i>

            <span class="selector-element">
                TVOC
            </span>
          </li>

          <li :class="{active: this.navigation.uv}" @click="menuSelect('uv')">
            <i class="icon icon-uv"></i>

            <span class="selector-element">
                UV
            </span>
          </li>

        </ul>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  /*
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
  */
 data() {
   return {
      info: {
        temperature: 29,
        timestamp: '2020-09-27',
        dayName: 'Domingo',
        dateHumanFormat: '27 Septiembre 2020',
        dayStatus: 'Muy Soleado',
        time: '21:05',
      },
      wind: {

      }, 
      tvoc: {

      }, 
      uv: {
        
      },

      navigation: {
        info: true,
        wind: false,
        tvoc: false,
        uv: false,
      }
   }
  },
  created() {
    //
  },
 mounted() {
   console.log('Temperature: ' + this.info.temperature);

  /*
   fetch('/weather').then(data => {
      this.data = data;
    });
    */
 },
 /*
 computed() {
   return {

   }
 },
 */
 methods: {
    menuSelect(item) {
      console.log(this.navigation);

      Object.entries(this.navigation).forEach(([key, val]) => {
        console.log('val: ' + val);

        if (key == item) {
          this.navigation[key] = true;
        } else {
          this.navigation[key] = false;
        }
      });
    }
 }
};
</script>

<style lang="scss" scoped>
.m-0 {
  margin: 0;
}
.p-0 {
  padding: 0;
}

#box-weather-chipiona {
	margin: 0;
	width: 100%;
}

.container {
	margin: auto;
  padding: 1vh;
  max-width: 500px;
  color: #ffffff;
}

/* Iconos */
.icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: cover;
}

.icon-sun {
  background-image: url('./assets/sun.svg');
  filter: invert(87%) sepia(31%) saturate(5000%) hue-rotate(346deg) brightness(104%) contrast(97%);
}

.icon-location {
  width: 20px;
  height: 20px;
  background-image: url('./assets/location.svg');
  color: #ff0000 !important;
  filter: invert(37%) sepia(51%) saturate(3000%) hue-rotate(346deg) brightness(104%) contrast(97%);
}

.icon-info {
  background-image: url('./assets/info.svg');
}

.icon-wind {
  background-image: url('./assets/wind.svg');
}

.icon-tvoc {
  background-image: url('./assets/tvoc.svg');
}

.icon-uv {
  background-image: url('./assets/uv.svg');
}

/* Box Resume */
.box-resume {
  width: 100%;
  min-height: 300px;

}

.box-resume-center {
	border-radius: 25px;
	background-image: url("./assets/chipiona.webp");
	width: 100%;
  min-height: 300px;
	-webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
	-webkit-transition: -webkit-transform 400ms ease;
	transition: -webkit-transform 400ms ease;
	-o-transition: transform 400ms ease;
	transition: transform 400ms ease;
	transition: transform 400ms ease, -webkit-transform 400ms ease;
	-webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
	transform: translateZ(0) scale(1.02) perspective(1000px);
  --gradient: linear-gradient(90deg, rgba(81,81,229,0.6) 20%, rgba(68, 218, 255, 0.2) 100%);
}

.box-resume-center:hover {
	-webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
	transform: scale(1.1) perspective(1500px) rotateY(10deg);
}

.resume-gradient {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: var(--gradient);
	border-radius: 25px;
	opacity: 0.8;
}

.resume-container-date {
	position: absolute;
	top: 25px;
	left: 25px;
}

.resume-date-dayname {
	margin: 0;
}

.resume-date-day {
	display: block;
}

.resume-location {
	display: inline-block;
	margin-top: 10px;
}

.resume-location-icon {
	display: inline-block;
	height: 0.8em;
	width: auto;
	margin-right: 5px;
}

.resume-weather-container {
	position: absolute;
	bottom: 25px;
	left: 25px;
}

.resume-weather-temp {
	margin: 0;
	font-weight: 700;
	font-size: 4em;
  text-shadow: 3px 3px 3px #222831;
}

.resume-weather-desc {
	margin: 0;
}

/* Box Selectors - Menú inferior de selección */
.box-selectors {
  margin-top: -15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 16px;
  padding-bottom: 1px;
  width: 95%;
  min-height: 90px;
  background-color: #222831;
  text-align: center;
  border-radius: 0 0 20px 20px;
}

.selector-list {
	padding: 2px 0;
	border-radius: 10px;
}

.selector-list > li {
  display: inline-block;
	padding: 15px;
	cursor: pointer;
	-webkit-transition: 200ms ease;
	-o-transition: 200ms ease;
	transition: 200ms ease;
	border-radius: 10px;
}

.selector-list > li:hover {
	-webkit-transform: scale(1.1);
	-ms-transform: scale(1.1);
	transform: scale(1.1);
	background: #fff;
	color: #222831;
	-webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
}

.selector-list > li > .icon {
	filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
}

.selector-list > li:hover > .icon, .selector-list > li.active > .icon {
  filter: none;
}

.selector-list > li.active {
	background: #fff;
	color: #222831;
	border-radius: 10px;
}

.selector-list > li .selector-element {
	display: block;
	margin: 10px 0 0 0;
	text-align: center;
}
</style>