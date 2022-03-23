module.exports = require('graphql').buildSchema(`
  schema {
    query : RootQuery
  }

  type RootQuery {
    subQuery : TestData
  }

  type TestData {
    data : String
    val : Int
  }
`)
