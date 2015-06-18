var _hello = null;

beforeEach(function(done){
  require(['../../js/src/hello'], function(hello){
    _hello = hello;

    done();
  });
});

describe("the hello class", function () {
  it("should say hello", function() {
    expect(_hello.sayHello()).toEqual("Hello World!");
  });
});