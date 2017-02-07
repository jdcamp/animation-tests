alert("this is working")
anime({
  targets: '.animate',
    rotate: function() { return anime.random(-25, 25); },
  translateX: function() { return anime.random(-1, 1) + 'rem'; },
  translateY: function() { return anime.random(-1, 1) + 'rem'; },
  scale: function() { return anime.random(6, 12) / 10; },

  delay: function() { return 400 + anime.random(0, 500); },
  duration: function() { return anime.random(1000, 2000); },
  direction: 'alternate',
  loop: true
});
