(() => {
  // These are literally recordings of my keystrokes being replayed on the site
  const Greets = {
    morning: [
      { key: "H", time: 0 },
      { key: "e", time: 180 },
      { key: "y", time: 258 },
      { key: " ", time: 382 },
      { key: "t", time: 551 },
      { key: "h", time: 618 },
      { key: "e", time: 720 },
      { key: "r", time: 854 },
      { key: "e", time: 922 },
      { key: ",", time: 1011 },
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
      { key: null, time: 3993 },
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
      { key: "H", time: 0 },
      { key: "e", time: 147 },
      { key: "y", time: 225 },
      { key: " ", time: 372 },
      { key: "t", time: 495 },
      { key: "h", time: 597 },
      { key: "e", time: 720 },
      { key: "r", time: 844 },
      { key: "e", time: 912 },
      { key: ",", time: 1035 },
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
      { key: "H", time: 0 },
      { key: "e", time: 123 },
      { key: "y", time: 214 },
      { key: " ", time: 337 },
      { key: "t", time: 484 },
      { key: "h", time: 618 },
      { key: "e", time: 720 },
      { key: "r", time: 855 },
      { key: "e", time: 923 },
      { key: ",", time: 1080 },
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
      contentReady: false,
      containers: [
        {
          id: 'initial_selection',
          text: '',
          title: '-'
        },
        {
          id: 'about_me',
          title: "Who's this guy?",
          text: AboutMe
        },
        {
          title: null
        },
        {
          id: 'projects',
          title: 'Web Development',
          text: 'Content'
        },
        {
          title: null
        },
        {
          id: 'embeded_projects',
          title: 'Emmbeded Systems',
          text: 'Content' 
        },
        {
          id: 'initial_selection',
          title: '-',
          text: ''
        }
      ],
      setActiveContainer: (index) => {
        Renderer.bind.active_container = index;
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
