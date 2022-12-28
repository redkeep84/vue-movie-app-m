exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'redkeep',
      age: 40,
      email: 'ckdfud@gmail.com'
    })
  }
}