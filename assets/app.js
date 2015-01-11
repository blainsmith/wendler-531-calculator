function AppViewModel(){
  var self = this;

  // Initialize with some defaults
  self.defaultWeight = 200;

  // Set the observable inputs
  self.weight = ko.observable(self.defaultWeight);
  
  // Set the max arrays
  self.results = {
    week1: {
      set1: ko.observable(),
      set2: ko.observable(),
      set3: ko.observable(),
      set4low: ko.observable(),
      set4high: ko.observable()
    },
    week2: {
      set1: ko.observable(),
      set2: ko.observable(),
      set3: ko.observable(),
      set4low: ko.observable(),
      set4high: ko.observable()
    },
    week3: {
      set1: ko.observable(),
      set2: ko.observable(),
      set3: ko.observable(),
      set4low: ko.observable(),
      set4high: ko.observable()
    },
    week4: {
      set1: ko.observable(),
      set2: ko.observable(),
      set3: ko.observable()
    }
  };
  
  // Compute all the things
  self.computeMaxes = ko.computed(function(){

    // Error checking
    if(isNaN(self.weight()) || self.weight() == '') { self.weight(self.defaultWeight); }

    // Positive whole numbers only
    self.weight(Math.abs(self.weight()));

    self.results.week1.set1(Math.round(self.weight() * .65));
    self.results.week1.set2(Math.round(self.weight() * .75));
    self.results.week1.set3(Math.round(self.weight() * .85));
    self.results.week1.set4low(Math.round(self.weight() * .90));
    self.results.week1.set4high(Math.round(self.weight() * .95));

    self.results.week2.set1(Math.round(self.weight() * .70));
    self.results.week2.set2(Math.round(self.weight() * .80));
    self.results.week2.set3(Math.round(self.weight() * .90));
    self.results.week2.set4low(Math.round(self.weight() * .95));
    self.results.week2.set4high(Math.round(self.weight()));

    self.results.week3.set1(Math.round(self.weight() * .75));
    self.results.week3.set2(Math.round(self.weight() * .85));
    self.results.week3.set3(Math.round(self.weight() * .95));
    self.results.week3.set4low(Math.round(self.weight()));
    self.results.week3.set4high(Math.round(self.weight() * 1.05));

    self.results.week4.set1(Math.round(self.weight() * .40));
    self.results.week4.set2(Math.round(self.weight() * .50));
    self.results.week4.set3(Math.round(self.weight() * .60));
  });
}

ko.applyBindings(new AppViewModel());
