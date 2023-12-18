const typingEffectLoop = {
    textArray: [
      "Hello and Welcome!",
      "I'm Lauren, a full-stack developer",
      "n Illini",
      " software engineer",
    ],
  
    index: 0,
    isDeleting: false,
    text: "",
    speed: 100,
  
    type: function () {
      if (!this.isDeleting) {
        this.addLetters();
      } else {
        this.removeLetters();
      }
    },
  
    addLetters: function () {
        var currentText = this.textArray[this.index];
        if(this.index==3 || this.index==2){
            currentText = "I'm Lauren, a" + this.textArray[this.index];
        }
        else currentText = this.textArray[this.index];
      this.text = currentText.substring(0, this.text.length + 1);
      this.updateText();
    },
  
    removeLetters: function () {
        var currentText = this.textArray[this.index];
        if(this.index==3 || this.index==2){
            currentText = "I'm Lauren, a" + this.textArray[this.index];
        }
        else currentText = this.textArray[this.index];
      this.text = currentText.substring(0, this.text.length - 1);
      this.updateText();
    },
  
    updateText: function () {
        if(this.text=="") document.getElementById(
            "typingEffect"
          ).innerHTML = `<span>&nbsp; </span>`;
          else
      document.getElementById(
        "typingEffect"
      ).innerHTML = `<span>${this.text}</span>`;
      let delta = this.speed;
      if (this.isDeleting) {
        delta /= 1.5;
      }
      if (!this.isDeleting && this.text.length >= this.textArray[this.index].length && (this.index==0 || this.index==1)) {
        delta = 2000;
        this.isDeleting = true;
      } 
      else if(!this.isDeleting && this.text.length >= this.textArray[this.index].length + "I'm Lauren, a".length){
        delta = 2000;
        this.isDeleting = true;
      }
      else if (this.isDeleting && this.text === "") {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.textArray.length;
        delta = 500;
      }
      else if (this.isDeleting && this.text == "I'm Lauren, a" && (this.index==1 || this.index==2)){
        this.isDeleting = false;
        this.index = (this.index + 1) % this.textArray.length;
        delta = 500;
      }
      setTimeout(this.type.bind(this), delta);
    },
  };
  window.onload = function () {
    typingEffectLoop.type();
  }