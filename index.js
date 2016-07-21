// export default function ( delay ) => (
//   new Promise(( fulfill ) => (
//     setTimeout( fulfill, delay )
//   ))
// )

module.exports = function ( delay ) {
  return new Promise ( function ( fulfill ) {
    setTimeout( fulfill, delay )
  })
}

