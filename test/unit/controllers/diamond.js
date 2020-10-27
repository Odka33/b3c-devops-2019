describe("Module Diamond", () => {
  describe("GET /diamond", function() {
    xit('should redirect to /diamond/form', function() {
      
    })
  })

  describe("GET /diamond/new", function() {
    xit('should show a form with an input and a submit', function() {
      
    })
  })

  describe("POST /diamond", function() {
    xit('should reject when `width` parameter is not a number', function() {
      
    })

    // odd = impair
    xit('should reject when `width` parameter is not odd', function() {
      
    })

    testDiamonds = [{
      width: 1,
      result: '+'
    }, {
      width: 3,
      result: [
        '.+.',
        '+++',
        '.+.'
      ].join("\n")
    }, {
      width: 5,
      result: [
        '..+..',
        '.+++.',
        '+++++',
        '.+++.',
        '..+..'
      ].join("\n")
    }]

    // C'est possible de créér des tests unitaires de façon dynamique
    testDiamonds.forEach(function(diamond){
      xit(`should show correct result on width = ${diamond.width}`, function() {
        return server.run({
          method: 'post',
          url: '/diamond',
          payload: { width: diamond.width }
        }).then(function(res) {
          res.statusCode.should.equal(200)
          res.result.should.equal(diamond.result)
        })
      })
    })

    xit('should invert + and . when given `width` is negative', function() {
      
    })
  })
})