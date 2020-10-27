describe("Module Index", () => {
  describe("GET /", () => {
    it('should respond Hello World!', () => {
      return server.run('/').then((res) => {
        res.statusCode.should.equal(200);
        res.result.should.equal('Hello world!');
      })
    })
  })
})