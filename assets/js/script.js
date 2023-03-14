
import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

var animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('amin'), // required
    path: 'home_amin.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Demo Animation", // optional
  });