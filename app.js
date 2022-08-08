(() => {
  CustomBindHandler('re-animate', (handler, context) => {
    console.log('animate');
    let container = context.containers[context.active_container];
    if (!container.text) {
      handler.element.style.animation = 'none';
      // Force animation again
      setTimeout(() => {handler.element.style.animation = ''}, 120);
    }
  });

  // These are literally recordings of my keystrokes being replayed on the site
  const Greets = {
    morning: [
      { key: " ", time: 1113 },
      { key: "g", time: 1293 },
      { key: "o", time: 1529 },
      { key: "o", time: 1642 },
      { key: "d", time: 1732 },
      { key: " ", time: 1811 },
      { key: "a", time: 1979 },
      { key: "f", time: 2126 },
      { key: "t", time: 2677 },
      { key: null, time: 3228 },
      { key: null, time: 3352 },
      { key: null, time: 3622 },
      { key: " ", time: 4376 },
      { key: "m", time: 4690 },
      { key: "o", time: 4792 },
      { key: "r", time: 4915 },
      { key: "n", time: 5017 },
      { key: "i", time: 5118 },
      { key: "n", time: 5219 },
      { key: "g", time: 5230 },
      { key: "!", time: 5455 },
    ],
    afternoon: [
      { key: " ", time: 1158 },
      { key: "g", time: 1283 },
      { key: "o", time: 1361 },
      { key: "o", time: 1497 },
      { key: "d", time: 1598 },
      { key: " ", time: 1688 },
      { key: "m", time: 1834 },
      { key: "o", time: 1958 },
      { key: "r", time: 2250 },
      { key: null, time: 3015 },
      { key: null, time: 3150 },
      { key: null, time: 3262 },
      { key: "a", time: 3713 },
      { key: "f", time: 3904 },
      { key: "t", time: 4061 },
      { key: "e", time: 4196 },
      { key: "r", time: 4286 },
      { key: "n", time: 4365 },
      { key: "o", time: 4489 },
      { key: "o", time: 4646 },
      { key: "n", time: 4714 },
      { key: "!", time: 4961 },
    ],
    evening: [
      { key: " ", time: 1215 },
      { key: "g", time: 1417 },
      { key: "o", time: 1541 },
      { key: "o", time: 1665 },
      { key: "d", time: 1788 },
      { key: " ", time: 1856 },
      { key: "a", time: 1968 },
      { key: "f", time: 2160 },
      { key: "t", time: 2317 },
      { key: "e", time: 2497 },
      { key: null, time: 3386 },
      { key: null, time: 3476 },
      { key: null, time: 3588 },
      { key: null, time: 3926 },
      { key: "e", time: 4117 },
      { key: "v", time: 4241 },
      { key: "e", time: 4286 },
      { key: "n", time: 4387 },
      { key: "i", time: 4578 },
      { key: "n", time: 4601 },
      { key: "g", time: 4657 },
      { key: "!", time: 4950 },
    ],
  };
  const CurrentGreet = Greets[getCurrentGreet()];
  const AboutMe = `
    Hi, my name is David Munoz.
  `

  let Renderer = new Bind({
    id: "main-content",
    bind: {
      greet: "",
      active_container: 0,
      reAnimate: 0,
      contentReady: false,
      containers: [
        {
          text: null,
          title: '<'
        },
        {
          id: 'about_me',
          title: "Who am I?",
          text: AboutMe
        },
        {
          title: null
        },
        {
          id: 'projects',
          title: 'My projects',
          text: 'Content'
        },
        {
          title: null
        },
        {
          id: 'embeded_projects',
          title: 'Personal Favorites',
          text: 'Content' 
        }
      ],
      animationTriggers: {
        bottom_leaf: false
      },
      setActiveIndex: (index) => {
        let container = Renderer.bind.containers[index];
        if (container.title) {
          Renderer.bind.active_container = index;
        }
      }
    },
  });

  CurrentGreet.forEach((data, i) => {
    setTimeout(() => {
      if (data.key) {
        Renderer.bind.greet += data.key;
      } else {
        Renderer.bind.greet = Renderer.bind.greet.slice(0, -1); 
      }
    }, data.time);
  });

  // Content ready
  setTimeout(() => {
    Renderer.bind.contentReady = true;
    Renderer.bind.animationTriggers.bottom_leaf = !Renderer.bind.animationTriggers.bottom_leaf;
  }, CurrentGreet[CurrentGreet.length -1].time);

  function getCurrentGreet() {
    var now = new Date().getHours();
    let greet = "evening";
    if (now < 12) {
      greet = "morning";
    } else if (now < 18) {
      greet = "afternoon";
    }
    return greet;
  }
})();
