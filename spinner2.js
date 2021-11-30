


const animeFrames = ['|', '/', '-', '\\','|', '/', '-','|'];

let delay = 300


animeFrames.forEach((dashes,i)=> {
 setTimeout(() => {
    process.stdout.write(`\r${dashes} `)
  },i*delay)
})





