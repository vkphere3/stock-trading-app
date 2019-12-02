// jwt.verify(req.token, SECRET_KEY, (err, decode) => {
//     if (err) {
//         return res.send({
//             status: 'ERROR'
//         })
//     }
//     if (decode.id === user.id) {
//         return res.send({
//             status: 'AUTHORIZED'
//         })
//     }
//     res.send({
//         status: "UNAUTHORIZED"
//     })
// })