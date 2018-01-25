const app = angular.module("myPage", ['ngRoute', 'ngResource']);

app.controller("mainCtrl", ($scope, $location, $anchorScroll, translation) => {
  $scope.appName = "Geocarlos";
  $scope.lang = navigator.language.substring(0, 2);
  if($scope.lang !== "en" || $scope.lang !== "pt"){
    $scope.lang = "en";
  }
  $scope.strings = translation.getStrings();
  $scope.goTo = (id) => {
    $location.hash(id);
    $anchorScroll();
  }
});

app.service("translation", function() {
  this.getStrings = () => {
    return {
      introduction: {
        en: "I am ",
        pt: "Eu sou o "
      },
      welcomeMessage: {
        en: "Welcome to my GitHub Page!",
        pt: "Bem-vindo(a) à minha Página do GitHub!"
      },
      about: {
        en: "About me",
        pt: "Quem sou"
      },
      aboutText: {
        en: `During my life, I have worked in many jobs, and one of them is text translation. I have worked
        as a freelance translator for over 10 years, and most of my experience is in software localization.
        Recently (August 2017) I got a degree in technology in system analysis and development, and I seek
        and hope to start a new career in software development. I am interested in opportunities both in
        software development and in translation. Do you think I might be helpful in a project of yours,
        whether it is in software development, or translation, or both? Please contact me and let's talk
        about it!`,
        pt: `Ao longo da vida, trabalhei em muitas coisas, e uma delas é tradução de textos. Trabalho como
        tradutor freelancer há mais de 10 anos, sendo minha maior experiência na área de localizaçao de
        software. Recentemente (agosto de 2017), graduei-me como tecnólogo em análise e desenvolvimento de
        sistemas e estou na busca e esperança de começar uma nova carreira na área de desenvolvimento de
        software. Tenho interesse em oportunidades tanto na área de desenvolvimento de software quanto na
        área de tradução. Acha que posso ser útil em algum projeto de seu, seja de desenvolvimento de software,
        seja de tradução, seja ambos? Entre em contato comigo e vamos conversar!`
      },
      contact: {
        en: "Contact me",
        pt: "Contato"
      },
      home:{
        en: "Home",
        pt: "Início"
      }
    }
  }
});
