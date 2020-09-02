<template>
  <div class="contentContainer">
    <div class="homeTitle">
      <p id="homeTitle1">FULL STACK</p>
      <p id="homeTitle2">ENGINEER</p>
    </div>
    <div class="skillAndLogo">
      <div class="skillHolder">
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/nuxt-icon.png" class="skillLogo" alt="Nuxt JS" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/vue-icon.png" class="skillLogo" alt="Vue JS" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/angular-icon.png" class="skillLogo" alt="Angular" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/node-icon.png" class="skillLogo" alt="Node JS" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/mongo-icon.png" class="skillLogo" alt="Mongo DB" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/jest-icon.png" class="skillLogo" alt="Jest" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/spring-icon.png" class="skillLogo" alt="Spring" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/flutter-icon.png" class="skillLogo" alt="Flutter" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/csharp-icon.png" class="skillLogo" alt="C#" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/cpp-icon.png" class="skillLogo" alt="C++" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/mysql-icon.png" class="skillLogo" alt="MySQL" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/postgres-icon.png" class="skillLogo" alt="PostgreSQL" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/unity-icon.png" class="skillLogo" alt="Unity 3D" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/unreal-icon.png" class="skillLogo" alt="Unreal Engine" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/git-icon.png" class="skillLogo" alt="Version Control" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/jenkins-icon.png" class="skillLogo" alt="Jenkins" />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img
              src="/img/homepagelogos/photoshop-icon.png"
              class="skillLogo"
              alt="Adobe Photoshop"
            />
          </div>
        </div>
        <div class="skillClass">
          <div class="skillImageHolder">
            <img src="/img/homepagelogos/xd-icon.png" class="skillLogo" alt="Adobe XD" />
          </div>
        </div>
      </div>
      <div class="logoHolder">
        <img id="homeLogoID" src="/img/common/homelogo.png" class="logoImg" alt="Aghil Jose Logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contentContainer {
  position: absolute;
  overflow: auto;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 6fr 4fr;
}
.homeTitle {
  position: relative;
  font-size: 10vw;
  padding: 0% 0% 0% 5%;
}
.skillAndLogo {
  position: relative;
  display: grid;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: auto;
}
#homeLogoID {
  object-fit: contain;
}
.logoHolder {
  display: flex;
  justify-content: center;
}
.skillHolder {
  display: unset;
  padding: 2%;
}
.skillClass {
  padding: 2%;
  display: inline-block;
  transition: 0.5s;
}
.skillImageHolder {
  height: 2.5vw;
  width: 2.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.skillLogo {
  object-fit: contain;
}
.skillClass :hover {
  transform: scale(1.05);
}
@media only screen and (max-width: 600px) {
  .contentContainer {
    height: 72vh;
    grid-template-rows: 2.5fr 5.5fr;
  }
  .homeTitle {
    font-size: 14vw;
    padding: 0% 0% 0% 0%;
    margin: 0%;
  }
  .skillAndLogo {
    top: 0%;
    grid-template-columns: auto;
  }
  .skillHolder {
    display: grid;
    grid-template-columns: repeat(9, auto);
    justify-content: space-around;
    /* grid-template-rows: auto auto auto; */
    padding: 0%;
  }
  .skillImageHolder {
    height: 8vw;
    width: 8vw;
    align-self: center;
  }
}
</style>
