<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper'


  export default {
    name: 'App',
    components: {
      vMainWrapper
    }
  }
</script>

<style>
@font-face {
    font-family: 'font0f6e082f42f5247d82c3ade9c2a8f928';
        
        src:    url('https://nomail.com.ua/files/eot/0f6e082f42f5247d82c3ade9c2a8f928.eot?#iefix') format('embedded-opentype'),
                url('https://nomail.com.ua/files/woff/0f6e082f42f5247d82c3ade9c2a8f928.woff') format('woff'),
                url('https://nomail.com.ua/files/woff2/0f6e082f42f5247d82c3ade9c2a8f928.woff2') format('woff2');
    }

@font-face { font-family: 'Gilroy-ExtraBold';  src: local('Gilroy-ExtraBold'), url('https://nomail.com.ua/files/woff/0f6e082f42f5247d82c3ade9c2a8f928.woff') format('woff'); }
  
@font-face {
    font-family: 'fontd90fa984926d3745c7e68bc525692c26';
        
        src:    url('https://nomail.com.ua/files/eot/d90fa984926d3745c7e68bc525692c26.eot?#iefix') format('embedded-opentype'),
                url('https://nomail.com.ua/files/woff/d90fa984926d3745c7e68bc525692c26.woff') format('woff'),
                url('https://nomail.com.ua/files/woff2/d90fa984926d3745c7e68bc525692c26.woff2') format('woff2');
    }
    
@font-face { font-family: 'Gilroy-Light';  src: local('Gilroy-Light'), url('https://nomail.com.ua/files/woff/d90fa984926d3745c7e68bc525692c26.woff') format('woff'); } 

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffffff;
}

li {
    list-style-type: none;
}

a {
    color: #262525;
}

a:hover {
    text-decoration: none;
    color: #262525;
}

.title {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;

  letter-spacing: -0.0255199px;
  text-transform: uppercase;

  color: #262525;

  margin-bottom: 40px;
}

.description {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;

  letter-spacing: -0.0220791px;

  color: #262525;

  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: clip;

  height: 90px;
}

.description{
  background-image: url(./assets/LinkDetail.svg);
  background-repeat: no-repeat;
  background-position: right bottom;
}

.navigation {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 20px;

  color: #505050;

  position: absolute;
  margin-top: 30%;
}
</style>
