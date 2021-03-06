describe("ToDo", function() {
  describe("name", function() {
    it("takes a name and returns that name", function() {
      var testToDo = Object.create(ToDo);
      testToDo.name("Home");
      expect(testToDo.name).to.equal("Home");
    });
  });

  describe("task", function() {
    it("takes a task and returns that task", function() {
      var testToDo = Object.create(ToDo);
      testToDo.task("Walk the dog");
      expect(testToDo.task).to.equal("Walk the dog");
    });
    it("takes two tasks and returns both tasks", function() {
      var testToDo = Object.create(ToDo);
      testToDo.task("Walk the dog");

      testToDo.task("Wash the cat");
      expect(testToDo.task).to.equal("Walk the dog", "Wash the cat");
    });
  });
});
