describe("Module Math", () => {
  describe("GET /math/add", function() {
    it('should add two values', function() {
      return server.run('/math/add/3/4').then((res) => {
        res.statusCode.should.equal(200);
        res.result.should.equal(7);
      })
    })

    it('should be rejected on wrong term1', function() {
      return server.run('/math/add/foo/2').then(expectBadRequest)
    })

    it('should be rejected on wrong term2', function() {
      return server.run('/math/add/3/foo').then(expectBadRequest)
    })
  })

  describe("GET /math/divide", function() {
    it('should divide two int values', function() {
      return server.run('/math/divide/8/4').then((res) => {
        res.statusCode.should.equal(200);
        res.result.should.equal(2);
      })
    })
    
    it('should divide two float values', function() {
      return server.run('/math/divide/8.4/2.1').then((res) => {
        res.statusCode.should.equal(200);
        res.result.should.equal(4);
      })
    })

    it('should be rejected on wrong dividend', function() {
      return server.run('/math/divide/foo/2').then(expectBadRequest)
    })

    it('should be rejected on wrong divisor', function() {
      return server.run('/math/divide/3/foo').then(expectBadRequest)
    })

    it('should be rejected when ', function() {
      return server.run('/math/divide/3/foo').then(expectBadRequest)
    })
  })

  // ---------------------------------------------------------------------------
  // Some methods that will help us with the tests
  // ---------------------------------------------------------------------------
  function expectBadRequest(res) {
    res.statusCode.should.equal(400);
    res.result.error.should.equal("Bad Request");
    expect(res.result.error).to.be.equal("Bad Request");
  }
})